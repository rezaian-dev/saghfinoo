import React, { useEffect, useState } from "react";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import ListingHeader from "../../components/RealEstateComponents/Listing/ListingHeader/ListingHeader";
import RealatorsListing from "../../components/RealEstateComponents/Listing/RealatorsListing/RealatorsListing";
import { useLocation } from "react-router-dom";
import { agents } from "../../data/realEstateData";
import { ToastContainer } from "react-toastify";

export default function Realators() {
  // 🧭 Routing and State Management
  const location = useLocation();
  const [filteredAgents, setFilteredAgents] = useState([]);

  // 🔍 Filter agents based on URL city parameters
  useEffect(() => {
    const cityParams = new URLSearchParams(location.search).get("city")?.split(",");
    setFilteredAgents(
      cityParams 
        ? agents.filter(agent => cityParams.includes(agent.city))
        : agents
    );
  }, [location.search]);

  return (
    <>
      {/* 🏢 Page Header with Navigation */}
      <header className="md:pt-10">
        <div className="container">
          <Header />
        </div>
      </header>

      {/* 🏡 Main Content Area */}
      <main>
        {/* 🔎 Listing Search Header */}
        <section className="realators__city-listing-search">
          <div className="container">
            <ListingHeader title={"مشاورین املاک"} />
          </div>
        </section>

        {/* 👥 Realtors Listing Section */}
        <section className="realators__listing">
          <div className="container">
            <RealatorsListing result={filteredAgents} />
          </div>
        </section>
      </main>

      {/* 🏁 Page Footer with Copyright */}
      <footer className="realators__footer">
        <div className="container">
          <Footer />
        </div>
        {/* ©️ Copyright Notice (Persian) */}
        <p className="footer-copyright-shared">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>

      {/* 💬 Notification System */}
      <ToastContainer />
    </>
  );
}
