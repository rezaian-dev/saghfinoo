import React, { useEffect } from "react";
import Header from "../../../layouts/Header/Header";
import Footer from "../../../layouts/Footer/Footer";
import useModal from "../../../hooks/useModal";
import HeaderContent from "../../../components/LayoutComponents/Header/HeaderContent/HeaderContent";
import NewRentalListings from "../../../components/RealEstateComponents/Listing/NewRentalListings/NewRentalListings";
import SaghfinooOpportunity from "../../../components/SpecializedComponents/Opportunity/SaghfinooOpportunity/SaghfinooOpportunity";
import SuggestedSearches from "../../../components/InteractiveComponents/Search/SuggestedSearches/SuggestedSearches";
import PremierRealtors from "../../../components/SpecializedComponents/Realtors/PremierRealtors/PremierRealtors";
import TopConsultants from "../../../components/SpecializedComponents/Consultants/TopConsultants/TopConsultants";
import PremierRealtorsModal from "../../../components/CoreComponents/Modals/PremierRealtorsModal/PremierRealtorsModal";

export default function HomeProUser() {
  const { handleModal, isOpenModalPremier } = useModal();

  useEffect(() => {
    document.addEventListener("click", handleModal);
    return () => document.removeEventListener("click", handleModal);
  }, [isOpenModalPremier]);

  return (
    <>
      {/* Header section with Header and HeaderContent components */}
      <header className="home-pro-user__header">
        <div className="container">
          <Header />
          <HeaderContent />
        </div>
      </header>
      <main>
        {/* New rental listings section */}
        <section className="home-pro-user__new-houses">
          <div className="container">
            <NewRentalListings />
          </div>
        </section>
        {/* Saghfinoo Opportunity Section */}
        <section className="section-spacing-shared">
          <div className="container">
            <SaghfinooOpportunity />
          </div>
        </section>
        {/* Suggested searches section */}
        <section className="section-spacing-shared">
          <div className="container">
            <SuggestedSearches />
          </div>
        </section>
        {/* Premier Realtors section */}
        <section className="section-spacing-shared">
          <div className="container">
            <PremierRealtors text={"املاک برتر تهران"} />
          </div>
        </section>
        {/* Top Consultants section */}
        <section className="section-spacing-shared">
          <div className="container">
            <TopConsultants />
          </div>
        </section>
      </main>
      {/* Footer container that holds the Footer component */}
      <footer className="home-pro-user__footer">
        <div className="container">
          <Footer />
        </div>
        {/* Copyright text displayed at the bottom of the footer (visible only on medium and larger screens) */}
        <p className="footer-copyright-shared">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>
      <PremierRealtorsModal isOpenModal={isOpenModalPremier} />
    </>
  );
}
