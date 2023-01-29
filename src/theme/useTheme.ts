import { useContext } from "react";
import { Theme, ThemeContext, THEME_KEY } from "./ThemeContext";

interface ThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): ThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
}
