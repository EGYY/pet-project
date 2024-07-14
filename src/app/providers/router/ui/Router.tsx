import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config";

export const Router = () => {
  return (
    <Suspense fallback="Loading...">
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
};
