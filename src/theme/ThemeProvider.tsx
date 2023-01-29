import React, { FC, PropsWithChildren, useState } from "react";
import { Theme, ThemeContext, THEME_KEY } from "./ThemeContext";

const defaultTheme = (localStorage.getItem(THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);
  
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
