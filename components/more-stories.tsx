import PostPreview from './post-preview'
import { motion } from 'framer-motion'
import { Separator } from '@radix-ui/react-separator'
import type Post from '../interfaces/post'
import { getText, UI } from '../lib/constants'

type Props = {
  posts: Post[]
  currentPage?: number
}

const MoreStories = ({ posts, currentPage = 1 }: Props) => {
  if (posts.length === 0) {
    return null
  }

  const title = getText.storiesPageTitle(currentPage)

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section aria-labelledby={UI.accessibility.moreStoriesHeading} className="py-16">
      <div className="flex items-center gap-4 mb-12">
        <motion.h2 
          id={UI.accessibility.moreStoriesHeading}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white"
        >
          {title}
        </motion.h2>
        <Separator className="flex-1 bg-surface-700" />
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10" 
        role="list"
      >
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            role="listitem"
          >
            <PostPreview
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default MoreStories
