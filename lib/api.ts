import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { paginateArray, PaginatedResult } from './pagination'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  // Only return .md files, ignore backups and non-markdown files
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.md') && !file.startsWith('~') && !file.startsWith('.'))
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
    // Check if file exists before reading
    if (!fs.existsSync(fullPath)) {
      // Return null or throw error if file doesn't exist
      return null
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
     .map((slug) => getPostBySlug(slug, fields))
     .filter((post) => post !== null)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getPaginatedPosts(
  fields: string[] = [],
  page: number = 1,
  postsPerPage: number = 5
): PaginatedResult<any> {
  const allPosts = getAllPosts(fields)
  return paginateArray(allPosts, page, postsPerPage)
}

export function getTotalPostsCount(): number {
  const slugs = getPostSlugs()
  return slugs.length
}
