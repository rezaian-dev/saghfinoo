import React from "react";
import Header from "../../../layouts/Header/Header";
import RealEstateNews from "../../../components/RealEstateNews/RealEstateNews";
import PropertyComparison from "../../../components/PropertyComparison/PropertyComparison";
import ConstructionNews from "../../../components/ConstructionNews/ConstructionNews";
import HomeFinder from "../../../components/HomeFinder/HomeFinder";

export default function NewsPage() {
  return (
    <>
      <header className="news-page__header">
        <div className="container">
          <Header />
        </div>
      </header>
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
      </main>
    </>
  );
}
