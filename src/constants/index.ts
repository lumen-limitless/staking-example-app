import contractsInfo from '../json/contractsInfo.json'
import contractsInfoLocal from '../json/contractsInfo.local.json'
import { Goerli, Hardhat } from '@usedapp/core'

export const CONTRACTS =
  process.env.NODE_ENV === 'production' ? contractsInfo : contractsInfoLocal

export const CHAINID = parseInt(CONTRACTS.chainId)

export const RPC =
  process.env.NODE_ENV === 'production'
    ? {
        [Goerli.chainId]:
          'https://eth-goerli.g.alchemy.com/v2/9WA5ju6LZtjbnuhzqCedTtDoDXDIwNH6',
      }
    : {
        [Goerli.chainId]:
          'https://eth-goerli.g.alchemy.com/v2/9WA5ju6LZtjbnuhzqCedTtDoDXDIwNH6',
        [Hardhat.chainId]: 'http://localhost:8545/',
      }
