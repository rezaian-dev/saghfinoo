import React from "react";
import { lazy } from "react";

// 🏗️ Lazy-loaded components
const HomeNewUser = lazy(() => import("../pages/Landing/HomeNewUser/HomeNewUser"));
const HomeProUser = lazy(() => import("../pages/Landing/HomeProUser/HomeProUser"));
const RentPage = lazy(() => import("../pages/Rent/RentPage/RentPage"));
const HomeDetails = lazy(() => import("../pages/Rent/HomeDetails/HomeDetails"));
const Realestates = lazy(() => import("../pages/Realestates/Realestates"));
const Realators = lazy(() => import("../pages/Realators/Realators"));
const Realestate = lazy(() => import("../pages/Realestate/Realestate"));
const Realator = lazy(() => import("../pages/Realator/Realator"));
const UserProfilePage = lazy(() => import("../pages/UserProfile/UserProfilePage/UserProfilePage"));
const MyAd = lazy(() => import("../pages/UserProfile/MyAd/MyAd"));
const SaveAd = lazy(() => import("../pages/UserProfile/SaveAd/SaveAd"));
const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("../pages/ContactUs/ContactUs"));
const NewsPage = lazy(() => import("../pages/News/NewsPage/NewsPage"));
const NewsDetails = lazy(() => import("../pages/News/NewsDetails/NewsDetails"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const LocationForm = lazy(() => import("../pages/RegisterAd/step1_Location/LocationForm"));
const PropertyTypeForm = lazy(() => import("../pages/RegisterAd/step2_PropertyType/PropertyTypeForm"));
const DimensionsForm = lazy(() => import("../pages/RegisterAd/step3_Dimensions/DimensionsForm"));
const FacilitiesForm = lazy(() => import("../pages/RegisterAd/step4_Facilities/FacilitiesForm"));
const DescriptionForm = lazy(() => import("../pages/RegisterAd/step5_Description/DescriptionForm"));
const MediaUploader = lazy(() => import("../pages/RegisterAd/step6_Media/MediaUploader"));
const AdSuccess = lazy(() => import("../pages/RegisterAd/step7_Success/AdSuccess"));
const ProtectedRoute = lazy(() => import("./ProtectedRoute"));

// 🗺️ Application routes configuration
const routes = [
  // 🌍 Public routes
  { path: "/", element: <HomeNewUser /> },
  { path: "/home-pro-user", element: <HomeProUser /> },
  { path: "/rent", element: <RentPage /> },
  { path: "/buy", element: <RentPage /> }, // Note: Same component as rent
  { path: "/:mode/home-details/:id", element: <HomeDetails /> },
  { path: "/realestates", element: <Realestates /> },
  { path: "/realators", element: <Realators /> },
  { path: "/realestate/:id", element: <Realestate /> },
  { path: "/realator/:id", element: <Realator /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/news", element: <NewsPage /> },
  { path: "/news/news-details", element: <NewsDetails /> },

  // 🔒 Protected user profile routes
  {
    path: "/profile",
    element: <ProtectedRoute><UserProfilePage /></ProtectedRoute>
  },
  {
    path: "/profile/my-ads",
    element: <ProtectedRoute><MyAd /></ProtectedRoute>
  },
  {
    path: "/profile/saved-ads",
    element: <ProtectedRoute><SaveAd /></ProtectedRoute>
  },

  // 📝 Protected ad registration steps
  {
    path: "/register/1",
    element: <ProtectedRoute><LocationForm /></ProtectedRoute>
  },
  {
    path: "/register/2",
    element: <ProtectedRoute><PropertyTypeForm /></ProtectedRoute>
  },
  {
    path: "/register/3",
    element: <ProtectedRoute><DimensionsForm /></ProtectedRoute>
  },
  {
    path: "/register/4",
    element: <ProtectedRoute><FacilitiesForm /></ProtectedRoute>
  },
  {
    path: "/register/5",
    element: <ProtectedRoute><DescriptionForm /></ProtectedRoute>
  },
  {
    path: "/register/6",
    element: <ProtectedRoute><MediaUploader /></ProtectedRoute>
  },
  {
    path: "/register/7",
    element: <ProtectedRoute><AdSuccess /></ProtectedRoute>
  },

  // ❌ 404 route (must be last)
  { path: "/*", element: <NotFoundPage /> },
];

export default routes;
