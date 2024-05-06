import styled, { css } from 'styled-components';

export const TabContainer = styled.div`
  display: flex;
  margin: 0;
  position: relative;
`;

export const TabItem = styled.div<{ isActive: boolean }>`
  padding: 10px 15px;
  margin-right: 5px;
  width: 200px;
  cursor: pointer;
  border-radius: 3px 3px 0 0;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text1};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  ${(props) =>
    props.isActive &&
    css`
      border-bottom: none;
      background: ${({ theme }) => theme.colors.ternary};
    `}
`;

export const TabContent = styled.div``;

export const TabBorderBottom = styled.div<{ isActive: boolean }>`
  position: absolute;
  bottom: 0;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  ${(props) =>
    props.isActive &&
    css`
      border-bottom: none;
      background: ${({ theme }) => theme.colors.primary};
    `}
`;
