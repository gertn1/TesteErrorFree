export interface DataTableProps {
  data: any[];
  columns: any[];
  loading: boolean;
  onClick?: (record: any) => void;
}
