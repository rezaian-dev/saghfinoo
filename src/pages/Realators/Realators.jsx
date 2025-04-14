import React from "react";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import ListingHeader from "../../components/RealEstateComponents/Listing/ListingHeader/ListingHeader";
import RealatorsListing from "../../components/RealEstateComponents/Listing/RealatorsListing/RealatorsListing";

export default function Realators() {
  return (
    <>
      {/* Header section containing the main site navigation */}
      <header className="md:pt-10">
        <div className="container">
          <Header />
        </div>
      </header>

      {/* Main content area displaying real estate consultants and related listings */}
      <main>
        <section className="realators__city-listing-search">
          <div className="container">
            <ListingHeader title={"مشاورین املاک"} />
          </div>
        </section>
        <section className="realators__listing">
          <div className="container">
            <RealatorsListing />
          </div>
        </section>
      </main>

      {/* Footer section containing site credits and copyright information */}
      <footer className="realators__footer">
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
