import { cls } from 'shared/lib/classNames/classNames';
import styles from './Spinner.module.scss';

interface SpinnerProps {
 className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => (
    <div className={cls(styles.Spinner, {}, [className])} />
);
