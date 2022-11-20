import React, { useCallback } from 'react'
import Button from '../ui/Button'
import { Hardhat, useEthers } from '@usedapp/core'
import { useUI } from '../../hooks'

export default function Connect() {
  const { activateBrowserWallet } = useEthers()
  const { toggleViewingModal } = useUI()

  return (
    <>
      <div className="my-3 flex flex-col items-center gap-3">
        <span className="mb-3 text-xl">Select a Wallet</span>
        <Button
          color="gray"
          size="lg"
          full
          onClick={() => {
            activateBrowserWallet()
            toggleViewingModal(false)
          }}
        >
          MetaMask
        </Button>

        <Button
          color="gray"
          size="lg"
          full
          onClick={() => activateBrowserWallet({ type: 'walletConnect' })}
        >
          WalletConnect
        </Button>
        <Button
          color="gray"
          size="lg"
          full
          onClick={() => activateBrowserWallet({ type: 'coinbase' })}
        >
          Coinbase Wallet
        </Button>
      </div>
    </>
  )
}
