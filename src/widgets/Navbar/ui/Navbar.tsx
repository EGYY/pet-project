import { cls } from 'shared/lib/classNames/classNames';
import UserIcon from 'shared/assets/icons/user-3-line.svg';
import { Button, Modal } from 'shared/ui';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    const toggleAuthModal = useCallback(() => {
        setOpen((prev) => !prev);
    }, []);

    return (
        <div className={cls(styles.navbar, {}, [className])}>
            <div className={styles.actionButtons}>
                <Button className={styles.authButton} onClick={toggleAuthModal}>
                    <UserIcon fill="var(--bg-color)" width={20} />
                    <span>{t('Login')}</span>
                </Button>
                <Modal open={open} close={toggleAuthModal}>
                    123
                </Modal>
            </div>
        </div>
    );
};
