import React, { useEffect } from "react";
import Header from "../../../layouts/Header/Header";
import Footer from "../../../layouts/Footer/Footer";
import { dataCard } from "../../../data/realEstateData";
import useModal from "../../../hooks/useModal";
import SearchBar from "../../../components/InteractiveComponents/Search/SearchBar/SearchBar";
import LeafletMap from "../../../components/InteractiveComponents/Map/LeafletMap/LeafletMap";
import RentalPropertyListing from "../../../components/RealEstateComponents/Listing/RentalPropertyListing/RentalPropertyListing";
import RealEstateFilterMobile from "../../../components/InteractiveComponents/Filters/RealEstateFilterMobile/RealEstateFilterMobile";
import RealEstateFilterDesktop from "../../../components/InteractiveComponents/Filters/RealEstateFilterDesktop/RealEstateFilterDesktop";
import NotFoundView from "../../../components/MiscellaneousComponents/NotFoundView/NotFoundView";
import FillterModal from "../../../components/CoreComponents/Modals/FillterModal/FillterModal";
import PremierRealtorsModal from "../../../components/CoreComponents/Modals/PremierRealtorsModal/PremierRealtorsModal";

export default function RentPage() {
  const dataBaseCity = dataCard.filter((item) => item.label === "Tehran"); // Filtered data by city 🏙️

  const { handleModal, isOpenModalFillter, isOpenModalPremier } = useModal();

  useEffect(() => {
    document.addEventListener("click", handleModal);
    return () => document.removeEventListener("click", handleModal);
  }, [isOpenModalFillter, isOpenModalPremier]);

  return (
    <>
      {/* Header with navigation bar 🧭 */}
      <header className="md:pt-10">
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
        <p className="footer-copyright-shared">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>
      <FillterModal isOpenModal={isOpenModalFillter} />
      <PremierRealtorsModal isOpenModal={isOpenModalPremier} />
    </>
  );
}
