// import {  ThemeProvider } from "styled-components";
// import { dark, light } from "~/theme";
// import GlobalStyle from './globalStyle';
// import { useState } from "react";
// import { ThemeToggleContext } from '../context/ThemeToggleContext'; 



// export const MyThemeProvider = ({ children }: any) => {
//   const [theme, setTheme] = useState(light);

//   const toggleTheme = () => {
//     setTheme(theme.title === 'light' ? dark : light);
//   };

 

//   return (
//     <ThemeToggleContext.Provider value={toggleTheme}>
//     <ThemeProvider theme={theme}>
//       <GlobalStyle /> 
    
//        {children }
//     </ThemeProvider>
//     </ThemeToggleContext.Provider>

//   );
// };


import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { dark, light } from "~/theme";
import GlobalStyle from './globalStyle';
import { ThemeToggleContext } from '../context/ThemeToggleContext'; 

export const MyThemeProvider = ({ children }: any) => {
  // Verifica se há um tema armazenado no localStorage, caso contrário, usa o tema padrão (light)
  const initialTheme = localStorage.getItem("theme") === "dark" ? dark : light;
  const [theme, setTheme] = useState(initialTheme);

  // Define o tema selecionado no localStorage sempre que houver mudança no tema
  useEffect(() => {
    localStorage.setItem("theme", theme.title === "light" ? "light" : "dark");
  }, [theme]);

  const toggleTheme = () => {
    // Alterna entre light e dark quando o tema é alternado
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeToggleContext.Provider value={toggleTheme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle /> 
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};
