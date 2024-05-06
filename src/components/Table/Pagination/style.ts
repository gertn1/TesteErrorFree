import styled from 'styled-components';

export const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 80px;
  color: ${({ theme }) => theme.colors.text1};
`;

export const ContainerPagination = styled.div`
  display: flex;
  border: 1px solid black;
`;

export const IconButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.3s;
  width: 40px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text1};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Span = styled.div`
  padding: 12px;
  border-left: 1px solid black;
  border-right: 1px solid black;
  background-color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes[1]};
`;

export const CustomSelect = styled.div`
  position: relative;
  margin-left: 20px;
  cursor: pointer;
`;

export const SelectText = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid black;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text1};
  transition:
    border-color 0.3s,
    background-color 0.3s;

  span {
    margin-right: 8px;
  }
`;

export const OptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Option = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s;
  color: ${({ theme }) => theme.colors.text1};
  font-size: ${({ theme }) => theme.fontSizes[2]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
