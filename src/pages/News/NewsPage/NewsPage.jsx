import React from "react";
import Header from "../../../layouts/Header/Header";
import Footer from "../../../layouts/Footer/Footer";
import RealEstateNews from "../../../components/InfoComponents/News/RealEstateNews/RealEstateNews";
import PropertyComparison from "../../../components/RealEstateComponents/Property/PropertyComparison/PropertyComparison";
import ConstructionNews from "../../../components/InfoComponents/News/ConstructionNews/ConstructionNews";
import HomeFinder from "../../../components/RealEstateComponents/Finder/HomeFinder/HomeFinder";
import RentalNews from "../../../components/InfoComponents/News/RentalNews/RentalNews";
import { ToastContainer } from "react-toastify";

export default function NewsPage() {
  return (
    <>
      {/* 🏛️ Page Header with Navigation */}
      <header className="md:pt-10">
        <div className="container">
          <Header />
        </div>
      </header>

      {/* 📰 News & Real Estate Content Sections */}
      <main>
        {/* 🏘️ Main Real Estate News Section */}
        <section className="news-section-spacings">
          <div className="lg:container">
            <RealEstateNews />
          </div>
        </section>

        {/* ⚖️ Property Comparison Tool */}
        <section className="news-section-spacing">
          <div className="container">
            <PropertyComparison />
          </div>
        </section>

        {/* 🏗️ Construction Industry Updates */}
        <section className="news-section-spacing">
          <div className="container">
            <ConstructionNews />
          </div>
        </section>

        {/* 🔍 Home Search Assistance */}
        <section className="news-section-spacing">
          <div className="container">
            <HomeFinder />
          </div>
        </section>

        {/* 🏻 Rental Market Insights */}
        <section className="news-section-spacing">
          <div className="container">
            <RentalNews />
          </div>
        </section>
      </main>

      {/* 🏁 Page Footer with Copyright */}
      <footer className="news-page__footer">
        <div className="container">
          <Footer />
        </div>
        {/* © Copyright Notice (Persian) */}
        <p className="footer-copyright-shared">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>

      {/* 💬 Notification System */}
      <ToastContainer />
    </>
  );
}
