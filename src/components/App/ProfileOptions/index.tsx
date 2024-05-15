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
import { useEffect, useState } from 'react';


const StyledSwitch = styled(Switch)`
  margin-left: 100px;
  transform: scale(0.7);
`;

export const ProfileOptions = () => {
    const toggleTheme = useContext(ThemeToggleContext);
    const [isSwitchChecked, setIsSwitchChecked] = useState(false);
    useEffect(() => {
        const isLightTheme = localStorage.getItem("theme") === "dark";

        setIsSwitchChecked(isLightTheme);
    }, []);

    const handleToggleTheme = () => {
        toggleTheme();
        setIsSwitchChecked(prevState => !prevState);
    };

    return (
        <ContainerProfileOptions>
            <ContentConfig>Configurações do Perfil</ContentConfig>
            <ContentTheme>
                Dark Theme
                <StyledSwitch checked={isSwitchChecked} onChange={handleToggleTheme} />
            </ContentTheme>

            <BorderGoOut>
                <GoOut>Sair</GoOut>
            </BorderGoOut>
        </ContainerProfileOptions>
    );
};