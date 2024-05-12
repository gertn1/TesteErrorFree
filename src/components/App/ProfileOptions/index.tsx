import { Switch } from 'antd';
import styled from 'styled-components';

import {
  BorderGoOut,
  ContainerProfileOptions,
  ContentConfig,
  ContentTheme,
  GoOut,
} from '~/components/App/ProfileOptions/style.ts';
import { useContext } from 'react';
import { ThemeToggleContext } from '../../../context/ThemeToggleContext'; 


const StyledSwitch = styled(Switch)`
  margin-left: 100px;
  transform: scale(0.7);
`;

export const ProfileOptions = () => {
  const toggleTheme = useContext(ThemeToggleContext);
  return (
    <ContainerProfileOptions>
      <ContentConfig>Configurações do Perfil</ContentConfig>
      <ContentTheme>
        Dark Theme
        <StyledSwitch onClick={toggleTheme} />
      </ContentTheme>

      <BorderGoOut>
        <GoOut>Sair</GoOut>
      </BorderGoOut>
    </ContainerProfileOptions>
  );
};