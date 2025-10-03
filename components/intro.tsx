import { motion } from 'framer-motion'
import { Badge } from './ui/badge'
import { Code, Heart, Shield } from 'lucide-react'
import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <motion.section 
      className="flex flex-col items-center text-center py-16 lg:py-20 relative bg-surface-900/95 backdrop-blur-sm mx-4 rounded-2xl mb-8" 
      role="banner"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6"
      >
                <Badge className="bg-primary-600/20 text-primary-200 border-primary-400/30 text-sm px-4 py-2">
          <Shield className="w-4 h-4 mr-2" />
          Army Veteran + Developer
        </Badge>
      </motion.div>

      <motion.h1 
        className="text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <span className="text-white">
          Vet That
        </span>
        <br />
        <span className="text-primary-800">
          Codes
        </span>
      </motion.h1>

      <motion.p
        className="text-xl lg:text-2xl text-surface-100 max-w-3xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Sharing practical insights, tutorials, and stories from the world of software development - bridging ideas, best practices, and clean code.
      </motion.p>

      <motion.div
        className="flex items-center gap-2 mt-8 text-surface-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <span>Made with</span>
        <Heart className="w-4 h-4 text-red-400 fill-current" />
        <span>for fellow veterans transitioning to tech</span>
      </motion.div>
    </motion.section>
  )
}

export default Intro
