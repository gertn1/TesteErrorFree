// import { ThemeProvider } from 'styled-components';
// import { dark, light  } from '~/theme';
// import GlobalStyle from './globalStyle';


// export const MyThemeProvider = ({ children }: any) => {

//   return (
//     <ThemeProvider theme={light}>
//       <GlobalStyle /> 
      
//        {children }
//     </ThemeProvider>

//   );
// };

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { dark, light } from '~/theme';
import GlobalStyle from './globalStyle';
import { ProfileOptions } from '../components/App/ProfileOptions'; // Importe o componente ProfileOptions

export const MyThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState(light); // Inicializa o tema como light

  // Função para alternar entre os temas
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === dark ? light : dark));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* Passe a função toggleTheme para o ProfileOptions */}
      <ProfileOptions toggleTheme={toggleTheme} />
      {children}
    </ThemeProvider>
  );
};
