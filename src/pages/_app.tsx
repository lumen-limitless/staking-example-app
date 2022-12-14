import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../layouts'
import { DefaultSeo } from 'next-seo'
import {
  Config,
  Hardhat,
  Goerli,
  DAppProvider,
  MetamaskConnector,
  CoinbaseWalletConnector,
} from '@usedapp/core'
import { CHAINID, RPC } from '../constants'
// import { WalletConnectConnector } from '@usedapp/wallet-connect-connector'

const config: Config = {
  readOnlyChainId: CHAINID,
  readOnlyUrls: RPC,
  autoConnect: false,
  multicallVersion: 2,
  connectors: {
    metamask: new MetamaskConnector(),
    coinbase: new CoinbaseWalletConnector(),
    // walletConnect: new WalletConnectConnector({
    //   rpc: RPC,
    //   chainId: CHAINID,
    // }),
  },
  networks: [Goerli, Hardhat],
  pollingInterval: 5000,
  notifications: {
    expirationPeriod: 1,
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        defaultTitle={process.env.NEXT_PUBLIC_APP_NAME || ''}
        titleTemplate={`%s - ${process.env.NEXT_PUBIC_APP_NAME || ''}`}
        description={process.env.NEXT_PUBLIC_APP_DESCRIPTION || ''}
      />
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <DAppProvider config={config}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DAppProvider>
    </>
  )
}

export default MyApp
