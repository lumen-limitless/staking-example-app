import { useContractFunction } from '@usedapp/core'
import { BigNumber } from 'ethers'
import { useStakingTokenContract } from '../hooks/useContract'
import TransactionButton from './ui/TransactionButton'

export default function Faucet({
  lastFaucetMint,
}: {
  lastFaucetMint: BigNumber
}) {
  const token = useStakingTokenContract()
  const faucetMint = useContractFunction(token, 'faucetMint')

  return (
    <div className="flex gap-3 py-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M224 0c17.7 0 32 14.3 32 32v12l96-12c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96-12l-31-3.9l-1-.1l-1 .1l-31 3.9l-96 12c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 12V32c0-17.7 14.3-32 32-32zM0 224c0-17.7 14.3-32 32-32h96l22.6-22.6c6-6 14.1-9.4 22.6-9.4H192v-43.8l32-4l32 4V160h18.7c8.5 0 16.6 3.4 22.6 9.4L320 192h32c88.4 0 160 71.6 160 160c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32s-14.3-32-32-32h-36.1c-20.2 29-53.9 48-91.9 48s-71.7-19-91.9-48H32c-17.7 0-32-14.3-32-32v-64zm436.8 199.4c1.9-4.5 6.3-7.4 11.2-7.4s9.2 2.9 11.2 7.4l18.2 42.4c1.8 4.1 2.7 8.6 2.7 13.1v1.1c0 17.7-14.3 32-32 32s-32-14.3-32-32v-1.2c0-4.5.9-8.9 2.7-13.1l18.2-42.4z"
        />
      </svg>
      {lastFaucetMint ? (
        <TransactionButton
          requirement={{
            requirement:
              Math.floor(Date.now() / 1000) - lastFaucetMint.toNumber() > 86400,
            message: `Next faucet mint available on ${new Date(
              (lastFaucetMint.toNumber() + 86400) * 1000
            ).toUTCString()} `,
          }}
          color="blue"
          method={faucetMint}
          name="Mint Staking token from faucet"
        />
      ) : null}
    </div>
  )
}