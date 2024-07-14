import { cls } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss';
import { AppLink } from 'shared/ui';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={cls(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink to={"/"}>Main</AppLink>
                <AppLink to={"/about"}>About</AppLink>
            </div>
        </div>
    )
}
