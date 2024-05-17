import styled from 'styled-components';


export const NewInputContent = styled.input`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text1};
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizes[4]};
  outline: none;
  padding: 2px 8px;
`;

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.primary}; // Define a cor do texto
  font-size: ${({ theme }) => theme.fontSizes[3]}; // Define o tamanho da fonte
  margin-bottom: 8px; // Adiciona uma margem inferior
  display: block; // Faz com que o label ocupe toda a largura disponível
`;
