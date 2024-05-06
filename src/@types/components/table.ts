import React from 'react';

export interface TableContainerProps {
  data: any[];
  columns: any[];
  pageSize: number;
  totalItems: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onClick?: (record: any) => void;
  loading: boolean;
  showPagination: boolean;
  onShowSizeChange: (page: number, size: number) => void;
  tabsData?: { tab: React.ReactNode; key: string }[];
  activeTab?: string;
  onTabChange?: (key: string) => void;
  children?: any;
}
