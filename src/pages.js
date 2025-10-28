import React from "react";
import { AuthenticationGuard } from "./components/authentication-guard";

import { CallbackPage } from "./pages/callback-page";
import { HomePage } from "./pages/home-page";
import { NotFoundPage } from "./pages/not-found-page";
import { TaskListPage } from "./pages/task-list";
import { EisenhowerMatrixPage } from "./pages/eisenhower-matrix";
import { KanbanPage } from "./pages/kanban";
import { SettingsPage } from "./pages/settings";

import home from "./images/icons/home.png";
import list from "./images/icons/bulletList.png";
import matrix from "./images/icons/grid.png";
import kanban from "./images/icons/kanban.png";
import settings from "./images/icons/settings.png";

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
        path: "/tasks",
        element: <AuthenticationGuard component={TaskListPage} />,
        title: "Tasks",
        isOnMenu: true,
        isProtected: true,
        icon: list
    },
    {
        path: "/eisenhower",
        element: <AuthenticationGuard component={EisenhowerMatrixPage} />,
        title: "Eisenhower Matrix",
        isOnMenu: true,
        isProtected: true,
        icon: matrix
    },
    {
        path: "/kanban",
        element: <AuthenticationGuard component={KanbanPage} />,
        title: "Kanban Board",
        isOnMenu: true,
        isProtected: true,
        icon: kanban
    },
    {
        path: "/settings",
        element: <AuthenticationGuard component={SettingsPage} />,
        title: "Settings",
        isOnMenu: false,
        isProtected: true,
        icon: settings
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