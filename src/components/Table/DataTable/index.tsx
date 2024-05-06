import { FC } from 'react';
import { DataTableProps } from '~/@types/components/data-table.ts';
import { StyledDataTable } from '~/components/Table/DataTable/style.ts';

export const DataTable: FC<DataTableProps> = ({ data, columns, loading, onClick }) => {
  return (
    <StyledDataTable
      dataSource={data}
      columns={columns}
      loading={loading}
      pagination={false}
      locale={{ emptyText: 'Nenhum dado disponível' }}
      onRow={(record: any) => ({
        onClick: () => onClick && onClick(record),
      })}
    />
  );
};
