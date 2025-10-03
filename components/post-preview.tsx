import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <article>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug text-white font-bold">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a 
            className="hover:underline hover:text-surface-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-surface-900 rounded"
            aria-label={`Read full article: ${title}`}
          >
            {title}
          </a>
        </Link>
      </h3>
      <div className="text-sm mb-4 text-surface-200">
        <time dateTime={date}>
          <DateFormatter dateString={date} />
        </time>

      </div>
      <p className="text-sm leading-relaxed mb-4 text-surface-100">{excerpt}</p>

    </article>
  )
}

export default PostPreview
