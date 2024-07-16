import { useTheme } from 'shared/contexts';
import { cls } from 'shared/lib/classNames/classNames';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import 'shared/config/i18n/i18n';
import { Suspense, useEffect } from 'react';
import { Router } from './providers/router';

export const App = () => {
    const { theme } = useTheme();

    useEffect(() => {
        throw new Error();
    }, []);

    return (
        <div className={cls('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <Router />
                </div>

                <div className="blured-circle bottom" />
                <div className="blured-circle top" />
            </Suspense>
        </div>
    );
};
