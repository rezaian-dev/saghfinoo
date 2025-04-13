import React from "react";
import HeaderContent from "../../../components/HeaderContent/HeaderContent";
import Header from "../../../layouts/Header/Header";
import HousingPlanner from "../../../components/HousingPlanner/HousingPlanner";
import HousingScout from "../../../components/HousingScout/HousingScout";
import HousingSupport from "../../../components/HousingSupport/HousingSupport";
import HousingNews from "../../../components/HousingNews/HousingNews";
import Footer from "../../../layouts/Footer/Footer";

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
      {/* Main section of the page which contains all the core content */}
      <main className="home-new-user__main">
        {/* Empowerment Section */}
        <section className="home-new-user__empowerment">
          <div className="container">
            <HousingPlanner />
          </div>
        </section>
        {/* Type of Houses Section */}
        <section className="section-spacing-shared">
          <div className="container">
            <HousingScout />
          </div>
        </section>
        {/* Housing Support Section */}
        <section className="section-spacing-shared">
          <div className="container">
            <HousingSupport />
          </div>
        </section>
        {/* Housing News Section */}
        <section className="section-spacing-shared">
          <div className="container">
            <HousingNews />
          </div>
        </section>
      </main>
      {/* Footer container that holds the Footer component */}
      <footer className="home-new-user__footer">
        <div className="container">
          <Footer />
        </div>
        {/* Copyright text displayed at the bottom of the footer (visible only on medium and larger screens) */}
        <p className="footer-copyright-shared">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>
    </>
  );
}
