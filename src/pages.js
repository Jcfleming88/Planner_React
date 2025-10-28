import React from "react";
import { AuthenticationGuard } from "./components/authentication-guard";

import { CallbackPage } from "./pages/callback-page";
import { HomePage } from "./pages/home-page";
import { NotFoundPage } from "./pages/not-found-page";
import { ProtectedPage } from "./pages/protected-page";
import { PublicPage } from "./pages/public-page";

import home from "./images/icons/home.png";
import publicIcon from "./images/icons/unlocked.png";
import protectedIcon from "./images/icons/locked.png";

export const pages = [
    {
        path: "/",
        element: <HomePage />,
        title: "Home",
        isOnMenu: true,
        isProtected: false,
        icon: home
    },
    {
        path: "/public",
        element: <PublicPage />,
        title: "Public",
        isOnMenu: true,
        isProtected: false,
        icon: publicIcon
    },
    {
        path: "/protected",
        element: <AuthenticationGuard component={ProtectedPage} />,
        title: "Protected",
        isOnMenu: true,
        isProtected: true,
        icon: protectedIcon
    },
    {
        path: "/callback",
        element: <CallbackPage />,
        title: "Callback",
        isOnMenu: false,
        isProtected: false
    },
    {
        path: "*",
        element: <NotFoundPage />,
        title: "Not Found",
        isOnMenu: false,
        isProtected: false
    }
];