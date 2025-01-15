import React, { useState } from "react";
import HeaderContent from "../../../components/HeaderContent/HeaderContent";
import Header from "../../../layouts/Header/Header";

export default function HomeNewUser() {
  return (
    <>
      <header className="header bg-home-desktop mt-[58px] md:mt-0 pt-7 pb-3 md:pb-0 bg-no-repeat bg-cover bg-center h-[215px] md:h-[690px] md:pt-10">
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
