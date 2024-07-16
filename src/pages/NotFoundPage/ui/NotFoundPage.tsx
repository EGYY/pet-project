import { cls } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
 className?: string;
}

export default function NotFoundPage({ className }: NotFoundPageProps) {
    const { t } = useTranslation();
    return (
        <div className={cls(styles.NotFoundPage, {}, [className])}>
            {t('Not found page')}
        </div>
    );
}
