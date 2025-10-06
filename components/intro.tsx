import { motion } from 'framer-motion'
import { Badge } from './ui/badge'
import { Code, Heart, Shield } from 'lucide-react'
import { CMS_NAME, CONTENT, UI } from '../lib/constants'

const Intro = () => {
  return (
    <motion.section 
      className="flex flex-col items-center text-center py-8 lg:py-20 relative bg-surface-900/95 backdrop-blur-sm mx-2 lg:mx-4 rounded-xl lg:rounded-2xl mb-8 px-4 lg:px-8" 
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
          {CONTENT.intro.badgeText}
        </Badge>
      </motion.div>

      <motion.h1 
        className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tight leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <span className="text-white">
          {CONTENT.intro.mainTitle}
        </span>
        <br />
        <span className="text-primary-800">
          {CONTENT.intro.titleAccent}
        </span>
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl lg:text-2xl text-surface-100 max-w-3xl leading-relaxed px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {CONTENT.intro.description}
      </motion.p>
    </motion.section>
  )
}

export default Intro
