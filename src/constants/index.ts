import contractsInfoLocal from '../../../staking-example-contracts/contractsInfo.local.json'
import contractsInfo from '../../../staking-example-contracts/contractsInfo.json'
import { Goerli, Hardhat } from '@usedapp/core'

export const CONTRACTS =
  process.env.NODE_ENV !== 'production' ? contractsInfoLocal : contractsInfo

export const CHAINID =
  process.env.NODE_ENV !== 'production' ? Hardhat.chainId : Goerli.chainId

export const RPC =
  process.env.NODE_ENV !== 'production'
    ? { [Hardhat.chainId]: 'http://localhost:8545' }
    : {
        [Goerli.chainId]:
          'https://eth-goerli.g.alchemy.com/v2/9WA5ju6LZtjbnuhzqCedTtDoDXDIwNH6',
      }
