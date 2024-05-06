import styled from 'styled-components';

export const ContainerProfileOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: ${({ theme }) => theme.colors.text1};
`;

const ProfileOption = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const ContentConfig = styled(ProfileOption)``;
export const GoOut = styled(ProfileOption)``;
export const ContentTheme = styled(ProfileOption)``;

export const BorderGoOut = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
`;
