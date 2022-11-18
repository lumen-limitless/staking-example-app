import React, { useCallback } from 'react'
import Button from '../ui/Button'
import { Hardhat, useEthers } from '@usedapp/core'
import { useUI } from '../../hooks'

export default function Connect() {
  const { chainId } = useEthers()
  const { activateBrowserWallet, activate } = useEthers()
  const { toggleViewingModal } = useUI()

  // const onWalletConnect = useCallback(async () => {
  //   try {
  //     const WalletConnectProvider = await import(
  //       '@walletconnect/web3-provider'
  //     ).then((mod) => mod.default)
  //     const provider = new WalletConnectProvider({
  //       chainId: chainId,
  //       rpc: { [Hardhat.chainId]: 'http://localhost:8545' },
  //     })
  //     await provider.enable()
  //     await activate(provider)
  //     toggleViewingModal(false)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }, [chainId, toggleViewingModal, activate])

  return (
    <>
      <div className="my-3 flex flex-col items-center gap-3">
        <span className="mb-3 text-xl">Select a Wallet</span>
        <Button
          color="gray"
          size="lg"
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
          onClick={() => activateBrowserWallet({ type: 'walletConnect' })}
        >
          WalletConnect
        </Button>
        <Button
          color="gray"
          size="lg"
          onClick={() => activateBrowserWallet({ type: 'coinbase' })}
        >
          Coinbase Wallet
        </Button>
      </div>
    </>
  )
}
