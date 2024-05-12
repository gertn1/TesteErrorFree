

// import React, { useState } from 'react';
// import { ThemeProvider } from 'styled-components';
// import { dark, light } from '~/theme';
// import GlobalStyle from './globalStyle';
// import { ProfileOptions } from '../components/App/ProfileOptions'; // Importe o componente ProfileOptions

// export const MyThemeProvider = ({ children }: any) => {
//   const [theme, setTheme] = useState(light); // Inicializa o tema como light

//   // Função para alternar entre os temas
//   const toggleTheme = () => {
//     setTheme(prevTheme => (prevTheme === dark ? light : dark));
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <GlobalStyle />
//       {/* Passe a função toggleTheme para o ProfileOptions */}
//       <ProfileOptions toggleTheme={toggleTheme} />
//       {children}
//     </ThemeProvider>
//   );
// };


import {  ThemeProvider , DefaultTheme } from "styled-components";
import { dark, light } from "~/theme";
import { createContext, useCallback, useContext, useState } from "react";
import { MainProps, ThemeContextData } from "~/@types/components/button";






const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)


export const useTheme = () => useContext(ThemeContext);


export const MyThemeProvider = ({ children }: MainProps) => {
  const [theme, setTheme] = useState<DefaultTheme>(light)


    const toggleTheme = useCallback(() => {
      if (theme.title === 'light') {
          setTheme(dark)
      } else if (theme.title === 'dark') {
          setTheme(light)
      }
  }, [theme])


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </ThemeContext.Provider>


  );
};
