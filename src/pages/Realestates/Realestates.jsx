import React from "react";
import Header from "../../layouts/Header/Header";
import ListingHeader from "../../components/ListingHeader/ListingHeader";
import RealestatesListing from "../../components/RealestatesListing/RealestatesListing";
import Footer from "../../layouts/Footer/Footer";

export default function Realestates() {
  return (
    <>
      <header className="realestates__header">
        <div className="container">
          <Header />
        </div>
      </header>

        {/* Main section containing city listing and real estate items */}
      <main>
        <section className="realestates__city-listing-search">
          <div className="container">
            <ListingHeader />
          </div>
        </section>
        <section className="realestates__listing">
          <div className="container">
            <RealestatesListing />
          </div>
        </section>
      </main>

      <footer className="realestates__footer">
        <div className="container">
          <Footer />
        </div>
        {/* Copyright text displayed at the bottom of the footer (visible only on medium and larger screens) */}
        <p className="realestates__footer-copyright">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>
    </>
  );
}

