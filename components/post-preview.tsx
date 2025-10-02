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
      <h3 className="text-3xl mb-3 leading-snug text-surface-800">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a 
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-surface-900 text-surface-800 rounded"
            aria-label={`Read full article: ${title}`}
          >
            {title}
          </a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <time dateTime={date}>
          <DateFormatter dateString={date} />
        </time>
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <div className="author-info" aria-label={`Article by ${author.name}`}>
        <Avatar name={author.name} picture={author.picture} />
      </div>
    </article>
  )
}

export default PostPreview
