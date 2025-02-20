import React from "react";
import Header from "../../../layouts/Header/Header";
import SearchBar from "../../../components/SearchBar/SearchBar";
import LeafletMap from "../../../components/LeafletMap/LeafletMap";
import RentalPropertyListing from "../../../components/RentalPropertyListing/RentalPropertyListing";
import RealEstateFilterMobile from "../../../components/RealEstateFilterMobile/RealEstateFilterMobile";
import RealEstateFilterDesktop from "../../../components/RealEstateFilterDesktop/RealEstateFilterDesktop";
import Footer from "../../../layouts/Footer/Footer";

export default function RentPage() {
  return (
    <>
      {/* Header with navigation */}
      <header className="rent-page__header">
        <div className="container">
          <Header />
        </div>
      </header>
      {/* Main content including location selection, map, and property listings */}
      <main>
        <section className="rent-page__location-selection">
          <div className="container">
            <div className="rent-page__location-selection-container">
              <RealEstateFilterDesktop />
              <RealEstateFilterMobile />
              <SearchBar />
            </div>
          </div>
        </section>
        <section className="rent-page__map">
          <div className="container">
            <LeafletMap width={"w-full"} height={"h-[350px] md:h-[800px]"} />
          </div>
        </section>
        <section className="rent-page__proprty-listing">
          <RentalPropertyListing />
        </section>
      </main>

      <footer className="rent-page__footer">
        <div className="container">
          <Footer />
        </div>
        {/* Copyright text displayed at the bottom of the footer (visible only on medium and larger screens) */}
        <p className="rent-page__footer-copyright">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>
    </>
  );
}
