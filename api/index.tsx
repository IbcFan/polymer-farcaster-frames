import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'
import { handle } from 'frog/vercel'
import { ucCompatibleAbi, dispatcherAbi, tokenFactoryAbi } from "./abi.js";
import { ethers, JsonRpcProvider } from "ethers";
import * as dotenv from 'dotenv';

dotenv.config();

let baseContractAddress = (process.env.BASE_CONTRACT || '0xf4e4E2316f09bC48800041403Db09c650e27223e') as `0x${string}`;
let baseTokenFactoryAddress = "0xF24a7a113c85A1886a7B0bb518b8d49b9B5BC062" as `0x${string}`;
let opContractAddress = (process.env.OP_CONTRACT || "0x7586d4f401288f129E765675a9Cc3869e996B573") as `0x${string}`;
let baseChannelName = ethers.encodeBytes32String(process.env.BASE_CHANNEL || "channel-11");
let opChannelName = ethers.encodeBytes32String(process.env.OP_CHANNEL || "channel-10");
let opUCAddress = process.env.OP_UC_MW_SIM || "0xC3318ce027C560B559b09b1aA9cA4FEBDDF252F5";
let baseUCAddress = process.env.BASE_UC_MW_SIM || "0x5031fb609569b67608Ffb9e224754bb317f174cD";
const opDispatcherAddress = process.env.OP_DISPATCHER || "0x6C9427E8d770Ad9e5a493D201280Cc178125CEc0";
const baseDispatcherAddress = process.env.BASE_DISPATCHER || "0x0dE926fE2001B2c96e9cA6b79089CEB276325E9F";
const opProvider = new JsonRpcProvider(process.env.OPTIMISM_RPC, 11155420);
const baseProvider = new JsonRpcProvider(process.env.BASE_RPC, 84532);
const opDispatcherContract = new ethers.Contract(opDispatcherAddress, dispatcherAbi, opProvider);
const baseDispatcherContract = new ethers.Contract(baseDispatcherAddress, dispatcherAbi, baseProvider);


type State = {
  sendTx: string
  sendTime: number
  recvTx: string
  recvTime: number
  ackTx: string
  ackTime: number
  sequence: number
  sendTxId: string

  tokenName: string
  tokenSymbol: string
  totalSupply: number
}

export const app = new Frog<{ State: State }>({
  assetsPath: '/',
  basePath: '/api',
  initialState: {}
})

function textInImage(text: string) {
  return (<div
    style={{
      alignItems: 'center',
      background: 'linear-gradient(to right, #432889, #17101F)',
      backgroundSize: '100% 100%',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      height: '100%',
      justifyContent: 'center',
      textAlign: 'center',
      width: '100%',
    }}
  >
    <div
      style={{
        color: 'white',
        fontSize: 60,
        fontStyle: 'normal',
        letterSpacing: '-0.025em',
        lineHeight: 1.4,
        marginTop: 30,
        padding: '0 120px',
        whiteSpace: 'pre-wrap',
      }}
    >
      {text}
    </div>
  </div>);
}

app.frame('/', (c) => {
  return c.res({
    action: "/verify-recv-packet",
    image: textInImage("Send a cross-chain transaction"),
    intents: [
      <Button.Transaction target="/send">Send</Button.Transaction>,
    ],
  })
})

app.frame('/token', (c) => {
  const {inputText, deriveState} = c;

  if (inputText) {
    deriveState(previousState => {
      previousState.tokenName = inputText;
    })

    return c.res({
      action: "/token-symbol",
      image: textInImage("Choose token symbol"),
      intents: [
        <TextInput placeholder={"Token symbol"}></TextInput>,
        <Button>Next</Button>,
      ],
    })
  }

  return c.res({
    action: "/token",
    image: textInImage("Deploy a cross-chain token"),
    intents: [
      <TextInput placeholder={"Pick a token name"}></TextInput>,
      <Button>Next</Button>,
    ],
  })
})

app.frame('/token-symbol', (c) => {
  const {inputText, deriveState} = c;

  if (inputText) {
    deriveState(previousState => {
      previousState.tokenSymbol = inputText;
    })

    return c.res({
      action: "/token-supply",
      image: textInImage("Choose token supply"),
      intents: [
        <TextInput placeholder={"Token supply"}></TextInput>,
        <Button>Next</Button>,
      ],
    })
  }

  return c.res({
    action: "/token-supply",
    image: textInImage("Choose token supply"),
    intents: [
      <TextInput placeholder={"Token supply"}></TextInput>,
      <Button>Next</Button>,
    ],
  })
})

