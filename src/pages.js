import React from "react";
import { AuthenticationGuard } from "./components/authentication-guard";
import { CallbackPage } from "./pages/callback-page";
import { HomePage } from "./pages/home-page";
import { NotFoundPage } from "./pages/not-found-page";
import { ProtectedPage } from "./pages/protected-page";
import { PublicPage } from "./pages/public-page";

export const pages = [
    {
        path: "/",
        element: <HomePage />,
        title: "Home"
    },
    {
        path: "/public",
        element: <PublicPage />,
        title: "Public"
    },
    {
        path: "/protected",
        element: <AuthenticationGuard component={ProtectedPage} />,
        title: "Protected"
    },
    {
        path: "/callback",
        element: <CallbackPage />,
        title: "Callback"
    },
    {
        path: "*",
        element: <NotFoundPage />,
        title: "Not Found"
    }
];