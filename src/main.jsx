import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter  } from "react-router-dom";
import App from "./App.jsx";
import "./styles/output.css"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
 
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter >
    <ScrollToTop />
    <App />
    </BrowserRouter>
  </StrictMode>
);
