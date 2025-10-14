import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Clock, User } from 'lucide-react'
import { getText } from '../lib/constants'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="group h-full"
    >
      <Card className="h-full overflow-hidden transition-all duration-300 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-900/10">
        <div className="aspect-video overflow-hidden">
          <CoverImage 
            slug={slug} 
            title={title} 
            src={coverImage} 
            className="transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
        
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between text-sm text-surface-300">
            <div className="flex items-center gap-2">
              <Clock className="h-3 w-3" />
              <time dateTime={date}>
                <DateFormatter dateString={date} />
              </time>
            </div>
            <Badge variant="secondary" className="text-xs">
              {getText.readingTime(excerpt)}
            </Badge>
          </div>
          
          <CardTitle className="line-clamp-2 group-hover:text-primary-200 transition-colors">
            <Link href={`/posts/${slug}`}>
              <a 
                className="focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-surface-900 rounded-md"
                aria-label={`Read full article: ${title}`}
              >
                {title}
              </a>
            </Link>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <CardDescription className="line-clamp-3 text-surface-200 leading-relaxed">
            {excerpt}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.article>
  )
}

export default PostPreview
