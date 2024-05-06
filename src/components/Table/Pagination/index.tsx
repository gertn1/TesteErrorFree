import { FC } from 'react';
import { PaginationProps } from '~/@types/components/pagination.ts';
import { ContainerPagination, Span, StyledPagination } from '~/components/Table/Pagination/style.ts';
import { PaginationButton } from '~/components/Table/Pagination/PaginationButton';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import { PageSizeSelector } from '~/components/Table/Pagination/PageSizeSelector';

export const Pagination: FC<PaginationProps> = ({
  pageSize,
  totalItems,
  currentPage,
  onPageChange,
  onShowSizeChange,
}) => {
  const totalPages = Math.ceil(totalItems / pageSize);
  const rangeStart = (currentPage - 1) * pageSize + 1;
  const rangeEnd = Math.min(currentPage * pageSize, totalItems);

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const handlePageSizeChange = (size: number) => {
    if (onShowSizeChange) {
      onShowSizeChange(currentPage, size);
    }
  };

  return (
    <StyledPagination>
      <ContainerPagination>
        <PaginationButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          icon={chevronBackOutline}
        />
        <Span>
          {rangeStart}-{rangeEnd} de {totalItems}
        </Span>
        <PaginationButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          icon={chevronForwardOutline}
        />
      </ContainerPagination>
      <PageSizeSelector pageSize={pageSize} onPageSizeChange={handlePageSizeChange} />
    </StyledPagination>
  );
};
