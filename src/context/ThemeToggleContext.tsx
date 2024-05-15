// import React from "react";
// import { light, dark } from "../theme/index.ts";
//
// type ThemeContextType = {
//     toggleTheme: () => void;
//     theme: typeof light | typeof dark;
// };
//
// const ThemeToggleContext = React.createContext<ThemeContextType | undefined>(undefined);
//
// export default ThemeToggleContext;

import React from 'react';


export const ThemeToggleContext = React.createContext<(() => void) | undefined>(undefined);