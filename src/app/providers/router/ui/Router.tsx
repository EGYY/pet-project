import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config';
import { PageLoader } from 'widgets/PageLoader';

export const Router = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(routeConfig).map((item) => (
                <Route
                    key={item.path}
                    element={<div className="page-wrapper">{item.element}</div>}
                    path={item.path}
                />
            ))}
        </Routes>
    </Suspense>
);
