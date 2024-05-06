import { Table } from 'antd';
import styled from 'styled-components';

export const StyledDataTable = styled(Table)`
  border-bottom: 5px solid ${({ theme }) => theme.colors.secondary};

  && {
    .ant-table {
      background-color: inherit !important;
      border: 1px solid ${({ theme }) => theme.colors.secondary};
    }

    .ant-table-thead > tr > th {
      border: 1px solid ${({ theme }) => theme.colors.secondary};
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.text};
    }

    .ant-table-tbody > tr > td {
      border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
      background-color: inherit !important;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;
