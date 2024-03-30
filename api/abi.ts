export const ucCompatibleAbi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_middleware",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "ackPackets",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "channelId",
        "type": "bytes32"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "srcPortAddr",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "mwBitmap",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "destPortAddr",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "appData",
            "type": "bytes"
          }
        ],
        "internalType": "struct UniversalPacket",
        "name": "packet",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "bool",
            "name": "success",
            "type": "bool"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "internalType": "struct AckPacket",
        "name": "ack",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "middleware",
        "type": "address"
      }
    ],
    "name": "authorizeMiddleware",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "authorizedMws",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "counter",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "name": "counterMap",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "mw",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "channelId",
        "type": "bytes32"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "srcPortAddr",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "mwBitmap",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "destPortAddr",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "appData",
            "type": "bytes"
          }
        ],
        "internalType": "struct UniversalPacket",
        "name": "packet",
        "type": "tuple"
      }
    ],
    "name": "onRecvUniversalPacket",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "success",
            "type": "bool"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "internalType": "struct AckPacket",
        "name": "ackPacket",
        "type": "tuple"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "channelId",
        "type": "bytes32"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "srcPortAddr",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "mwBitmap",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "destPortAddr",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "appData",
            "type": "bytes"
          }
        ],
        "internalType": "struct UniversalPacket",
        "name": "packet",
        "type": "tuple"
      }
    ],
    "name": "onTimeoutUniversalPacket",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "channelId",
        "type": "bytes32"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "srcPortAddr",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "mwBitmap",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "destPortAddr",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "appData",
            "type": "bytes"
          }
        ],
        "internalType": "struct UniversalPacket",
        "name": "packet",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "bool",
            "name": "success",
            "type": "bool"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "internalType": "struct AckPacket",
        "name": "ack",
        "type": "tuple"
      }
    ],
    "name": "onUniversalAcknowledgement",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "recvedPackets",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "channelId",
        "type": "bytes32"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "srcPortAddr",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "mwBitmap",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "destPortAddr",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "appData",
            "type": "bytes"
          }
        ],
        "internalType": "struct UniversalPacket",
        "name": "packet",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "destPortAddr",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "channelId",
        "type": "bytes32"
      },
      {
        "internalType": "uint64",
        "name": "timeoutSeconds",
        "type": "uint64"
      }
    ],
    "name": "sendUniversalPacket",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_middleware",
        "type": "address"
      }
    ],
    "name": "setDefaultMw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "timeoutPackets",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "channelId",
        "type": "bytes32"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "srcPortAddr",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "mwBitmap",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "destPortAddr",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "appData",
            "type": "bytes"
          }
        ],
        "internalType": "struct UniversalPacket",
        "name": "packet",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
] as const

