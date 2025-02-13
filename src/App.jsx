import React from "react";
import routes from "./routes/routes";
import { useRoutes } from "react-router-dom";
import FilterProvider from "./context/FilterContext";

export default function App() {
  const router = useRoutes(routes);
  
  return (
    <>
      <FilterProvider>
        {router}
      </FilterProvider>
    </>
  );
}