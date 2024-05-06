import styled from 'styled-components';

export const InputContent = styled.input`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text1};
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  outline: none;
  padding: 2px 8px;
`;
