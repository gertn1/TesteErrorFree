// import { Link } from 'react-router-dom';
//
// import styled from 'styled-components';
//
// export const TitleOrganization = styled.div`
//   height: ${({ theme }) => theme.space[10]};
//   font-size: ${({ theme }) => theme.fontSizes[4]};
//   font-weight: ${({ theme }) => theme.weight[5]};
//   color: ${({ theme }) => theme.colors.text};
// `;
//
// export const ContentButtonOrganization = styled.div`
//   width: 100%;
//   height: 100px;
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
// `;
//
// export const LinkNewOrganization = styled(Link)`
//   text-decoration: none;
// `;
//
// export const ContainerNewOrganization = styled.div`
//   border-radius: ${({ theme }) => theme.radius[1]};
//   box-shadow: ${({ theme }) => theme.shadows[1]};
//   padding: ${({ theme }) => theme.space[5]};
// `;
//
// export const ContentNewOrganization = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   gap: 10px;
//   background: ${({ theme }) => theme.colors.secondary};
//
//   padding: ${({ theme }) => theme.space[5]};
// `;
//
// export const ButtonContainer = styled.div`
//   display: flex;
//   padding: 15px;
//   gap: 30px;
// `;
//

import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  margin-bottom: 12px;
`;

export const Label = styled.label`
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px;
  margin-bottom: 12px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ff8c00;
  }
`;
