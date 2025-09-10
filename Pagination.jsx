import './Pagination.css'

function Pagination({ currentPage, totalPages, onPageChange, isDarkMode }) {
  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1)
        pages.push('...')
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        pages.push(1)
        pages.push('...')
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      }
    }
    
    return pages
  }

  if (totalPages <= 1) return null

  return (
    <div className={`pagination ${isDarkMode ? 'dark' : 'light'}`}>
      <button 
        className="pagination-btn prev-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        ← Previous
      </button>
      
      <div className="page-numbers">
        {getPageNumbers().map((page, index) => (
          page === '...' ? (
            <span key={index} className="page-ellipsis">...</span>
          ) : (
            <button
              key={index}
              className={`page-number ${currentPage === page ? 'active' : ''}`}
              onClick={() => onPageChange(page)}
              aria-label={`Go to page ${page}`}
            >
              {page}
            </button>
          )
        ))}
      </div>
      
      <button 
        className="pagination-btn next-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        Next →
      </button>
    </div>
  )
}

export default Pagination