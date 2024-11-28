import React from 'react';
import '../styles/Pagination.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const maxVisiblePages = 5;
    let pageNumbers: number[] = [];
    
    // If total pages is less than max visible, show all pages
    if (totalPages <= maxVisiblePages) {
      pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      // Calculate the middle position
      const middle = Math.floor(maxVisiblePages / 2);
      
      // If current page is close to start
      if (currentPage <= middle + 1) {
        pageNumbers = Array.from({ length: maxVisiblePages }, (_, i) => i + 1);
      }
      // If current page is close to end
      else if (currentPage >= totalPages - middle) {
        const start = totalPages - maxVisiblePages + 1;
        pageNumbers = Array.from({ length: maxVisiblePages }, (_, i) => start + i);
      }
      // Current page is in the middle
      else {
        const start = currentPage - middle;
        pageNumbers = Array.from({ length: maxVisiblePages }, (_, i) => start + i);
      }
    }
    
    return pageNumbers;
  };

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      
      {getPageNumbers().map((number) => (
        <button
          key={number}
          className={`pagination-button ${currentPage === number ? 'active' : ''}`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}
      
      <button
        className="pagination-button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};