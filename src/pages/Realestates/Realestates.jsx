import React from "react";
import Header from "../../layouts/Header/Header";
import ListingHeader from "../../components/RealEstateComponents/Listing/ListingHeader/ListingHeader";
import RealestatesListing from "../../components/RealEstateComponents/Listing/RealestatesListing/RealestatesListing";
import Footer from "../../layouts/Footer/Footer";

export default function Realestates() {
  return (
    <>
      <header className="md:pt-10">
        <div className="container">
          <Header />
        </div>
      </header>

      {/* Main section containing city listing and real estate items */}
      <main>
        <section className="realestates__city-listing-search">
          <div className="container">
            <ListingHeader title={"املاک و مستغلات"} />
          </div>
        </section>
        <section className="realestates__listing">
          <div className="container">
            <RealestatesListing />
          </div>
        </section>
      </main>
      {/* Footer section containing site credits and copyright information */}
      <footer className="realestates__footer">
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
