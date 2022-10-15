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
      <header className="fixed  w-full" id="header">
        <Nav />
      </header>
      <main
        className="relative flex h-full min-h-screen w-full flex-col"
        id="main"
      >
        {children}
      </main>
      <footer className="w-full border-t-2 border-gray-300" id="footer">
        <p className="text-sm ">
          &copy; {new Date().getFullYear()} Zach Lippa. All rights reserved.
        </p>
      </footer>
    </>
  )
}
