export interface PaginationProps {
  pageSize: number;
  totalItems: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onShowSizeChange?: (current: number, size: number) => void;
}
