import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Root, ThemeProvider } from "./providers/ThemeProvider"

const MainPage = React.lazy(() => import('pages/MainPage').then(module => ({ default: module.MainPage })));
const AboutPage = React.lazy(() => import('pages/AboutPage').then(module => ({ default: module.AboutPage })));

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

const App = () => {
    return (
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default App;