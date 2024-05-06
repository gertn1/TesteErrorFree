import { FC, Fragment, useState } from 'react';
import { DataTable } from '~/components/Table/DataTable';
import { Pagination } from '~/components/Table/Pagination';
import { Tabs } from '~/components/Table/Tabs';
import { TableContainerProps } from '~/@types/components/table.ts';
import { StyledTableContainer } from '~/components/Table/style.ts';

export const Table: FC<TableContainerProps> = ({
  data,
  columns,
  pageSize,
  totalItems,
  currentPage,
  onPageChange,
  onClick,
  loading,
  showPagination,
  onShowSizeChange,
  tabsData,
  children,
  activeTab: parentActiveTab,
  onTabChange: parentOnTabChange,
}) => {
  const [activeTab, setActiveTab] = useState(parentActiveTab || '1');

  const handleTabChange = (key: string) => {
    setActiveTab(key);
    if (parentOnTabChange) {
      parentOnTabChange(key);
    }
  };

  return (
    <Fragment>
      <Tabs tabsData={tabsData} activeTab={activeTab} onTabChange={handleTabChange} />

      <StyledTableContainer>
        {children}
        <DataTable data={data} columns={columns} loading={loading} onClick={onClick} />
        {showPagination && (
          <Pagination
            pageSize={pageSize}
            totalItems={totalItems}
            currentPage={currentPage}
            onPageChange={onPageChange}
            onShowSizeChange={onShowSizeChange}
          />
        )}
      </StyledTableContainer>
    </Fragment>
  );
};
