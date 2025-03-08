import React from "react";
import Header from "../../../layouts/Header/Header";
import RealEstateNews from "../../../components/RealEstateNews/RealEstateNews";
import PropertyComparison from "../../../components/PropertyComparison/PropertyComparison";
import ConstructionNews from "../../../components/ConstructionNews/ConstructionNews";
import HomeFinder from "../../../components/HomeFinder/HomeFinder";
import RentalNews from "../../../components/RentalNews/RentalNews";
import Footer from "../../../layouts/Footer/Footer";

export default function NewsPage() {
  return (
    <>
      {/* 📰 Header Section */}
      <header className="news-page__header">
        <div className="container">
          <Header />
        </div>
      </header>

        {/* 🏠 Main Content: News and Sections */}
      <main>
        <section className="news-page__real-estate-news">
          <div className="lg:container">
            <RealEstateNews />
          </div>
        </section>
        <section className="news-page__housing">
          <div className="container">
            <PropertyComparison />
          </div>
        </section>
        <section className="news-page__construction">
          <div className="container">
            <ConstructionNews />
          </div>
        </section>
        <section className="news-page__home-support">
          <div className="container">
            <HomeFinder />
          </div>
        </section>
        <section className="news-page__rent">
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
        <p className="rent-page__footer-copyright">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>
    </>
  );
}
