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
