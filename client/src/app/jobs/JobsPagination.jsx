'use client'

import { 
  Pagination, 
  PaginationPrevious, 
  PaginationNext, 
  PaginationList, 
  PaginationPage,
  PaginationGap
} from '@/components/pagination'

export default function JobsPagination({ currentPage, totalPages }) {
  const getPageNumbers = () => {
    const delta = 2; // Number of pages to show before and after the current page
    const range = [];
    const rangeWithDots = [];

    range.push(1);

    for (let i = currentPage - delta; i <= currentPage + delta; i++) {
      if (i < totalPages && i > 1) {
        range.push(i);
      }
    }

    range.push(totalPages);

    let l;
    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  return (
    <Pagination>
      <PaginationPrevious href={`?page=${currentPage > 1 ? currentPage - 1 : 1}`} />
      <PaginationList>
        {getPageNumbers().map((pageNumber, index) => 
          pageNumber === '...' ? (
            <PaginationGap key={`gap${index}`} />
          ) : (
            <PaginationPage
              key={pageNumber}
              href={`?page=${pageNumber}`}
              current={currentPage === pageNumber}
            >
              {pageNumber}
            </PaginationPage>
          )
        )}
      </PaginationList>
      <PaginationNext href={`?page=${currentPage < totalPages ? currentPage + 1 : totalPages}`} />
    </Pagination>
  )
}