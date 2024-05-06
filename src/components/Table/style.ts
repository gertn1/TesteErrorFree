import styled from 'styled-components';

export const StyledTableContainer = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  border-left: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 10px;
  background: ${({ theme }) => theme.colors.ternary};
`;
