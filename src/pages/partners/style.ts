import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const TitlePartner = styled.div`
  height: ${({ theme }) => theme.space[10]};

  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.weight[5]};
  color: ${({ theme }) => theme.colors.text};
`;

export const ContentButtonPartner = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const LinkNewPartner = styled(Link)`
  text-decoration: none;
`;

export const ContainerNewPartner = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radius[1]};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  padding: ${({ theme }) => theme.space[5]};
`;

export const ContentNewPartner = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;


export const ButtonContainer = styled.div`
  display: flex;
  padding-top: 30px;
  gap: 30px;
`;
