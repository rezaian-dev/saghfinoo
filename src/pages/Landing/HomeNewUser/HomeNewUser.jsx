import React from "react";
import Header from "../../../layouts/Header/Header";
import Footer from "../../../layouts/Footer/Footer";
import HeaderContent from "../../../components/LayoutComponents/Header/HeaderContent/HeaderContent";
import HousingPlanner from "../../../components/RealEstateComponents/Housing/HousingPlanner/HousingPlanner";
import HousingScout from "../../../components/RealEstateComponents/Housing/HousingScout/HousingScout";
import HousingSupport from "../../../components/RealEstateComponents/Housing/HousingSupport/HousingSupport";
import HousingNews from "../../../components/InfoComponents/News/HousingNews/HousingNews";

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
