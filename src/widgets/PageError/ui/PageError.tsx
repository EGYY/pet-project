import { cls } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui';
import styles from './PageError.module.scss';

interface PageErrorProps {
 className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();
    const reloadPage = () => {
        window.location.reload();
    };
    return (
        <div className={cls(styles.PageError, {}, [className])}>
            <h1>{t('Error message')}</h1>
            <Button onClick={reloadPage} theme={ButtonTheme.FILLED}>{t('Refresh page')}</Button>
        </div>
    );
};
