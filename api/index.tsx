import { Button, Frog } from 'frog'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'
import { handle } from 'frog/vercel'
import { contractAbi, dispatcherAbi } from "./abi.js";
import { ethers, JsonRpcProvider } from "ethers";
import * as dotenv from 'dotenv';

dotenv.config();

// Uncomment to use Edge Runtime.
// export const config = {
//   runtime: 'edge',
// }

let baseContractAddress = '0xf4e4E2316f09bC48800041403Db09c650e27223e' as `0x${string}`;
let opContractAddress = "0x7586d4f401288f129E765675a9Cc3869e996B573" as `0x${string}`;
let baseChannelName = ethers.encodeBytes32String("channel-11");
let opChannelName = ethers.encodeBytes32String("channel-10");

let opUCAddress = process.env.OP_UC_MW_SIM;
let baseUCAddress = process.env.BASE_UC_MW_SIM;
const opDispatcherAddress = "0x6C9427E8d770Ad9e5a493D201280Cc178125CEc0";
const baseDispatcherAddress = "0x0dE926fE2001B2c96e9cA6b79089CEB276325E9F";
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

app.transaction('/send', (c) => {
  return c.contract({
    abi: contractAbi,
    chainId: 'eip155:84532',
    functionName: 'sendUniversalPacket',
    args: [opContractAddress, baseChannelName as `0x${string}`, 36000n],
    to: baseContractAddress
  })
})

app.frame("/verify-recv-packet", async (c) => {
  const {transactionId, buttonValue, buttonIndex, status, deriveState} = c;
  console.log("verify-recv-packet", {transactionId, buttonValue, buttonIndex, status});
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

          let text = "Packet received on Optimism";
          text += `\n\nTime to receive: ${state.recvTime - state.sendTime} seconds`;

          return c.res({
            image: textInImage(text),
            intents: [
              <Button action={'/verify-ack'} value="verify">
                Verify Packet Ack
              </Button>,
              <Button.Link href={`https://optimism-sepolia.blockscout.com/tx/${log.transactionHash}`}>
                Receive Transaction
              </Button.Link>
            ],
          });
        }
      }
    }

    return c.res({
      image: textInImage("Packet is yet to be received on Optimism"),
      intents: [
        <Button value="verify-packet-receipt">
          Verify Packet Receipt
        </Button>,
      ],
    });
  }

  let text = "IBC packet is sent";
  if (state.sequence) {
    text = `An IBC packet is sent\n Sequence ${state.sequence}`;
  }

  return c.res({
    image: textInImage(text),
    intents: [
      <Button value="verify-packet-receipt">
        Verify Packet Receipt
      </Button>,
      <Button.Link href={`https://base-sepolia.blockscout.com/tx/${transactionId}`}>
        Show Me Send Transaction
      </Button.Link>
    ],
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

        let text = "Packet acknowledged on Base";
        text += `\n\nTime to ack: ${state.ackTime - state.sendTime} seconds`;

        return c.res({
          image: textInImage(text),
          intents: [
            <Button.Reset>
              Send another packet
            </Button.Reset>,
            <Button.Link href={`https://base-sepolia.blockscout.com/tx/${log.transactionHash}`}>
              Ack Transaction
            </Button.Link>,
          ],
        });
      }
    }
  }

  return c.res({
    image: textInImage("IBC packet is yet to be acknowledged on Base"),
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
