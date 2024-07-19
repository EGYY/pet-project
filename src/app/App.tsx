import { cls } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import 'shared/config/i18n/i18n';
import { Suspense } from 'react';
import { Router } from './providers/router';

export const App = () => (
    <div className={cls('app', {}, [])}>
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
