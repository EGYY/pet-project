import { cls } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={cls(styles.navbar, {}, [className])}>
        <div className={styles.links}>
            <AppLink to="/">Main</AppLink>
            <AppLink to="/about">About</AppLink>
        </div>
    </div>
);
