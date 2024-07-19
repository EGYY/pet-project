import {
    FC, createContext, useMemo, useState,
} from 'react';

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

export type ThemeContextProps = {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({});

export const STORAGE_THEME_KEY = 'theme';

const defaultTheme = (localStorage.getItem('theme') as Theme) || Theme.LIGHT;

document.body.className = defaultTheme;

interface ThemeProviderProps {
    initialTheme?: Theme
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { children, initialTheme } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
