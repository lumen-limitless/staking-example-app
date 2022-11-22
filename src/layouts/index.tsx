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
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        Assets have no real value and are for example purposes only.
      </Banner>
      <header className="sticky top-0 z-20" id="header">
        <Nav />
      </header>
      <main className="flex h-full w-full flex-grow flex-col" id="main">
        {children}
      </main>

      <footer id="footer">
        <p className="pt-3 text-sm">
          &copy; {new Date().getFullYear()} Lumen Limitless. All rights
          reserved.
        </p>
      </footer>
    </>
  )
}
