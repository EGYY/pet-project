import { cls } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import styles from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value);
        localStorage.setItem('lng', e.target.value);
    };

    return (
        <select
            className={cls(styles.LanguageSwitcher, {}, [className])}
            onChange={changeLanguage}
            defaultValue={localStorage.getItem('lng') || 'ru'}
        >
            <option value="en">{t('English')}</option>
            <option value="ru">{t('Russian')}</option>
        </select>
    );
};
