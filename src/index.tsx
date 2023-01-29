import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import ThemeProvider from "./theme/ThemeProvider";
const MainPage = React.lazy(() => import("./pages/MainPage/MainPage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage/AboutPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
