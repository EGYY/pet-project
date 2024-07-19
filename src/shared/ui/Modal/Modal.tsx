import { cls } from 'shared/lib/classNames/classNames';
import {
    ReactNode, useEffect, useRef,
} from 'react';
import { useTheme } from 'shared/contexts';
import styles from './Modal.module.scss';
import { Button, ButtonTheme } from '../Button';
import CloseIcon from '../../assets/icons/close-line.svg';
import { Portal } from '../Portal/Portal';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    open: boolean;
    close: () => void;
}

export const Modal = (props: ModalProps) => {
    const {
        className, children, close, open = false,
    } = props;
    const ref = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (ref.current
                && !ref.current.contains(event.target as Node)) {
                close?.();
            }
        };
        document.addEventListener(
            'click',
            handleClickOutside,
            true,
        );

        return () => {
            document.removeEventListener(
                'click',
                handleClickOutside,
                true,
            );
        };
    }, [close]);

    useEffect(() => {
        const keyboardPressed = (e: globalThis.KeyboardEvent) => {
            if (e.code === 'Escape') {
                close?.();
            }
        };

        if (open) {
            document.addEventListener('keydown', keyboardPressed);
        }

        return () => {
            document.removeEventListener('keydown', keyboardPressed);
        };
    }, [close, open]);

    if (!open) return null;

    return (
        <Portal>
            <div className={cls(styles.Modal, { [styles.open]: open }, [className, theme])}>
                <div className={styles.overlay}>
                    <div className={styles.content} ref={ref}>
                        <Button theme={ButtonTheme.GHOST} className={styles.closeBtn}>
                            <CloseIcon fill="var(--bg-color)" width={20} onClick={close} />
                        </Button>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
};
