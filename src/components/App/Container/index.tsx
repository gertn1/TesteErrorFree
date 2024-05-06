import styled from 'styled-components';
import { AppRoutes } from '~/routes';
import { FC } from 'react';

interface ContainerProps {
  isOpen: boolean;
}

const Container = styled.div<ContainerProps>`
  flex: 1;
  margin-top: 57px;
  transition: margin-left 0.3s ease;
  padding: ${({ theme }) => theme.space[4]};
  margin-left: ${({ isOpen }) => (isOpen ? '250px' : '50px')};
`;

const ContentContainer: FC<ContainerProps> = ({ isOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <AppRoutes></AppRoutes>
    </Container>
  );
};

export default ContentContainer;
