import { ethers } from 'ethers'
import { useMemo } from 'react'
import { CONTRACTS } from '../constants'
import {
  CookedSteakToken,
  StakingRewards,
  SteakToken,
} from '../types/typechain'

export const useContract = (address: string, abi: any) => {
  return useMemo(() => {
    if (!address || !abi) return null
    return new ethers.Contract(address, abi)
  }, [address, abi])
}

export const useStakingContract = () => {
  return useContract(
    CONTRACTS.contracts.StakingRewards.address,
    CONTRACTS.contracts.StakingRewards.abi
  ) as StakingRewards
}

export const useStakingTokenContract = () => {
  return useContract(
    CONTRACTS.contracts.SteakToken.address,
    CONTRACTS.contracts.SteakToken.abi
  ) as SteakToken
}

export const useRewardTokenContract = () => {
  return useContract(
    CONTRACTS.contracts.CookedSteakToken.address,
    CONTRACTS.contracts.CookedSteakToken.abi
  ) as CookedSteakToken
}
