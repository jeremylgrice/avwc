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

  const buttonBaseClass = "px-4 py-2 text-sm font-medium transition-colors duration-200 border"
  const activeClass = "bg-black text-white border-black"
  const inactiveClass = "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
  const disabledClass = "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"

  return (
    <nav className="flex items-center justify-center space-x-2 mt-8 mb-16" aria-label="Pagination">
      {/* Previous Button */}
      {hasPreviousPage ? (
        <Link 
          href={createPageUrl(currentPage - 1)}
          className={`${buttonBaseClass} ${inactiveClass} rounded-l-md`}
        >
          Previous
        </Link>
      ) : (
        <span className={`${buttonBaseClass} ${disabledClass} rounded-l-md`}>
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
          >
            {pageNum}
          </span>
        ) : (
          <Link
            key={pageNum}
            href={createPageUrl(pageNum)}
            className={`${buttonBaseClass} ${inactiveClass}`}
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
        >
          Next
        </Link>
      ) : (
        <span className={`${buttonBaseClass} ${disabledClass} rounded-r-md`}>
          Next
        </span>
      )}
    </nav>
  )
}

export default Pagination