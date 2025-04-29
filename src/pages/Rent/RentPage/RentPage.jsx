import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Header from "../../../layouts/Header/Header";
import Footer from "../../../layouts/Footer/Footer";
import { dataBase } from "../../../data/realEstateData";
import useModal from "../../../hooks/useModal";
import { usePropertyFilter } from "../../../hooks/usePropertyFilters";
import SearchBar from "../../../components/InteractiveComponents/Search/SearchBar/SearchBar";
import LeafletMap from "../../../components/InteractiveComponents/Map/LeafletMap/LeafletMap";
import RentalPropertyListing from "../../../components/RealEstateComponents/Listing/RentalPropertyListing/RentalPropertyListing";
import RealEstateFilterMobile from "../../../components/InteractiveComponents/Filters/RealEstateFilterMobile/RealEstateFilterMobile";
import RealEstateFilterDesktop from "../../../components/InteractiveComponents/Filters/RealEstateFilterDesktop/RealEstateFilterDesktop";
import NotFoundView from "../../../components/MiscellaneousComponents/NotFoundView/NotFoundView";
import FillterModal from "../../../components/CoreComponents/Modals/FillterModal/FillterModal";
import PremierRealtorsModal from "../../../components/CoreComponents/Modals/PremierRealtorsModal/PremierRealtorsModal";

export default function RentPage() {
  // 🔄 State Management
  const [agencyId, setAgencyId] = useState("");

  // 🎛️ Custom Hooks
  const { modalState, handleModalClick } = useModal();
  const { filteredProperties, mapLocations } = usePropertyFilter({ dataBase });

  // ⚡ Effects
  useEffect(() => {
    const agencyId = new URLSearchParams(location.search).get("agency-id");
    if (agencyId) setAgencyId(agencyId);
  }, [location.search]);
  

  useEffect(() => {
    document.addEventListener("click", handleModalClick);
    return () => document.removeEventListener("click", handleModalClick);
  }, []);

  return (
    <div className="rent-page">
      {/* 🧭 Navigation Header */}
      <header className="md:pt-10">
        <div className="container">
          <Header />
        </div>
      </header>

      {/* 🏡 Main Content Area */}
      <main>
        {filteredProperties.length > 0 ? (
          <>
            {/* 🔍 Search & Filters Section */}
            <section className="rent-page__location-selection">
              <div className="container">
                <div className="rent-page__location-selection-container">
                  <RealEstateFilterDesktop />
                  <RealEstateFilterMobile />
                  <SearchBar />
                </div>
              </div>
            </section>

            {/* 🗺 Interactive Map Section */}
            <section className="rent-page__map">
              <div className="container">
                <LeafletMap
                  width="w-full"
                  height="h-[350px] md:h-[800px]"
                  maps={mapLocations}
                />
              </div>
            </section>

            {/* 🏘 Property Listings Section */}
            <section className="rent-page__proprty-listing">
              <RentalPropertyListing filteredProperties={filteredProperties} />
            </section>
          </>
        ) : (
          // ❌ No Results Found
          <section className="rent-page__invalid-city">
            <div className="container">
              <NotFoundView
                image="../images/rent/rent-page/404-rent.webp"
                title="ملک با مشخصات مورد نظر پیدا نشد!"
                caption="در صفحه اصلی املاک مشابهی منتظر شما هستند"
                retPage
              />
            </div>
          </section>
        )}
      </main>

      {/* 🦶 Footer Section */}
      <footer className="rent-page__footer">
        <div className="container">
          <Footer />
        </div>
        <p className="footer-copyright-shared">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>

      {/* 🎛️ Modals & Notifications */}
      <ToastContainer />
      <FillterModal isOpenModal={modalState.filter} />
      <PremierRealtorsModal
        isOpenModal={modalState.premier}
        agencyId={agencyId}
      />
    </div>
  );
}
