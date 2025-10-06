import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Clock, User, Star } from 'lucide-react'
import type Author from '../interfaces/author'
import { CONTENT, getText } from '../lib/constants'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16 lg:mb-20"
    >
      <Card className="overflow-hidden border-primary-500/30 bg-gradient-to-br from-surface-800/80 to-surface-900/80 backdrop-blur-sm shadow-2xl shadow-primary-900/20">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative aspect-video lg:aspect-auto overflow-hidden">
            <div className="absolute top-4 left-4 z-10">
              <Badge className="bg-primary-600/90 backdrop-blur-sm border-primary-400/50">
                <Star className="w-3 h-3 mr-1" />
                {CONTENT.stories.featuredBadge}
              </Badge>
            </div>
            <CoverImage 
              title={title} 
              src={coverImage} 
              slug={slug}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center">
            <CardHeader className="space-y-6 p-8 lg:p-12">
              <div className="flex items-center gap-4 text-sm text-surface-300">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <time dateTime={date}>
                    <DateFormatter dateString={date} />
                  </time>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {getText.readingTime(excerpt)}
                </Badge>
              </div>

              <CardTitle className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white group-hover:text-primary-200 transition-colors">
                <Link href={`/posts/${slug}`}>
                  <a 
                    className="hover:underline decoration-primary-400 underline-offset-4 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-surface-900 rounded-lg"
                  >
                    {title}
                  </a>
                </Link>
              </CardTitle>

              <CardDescription className="text-lg text-surface-200 leading-relaxed line-clamp-3">
                {excerpt}
              </CardDescription>

              <div className="flex items-center justify-between pt-4 border-t border-surface-700">
                <Link href={`/posts/${slug}`}>
                  <a className="text-primary-400 hover:text-primary-300 font-medium transition-colors flex items-center gap-2">
                    {CONTENT.stories.readMore}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </Link>
              </div>
            </CardHeader>
          </div>
        </div>
      </Card>
    </motion.section>
  )
}

export default HeroPost
