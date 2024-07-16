import { cls } from 'shared/lib/classNames/classNames';
import { Spinner } from 'shared/ui';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={cls(styles.PageLoader, {}, [className])}>
        <Spinner />
    </div>
);
