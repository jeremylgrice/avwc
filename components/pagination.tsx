import Link from 'next/link'
import { useRouter } from 'next/router'
import { PaginationInfo, generatePageNumbers } from '../lib/pagination'

type Props = {
  pagination: PaginationInfo
  basePath?: string
}

const Pagination = ({ pagination, basePath = '' }: Props) => {
  const router = useRouter()
  const { currentPage, totalPages, hasNextPage, hasPreviousPage } = pagination

  if (totalPages <= 1) {
    return null
  }

  const pageNumbers = generatePageNumbers(currentPage, totalPages)

  const createPageUrl = (page: number) => {
    if (page === 1) {
      return basePath || '/'
    }
    return `${basePath}?page=${page}`
  }

  const buttonBaseClass = "px-4 py-2 text-sm font-medium transition-colors duration-200 border focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-surface-900"
  const activeClass = "bg-surface-800 text-white border-surface-600"
  const inactiveClass = "bg-surface-800 text-gray-100 border-surface-600 hover:bg-surface-700 hover:border-surface-500 hover:text-white"
  const disabledClass = "bg-surface-800 text-gray-400 border-surface-700 cursor-not-allowed opacity-50"

  return (
    <nav className="flex items-center justify-center space-x-2 mt-8 mb-16" aria-label="Blog posts pagination" role="navigation">
      {/* Previous Button */}
      {hasPreviousPage ? (
        <Link 
          href={createPageUrl(currentPage - 1)}
          className={`${buttonBaseClass} ${inactiveClass} rounded-l-md`}
          aria-label={`Go to previous page, page ${currentPage - 1}`}
        >
          Previous
        </Link>
      ) : (
        <span 
          className={`${buttonBaseClass} ${disabledClass} rounded-l-md`}
          aria-disabled="true"
          aria-label="Previous page unavailable"
        >
          Previous
        </span>
      )}

      {/* Page Numbers */}
      {pageNumbers.map((pageNum) => (
        pageNum === currentPage ? (
          <span
            key={pageNum}
            className={`${buttonBaseClass} ${activeClass}`}
            aria-current="page"
            aria-label={`Current page, page ${pageNum}`}
          >
            {pageNum}
          </span>
        ) : (
          <Link
            key={pageNum}
            href={createPageUrl(pageNum)}
            className={`${buttonBaseClass} ${inactiveClass}`}
            aria-label={`Go to page ${pageNum}`}
          >
            {pageNum}
          </Link>
        )
      ))}

      {/* Next Button */}
      {hasNextPage ? (
        <Link 
          href={createPageUrl(currentPage + 1)}
          className={`${buttonBaseClass} ${inactiveClass} rounded-r-md`}
          aria-label={`Go to next page, page ${currentPage + 1}`}
        >
          Next
        </Link>
      ) : (
        <span 
          className={`${buttonBaseClass} ${disabledClass} rounded-r-md`}
          aria-disabled="true"
          aria-label="Next page unavailable"
        >
          Next
        </span>
      )}
    </nav>
  )
}

export default Pagination