import React from "react";
import { lazy } from "react";

// Lazy load components
const HomeNewUser = lazy(() => import("../pages/Landing/HomeNewUser/HomeNewUser"));
const HomeProUser = lazy(() => import("../pages/Landing/HomeProUser/HomeProUser"));
const RentPage = lazy(() => import("../pages/Rent/RentPage/RentPage"));

const routes = [
  { path: "/", element: <HomeNewUser /> },
  { path: "/home-pro-user", element: <HomeProUser /> },
  { path: "/rent", element: <RentPage /> },
];

export default routes;
