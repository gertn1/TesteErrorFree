import { Switch } from 'antd';
import styled from 'styled-components';
// import { useContext } from 'react';
// import { ThemeContext } from '~/theme/MyThemeProvider.tsx';
import { useTheme } from '../../../theme/MyThemeProvider'

import {
  BorderGoOut,
  ContainerProfileOptions,
  ContentConfig,
  ContentTheme,
  GoOut,
} from '~/components/App/ProfileOptions/style.ts';



const StyledSwitch = styled(Switch)`
  margin-left: 100px;
  transform: scale(0.7);
`;


  export function ProfileOptions() {
    const { toggleTheme, theme } = useTheme();

  return (
    <ContainerProfileOptions>
      <ContentConfig>Configurações do Perfil</ContentConfig>
      <ContentTheme>
        Dark Theme
        <StyledSwitch onClick={toggleTheme}>mpoo {theme.title} </StyledSwitch>
      </ContentTheme>

      <BorderGoOut>
        <GoOut>Sair</GoOut>  
      </BorderGoOut>
    </ContainerProfileOptions>  
  );
};
