import { createContext, useContext, } from "react";
export const ThemeContext = createContext({
  thememode: "light",
});

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => {
  return useContext(ThemeContext);
};
