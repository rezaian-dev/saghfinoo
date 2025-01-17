import React, { useState } from "react";
import HeaderContent from "../../../components/HeaderContent/HeaderContent";
import Header from "../../../layouts/Header/Header";
import HousingPlanner from "../../../components/HousingPlanner/HousingPlanner";
import HousingScout from "../../../components/HousingScout/HousingScout";

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
      <main className="home-new-user__main">
        {/* Empowerment Section */}
        <section className="home-new-user__empowerment-section">
          {/* Container for the Housing Planner */}
          <div className="container">
            <HousingPlanner />
          </div>
        </section>
        <section className="home-new-user__type-houses-section">
          <div className="container">
          {/* Housing Scout Section */}
          <HousingScout/>
          </div>
        </section>
      </main>
    </>
  );
}
