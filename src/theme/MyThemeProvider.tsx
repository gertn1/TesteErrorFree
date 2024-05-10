import {  ThemeProvider } from "styled-components";
import { dark, light } from "~/theme";
import GlobalStyle from './globalStyle';
import { useState } from "react";

import React from 'react';

export const ThemeToggleContext = React.createContext<(() => void) | undefined>(undefined);
export const MyThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeToggleContext.Provider value={toggleTheme}>
    <ThemeProvider theme={theme}>
      <GlobalStyle /> 
    
       {children }
    </ThemeProvider>
    </ThemeToggleContext.Provider>

  );
};
