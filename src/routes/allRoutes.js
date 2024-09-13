import React from "react";
import { Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register"
import Home from "../pages";
import Detail from "../pages/Detail";
import List from "../pages/List";
import Cart from "../pages/Cart"
import Checkout from "../pages/Checkout";

const publicRoutes = [
    { path: "/checkout", component: <Checkout /> },
    { path: "/cart", component: <Cart /> },
    { path: "/list", component: <List /> },
    { path: "/detail/:id", component: <Detail /> },
    { path: "/home", component: <Home /> },
    { path: "/login", component: <Login /> },
    { path: "/register", component: <Register /> },
    {
        path: "/",
        exact: true,
        component: <Navigate to='/login' />,
    },
    { path: "*", component: <Navigate to='/login' /> },
];

export { publicRoutes };

