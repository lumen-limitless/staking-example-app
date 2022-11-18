import { shortenIfAddress, useEthers } from '@usedapp/core'
import { useUI } from '../hooks'
import Connect from './modals/Connect'
import Button from './ui/Button'

export default function Nav() {
  const { account } = useEthers()
  const { setModalView } = useUI()
  return (
    <div className="flex h-16 w-full items-center bg-gray-900 px-3 md:px-6 lg:px-9">
      {account ? (
        <div className="ml-auto flex  items-center justify-center rounded-full bg-gray-700 p-3">
          {shortenIfAddress(account)}
        </div>
      ) : (
        <Button
          size="md"
          color="blue"
          className="ml-auto max-w-xs"
          onClick={() => setModalView(<Connect />)}
        >
          Connect Wallet
        </Button>
      )}
    </div>
  )
}
