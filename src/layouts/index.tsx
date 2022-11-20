import Banner from '../components/Banner'
import Nav from '../components/Nav'
import Modal from '../components/ui/Modal'
import { useUI } from '../hooks'

function ModalUI() {
  const { toggleViewingModal, viewingModal, modalView } = useUI()

  return (
    <Modal
      isOpen={viewingModal}
      onDismiss={() => {
        toggleViewingModal(false)
      }}
    >
      {modalView && modalView}
    </Modal>
  )
}

export default function Layout({ children }: { children?: any }) {
  return (
    <>
      <a href="#main" aria-label="skip" className="sr-only">
        skip to content
      </a>
      <ModalUI />
      <Banner>
        ATTENTION: Assets have no real value and are for example purposes only.
        Only interact with contracts on Goerli testnet.
      </Banner>
      <header className="sticky top-0 z-10 w-full" id="header">
        <Nav />
      </header>
      <main
        className="relative flex h-full min-h-screen  w-full flex-col"
        id="main"
      >
        {children}
      </main>
      <footer id="footer">
        <p className="text-sm text-zinc-100">
          &copy; {new Date().getFullYear()} Zach Lippa. All rights reserved.
        </p>
      </footer>
    </>
  )
}
