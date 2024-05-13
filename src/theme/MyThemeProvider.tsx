
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { dark, light } from "~/theme";
import GlobalStyle from './globalStyle';
import { ThemeToggleContext } from '../context/ThemeToggleContext'; 

export const MyThemeProvider = ({ children }: any) => {
  const initialTheme = localStorage.getItem("theme") === "light" ? light : dark;
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme.title === "light" ? "light" : "dark");
  }, [theme]);

  const toggleTheme = () => {
 
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
