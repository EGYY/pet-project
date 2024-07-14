import { useState } from "react";
import { cls } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui";
import styles from "./Sidebar.module.scss";
import MenuWithRightArrowIcon from "shared/assets/icons/menu-unfold-3-line.svg";
import MenuWithLeftArrowIcon from "shared/assets/icons/menu-unfold-4-line.svg";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

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
      className={cls(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button onClick={toggle} className={styles.collapseButton}>
        {collapsed ? (
          <MenuWithRightArrowIcon fill="var(--primary-color)" width={25} />
        ) : (
          <MenuWithLeftArrowIcon fill="var(--primary-color)" width={25} />
        )}
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        {/* <LanguageSwitcher/> */}
      </div>
    </div>
  );
};
