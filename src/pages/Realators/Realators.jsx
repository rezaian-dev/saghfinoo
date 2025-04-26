import React, { useEffect, useState } from "react";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import ListingHeader from "../../components/RealEstateComponents/Listing/ListingHeader/ListingHeader";
import RealatorsListing from "../../components/RealEstateComponents/Listing/RealatorsListing/RealatorsListing";
import { useLocation } from "react-router-dom";
import { agents } from "../../data/realEstateData";
import { ToastContainer } from "react-toastify";

export default function Realators() {

  const location = useLocation();
  const [result, setResult] = useState([]);
  
  useEffect(() => {
    // 🔍 Extract city names from URL and filter agents based on it
    const cities = new URLSearchParams(location.search).get("city")?.split(",");
    setResult(cities ? agents.filter(agent => cities.includes(agent.city)) : agents);
  }, [location.search]);

  return (
    <>
      {/* 🧭 Header section containing main site navigation */}
      <header className="md:pt-10">
        <div className="container">
          <Header />
        </div>
      </header>

      {/* 🏡 Main content area displaying real estate consultants */}
      <main>
        <section className="realators__city-listing-search">
          <div className="container">
            <ListingHeader title={"مشاورین املاک"} />
          </div>
        </section>
        <section className="realators__listing">
          <div className="container">
            <RealatorsListing result={result} />
          </div>
        </section>
      </main>

      {/* 🔻 Footer section containing site information and credits */}
      <footer className="realators__footer">
        <div className="container">
          <Footer />
        </div>
        {/* ©️ Copyright text visible only on medium and larger screens */}
        <p className="footer-copyright-shared">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>

      {/* 🚀 Toast notifications container */}
      <ToastContainer />
    </>
  );
}