export const dispatcherAbi = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "initPortPrefix",
        "type": "string"
      },
      {
        "internalType": "contract ConsensusStateManager",
        "name": "_consensusStateManager",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "ackPacketCommitmentAlreadyExists",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "channelNotOwnedBySender",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "invalidCounterParty",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "invalidCounterPartyPortId",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "invalidHexStringLength",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "invalidPacketSequence",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "packetCommitmentNotFound",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "packetNotTimedOut",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "packetReceiptAlreadyExists",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "receiverNotIndtendedPacketDestination",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "receiverNotOriginPacketSender",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "unexpectedPacketSequence",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "sourcePortAddress",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "sourceChannelId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "sequence",
        "type": "uint64"
      }
    ],
    "name": "Acknowledgement",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "portAddress",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "channelId",
        "type": "bytes32"
      }
    ],
    "name": "CloseIbcChannel",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "portAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "channelId",
        "type": "bytes32"
      }
    ],
    "name": "ConnectIbcChannel",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "portAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "version",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "enum ChannelOrder",
        "name": "ordering",
        "type": "uint8"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "feeEnabled",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "string[]",
        "name": "connectionHops",
        "type": "string[]"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "counterpartyPortId",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "counterpartyChannelId",
        "type": "bytes32"
      }
    ],
    "name": "OpenIbcChannel",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "destPortAddress",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "destChannelId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "sequence",
        "type": "uint64"
      }
    ],
    "name": "RecvPacket",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "sourcePortAddress",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "sourceChannelId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "packet",
        "type": "bytes"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "sequence",
        "type": "uint64"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "timeoutTimestamp",
        "type": "uint64"
      }
    ],
    "name": "SendPacket",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "sourcePortAddress",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "sourceChannelId",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "uint64",
        "name": "sequence",
        "type": "uint64"
      }
    ],
    "name": "Timeout",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "writerPortAddress",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "writerChannelId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "sequence",
        "type": "uint64"
      },
      {
        "components": [
          {
            "internalType": "bool",
            "name": "success",
            "type": "bool"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "indexed": false,
        "internalType": "struct AckPacket",
        "name": "ackPacket",
        "type": "tuple"
      }
    ],
    "name": "WriteAckPacket",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "writerPortAddress",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "writerChannelId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "sequence",
        "type": "uint64"
      },
      {
        "components": [
          {
            "internalType": "uint64",
            "name": "revision_number",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "revision_height",
            "type": "uint64"
          }
        ],
        "indexed": false,
        "internalType": "struct Height",
        "name": "timeoutHeight",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "timeoutTimestamp",
        "type": "uint64"
      }
    ],
    "name": "WriteTimeoutPacket",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "portId",
                "type": "string"
              },
              {
                "internalType": "bytes32",
                "name": "channelId",
                "type": "bytes32"
              }
            ],
            "internalType": "struct IbcEndpoint",
            "name": "src",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "portId",
                "type": "string"
              },
              {
                "internalType": "bytes32",
                "name": "channelId",
                "type": "bytes32"
              }
            ],
            "internalType": "struct IbcEndpoint",
            "name": "dest",
            "type": "tuple"
          },
          {
            "internalType": "uint64",
            "name": "sequence",
            "type": "uint64"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          },
          {
            "components": [
              {
                "internalType": "uint64",
                "name": "revision_number",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "revision_height",
                "type": "uint64"
              }
            ],
            "internalType": "struct Height",
            "name": "timeoutHeight",
            "type": "tuple"
          },
          {
            "internalType": "uint64",
            "name": "timeoutTimestamp",
            "type": "uint64"
          }
        ],
        "internalType": "struct IbcPacket",
        "name": "packet",
        "type": "tuple"
      }
    ],
    "name": "ackProofKey",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "ack",
        "type": "bytes"
      }
    ],
    "name": "ackProofValue",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IbcPacketReceiver",
        "name": "receiver",
        "type": "address"
      },
      {
        "components": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "portId",
                "type": "string"
              },
              {
                "internalType": "bytes32",
                "name": "channelId",
                "type": "bytes32"
              }
            ],
            "internalType": "struct IbcEndpoint",
            "name": "src",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "portId",
                "type": "string"
              },
              {
                "internalType": "bytes32",
                "name": "channelId",
                "type": "bytes32"
              }
            ],
            "internalType": "struct IbcEndpoint",
            "name": "dest",
            "type": "tuple"
          },
          {
            "internalType": "uint64",
            "name": "sequence",
            "type": "uint64"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          },
          {
            "components": [
              {
                "internalType": "uint64",
                "name": "revision_number",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "revision_height",
                "type": "uint64"
              }
            ],
            "internalType": "struct Height",
            "name": "timeoutHeight",
            "type": "tuple"
          },
          {
            "internalType": "uint64",
            "name": "timeoutTimestamp",
            "type": "uint64"
          }
        ],
        "internalType": "struct IbcPacket",
        "name": "packet",
        "type": "tuple"
      },
      {
        "internalType": "bytes",
        "name": "ack",
        "type": "bytes"
      },
      {
        "components": [
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes",
                    "name": "prefix",
                    "type": "bytes"
                  },
                  {
                    "internalType": "bytes",
                    "name": "suffix",
                    "type": "bytes"
                  }
                ],
                "internalType": "struct OpIcs23ProofPath[]",
                "name": "path",
                "type": "tuple[]"
              },
              {
                "internalType": "bytes",
                "name": "key",
                "type": "bytes"
              },
              {
                "internalType": "bytes",
                "name": "value",
                "type": "bytes"
              },
              {
                "internalType": "bytes",
                "name": "prefix",
                "type": "bytes"
              }
            ],
            "internalType": "struct OpIcs23Proof[]",
            "name": "proof",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "height",
            "type": "uint256"
          }
        ],
        "internalType": "struct Ics23Proof",
        "name": "proof",
        "type": "tuple"
      }
    ],
    "name": "acknowledgement",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "portId",
        "type": "string"
      },
      {
        "internalType": "bytes32",
        "name": "channelId",
        "type": "bytes32"
      }
    ],
    "name": "channelProofKey",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "enum ChannelState",
        "name": "state",
        "type": "uint8"
      },
      {
        "internalType": "enum ChannelOrder",
        "name": "ordering",
        "type": "uint8"
      },
      {
        "internalType": "string",
        "name": "version",
        "type": "string"
      },
      {
        "internalType": "string[]",
        "name": "connectionHops",
        "type": "string[]"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "portId",
            "type": "string"
          },
          {
            "internalType": "bytes32",
            "name": "channelId",
            "type": "bytes32"
          },
          {
            "internalType": "string",
            "name": "version",
            "type": "string"
          }
        ],
        "internalType": "struct CounterParty",
        "name": "counterparty",
        "type": "tuple"
      }
    ],
    "name": "channelProofValue",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "channelId",
        "type": "bytes32"
      }
    ],
    "name": "closeIbcChannel",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IbcChannelReceiver",
        "name": "portAddress",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "portId",
            "type": "string"
          },
          {
            "internalType": "bytes32",
            "name": "channelId",
            "type": "bytes32"
          },
          {
            "internalType": "string",
            "name": "version",
            "type": "string"
          }
        ],
        "internalType": "struct CounterParty",
        "name": "local",
        "type": "tuple"
      },
      {
        "internalType": "string[]",
        "name": "connectionHops",
        "type": "string[]"
      },
      {
        "internalType": "enum ChannelOrder",
        "name": "ordering",
        "type": "uint8"
      },
      {
        "internalType": "bool",
        "name": "feeEnabled",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isChanConfirm",
        "type": "bool"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "portId",
            "type": "string"
          },
          {
            "internalType": "bytes32",
            "name": "channelId",
            "type": "bytes32"
          },
          {
            "internalType": "string",
            "name": "version",
            "type": "string"
          }
        ],
        "internalType": "struct CounterParty",
        "name": "counterparty",
        "type": "tuple"
      },
      {
        "components": [
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes",
                    "name": "prefix",
                    "type": "bytes"
                  },
                  {
                    "internalType": "bytes",
                    "name": "suffix",
                    "type": "bytes"
                  }
                ],
                "internalType": "struct OpIcs23ProofPath[]",
                "name": "path",
                "type": "tuple[]"
              },
              {
                "internalType": "bytes",
                "name": "key",
                "type": "bytes"
              },
              {
                "internalType": "bytes",
                "name": "value",
                "type": "bytes"
              },
              {
                "internalType": "bytes",
                "name": "prefix",
                "type": "bytes"
              }
            ],
            "internalType": "struct OpIcs23Proof[]",
            "name": "proof",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "height",
            "type": "uint256"
          }
        ],
        "internalType": "struct Ics23Proof",
        "name": "proof",
        "type": "tuple"
      }
    ],
    "name": "connectIbcChannel",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "portAddress",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "channelId",
        "type": "bytes32"
      }
    ],
    "name": "getChannel",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "version",
            "type": "string"
          },
          {
            "internalType": "enum ChannelOrder",
            "name": "ordering",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "feeEnabled",
            "type": "bool"
          },
          {
            "internalType": "string[]",
            "name": "connectionHops",
            "type": "string[]"
          },
          {
            "internalType": "string",
            "name": "counterpartyPortId",
            "type": "string"
          },
          {
            "internalType": "bytes32",
            "name": "counterpartyChannelId",
            "type": "bytes32"
          }
        ],
        "internalType": "struct Channel",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "height",
        "type": "uint256"
      }
    ],
    "name": "getOptimisticConsensusState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "appHash",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "fraudProofEndTime",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "ended",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IbcChannelReceiver",
        "name": "portAddress",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "portId",
            "type": "string"
          },
          {
            "internalType": "bytes32",
            "name": "channelId",
            "type": "bytes32"
          },
          {
            "internalType": "string",
            "name": "version",
            "type": "string"
          }
        ],
        "internalType": "struct CounterParty",
        "name": "local",
        "type": "tuple"
      },
      {
        "internalType": "enum ChannelOrder",
        "name": "ordering",
        "type": "uint8"
      },
      {
        "internalType": "bool",
        "name": "feeEnabled",
        "type": "bool"
      },
      {
        "internalType": "string[]",
        "name": "connectionHops",
        "type": "string[]"
      },
      {
        "components": [
          {
            "internalType": "string",
            "name": "portId",
            "type": "string"
          },
          {
            "internalType": "bytes32",
            "name": "channelId",
            "type": "bytes32"
          },
          {
            "internalType": "string",
            "name": "version",
            "type": "string"
          }
        ],
        "internalType": "struct CounterParty",
        "name": "counterparty",
        "type": "tuple"
      },
      {
        "components": [
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes",
                    "name": "prefix",
                    "type": "bytes"
                  },
                  {
                    "internalType": "bytes",
                    "name": "suffix",
                    "type": "bytes"
                  }
                ],
                "internalType": "struct OpIcs23ProofPath[]",
                "name": "path",
                "type": "tuple[]"
              },
              {
                "internalType": "bytes",
                "name": "key",
                "type": "bytes"
              },
              {
                "internalType": "bytes",
                "name": "value",
                "type": "bytes"
              },
              {
                "internalType": "bytes",
                "name": "prefix",
                "type": "bytes"
              }
            ],
            "internalType": "struct OpIcs23Proof[]",
            "name": "proof",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "height",
            "type": "uint256"
          }
        ],
        "internalType": "struct Ics23Proof",
        "name": "proof",
        "type": "tuple"
      }
    ],
    "name": "openIbcChannel",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "portId",
                "type": "string"
              },
              {
                "internalType": "bytes32",
                "name": "channelId",
                "type": "bytes32"
              }
            ],
            "internalType": "struct IbcEndpoint",
            "name": "src",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "portId",
                "type": "string"
              },
              {
                "internalType": "bytes32",
                "name": "channelId",
                "type": "bytes32"
              }
            ],
            "internalType": "struct IbcEndpoint",
            "name": "dest",
            "type": "tuple"
          },
          {
            "internalType": "uint64",
            "name": "sequence",
            "type": "uint64"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          },
          {
            "components": [
              {
                "internalType": "uint64",
                "name": "revision_number",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "revision_height",
                "type": "uint64"
              }
            ],
            "internalType": "struct Height",
            "name": "timeoutHeight",
            "type": "tuple"
          },
          {
            "internalType": "uint64",
            "name": "timeoutTimestamp",
            "type": "uint64"
          }
        ],
        "internalType": "struct IbcPacket",
        "name": "packet",
        "type": "tuple"
      }
    ],
    "name": "packetCommitmentProofKey",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "portId",
                "type": "string"
              },
              {
                "internalType": "bytes32",
                "name": "channelId",
                "type": "bytes32"
              }
            ],
            "internalType": "struct IbcEndpoint",
            "name": "src",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "portId",
                "type": "string"
              },
              {
                "internalType": "bytes32",
                "name": "channelId",
                "type": "bytes32"
              }
            ],
            "internalType": "struct IbcEndpoint",
            "name": "dest",
            "type": "tuple"
          },
          {
            "internalType": "uint64",
            "name": "sequence",
            "type": "uint64"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          },
          {
            "components": [
              {
                "internalType": "uint64",
                "name": "revision_number",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "revision_height",
                "type": "uint64"
              }
            ],
            "internalType": "struct Height",
            "name": "timeoutHeight",
            "type": "tuple"
          },
          {
            "internalType": "uint64",
            "name": "timeoutTimestamp",
            "type": "uint64"
          }
        ],
        "internalType": "struct IbcPacket",
        "name": "packet",
        "type": "tuple"
      }
    ],
    "name": "packetCommitmentProofValue",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "ack",
        "type": "bytes"
      }
    ],
    "name": "parseAckData",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "success",
            "type": "bool"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "internalType": "struct AckPacket",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "portChannelMap",
    "outputs": [
      {
        "internalType": "string",
        "name": "version",
        "type": "string"
      },
      {
        "internalType": "enum ChannelOrder",
        "name": "ordering",
        "type": "uint8"
      },
      {
        "internalType": "bool",
        "name": "feeEnabled",
        "type": "bool"
      },
      {
        "internalType": "string",
        "name": "counterpartyPortId",
        "type": "string"
      },
      {
        "internalType": "bytes32",
        "name": "counterpartyChannelId",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "portId",
        "type": "string"
      }
    ],
    "name": "portIdAddressMatch",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "portPrefix",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IbcPacketReceiver",
        "name": "receiver",
        "type": "address"
      },
      {
        "components": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "portId",
                "type": "string"
              },
              {
                "internalType": "bytes32",
                "name": "channelId",
                "type": "bytes32"
              }
            ],
            "internalType": "struct IbcEndpoint",
            "name": "src",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "portId",
                "type": "string"
              },
              {
                "internalType": "bytes32",
                "name": "channelId",
                "type": "bytes32"
              }
            ],
            "internalType": "struct IbcEndpoint",
            "name": "dest",
            "type": "tuple"
          },
          {
            "internalType": "uint64",
            "name": "sequence",
            "type": "uint64"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          },
          {
            "components": [
              {
                "internalType": "uint64",
                "name": "revision_number",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "revision_height",
                "type": "uint64"
              }
            ],
            "internalType": "struct Height",
            "name": "timeoutHeight",
            "type": "tuple"
          },
          {
            "internalType": "uint64",
            "name": "timeoutTimestamp",
            "type": "uint64"
          }
        ],
        "internalType": "struct IbcPacket",
        "name": "packet",
        "type": "tuple"
      },
      {
        "components": [
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes",
                    "name": "prefix",
                    "type": "bytes"
                  },
                  {
                    "internalType": "bytes",
                    "name": "suffix",
                    "type": "bytes"
                  }
                ],
                "internalType": "struct OpIcs23ProofPath[]",
                "name": "path",
                "type": "tuple[]"
              },
              {
                "internalType": "bytes",
                "name": "key",
                "type": "bytes"
              },
              {
                "internalType": "bytes",
                "name": "value",
                "type": "bytes"
              },
              {
                "internalType": "bytes",
                "name": "prefix",
                "type": "bytes"
              }
            ],
            "internalType": "struct OpIcs23Proof[]",
            "name": "proof",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "height",
            "type": "uint256"
          }
        ],
        "internalType": "struct Ics23Proof",
        "name": "proof",
        "type": "tuple"
      }
    ],
    "name": "recvPacket",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "channelId",
        "type": "bytes32"
      },
      {
        "internalType": "bytes",
        "name": "packet",
        "type": "bytes"
      },
      {
        "internalType": "uint64",
        "name": "timeoutTimestamp",
        "type": "uint64"
      }
    ],
    "name": "sendPacket",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      },
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "name": "sendPacketCommitment",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_portPrefix",
        "type": "string"
      }
    ],
    "name": "setPortPrefix",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IbcPacketReceiver",
        "name": "receiver",
        "type": "address"
      },
      {
        "components": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "portId",
                "type": "string"
              },
              {
                "internalType": "bytes32",
                "name": "channelId",
                "type": "bytes32"
              }
            ],
            "internalType": "struct IbcEndpoint",
            "name": "src",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "portId",
                "type": "string"
              },
              {
                "internalType": "bytes32",
                "name": "channelId",
                "type": "bytes32"
              }
            ],
            "internalType": "struct IbcEndpoint",
            "name": "dest",
            "type": "tuple"
          },
          {
            "internalType": "uint64",
            "name": "sequence",
            "type": "uint64"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          },
          {
            "components": [
              {
                "internalType": "uint64",
                "name": "revision_number",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "revision_height",
                "type": "uint64"
              }
            ],
            "internalType": "struct Height",
            "name": "timeoutHeight",
            "type": "tuple"
          },
          {
            "internalType": "uint64",
            "name": "timeoutTimestamp",
            "type": "uint64"
          }
        ],
        "internalType": "struct IbcPacket",
        "name": "packet",
        "type": "tuple"
      },
      {
        "components": [
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes",
                    "name": "prefix",
                    "type": "bytes"
                  },
                  {
                    "internalType": "bytes",
                    "name": "suffix",
                    "type": "bytes"
                  }
                ],
                "internalType": "struct OpIcs23ProofPath[]",
                "name": "path",
                "type": "tuple[]"
              },
              {
                "internalType": "bytes",
                "name": "key",
                "type": "bytes"
              },
              {
                "internalType": "bytes",
                "name": "value",
                "type": "bytes"
              },
              {
                "internalType": "bytes",
                "name": "prefix",
                "type": "bytes"
              }
            ],
            "internalType": "struct OpIcs23Proof[]",
            "name": "proof",
            "type": "tuple[]"
          },
          {
            "internalType": "uint256",
            "name": "height",
            "type": "uint256"
          }
        ],
        "internalType": "struct Ics23Proof",
        "name": "proof",
        "type": "tuple"
      }
    ],
    "name": "timeout",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "b",
        "type": "bytes32"
      }
    ],
    "name": "toStr",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_number",
        "type": "uint256"
      }
    ],
    "name": "toStr",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes[]",
            "name": "header",
            "type": "bytes[]"
          },
          {
            "internalType": "bytes32",
            "name": "stateRoot",
            "type": "bytes32"
          },
          {
            "internalType": "uint64",
            "name": "number",
            "type": "uint64"
          }
        ],
        "internalType": "struct L1Header",
        "name": "l1header",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "bytes[]",
            "name": "accountProof",
            "type": "bytes[]"
          },
          {
            "internalType": "bytes[]",
            "name": "outputRootProof",
            "type": "bytes[]"
          },
          {
            "internalType": "bytes32",
            "name": "l2OutputProposalKey",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "l2BlockHash",
            "type": "bytes32"
          }
        ],
        "internalType": "struct OpL2StateProof",
        "name": "proof",
        "type": "tuple"
      },
      {
        "internalType": "uint256",
        "name": "height",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "appHash",
        "type": "uint256"
      }
    ],
    "name": "updateClientWithOptimisticConsensusState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "fraudProofEndTime",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "ended",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "components": [
          {
            "components": [
              {
                "internalType": "string",
                "name": "portId",
                "type": "string"
              },
              {
                "internalType": "bytes32",
                "name": "channelId",
                "type": "bytes32"
              }
            ],
            "internalType": "struct IbcEndpoint",
            "name": "src",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "portId",
                "type": "string"
              },
              {
                "internalType": "bytes32",
                "name": "channelId",
                "type": "bytes32"
              }
            ],
            "internalType": "struct IbcEndpoint",
            "name": "dest",
            "type": "tuple"
          },
          {
            "internalType": "uint64",
            "name": "sequence",
            "type": "uint64"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          },
          {
            "components": [
              {
                "internalType": "uint64",
                "name": "revision_number",
                "type": "uint64"
              },
              {
                "internalType": "uint64",
                "name": "revision_height",
                "type": "uint64"
              }
            ],
            "internalType": "struct Height",
            "name": "timeoutHeight",
            "type": "tuple"
          },
          {
            "internalType": "uint64",
            "name": "timeoutTimestamp",
            "type": "uint64"
          }
        ],
        "internalType": "struct IbcPacket",
        "name": "packet",
        "type": "tuple"
      }
    ],
    "name": "writeTimeoutPacket",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;


