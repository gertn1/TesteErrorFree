import { ThemeProvider } from 'styled-components';
import { dark , light } from '~/theme';
import GlobalStyle from './globalStyle';
import { useState } from 'react';

export const MyThemeProvider = ({ children }: any) => {


  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    
    setTheme(currentTheme => (currentTheme === 'dark'? 'light': 'dark'))



  }
   const selecionando = theme === 'dark'? dark: light; 
  return (
    <ThemeProvider theme={selecionando}>
      <GlobalStyle /> 
      <button onClick={toggleTheme}>Alternar Tema </button>
       {children }
    </ThemeProvider>

  );
};
