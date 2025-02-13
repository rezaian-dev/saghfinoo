import React from "react";
import Header from "../../../layouts/Header/Header";
import SearchBar from "../../../components/SearchBar/SearchBar";
import LeafletMap from "../../../components/LeafletMap/LeafletMap";
import RentalPropertyListing from "../../../components/RentalPropertyListing/RentalPropertyListing";
import RealEstateFilterMobile from "../../../components/RealEstateFilterMobile/RealEstateFilterMobile";
import RealEstateFilterDesktop from "../../../components/RealEstateFilterDesktop/RealEstateFilterDesktop";



export default function RentPage() {
  return (
    <>
      {/* Header section */}
      <header className="rent-page__header">
        <div className="container">
          <Header />
        </div>
      </header>

      <main>
        <section className="rent-page__location-selection">
          <div className="container">
            <div className="rent-page__location-selection-container">
            <RealEstateFilterDesktop/>
              <SearchBar />
            </div>
          </div>
        </section>
        <section className="rent-page__map ">
          <div className="container">
            <LeafletMap />
          </div>
        </section>
        <section className="rent-page__proprty-listing">
          <div className="container">
            <RentalPropertyListing />
            <RealEstateFilterMobile/>
          </div>
        </section>
      </main>
    </>
  );
}
