import { FC, createContext, useMemo, useState } from "react";

export enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

export type ThemeContextProps = {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({});

export const STORAGE_THEME_KEY = "theme";

const defaultTheme = (localStorage.getItem("theme") as Theme) || Theme.LIGHT;

export const ThemeProvider: FC = (props) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => {
    return {
      theme,
      setTheme,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {props.children}
    </ThemeContext.Provider>
  );
};