# Polymer Farcaster Frames

This repository contains a Farcaster Frame that demonstrates cross-chain communication using the Interblockchain Communication (IBC) protocol. The Frame allows users to send transactions between the Base and Optimism networks and verifies the receipt and acknowledgment of the packets.

## Prerequisites

Before running the Frame, ensure you have the following:

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- Farcaster account for frame validation with Warpcast 
- Base and Optimism RPC endpoints
- Deployed Base and Optimism contract addresses that send and receive packets using a universal ibc channel

## Installation

1. Clone the repository:

```bash
git clone https://github.com/IbcFan/polymer-farcaster-frames.git
```

2. Navigate to the project directory:

```bash
cd polymer-farcaster-frames
```

3. Install the dependencies:

```bash
npm install
```

## Configuration

1. Create a `.env` file in the project root and provide the following environment variables:

```
OPTIMISM_RPC=<optimism_rpc_endpoint>
BASE_RPC=<base_rpc_endpoint>
```

Optional environment variables:
```
BASE_CONTRACT=<base_contract_address>
OP_CONTRACT=<optimism_contract_address>
BASE_CHANNEL=<base_channel_name>
OP_CHANNEL=<optimism_channel_name>
OP_UC_MW_SIM=<optimism_uc_address>
BASE_UC_MW_SIM=<base_uc_address>
OP_DISPATCHER=<optimism_dispatcher_address>
BASE_DISPATCHER=<base_dispatcher_address>
```

Definitions:
```
BASE_CONTRACT: The address of the base contract on the Base chain
OP_CONTRACT: The address of the contract on the Optimism chain
BASE_CHANNEL: The name of the Universal IBC channel on the Base chain
OP_CHANNEL: The name of the Universal IBC channel on the Optimism chain
OP_UC_MW_SIM: The address of the Optimism Universal Handler
BASE_UC_MW_SIM: The address of the Base Universal Handler
OP_DISPATCHER: The address of the Optimism dispatcher contract
BASE_DISPATCHER: The address of the Base dispatcher contract
OPTIMISM_RPC: The RPC URL for the Optimism network
BASE_RPC: The RPC URL for the Base network
```

Replace the placeholders with your actual values.

2. Ensure you have the necessary contract ABIs in the `src/abi.ts` file if you are using new contracts.

## Usage

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173/api/dev` to see the simulation of the Frame.

3. "Send" button doesn't work in Frog's simulated environment. But other states are available to simulate the packet receipt and acknowledgment verification.
For example, change the url to http://localhost:5173/api/verify-recv-packet to simulate the packet receipt verification.

## Architecture Overview

The Frame is built using the Frog framework and interacts with the Base and Optimism networks using the ethers.js library. The main components of the Frame are:
- `app`: The main Frog application instance.
- `frames`: The different views of the Frame, including the send transaction view, packet receipt verification view, and packet acknowledgment verification view.
- `contracts`: The Frame interacts with the IBC contracts on both Base and Optimism networks to send and verify packets.
- `providers`: The Frame uses JSON-RPC providers to connect to the Base and Optimism networks.

The Frame follows the IBC protocol to send packets between the networks and verifies the receipt and acknowledgment of the packets using event logs from the dispatcher contracts.


## Contract Interactions
The application interacts with the following contracts:

- __Base Contract__: A contract deployed on the Base chain responsible for sending IBC packets to the Optimism chain.
- __Optimism Contract__: A contract deployed on the Optimism chain responsible for receiving and acknowledging IBC packets from the Base chain.
- __Base Dispatcher Contract__: A contract on the Base chain that handles IBC packet dispatching and acknowledgment.
- __Optimism Dispatcher Contract__: A contract on the Optimism chain that handles IBC packet receiving and dispatching.
                                   
The application uses the `sendUniversalPacket` function of the Base Contract to initiate a cross-chain transaction. It then listens for the `SendPacket` event on the Base Dispatcher Contract to retrieve the packet sequence number.

On the Optimism side, the application listens for the `RecvPacket` event on the Optimism Dispatcher Contract to detect when the packet is received. Once the packet is received, it listens for the `Acknowledgement` event on the Base Dispatcher Contract to verify that the packet has been acknowledged on the Base chain.


## Transaction Evidence
- [Send Tx](https://base-sepolia.blockscout.com/tx/0xf617bda38028553f5f0453bdca967c73ab078d343cae41b0e6f121e5680d2e47)
- [Receive Tx](https://optimism-sepolia.blockscout.com/tx/0x7617ea0c261b6b9b2e2507aaf60ecdfc3891660d220b53094690d3afdce560d8)
- [Acknowledge Tx](https://base-sepolia.blockscout.com/tx/0xcb556e02acb4e946889df4843e43a4b4c3995fc46d45b8205726ad963448de7c)