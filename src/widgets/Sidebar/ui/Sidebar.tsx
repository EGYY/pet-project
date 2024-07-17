import { useState } from 'react';
import { cls } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import MenuWithRightArrowIcon from 'shared/assets/icons/menu-unfold-3-line.svg';
import MenuWithLeftArrowIcon from 'shared/assets/icons/menu-unfold-4-line.svg';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanugageSwitcher';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
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
            >
                {collapsed ? (
                    <MenuWithRightArrowIcon fill="var(--primary-color)" width={25} />
                ) : (
                    <MenuWithLeftArrowIcon fill="var(--primary-color)" width={25} />
                )}
            </Button>
            <div className={styles.switchers}>
                <LanguageSwitcher />
                <ThemeSwitcher />
            </div>
        </div>
    );
};
