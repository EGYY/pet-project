import { Suspense} from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "shared/contexts";
import { cls } from "helpers/classNames/classNames";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";

export const App = () => {
  const { theme, changeTheme } = useTheme();
  return (
    <div className={cls('app', {}, [theme])}>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <button onClick={changeTheme}>Change theme</button>

      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
