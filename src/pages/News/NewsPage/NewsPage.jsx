import React from "react";
import Header from "../../../layouts/Header/Header";
import RealEstateNews from "../../../components/RealEstateNews/RealEstateNews";
import PropertyComparison from "../../../components/PropertyComparison/PropertyComparison";

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
          <RealEstateNews/>
          </div>
        </section>
        <section className="news-page__housing">
          <div className="container">
          <PropertyComparison/>
          </div>
        </section>
      </main>
    </>
  );
}
