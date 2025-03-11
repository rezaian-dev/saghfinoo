import React from "react";
import Header from "../../../layouts/Header/Header";
import SearchBar from "../../../components/SearchBar/SearchBar";
import LeafletMap from "../../../components/LeafletMap/LeafletMap";
import RentalPropertyListing from "../../../components/RentalPropertyListing/RentalPropertyListing";
import RealEstateFilterMobile from "../../../components/RealEstateFilterMobile/RealEstateFilterMobile";
import RealEstateFilterDesktop from "../../../components/RealEstateFilterDesktop/RealEstateFilterDesktop";
import Footer from "../../../layouts/Footer/Footer";
import { dataCard } from "../../../data/realEstateData";
import NotFoundView from "../../../components/NotFoundView/NotFoundView";

export default function RentPage() {
  const dataBaseCity = dataCard.filter((item) => item.label === "Tehran"); // Filtered data by city 🏙️
  
  return (
    <>
      {/* Header with navigation bar 🧭 */}
      <header className="rent-page__header">
        <div className="container">
          <Header />
        </div>
      </header>

       {/* Main content area, handles city data display, filters, map, and property listings 🏙️ */}
      <main>
        {dataBaseCity.length ? ( // Check if there is data for the city ✅
          <>
            <section className="rent-page__location-selection">
              <div className="container">
                <div className="rent-page__location-selection-container">
                  <RealEstateFilterDesktop /> {/* Filter for desktop 🖥️ */}
                  <RealEstateFilterMobile /> {/* Filter for mobile 📱 */}
                  <SearchBar /> {/* Search bar 🔍 */}
                </div>
              </div>
            </section>

            <section className="rent-page__map">
              <div className="container">
                <LeafletMap
                  width={"w-full"}
                  height={"h-[350px] md:h-[800px]"}
                />
              </div>
            </section>

            <section className="rent-page__proprty-listing">
              <RentalPropertyListing />
            </section>
          </>
        ) : (
          <section className="rent-page__invalid-city">
            <div className="container">
              <NotFoundView
                image={"../images/rent/rent-page/404-rent.webp"}
                title={"ملک با مشخصات مورد نظر پیدا نشد!"}
                caption={"در صفحه اصلی املاک مشابهی منتظر شما هستند"}
                retPage={true}
              />
            </div>
          </section>
        )}
      </main>

      {/* Footer section with site details 🦶 */}
      <footer className="rent-page__footer">
        <div className="container">
          <Footer />
        </div>

        {/* Copyright text visible on medium and larger screens 💼 */}
        <p className="rent-page__footer-copyright">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>
    </>
  );
}
