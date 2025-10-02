import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-surface-900 text-white">
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="skip-link"
          tabIndex={1}
        >
          Skip to main content
        </a>
        
        <Alert preview={preview} />
        <main id="main-content" role="main" tabIndex={-1}>
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
