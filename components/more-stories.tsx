import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
  currentPage?: number
}

const MoreStories = ({ posts, currentPage = 1 }: Props) => {
  if (posts.length === 0) {
    return null
  }

  const title = currentPage === 1 ? 'More Stories' : `Stories - Page ${currentPage}`

  return (
    <section aria-labelledby="more-stories-heading">
      <h2 
        id="more-stories-heading"
        className="mb-8 text-5xl font-bold tracking-tighter leading-tight text-slate-800"
      >
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32" role="list">
        {posts.map((post) => (
          <article key={post.slug} role="listitem">
            <PostPreview
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </article>
        ))}
      </div>
    </section>
  )
}

export default MoreStories
