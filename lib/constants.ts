export const EXAMPLE_PATH = 'blog-starter'
export const CMS_NAME = 'Markdown'
export const HOME_OG_IMAGE_URL =
  'https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg'

// Site Metadata
export const SITE = {
  name: 'Vet That Codes',
  title: 'Vet That Codes - Army Veteran + Developer',
  tagline: 'Army Veteran + Developer',
  description: 'Sharing practical insights, tutorials, and stories from the world of software development - bridging ideas, best practices, and clean code.',
  footerDescription: 'Made with ❤️ by Vet That Codes',
  bottomText: 'Made with',
  bottomDescription: 'for fellow veterans transitioning to tech',
  author: {
    name: 'Jeremy Grice',
    github: 'https://github.com/jeremylgrice',
    linkedin: 'https://www.linkedin.com/in/jeremylgrice/'
  }
} as const

// Page Content
export const CONTENT = {
  intro: {
    badgeText: 'Army Veteran + Developer',
    mainTitle: 'Vet That',
    titleAccent: 'Codes',
    description: 'Sharing practical insights, tutorials, and stories from the world of software development - bridging ideas, best practices, and clean code.',
    bottomText: 'Made with',
    bottomDescription: 'for fellow veterans transitioning to tech'
  },
  stories: {
    latestTitle: 'Latest Stories',
    pageTitle: 'Stories - Page',
    featuredBadge: 'Featured',
    readMore: 'Read more',
    minRead: 'min read'
  }
} as const

// UI Labels
export const UI = {
  navigation: {
    skipToContent: 'Skip to main content',
    previous: 'Previous',
    next: 'Next',
    blogPagination: 'Blog posts pagination'
  },
  accessibility: {
    socialLinks: 'Social media links',
    githubLabel: "Visit Jeremy's GitHub profile",
    linkedinLabel: "Visit Jeremy's LinkedIn profile",
    previousPageUnavailable: 'Previous page unavailable',
    nextPageUnavailable: 'Next page unavailable',
    goToPreviousPage: 'Go to previous page, page',
    goToNextPage: 'Go to next page, page',
    moreStoriesHeading: 'more-stories-heading'
  },
  buttons: {
    github: 'GitHub',
    linkedin: 'LinkedIn'
  }
} as const

// Dynamic Text Functions
export const getText = {
  storiesPageTitle: (pageNumber: number) => 
    pageNumber === 1 ? CONTENT.stories.latestTitle : `${CONTENT.stories.pageTitle} ${pageNumber}`,
  readingTime: (wordCount: number) => 
    `${Math.ceil(wordCount / 200)} ${CONTENT.stories.minRead}`,
  previousPageLabel: (pageNumber: number) => 
    `${UI.accessibility.goToPreviousPage} ${pageNumber}`,
  nextPageLabel: (pageNumber: number) => 
    `${UI.accessibility.goToNextPage} ${pageNumber}`
} as const