export const tokenAbi =
  [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "name",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "symbol",
          "type": "string",
          "internalType": "string"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "receive",
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "allowance",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "approve",
      "inputs": [
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "authorizeMiddleware",
      "inputs": [
        {
          "name": "middleware",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "authorizedMws",
      "inputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "balanceOf",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "burn",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "decimals",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint8",
          "internalType": "uint8"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "decreaseAllowance",
      "inputs": [
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "subtractedValue",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "increaseAllowance",
      "inputs": [
        {
          "name": "spender",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "addedValue",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "mint",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "mw",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "name",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "string",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "onRecvUniversalPacket",
      "inputs": [
        {
          "name": "channelId",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "packet",
          "type": "tuple",
          "internalType": "struct UniversalPacket",
          "components": [
            {
              "name": "srcPortAddr",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "mwBitmap",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "destPortAddr",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "appData",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "outputs": [
        {
          "name": "ackPacket",
          "type": "tuple",
          "internalType": "struct AckPacket",
          "components": [
            {
              "name": "success",
              "type": "bool",
              "internalType": "bool"
            },
            {
              "name": "data",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "onTimeoutUniversalPacket",
      "inputs": [
        {
          "name": "channelId",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "packet",
          "type": "tuple",
          "internalType": "struct UniversalPacket",
          "components": [
            {
              "name": "srcPortAddr",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "mwBitmap",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "destPortAddr",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "appData",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "onUniversalAcknowledgement",
      "inputs": [
        {
          "name": "channelId",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "packet",
          "type": "tuple",
          "internalType": "struct UniversalPacket",
          "components": [
            {
              "name": "srcPortAddr",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "mwBitmap",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "destPortAddr",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            {
              "name": "appData",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        },
        {
          "name": "ack",
          "type": "tuple",
          "internalType": "struct AckPacket",
          "components": [
            {
              "name": "success",
              "type": "bool",
              "internalType": "bool"
            },
            {
              "name": "data",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "renounceOwnership",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setDefaultMw",
      "inputs": [
        {
          "name": "_middleware",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "symbol",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "string",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "totalSupply",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "transfer",
      "inputs": [
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "transferFrom",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "transferFrom",
      "inputs": [
        {
          "name": "destPortAddr",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "channelId",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        {
          "name": "timeoutSeconds",
          "type": "uint64",
          "internalType": "uint64"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "transferOwnership",
      "inputs": [
        {
          "name": "newOwner",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "Approval",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "spender",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "OwnershipTransferred",
      "inputs": [
        {
          "name": "previousOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "newOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "TokenMint",
      "inputs": [
        {
          "name": "receiver",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Transfer",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "value",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "TransferFailure",
      "inputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "TransferSuccess",
      "inputs": [],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "receiverNotOriginPacketSender",
      "inputs": []
    }
  ] as const;

export const tokenFactoryAbi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "receiverNotOriginPacketSender",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "channelId",
        "type": "bytes32"
      }
    ],
    "name": "BridgeFailure",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "channelId",
        "type": "bytes32"
      }
    ],
    "name": "BridgeSuccess",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "TokenMint",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "middleware",
        "type": "address"
      }
    ],
    "name": "authorizeMiddleware",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "authorizedMws",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_symbol",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_tokenSupply",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_salt",
        "type": "string"
      }
    ],
    "name": "deployPolyERC20",
    "outputs": [
      {
        "internalType": "contract PolyERC20FixedSupply",
        "name": "token",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string[]",
        "name": "channels",
        "type": "string[]"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_symbol",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_tokenSupply",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_salt",
        "type": "string"
      }
    ],
    "name": "deployXPolyERC20",
    "outputs": [
      {
        "internalType": "contract PolyERC20FixedSupply",
        "name": "token",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string[]",
        "name": "channels",
        "type": "string[]"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_symbol",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_tokenSupply",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_salt",
        "type": "string"
      },
      {
        "internalType": "uint64",
        "name": "timeoutSeconds",
        "type": "uint64"
      }
    ],
    "name": "deployXPolyERC20",
    "outputs": [
      {
        "internalType": "contract PolyERC20FixedSupply",
        "name": "token",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "mw",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "channelId",
        "type": "bytes32"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "srcPortAddr",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "mwBitmap",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "destPortAddr",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "appData",
            "type": "bytes"
          }
        ],
        "internalType": "struct UniversalPacket",
        "name": "packet",
        "type": "tuple"
      }
    ],
    "name": "onRecvUniversalPacket",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "success",
            "type": "bool"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "internalType": "struct AckPacket",
        "name": "ackPacket",
        "type": "tuple"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "channelId",
        "type": "bytes32"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "srcPortAddr",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "mwBitmap",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "destPortAddr",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "appData",
            "type": "bytes"
          }
        ],
        "internalType": "struct UniversalPacket",
        "name": "packet",
        "type": "tuple"
      }
    ],
    "name": "onTimeoutUniversalPacket",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "channelId",
        "type": "bytes32"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "srcPortAddr",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "mwBitmap",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "destPortAddr",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "appData",
            "type": "bytes"
          }
        ],
        "internalType": "struct UniversalPacket",
        "name": "packet",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "bool",
            "name": "success",
            "type": "bool"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "internalType": "struct AckPacket",
        "name": "ack",
        "type": "tuple"
      }
    ],
    "name": "onUniversalAcknowledgement",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_middleware",
        "type": "address"
      }
    ],
    "name": "setDefaultMw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
] as const;
