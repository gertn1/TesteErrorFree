import styled from 'styled-components';

export const ContainerNewPartnerPerson = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radius[1]};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  padding: ${({ theme }) => theme.space[2]};
`;

export const ContentNewPartnerPerson = styled.form`
  display: flex;
  width: 29.75431rem;
  flex-direction: column;
  margin: 0 auto;
  gap: 10px;
`;

export const TitlePerson = styled.div`
  height: ${({ theme }) => theme.space[8]};
  margin-bottom: ${({ theme }) => theme.space[4]};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  font-weight: ${({ theme }) => theme.weight[5]};
  color: ${({ theme }) => theme.colors.text};
`;

export const ButtonContainerPerson = styled.div`
  display: flex;
  padding-top: 10px;
  gap: 30px;
`;

