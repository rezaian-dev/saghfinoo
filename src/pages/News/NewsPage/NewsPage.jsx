import React from "react";
import Header from "../../../layouts/Header/Header";
import Footer from "../../../layouts/Footer/Footer";
import RealEstateNews from "../../../components/InfoComponents/News/RealEstateNews/RealEstateNews";
import PropertyComparison from "../../../components/RealEstateComponents/Property/PropertyComparison/PropertyComparison";
import ConstructionNews from "../../../components/InfoComponents/News/ConstructionNews/ConstructionNews";
import HomeFinder from "../../../components/RealEstateComponents/Finder/HomeFinder/HomeFinder";
import RentalNews from "../../../components/InfoComponents/News/RentalNews/RentalNews";

export default function NewsPage() {
  return (
    <>
      {/* 📰 Header Section */}
      <header className="md:pt-10">
        <div className="container">
          <Header />
        </div>
      </header>

      {/* 🏠 Main Content: News and Sections */}
      <main>
        <section className="news-section-spacings">
          <div className="lg:container">
            <RealEstateNews />
          </div>
        </section>
        <section className="news-section-spacing">
          <div className="container">
            <PropertyComparison />
          </div>
        </section>
        <section className="news-section-spacing">
          <div className="container">
            <ConstructionNews />
          </div>
        </section>
        <section className="news-section-spacing">
          <div className="container">
            <HomeFinder />
          </div>
        </section>
        <section className="news-section-spacing">
          <div className="container">
            <RentalNews />
          </div>
        </section>
      </main>

      <footer className="news-page__footer">
        <div className="container">
          <Footer />
        </div>
        {/* 📜 Copyright Notice */}
        <p className="footer-copyright-shared">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>
    </>
  );
}
