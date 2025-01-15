import React, { useState } from "react";
import HeaderContent from "../../../components/HeaderContent/HeaderContent";
import Header from "../../../layouts/Header/Header";

export default function HomeNewUser() {
  return (
    <>
      <header className="home-new-user__header">
        {/* Container for header content */}
        <div className="container">
          {/* Header component */}
          <Header />

          {/* Header content section */}
          <HeaderContent />
        </div>
      </header>
    </>
  );
}
