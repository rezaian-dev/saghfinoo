import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter  } from "react-router-dom";
import App from "./App.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import "../src/styles/final.css"
 
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter >
    <ScrollToTop />
    <App />
    </BrowserRouter>
  </StrictMode>
);
