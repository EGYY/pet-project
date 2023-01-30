import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { useTheme } from "../lib/useTheme";
import "app/styles/index.scss";

function Root() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
      <button onClick={toggleTheme}>change theme</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Root;
