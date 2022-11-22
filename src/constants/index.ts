import contractsInfo from '../json/contractsInfo.json'
import { Goerli} from '@usedapp/core'

export const CONTRACTS = contractsInfo

export const CHAINID = Goerli.chainId

export const RPC = {
  [Goerli.chainId]:
    'https://eth-goerli.g.alchemy.com/v2/9WA5ju6LZtjbnuhzqCedTtDoDXDIwNH6',
}
