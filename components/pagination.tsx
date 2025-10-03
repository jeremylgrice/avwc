import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { PaginationInfo, generatePageNumbers } from '../lib/pagination'

type Props = {
  pagination: PaginationInfo
  basePath?: string
}

const Pagination = ({ pagination, basePath = '' }: Props) => {
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

  return (
    <motion.nav 
      className="flex items-center justify-center mt-16 mb-8" 
      aria-label="Blog posts pagination" 
      role="navigation"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-1 bg-surface-800/50 backdrop-blur-sm rounded-xl p-2 border border-surface-600">
        {/* Previous Button */}
        {hasPreviousPage ? (
          <Link href={createPageUrl(currentPage - 1)}>
            <Button
              variant="ghost"
              size="sm"
              className="text-surface-200 hover:text-white hover:bg-surface-700 px-2 sm:px-3"
              aria-label={`Go to previous page, page ${currentPage - 1}`}
            >
              <ChevronLeft className="h-4 w-4 sm:mr-1" />
              <span className="hidden sm:inline">Previous</span>
            </Button>
          </Link>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            disabled
            className="text-surface-400 cursor-not-allowed px-2 sm:px-3"
            aria-disabled="true"
            aria-label="Previous page unavailable"
          >
            <ChevronLeft className="h-4 w-4 sm:mr-1" />
            <span className="hidden sm:inline">Previous</span>
          </Button>
        )}

        {/* Page Numbers */}
        <div className="flex items-center gap-1 mx-2">
          {pageNumbers.map((pageNum, index) => {
            if (pageNum === null) {
              return (
                <div key={`ellipsis-${index}`} className="px-2 py-1">
                  <MoreHorizontal className="h-4 w-4 text-surface-400" />
                </div>
              )
            }

            const isCurrentPage = pageNum === currentPage
            
            return (
              <Link key={pageNum} href={createPageUrl(pageNum)}>
                <Button
                  variant={isCurrentPage ? "default" : "ghost"}
                  size="sm"
                  className={
                    isCurrentPage
                      ? "bg-primary-600 hover:bg-primary-700 text-white min-w-[2.5rem]"
                      : "text-surface-200 hover:text-white hover:bg-surface-700 min-w-[2.5rem]"
                  }
                  aria-label={
                    isCurrentPage
                      ? `Current page, page ${pageNum}`
                      : `Go to page ${pageNum}`
                  }
                  aria-current={isCurrentPage ? "page" : undefined}
                >
                  {pageNum}
                </Button>
              </Link>
            )
          })}
        </div>

        {/* Next Button */}
        {hasNextPage ? (
          <Link href={createPageUrl(currentPage + 1)}>
            <Button
              variant="ghost"
              size="sm"
              className="text-surface-200 hover:text-white hover:bg-surface-700 px-2 sm:px-3"
              aria-label={`Go to next page, page ${currentPage + 1}`}
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="h-4 w-4 sm:ml-1" />
            </Button>
          </Link>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            disabled
            className="text-surface-400 cursor-not-allowed px-2 sm:px-3"
            aria-disabled="true"
            aria-label="Next page unavailable"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="h-4 w-4 sm:ml-1" />
          </Button>
        )}
      </div>
    </motion.nav>
  )
}

export default Pagination
