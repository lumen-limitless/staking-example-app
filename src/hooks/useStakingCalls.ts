import { useCalls, useEthers } from '@usedapp/core'
import { BigNumber } from 'ethers'
import { CHAINID } from '../constants'
import { useStakingContract, useStakingTokenContract } from './useContract'

export const useStakingCalls = () => {
  const { account } = useEthers()
  const staking = useStakingContract()
  const stakingToken = useStakingTokenContract()
  const results =
    useCalls(
      [
        account && {
          contract: staking,
          method: 'balanceOf',
          args: [account],
        },
        {
          contract: staking,
          method: 'totalSupply',
          args: [],
        },
        {
          contract: staking,
          method: 'rewardRate',
          args: [],
        },
        account && {
          contract: staking,
          method: 'earned',
          args: [account],
        },
        {
          contract: staking,
          method: 'paused',
          args: [],
        },
        account && {
          contract: stakingToken,
          method: 'lastFaucetMint',
          args: [account],
        },
      ],
      {
        chainId: CHAINID,
      }
    ) ?? []

  results.forEach((result) => {
    if (result && result.error) {
      console.error(`Error encountered: ${result.error.message}`)
    }
  })

  return results.map((result) => result?.value?.[0]) as [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    Boolean,
    BigNumber
  ]
}
