import { useState } from 'react';
import { cls } from 'shared/lib/classNames/classNames';
import { AppLink, Button, ButtonTheme } from 'shared/ui';
import MenuWithRightArrowIcon from 'shared/assets/icons/menu-unfold-3-line.svg';
import MenuWithLeftArrowIcon from 'shared/assets/icons/menu-unfold-4-line.svg';
import HomeIcon from 'shared/assets/icons/home-6-line.svg';
import AboutIcon from 'shared/assets/icons/information-line.svg';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanugageSwitcher';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={cls(styles.Sidebar, { [styles.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                data-testid="sidebar-toggle-button"
                onClick={toggle}
                className={styles.collapseButton}
                theme={ButtonTheme.GHOST}
            >
                {collapsed ? (
                    <MenuWithRightArrowIcon fill="var(--primary-color)" width={25} />
                ) : (
                    <MenuWithLeftArrowIcon fill="var(--primary-color)" width={25} />
                )}
            </Button>
            <div className={styles.links}>
                <AppLink to={RoutePath.main}>
                    <HomeIcon fill="var(--primary-color)" width={25} />
                    <span>{t('Main link')}</span>
                </AppLink>
                <AppLink to={RoutePath.about}>
                    <AboutIcon fill="var(--primary-color)" width={25} />
                    <span>{t('About link')}</span>
                </AppLink>
            </div>
            <div className={styles.switchers}>
                <LanguageSwitcher />
                <ThemeSwitcher />
            </div>
        </div>
    );
};
