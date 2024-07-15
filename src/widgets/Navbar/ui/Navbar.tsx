import { cls } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={cls(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink to="/">{t('Main link')}</AppLink>
                <AppLink to="/about">{t('About link')}</AppLink>
            </div>
        </div>
    );
};
