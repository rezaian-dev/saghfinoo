import React from "react";
import HeaderContent from "../../../components/HeaderContent/HeaderContent";
import Header from "../../../layouts/Header/Header";
import HousingPlanner from "../../../components/HousingPlanner/HousingPlanner";
import HousingScout from "../../../components/HousingScout/HousingScout";
import HousingSupport from "../../../components/HousingSupport/HousingSupport";
import HousingNews from "../../../components/HousingNews/HousingNews";

export default function HomeNewUser() {
  return (
    <>
      {/* Header component & Header content section */}
      <header className="home-new-user__header">
        <div className="container">
          <Header />
          <HeaderContent />
        </div>
      </header>
      <main className="home-new-user__main">
        {/* Empowerment Section */}
        <section className="home-new-user__empowerment-section">
          <div className="container">
            <HousingPlanner />
          </div>
        </section>
        {/* Type of Houses Section */}
        <section className="home-new-user__type-houses-section">
          <div className="container">
            <HousingScout />
          </div>
        </section>
        {/* Housing Support Section */}
        <section className="home-new-user__support-section">
          <div className="container">
            <HousingSupport />
          </div>
        </section>
        {/* Housing News Section */}
        <section className="home-new-user__news-section">
          <div className="container">
          <HousingNews/>
          </div>
        </section>
      </main>
    </>
  );
}
