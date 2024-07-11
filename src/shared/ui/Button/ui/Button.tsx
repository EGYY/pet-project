import { cls } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react';


export enum ButtonTheme {
    GHOST = 'ghost',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
    const { children, className, theme = ButtonTheme.GHOST, ...otherProps } = props;
    return (
        <button
            {...otherProps}
            className={cls(styles.Button, {}, [className, styles[theme]])}
        >
            {children}
        </button>
    );
};