/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Goober, GooberInterface } from "../Goober";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_gobblersAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gooAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_feeTo",
        type: "address",
      },
      {
        internalType: "address",
        name: "_minter",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "accessor",
        type: "address",
      },
      {
        internalType: "address",
        name: "permissioned",
        type: "address",
      },
    ],
    name: "AccessControlViolation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "auctionPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "poolPrice",
        type: "uint256",
      },
    ],
    name: "AuctionPriceTooHigh",
    type: "error",
  },
  {
    inputs: [],
    name: "BurnAboveLimit",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "actualErroneousGoo",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "allowedErroneousGoo",
        type: "uint256",
      },
    ],
    name: "ExcessiveErroneousGoo",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "Expired",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "actualK",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expectedK",
        type: "uint256",
      },
    ],
    name: "InsufficientGoo",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount0In",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1In",
        type: "uint256",
      },
    ],
    name: "InsufficientInputAmount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gooBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gobblerBalance",
        type: "uint256",
      },
    ],
    name: "InsufficientLiquidity",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientLiquidityDeposited",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientLiquidityWithdrawn",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gooOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gobblersOut",
        type: "uint256",
      },
    ],
    name: "InsufficientOutputAmount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "feeTo",
        type: "address",
      },
    ],
    name: "InvalidAddress",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gobblerId",
        type: "uint256",
      },
    ],
    name: "InvalidMultiplier",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidNFT",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "InvalidReceiver",
    type: "error",
  },
  {
    inputs: [],
    name: "MintBelowLimit",
    type: "error",
  },
  {
    inputs: [],
    name: "MintFailed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gooBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gobblerBalance",
        type: "uint256",
      },
    ],
    name: "MustLeaveLiquidity",
    type: "error",
  },
  {
    inputs: [],
    name: "NoSkim",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "gobblers",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gooTokens",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fractions",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "feeTo",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fractions",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "performanceFee",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_deltaK",
        type: "uint256",
      },
    ],
    name: "FeesAccrued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gooTokensIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gobblersMultIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gooTokensOut",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gobblerMultOut",
        type: "uint256",
      },
    ],
    name: "Swap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "gooBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "multBalance",
        type: "uint256",
      },
    ],
    name: "Sync",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "auctionPricePerMult",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "poolPricePerMult",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gooConsumed",
        type: "uint256",
      },
    ],
    name: "VaultMint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "gobblers",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gooTokens",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fractions",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MANAGEMENT_FEE_BPS",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERFORMANCE_FEE_BPS",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "artGobblers",
    outputs: [
      {
        internalType: "contract ArtGobblers",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "blockTimestampLast",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fractions",
        type: "uint256",
      },
    ],
    name: "convertToAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "gooTokens",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gobblerMult",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gooTokens",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gobblerMult",
        type: "uint256",
      },
    ],
    name: "convertToFractions",
    outputs: [
      {
        internalType: "uint256",
        name: "fractions",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "gobblers",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "gooTokens",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "fractions",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeTo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_flagged",
        type: "bool",
      },
    ],
    name: "flagGobbler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "flagged",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint256",
        name: "_gooReserve",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_gobblerReserve",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "_blockTimestampLast",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "goo",
    outputs: [
      {
        internalType: "contract Goo",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "kDebt",
    outputs: [
      {
        internalType: "uint112",
        name: "",
        type: "uint112",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "kLast",
    outputs: [
      {
        internalType: "uint112",
        name: "",
        type: "uint112",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mintGobbler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "minter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "gobblers",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "gooTokens",
        type: "uint256",
      },
    ],
    name: "previewDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "fractions",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "gobblersIn",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "gooIn",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "gobblersOut",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "gooOut",
        type: "uint256",
      },
    ],
    name: "previewSwap",
    outputs: [
      {
        internalType: "int256",
        name: "erroneousGoo",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "gobblers",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "gooTokens",
        type: "uint256",
      },
    ],
    name: "previewWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "fractions",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceGobblerCumulativeLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceGooCumulativeLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "gobblers",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "gooTokens",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minFractionsOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "safeDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "fractions",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "erroneousGooAbs",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "gobblersIn",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "gooIn",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "gobblersOut",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "gooOut",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeSwap",
    outputs: [
      {
        internalType: "int256",
        name: "erroneousGoo",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "gobblers",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "gooTokens",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "maxFractionsIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "safeWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "fractions",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newFeeTo",
        type: "address",
      },
    ],
    name: "setFeeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newMinter",
        type: "address",
      },
    ],
    name: "setMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20",
        type: "address",
      },
    ],
    name: "skim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "gobblersIn",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "gooIn",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "gobblersOut",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "gooOut",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "gooTokens",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gobblerMult",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "gobblers",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "gooTokens",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "fractions",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class Goober__factory {
  static readonly abi = _abi;
  static createInterface(): GooberInterface {
    return new utils.Interface(_abi) as GooberInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Goober {
    return new Contract(address, _abi, signerOrProvider) as Goober;
  }
}