app.frame('/token-supply', (c) => {
  const {inputText, deriveState} = c;

  if (inputText) {
    let totalSupply;
    try {
      totalSupply = parseInt(inputText);
    } catch (e) {
      return c.res({
        action: "/token-supply",
        image: textInImage("Invalid token supply"),
        intents: [
          <TextInput placeholder={"Token supply"}></TextInput>,
          <Button>Next</Button>,
        ],
      })
    }

    const state = deriveState(previousState => {
      previousState.totalSupply = totalSupply;
    })

    return c.res({
      action: "/verify-recv-packet",
      image: textInImage(`Deploy a cross-chain token\nName: ${state.tokenName}\nSymbol: ${state.tokenSymbol}\nSupply: ${state.totalSupply}`),
      intents: [
        <Button.Transaction target="/deploy">Deploy</Button.Transaction>,
        <Button.Reset>Reset</Button.Reset>,
      ],
    })
  }

  return c.res({
    action: "/token-supply",
    image: textInImage("Choose token supply"),
    intents: [
      <TextInput placeholder={"Token supply"}></TextInput>,
      <Button>Next</Button>,
    ],
  })
})

function generateRandomString(length: number) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

app.transaction('/deploy', (c) => {
  const {previousState} = c;
  const salt = generateRandomString(32);

  console.log("Deploying token", {salt, previousState});

  return c.contract({
    abi: tokenFactoryAbi,
    chainId: 'eip155:84532',
    functionName: 'deployXPolyERC20',
    args: [["channel-11"], previousState.tokenName, previousState.tokenSymbol, ethers.parseUnits(previousState.totalSupply.toString(), 18), salt],
    to: baseTokenFactoryAddress
  })
})


app.transaction('/send', (c) => {
  return c.contract({
    abi: ucCompatibleAbi,
    chainId: 'eip155:84532',
    functionName: 'sendUniversalPacket',
    args: [opContractAddress, baseChannelName as `0x${string}`, 36000n],
    to: baseContractAddress
  })
})

function isTokenMint(state: State) {
  return state.tokenName && state.tokenSymbol && state.totalSupply;
}

