import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import { motion } from 'framer-motion'
import { UI } from '../lib/constants'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-gradient-to-br from-surface-900 via-surface-900 to-surface-950">
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="skip-link"
          tabIndex={1}
        >
          {UI.navigation.skipToContent}
        </a>
        
        <Alert preview={preview} />
        <motion.main 
          id="main-content" 
          role="main" 
          tabIndex={-1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-96 left-2 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary-500/2 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-2 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary-600/2 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            {children}
          </div>
        </motion.main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
