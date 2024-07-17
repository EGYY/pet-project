import { cls } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'shared/contexts';
import SunIcon from 'shared/assets/icons/sun-line.svg';
import MoonIcon from 'shared/assets/icons/moon-line.svg';
import { Button, ButtonTheme } from 'shared/ui';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, changeTheme } = useTheme();
    return (
        <Button
            className={cls(styles.ThemeSwitcher, {}, [className])}
            onClick={changeTheme}
            theme={ButtonTheme.GHOST}
        >
            {theme === Theme.DARK ? (
                <SunIcon fill="var(--primary-color)" />
            ) : (
                <MoonIcon fill="var(--primary-color)" />
            )}
        </Button>
    );
};
