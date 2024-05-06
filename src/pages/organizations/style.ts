import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const TitleOrganization = styled.div`
  height: ${({ theme }) => theme.space[10]};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.weight[5]};
  color: ${({ theme }) => theme.colors.text};
`;

export const ContentButtonOrganization = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const LinkNewOrganization = styled(Link)`
  text-decoration: none;
`;

export const ContainerNewOrganization = styled.div`
  border-radius: ${({ theme }) => theme.radius[1]};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  padding: ${({ theme }) => theme.space[5]};
`;

export const ContentNewOrganization = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  background: ${({ theme }) => theme.colors.secondary};

  padding: ${({ theme }) => theme.space[5]};
`;

export const ButtonContainer = styled.div`
  display: flex;
  padding: 15px;
  gap: 30px;
`;
