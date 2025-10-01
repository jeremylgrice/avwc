import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Pagination from '../components/pagination'
import { getAllPosts, getPaginatedPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import { PaginatedResult } from '../lib/pagination'
import { GetServerSideProps } from 'next'

type Props = {
  heroPost?: Post | null
  morePosts: Post[]
  paginationInfo: PaginatedResult<Post>['pagination']
  currentPage: number
}

export default function Index({ heroPost, morePosts, paginationInfo, currentPage }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Vet That Codes</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && currentPage === 1 && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && (
            <>
              <MoreStories posts={morePosts} currentPage={currentPage} />
              <Pagination pagination={paginationInfo} />
            </>
          )}
        </Container>
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = parseInt(query.page as string) || 1
  const postsPerPage = 4 // Show 4 posts per page (plus hero post on first page)
  
  const fields = [
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]

  if (page === 1) {
    // First page: show hero post + 4 more posts
    const allPosts = getAllPosts(fields)
    const heroPost = allPosts[0]
    const remainingPosts = allPosts.slice(1)
    const paginatedResult = getPaginatedPosts(fields, page, postsPerPage + 1) // +1 to account for hero post
    
    return {
      props: {
        heroPost,
        morePosts: remainingPosts.slice(0, postsPerPage),
        paginationInfo: {
          ...paginatedResult.pagination,
          totalPosts: allPosts.length
        },
        currentPage: page
      },
    }
  } else {
    // Subsequent pages: show only paginated posts (no hero)
    const allPosts = getAllPosts(fields)
    const totalPosts = allPosts.length
    // Skip the first post (hero) and calculate pagination for remaining posts
    const remainingPosts = allPosts.slice(1)
    const adjustedPage = page - 1 // Adjust page number since we skip first post
    const startIndex = (adjustedPage - 1) * postsPerPage
    const endIndex = startIndex + postsPerPage
    const currentPagePosts = remainingPosts.slice(startIndex, endIndex)
    
    // Calculate pagination info manually for remaining posts
    const totalRemainingPosts = remainingPosts.length
    const totalPages = Math.ceil(totalRemainingPosts / postsPerPage) + 1 // +1 for first page
    
    return {
      props: {
        heroPost: null,
        morePosts: currentPagePosts,
        paginationInfo: {
          currentPage: page,
          totalPages,
          totalPosts: totalPosts,
          postsPerPage,
          hasNextPage: page < totalPages,
          hasPreviousPage: page > 1,
          startIndex,
          endIndex: Math.min(startIndex + postsPerPage, totalRemainingPosts)
        },
        currentPage: page
      },
    }
  }
}
