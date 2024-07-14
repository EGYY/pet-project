import { Link } from "react-router-dom";
import { useTheme } from "shared/contexts";
import { cls } from "shared/lib/classNames/classNames";
import { Router } from "./providers/router/ui/Router";
import "./styles/index.scss";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

export const App = () => {
  const { theme } = useTheme();
  return (
    <div className={cls("app", {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <Router />
      </div>

      <div className="blured-circle bottom"></div>
      <div className="blured-circle top"></div>
    </div>
  );
};
