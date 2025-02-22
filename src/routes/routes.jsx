import React from "react";
import { lazy } from "react";

// Lazy load components
const HomeNewUser = lazy(() => import("../pages/Landing/HomeNewUser/HomeNewUser"));
const HomeProUser = lazy(() => import("../pages/Landing/HomeProUser/HomeProUser"));
const RentPage = lazy(() => import("../pages/Rent/RentPage/RentPage"));
const HomeDetails = lazy(() => import("../pages/Rent/HomeDetails/HomeDetails"));
const Realestates = lazy(() => import("../pages/Realestates/Realestates"));
const Realators = lazy(() => import("../pages/Realators/Realators"));
const Realestate = lazy(() => import("../pages/Realestate/Realestate"));


const routes = [
  { path: "/", element: <HomeNewUser /> },
  { path: "/home-pro-user", element: <HomeProUser /> },
  { path: "/rent", element: <RentPage /> },
  { path: "/home-details", element: <HomeDetails /> },
  { path: "/realestates", element: <Realestates /> },
  { path: "/realators", element: <Realators /> },
  { path: "/realestate", element: <Realestate /> },
];

export default routes;