app.frame("/verify-recv-packet", async (c) => {
  const {transactionId, buttonValue, deriveState} = c;

  const state = deriveState(previousState => {
    if (transactionId) previousState.sendTxId = transactionId;
  })

  if (buttonValue == "verify-packet-receipt") {
    const txId = state.sendTxId;
    let receipt = await baseProvider.getTransactionReceipt(txId);
    for (let log of receipt?.logs || []) {
      let decoded = baseDispatcherContract.interface.parseLog(log);
      if (decoded && decoded.name == "SendPacket") {
        const [, , , sequence, ,] = decoded.args;
        state.sequence = Number(sequence);
        state.sendTime = (await receipt!.getBlock()).timestamp;
      }
    }

    const blockNumber = await opProvider.getBlockNumber();
    const recvLogFilter = opDispatcherContract.filters.RecvPacket!(opUCAddress, opChannelName);
    const logs = await opDispatcherContract.queryFilter(recvLogFilter, blockNumber - 3600);

    for (let log of logs) {
      let decoded = opDispatcherContract.interface.parseLog(log);
      if (decoded && decoded.name == "RecvPacket") {
        const [, , recvSeq,] = decoded.args;
        if (recvSeq == state.sequence) {
          state.recvTx = log.transactionHash;
          state.recvTime = (await log.getBlock()).timestamp;

          let text = "";
          let intents: JSX.Element[] = []
          if (isTokenMint(state)) {
            text = "Token minted on Optimism";
            text += `\n\nTime to mint on OP: ${state.recvTime - state.sendTime} seconds`;
            intents = [
              <Button action={'/verify-ack'} value="verify">
                Verify OP token mint ack
              </Button>,
              <Button.Link href={`https://optimism-sepolia.blockscout.com/tx/${log.transactionHash}`}>
                Receive Transaction
              </Button.Link>
            ];
          } else {
            text = "Packet received on Optimism";
            text += `\n\nTime to receive: ${state.recvTime - state.sendTime} seconds`;
            intents = [
              <Button action={'/verify-ack'} value="verify">
                Verify Packet Ack
              </Button>,
              <Button.Link href={`https://optimism-sepolia.blockscout.com/tx/${log.transactionHash}`}>
                Receive Transaction
              </Button.Link>
            ];
          }

          return c.res({
            image: textInImage(text),
            intents: intents,
          });
        }
      }
    }

    let text = "";
    let intents: JSX.Element[] = []
    if (isTokenMint(state)) {
      text = "Token is yet to be minted on Optimism"
      intents = [
        <Button value="verify-packet-receipt">
          Verify OP token mint
        </Button>,
      ];
    } else {
      text = "Packet is yet to be received on Optimism";
      intents = [
        <Button value="verify-packet-receipt">
          Verify Packet Receipt
        </Button>,
      ];
    }

    return c.res({
      image: textInImage(text),
      intents: intents,
    });
  }

  let text = "";
  let intents: JSX.Element[] = [];
  if (isTokenMint(state)) {
    text = "Token is minted on Base";

    intents = [
      <Button value="verify-packet-receipt">
        Verify OP Token Mint
      </Button>,
      <Button.Link href={`https://base-sepolia.blockscout.com/tx/${transactionId}`}>
        Send Transaction
      </Button.Link>
    ];
  } else {
    text = "IBC packet is sent";
    if (state.sequence) {
      text = `An IBC packet is sent\n Sequence ${state.sequence}`;
    }
    intents = [
      <Button value="verify-packet-receipt">
        Verify Packet Receipt
      </Button>,
      <Button.Link href={`https://base-sepolia.blockscout.com/tx/${transactionId}`}>
        Send Transaction
      </Button.Link>
    ];
  }

  return c.res({
    image: textInImage(text),
    intents: intents,
  });
});

app.frame("/verify-ack", async (c) => {
  const {buttonValue, status, deriveState} = c;
  console.log("verify-ack", {buttonValue, status});
  const state = deriveState();

  const blockNumber = await baseProvider.getBlockNumber();
  const ackLogFilter = baseDispatcherContract.filters.Acknowledgement!(baseUCAddress, baseChannelName);
  const logs = await baseDispatcherContract.queryFilter(ackLogFilter, blockNumber - 3600);

  for (let log of logs) {
    let decoded = baseDispatcherContract.interface.parseLog(log);
    if (decoded && decoded.name == "Acknowledgement") {
      const [, , ackSeq] = decoded.args;
      if (ackSeq == state.sequence) {
        state.ackTx = log.transactionHash;
        state.ackTime = (await log.getBlock()).timestamp;

        let text;
        let intents;

        if (isTokenMint(state)) {
          text = "OP Token Mint acknowledged\n on Base";
          text += `\n\nTime to mint on Base and OP:\n ${state.ackTime - state.sendTime} seconds`;

          intents = [
            <Button.Reset>
              Mint another token
            </Button.Reset>,
            <Button.Link href={`https://base-sepolia.blockscout.com/tx/${log.transactionHash}`}>
              Ack Transaction
            </Button.Link>,
          ];
        } else {
          text = "Packet acknowledged on Base";
          text += `\n\nTime to ack: ${state.ackTime - state.sendTime} seconds`;

          intents = [
            <Button.Reset>
              Send another packet
            </Button.Reset>,
            <Button.Link href={`https://base-sepolia.blockscout.com/tx/${log.transactionHash}`}>
              Ack Transaction
            </Button.Link>,
          ];
        }

        return c.res({
          image: textInImage(text),
          intents,
        });
      }
    }
  }

  let text = isTokenMint(state)
    ? "OP token mint is yet to be acknowledged on Base"
    : "IBC packet is yet to be acknowledged on Base";

  return c.res({
    image: textInImage(text),
    intents: [
      <Button value="verify-ack">
        Verify Packet Acknowledgement
      </Button>,
    ],
  });
})

// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== 'undefined'
const isProduction = isEdgeFunction || import.meta.env?.MODE !== 'development'
devtools(app, isProduction ? {assetsPath: '/.frog'} : {serveStatic})

export const GET = handle(app)
export const POST = handle(app)
