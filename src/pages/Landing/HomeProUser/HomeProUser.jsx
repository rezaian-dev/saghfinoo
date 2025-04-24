import React, { useEffect, useState } from "react";
import useModal from "../../../hooks/useModal";
import Header from "../../../layouts/Header/Header";
import Footer from "../../../layouts/Footer/Footer";
import HeaderContent from "../../../components/LayoutComponents/Header/HeaderContent/HeaderContent";
import NewRentalListings from "../../../components/RealEstateComponents/Listing/NewRentalListings/NewRentalListings";
import SaghfinooOpportunity from "../../../components/SpecializedComponents/Opportunity/SaghfinooOpportunity/SaghfinooOpportunity";
import SuggestedSearches from "../../../components/InteractiveComponents/Search/SuggestedSearches/SuggestedSearches";
import PremierRealtors from "../../../components/SpecializedComponents/Realtors/PremierRealtors/PremierRealtors";
import TopConsultants from "../../../components/SpecializedComponents/Consultants/TopConsultants/TopConsultants";
import PremierRealtorsModal from "../../../components/CoreComponents/Modals/PremierRealtorsModal/PremierRealtorsModal";

/**
 * 🏠 HomeProUser - The main landing page for professional users  
 * 🏡 Features rental listings, opportunities, searches, and realtor information  
 */
export default function HomeProUser() {
  // 🪟 Modal handling
  const { handleModal, isOpenModalPremier } = useModal();
  const [agencyId, setAgencyId] = useState("");

  // 🖱️ Setup modal click handler
  useEffect(() => {
    document.addEventListener("click", handleModal);
    return () => document.removeEventListener("click", handleModal);
  }, []);

  // 🔍 Check URL for agency ID parameter
  useEffect(() => {
    const url = new URLSearchParams(location.search);
    if (url.get("agency-id")) {
      setAgencyId(url.get("agency-id"));
    }
  }, [location.search]);

  return (
    <>
      {/* 🏢 Header Section */}
      <header className="home-pro-user__header">
        <div className="container">
          <Header />
          <HeaderContent />
        </div>
      </header>

      {/* 🏠 Main Content */}
      <main>
        {/* 🏘️ New Rental Listings */}
        <section className="home-pro-user__new-houses">
          <div className="container">
            <NewRentalListings />
          </div>
        </section>

        {/* 🎯 Saghfinoo Opportunity */}
        <section className="section-spacing-shared">
          <div className="container">
            <SaghfinooOpportunity />
          </div>
        </section>

        {/* 🔍 Suggested Searches */}
        <section className="section-spacing-shared">
          <div className="container">
            <SuggestedSearches />
          </div>
        </section>

        {/* 🏆 Premier Realtors */}
        <section className="section-spacing-shared">
          <div className="container">
            <PremierRealtors text={"املاک برتر تهران"} />
          </div>
        </section>

        {/* 👔 Top Consultants */}
        <section className="section-spacing-shared">
          <div className="container">
            <TopConsultants />
          </div>
        </section>
      </main>

      {/* 🦶 Footer Section */}
      <footer className="home-pro-user__footer">
        <div className="container">
          <Footer />
        </div>
        <p className="footer-copyright-shared">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>

      {/* 🪟 Premier Realtors Modal */}
      <PremierRealtorsModal 
        isOpenModal={isOpenModalPremier} 
        agencyId={agencyId} 
      />
    </>
  );
}
