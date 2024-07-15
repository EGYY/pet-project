import { useContext } from 'react';
import { STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

type useThemeResult = {
  changeTheme: () => void;
  theme: Theme;
};

export function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        changeTheme,
    };
}
