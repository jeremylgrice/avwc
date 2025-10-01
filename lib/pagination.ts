export interface PaginationInfo {
  currentPage: number
  totalPages: number
  totalPosts: number
  postsPerPage: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  startIndex: number
  endIndex: number
}

export interface PaginatedResult<T> {
  data: T[]
  pagination: PaginationInfo
}

/**
 * Calculate pagination information
 */
export function calculatePagination(
  totalItems: number,
  currentPage: number = 1,
  itemsPerPage: number = 5
): PaginationInfo {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages))
  
  const startIndex = (validCurrentPage - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems)
  
  return {
    currentPage: validCurrentPage,
    totalPages,
    totalPosts: totalItems,
    postsPerPage: itemsPerPage,
    hasNextPage: validCurrentPage < totalPages,
    hasPreviousPage: validCurrentPage > 1,
    startIndex,
    endIndex
  }
}

/**
 * Paginate an array of items
 */
export function paginateArray<T>(
  items: T[],
  currentPage: number = 1,
  itemsPerPage: number = 5
): PaginatedResult<T> {
  const pagination = calculatePagination(items.length, currentPage, itemsPerPage)
  const data = items.slice(pagination.startIndex, pagination.endIndex)
  
  return {
    data,
    pagination
  }
}

/**
 * Generate page numbers for pagination navigation
 */
export function generatePageNumbers(
  currentPage: number,
  totalPages: number,
  maxVisiblePages: number = 5
): number[] {
  if (totalPages <= maxVisiblePages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const half = Math.floor(maxVisiblePages / 2)
  let start = Math.max(1, currentPage - half)
  let end = Math.min(totalPages, start + maxVisiblePages - 1)

  if (end - start + 1 < maxVisiblePages) {
    start = Math.max(1, end - maxVisiblePages + 1)
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}