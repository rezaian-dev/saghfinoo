import React, { useEffect, useState } from "react";
import Header from "../../layouts/Header/Header";
import ListingHeader from "../../components/RealEstateComponents/Listing/ListingHeader/ListingHeader";
import RealestatesListing from "../../components/RealEstateComponents/Listing/RealestatesListing/RealestatesListing";
import Footer from "../../layouts/Footer/Footer";
import { useLocation, useSearchParams } from "react-router-dom";
import { dataCardRealestates } from "../../data/realEstateData";
import { ToastContainer } from "react-toastify";

export default function Realestates() {
  // 🧭 Routing & filtering logic
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [listRealestates, setListRealestates] = useState([]);

  useEffect(() => {
    const cities = searchParams.get("city");
    // 🏙️ Filter properties by city if specified in URL
    setListRealestates(
      cities
        ? dataCardRealestates.filter((item) => cities.includes(item.city))
        : dataCardRealestates
    );
  }, [location.search]);

  return (
    <>
      {/* 🏡 Header Section */}
      <header className="md:pt-10">
        <div className="container">
          <Header />
        </div>
      </header>
      {/* 🏢 Main Content */}
      <main>
        <section className="realestates__city-listing-search">
          <div className="container">
            <ListingHeader title={"املاک و مستغلات"} />{" "}
            {/* 🏘️ Property listings header */}
          </div>
        </section>
        <section className="realestates__listing">
          <div className="container">
            <RealestatesListing listRealestates={listRealestates} />{" "}
            {/* 🏠 Property cards */}
          </div>
        </section>
      </main>
      {/* ©️ Footer Section */}
      <footer className="realestates__footer">
        <div className="container">
          <Footer />
        </div>
        <p className="footer-copyright-shared">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>
      <ToastContainer /> {/* 💬 Notification system */}
    </>
  );
}
