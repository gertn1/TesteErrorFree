import {  ThemeProvider } from "styled-components";
import { dark, light } from "~/theme";
import GlobalStyle from './globalStyle';
import { useState } from "react";
import { ThemeToggleContext } from '../context/ThemeToggleContext'; 



export const MyThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState(light);

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