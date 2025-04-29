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
      {/* 🏗️ Header section with navigation and hero content */}
      <header className="home-new-user__header">
        <div className="container">
          <Header />
          <HeaderContent />
        </div>
      </header>

      {/* 🏠 Main content sections */}
      <main className="home-new-user__main">
        {/* 🗓️ Housing planning tools */}
        <section className="home-new-user__empowerment">
          <div className="container">
            <HousingPlanner />
          </div>
        </section>

        {/* 🔍 Property discovery section */}
        <section className="section-spacing-shared">
          <div className="container">
            <HousingScout />
          </div>
        </section>

        {/* 🛟 Support resources */}
        <section className="section-spacing-shared">
          <div className="container">
            <HousingSupport />
          </div>
        </section>

        {/* 📰 Real estate news */}
        <section className="section-spacing-shared">
          <div className="container">
            <HousingNews />
          </div>
        </section>
      </main>

      {/* 🦶 Footer with copyright */}
      <footer className="home-new-user__footer">
        <div className="container">
          <Footer />
        </div>
        <p className="footer-copyright-shared">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>
    </>
  );
}