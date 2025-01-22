import React from "react";
import { lazy } from "react";

// Lazy load components
const HomeNewUser = lazy(() => import("../pages/Landing/HomeNewUser/HomeNewUser"));
const HomeProUser = lazy(() => import("../pages/Landing/HomeProUser/HomeProUser"));

const routes = [
  { path: "/", element: <HomeNewUser /> },
  { path: "/home-pro-user", element: <HomeProUser /> },
];

export default routes;
