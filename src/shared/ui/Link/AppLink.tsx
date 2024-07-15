import { cls } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
    DARK = 'dark',
    LIGHT = 'light'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className, children, theme = AppLinkTheme.LIGHT, ...otherProps
    } = props;
    return (
        <Link
            {...otherProps}
            className={cls(styles.link, {}, [className, styles[theme]])}
        >
            {children}
        </Link>
    );
};
