import { Switch } from 'antd';
import styled from 'styled-components';

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

export const ProfileOptions = () => {
  return (
    <ContainerProfileOptions>
      <ContentConfig>Configurações do Perfil</ContentConfig>
      <ContentTheme>
        Dark Theme
        <StyledSwitch />
      </ContentTheme>

      <BorderGoOut>
        <GoOut>Sair</GoOut>
      </BorderGoOut>
    </ContainerProfileOptions>
  );
};
