import { NavLink } from 'react-router-dom';

import { IonIcon } from '@ionic/react';
import styled from 'styled-components';

export const SidebarMenuItems = styled.div``;

export const SidebarItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }

  &.active {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const Icon = styled(IonIcon)`
  font-size: ${({ theme }) => theme.fontSizes[5]};
  color: ${({ theme }) => theme.colors.text1};
  padding: ${({ theme }) => theme.space[1]};
`;

export const Span = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text1};
  font-weight: ${({ theme }) => theme.weight[4]};
`;
