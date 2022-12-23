/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  StakingRewards,
  StakingRewardsInterface,
} from "../../contracts/StakingRewards";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_stakingToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Recovered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "RewardPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardRate",
        type: "uint256",
      },
    ],
    name: "RewardRateSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "RewardsDurationUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "earned",
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
    name: "exit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "getRewardForDuration",
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
    name: "lastTimeRewardApplicable",
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
    name: "lastUpdateTime",
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
    inputs: [],
    name: "owner",
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
    name: "paused",
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
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "recoverERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerToken",
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
    name: "rewardPerTokenStored",
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
    name: "rewardRate",
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
    name: "rewardToken",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "rewards",
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
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "setPaused",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "setRewardRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
    name: "stakeWithPermit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingToken",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "userRewardPerTokenPaid",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162001cdc38038062001cdc8339810160408190526200003491620001c2565b6200003f3362000090565b600180556001600160a01b03848116608052600280546001600160a01b0319169185169190911790556003620000768382620002e1565b506004620000858282620002e1565b5050505050620003ad565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b0381168114620000f857600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200012557600080fd5b81516001600160401b0380821115620001425762000142620000fd565b604051601f8301601f19908116603f011681019082821181831017156200016d576200016d620000fd565b816040528381526020925086838588010111156200018a57600080fd5b600091505b83821015620001ae57858201830151818301840152908201906200018f565b600093810190920192909252949350505050565b60008060008060808587031215620001d957600080fd5b620001e485620000e0565b9350620001f460208601620000e0565b60408601519093506001600160401b03808211156200021257600080fd5b620002208883890162000113565b935060608701519150808211156200023757600080fd5b50620002468782880162000113565b91505092959194509250565b600181811c908216806200026757607f821691505b6020821081036200028857634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002dc57600081815260208120601f850160051c81016020861015620002b75750805b601f850160051c820191505b81811015620002d857828155600101620002c3565b5050505b505050565b81516001600160401b03811115620002fd57620002fd620000fd565b62000315816200030e845462000252565b846200028e565b602080601f8311600181146200034d5760008415620003345750858301515b600019600386901b1c1916600185901b178555620002d8565b600085815260208120601f198616915b828110156200037e578886015182559484019460019091019084016200035d565b50858210156200039d5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6080516118f0620003ec600039600081816102b70152818161066a0152818161087801528181610c4701528181610eb70152610ef001526118f06000f3fe608060405234801561001057600080fd5b50600436106101b85760003560e01c806380faa57d116100f9578063c8f33c9111610097578063e9fad8ee11610071578063e9fad8ee1461038c578063ecd9ba8214610394578063f2fde38b146103a7578063f7c618c1146103ba57600080fd5b8063c8f33c9114610372578063cd3daf9d1461037b578063df136d651461038357600080fd5b80638da5cb5b116100d35780638da5cb5b1461033357806395d89b41146103445780639e447fc61461034c578063a694fc3a1461035f57600080fd5b806380faa57d146102fa5780638980f11f146103005780638b8763471461031357600080fd5b80632e1a7d4d1161016657806370a082311161014057806370a0823114610281578063715018a6146102aa57806372f702f3146102b25780637b0a47ee146102f157600080fd5b80632e1a7d4d146102495780633d18b9121461025c5780635c975abb1461026457600080fd5b80630e213a3d116101975780630e213a3d1461021857806316c38b3c1461022b57806318160ddd1461024057600080fd5b80628cc262146101bd57806306fdde03146101e35780630700037d146101f8575b600080fd5b6101d06101cb36600461168a565b6103cd565b6040519081526020015b60405180910390f35b6101eb61044a565b6040516101da91906116c9565b6101d061020636600461168a565b600b6020526000908152604090205481565b6101d06102263660046116fc565b6104d8565b61023e610239366004611723565b6104e8565b005b6101d060085481565b61023e6102573660046116fc565b610521565b61023e6106cf565b6009546102719060ff1681565b60405190151581526020016101da565b6101d061028f36600461168a565b6001600160a01b03166000908152600c602052604090205490565b61023e61085a565b6102d97f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016101da565b6101d060055481565b426101d0565b61023e61030e366004611740565b61086e565b6101d061032136600461168a565b600a6020526000908152604090205481565b6000546001600160a01b03166102d9565b6101eb610a11565b61023e61035a3660046116fc565b610a1e565b61023e61036d3660046116fc565b610ab0565b6101d060065481565b6101d0610ca1565b6101d060075481565b61023e610cff565b61023e6103a236600461176a565b610d20565b61023e6103b536600461168a565b610f59565b6002546102d9906001600160a01b031681565b6001600160a01b0381166000908152600b6020908152604080832054600a909252822054670de0b6b3a764000090610403610ca1565b61040d91906117cf565b6001600160a01b0385166000908152600c602052604090205461043091906117e2565b61043a91906117f9565b610444919061181b565b92915050565b600380546104579061182e565b80601f01602080910402602001604051908101604052809291908181526020018280546104839061182e565b80156104d05780601f106104a5576101008083540402835291602001916104d0565b820191906000526020600020905b8154815290600101906020018083116104b357829003601f168201915b505050505081565b60008160055461044491906117e2565b6104f0610fe9565b600980547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b6002600154036105785760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600260015533610586610ca1565b600755426006556001600160a01b038116156105d1576105a5816103cd565b6001600160a01b0382166000908152600b6020908152604080832093909355600754600a909152919020555b600082116106215760405162461bcd60e51b815260206004820152601160248201527f43616e6e6f742077697468647261772030000000000000000000000000000000604482015260640161056f565b816008600082825461063391906117cf565b9091555050336000908152600c6020526040812080548492906106579084906117cf565b9091555061069190506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163384611043565b60405182815233907f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5906020015b60405180910390a2505060018055565b6002600154036107215760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161056f565b60026001553361072f610ca1565b600755426006556001600160a01b0381161561077a5761074e816103cd565b6001600160a01b0382166000908152600b6020908152604080832093909355600754600a909152919020555b336000908152600b6020526040902054801561085257336000818152600b60205260408082209190915560025490517f94bf804d0000000000000000000000000000000000000000000000000000000081526004810184905260248101929092526001600160a01b0316906394bf804d90604401600060405180830381600087803b15801561080857600080fd5b505af115801561081c573d6000803e3d6000fd5b50506040518381523392507fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e048691506020016106bf565b505060018055565b610862610fe9565b61086c60006110f1565b565b610876610fe9565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b0316141580156108c657506002546001600160a01b03838116911614155b6109375760405162461bcd60e51b8152602060048201526024808201527f43616e6e6f74207769746864726177207374616b696e672f726577617264207460448201527f6f6b656e00000000000000000000000000000000000000000000000000000000606482015260840161056f565b6040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018290526001600160a01b0383169063a9059cbb906044016020604051808303816000875af115801561099d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c19190611868565b6109ca57600080fd5b604080516001600160a01b0384168152602081018390527f8c1256b8896378cd5044f80c202f9772b9d77dc85c8a6eb51967210b09bfaa2891015b60405180910390a15050565b600480546104579061182e565b610a26610fe9565b6000610a30610ca1565b600755426006556001600160a01b03811615610a7b57610a4f816103cd565b6001600160a01b0382166000908152600b6020908152604080832093909355600754600a909152919020555b60058290556040518281527f8cbfafc8e0d9c5c81401c4b9c6e7d201198adc7eb8f8f1556c195ecd4c0a0e7b90602001610a05565b600260015403610b025760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161056f565b600260015533610b10610ca1565b600755426006556001600160a01b03811615610b5b57610b2f816103cd565b6001600160a01b0382166000908152600b6020908152604080832093909355600754600a909152919020555b60008211610bab5760405162461bcd60e51b815260206004820152600e60248201527f43616e6e6f74207374616b652030000000000000000000000000000000000000604482015260640161056f565b60095460ff1615610bfe5760405162461bcd60e51b815260206004820152601d60248201527f5374616b696e672069732063757272656e746c792064697361626c6564000000604482015260640161056f565b8160086000828254610c10919061181b565b9091555050336000908152600c602052604081208054849290610c3490849061181b565b90915550610c6f90506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333085611159565b60405182815233907f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d906020016106bf565b6000600854600003610cb4575060075490565b600854600554600654610cc790426117cf565b610cd191906117e2565b610ce390670de0b6b3a76400006117e2565b610ced91906117f9565b600754610cfa919061181b565b905090565b336000908152600c6020526040902054610d1890610521565b61086c6106cf565b600260015403610d725760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161056f565b600260015533610d80610ca1565b600755426006556001600160a01b03811615610dcb57610d9f816103cd565b6001600160a01b0382166000908152600b6020908152604080832093909355600754600a909152919020555b60008611610e1b5760405162461bcd60e51b815260206004820152600e60248201527f43616e6e6f74207374616b652030000000000000000000000000000000000000604482015260640161056f565b60095460ff1615610e6e5760405162461bcd60e51b815260206004820152601d60248201527f5374616b696e672069732063757272656e746c792064697361626c6564000000604482015260640161056f565b8560086000828254610e80919061181b565b9091555050336000908152600c602052604081208054889290610ea490849061181b565b90915550610ee390506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333089898989896111b0565b610f186001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333089611159565b60405186815233907f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d9060200160405180910390a250506001805550505050565b610f61610fe9565b6001600160a01b038116610fdd5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161056f565b610fe6816110f1565b50565b6000546001600160a01b0316331461086c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161056f565b6040516001600160a01b0383166024820152604481018290526110ec9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526113ef565b505050565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040516001600160a01b03808516602483015283166044820152606481018290526111aa9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611088565b50505050565b6040517f7ecebe000000000000000000000000000000000000000000000000000000000081526001600160a01b038881166004830152600091908a1690637ecebe0090602401602060405180830381865afa158015611213573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112379190611885565b6040517fd505accf0000000000000000000000000000000000000000000000000000000081526001600160a01b038a811660048301528981166024830152604482018990526064820188905260ff8716608483015260a4820186905260c48201859052919250908a169063d505accf9060e401600060405180830381600087803b1580156112c457600080fd5b505af11580156112d8573d6000803e3d6000fd5b50506040517f7ecebe000000000000000000000000000000000000000000000000000000000081526001600160a01b038b81166004830152600093508c169150637ecebe0090602401602060405180830381865afa15801561133e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113629190611885565b905061136f82600161181b565b81146113e35760405162461bcd60e51b815260206004820152602160248201527f5361666545524332303a207065726d697420646964206e6f742073756363656560448201527f6400000000000000000000000000000000000000000000000000000000000000606482015260840161056f565b50505050505050505050565b6000611444826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166114d49092919063ffffffff16565b8051909150156110ec57808060200190518101906114629190611868565b6110ec5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161056f565b60606114e384846000856114ed565b90505b9392505050565b6060824710156115655760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161056f565b6001600160a01b0385163b6115bc5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161056f565b600080866001600160a01b031685876040516115d8919061189e565b60006040518083038185875af1925050503d8060008114611615576040519150601f19603f3d011682016040523d82523d6000602084013e61161a565b606091505b509150915061162a828286611635565b979650505050505050565b606083156116445750816114e6565b8251156116545782518084602001fd5b8160405162461bcd60e51b815260040161056f91906116c9565b80356001600160a01b038116811461168557600080fd5b919050565b60006020828403121561169c57600080fd5b6114e68261166e565b60005b838110156116c05781810151838201526020016116a8565b50506000910152565b60208152600082518060208401526116e88160408501602087016116a5565b601f01601f19169190910160400192915050565b60006020828403121561170e57600080fd5b5035919050565b8015158114610fe657600080fd5b60006020828403121561173557600080fd5b81356114e681611715565b6000806040838503121561175357600080fd5b61175c8361166e565b946020939093013593505050565b600080600080600060a0868803121561178257600080fd5b8535945060208601359350604086013560ff811681146117a157600080fd5b94979396509394606081013594506080013592915050565b634e487b7160e01b600052601160045260246000fd5b81810381811115610444576104446117b9565b8082028115828204841417610444576104446117b9565b60008261181657634e487b7160e01b600052601260045260246000fd5b500490565b80820180821115610444576104446117b9565b600181811c9082168061184257607f821691505b60208210810361186257634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561187a57600080fd5b81516114e681611715565b60006020828403121561189757600080fd5b5051919050565b600082516118b08184602087016116a5565b919091019291505056fea264697066735822122027c6a792b72b590eecaf30d557722839a5b69355e6a706a99543f24d6146c14964736f6c63430008110033";

type StakingRewardsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakingRewardsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StakingRewards__factory extends ContractFactory {
  constructor(...args: StakingRewardsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _stakingToken: PromiseOrValue<string>,
    _rewardToken: PromiseOrValue<string>,
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StakingRewards> {
    return super.deploy(
      _stakingToken,
      _rewardToken,
      _name,
      _symbol,
      overrides || {}
    ) as Promise<StakingRewards>;
  }
  override getDeployTransaction(
    _stakingToken: PromiseOrValue<string>,
    _rewardToken: PromiseOrValue<string>,
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _stakingToken,
      _rewardToken,
      _name,
      _symbol,
      overrides || {}
    );
  }
  override attach(address: string): StakingRewards {
    return super.attach(address) as StakingRewards;
  }
  override connect(signer: Signer): StakingRewards__factory {
    return super.connect(signer) as StakingRewards__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingRewardsInterface {
    return new utils.Interface(_abi) as StakingRewardsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakingRewards {
    return new Contract(address, _abi, signerOrProvider) as StakingRewards;
  }
}
