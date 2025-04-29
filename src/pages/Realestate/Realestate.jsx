import React, { useEffect, useState } from "react";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import useModal from "../../hooks/useModal";
import RealtyIntro from "../../components/MiscellaneousComponents/RealtyIntro/RealtyIntro";
import PropertyRatingCard from "../../components/RealEstateComponents/Property/PropertyRatingCard/PropertyRatingCard";
import RealEstateAgents from "../../components/SpecializedComponents/RealEstateAgents/RealEstateAgents";
import RealestateListing from "../../components/RealEstateComponents/Listing/RealestateListing/RealestateListing";
import UserReviews from "../../components/UserComponents/Reviews/UserReviews/UserReviews";
import PremierRealtorsModal from "../../components/CoreComponents/Modals/PremierRealtorsModal/PremierRealtorsModal";
import FilterModal from "../../components/CoreComponents/Modals/FillterModal/FillterModal";
import ShareModal from "../../components/CoreComponents/Modals/ShareModal/ShareModal";
import { useLocation, useParams } from "react-router-dom";
import {
  dataCardRealestates,
  dataBase,
  agents,
} from "../../data/realEstateData";
import ReportAdModal from "../../components/CoreComponents/Modals/ReportAdModal/ReportAdModal";
import { ToastContainer } from "react-toastify";

export default function Realestate() {
  // 🧭 Routing and State Management
  const location = useLocation();
  const { id } = useParams();
  const [realestateData, setRealestateData] = useState([]);
  const [propertyListings, setPropertyListings] = useState([]);
  const [realtorList, setRealtorList] = useState([]);
  const [reviewsList, setReviewsList] = useState([]);

  // 🪟 Modal Management
  const { modalState, setModalState, handleModalClick } = useModal();

  // 🌐 Social Media Configuration
  const socialMediaLinks = [
    {
      id: 1,
      link: "t.me/amlaktoosi",
      image: "../../images/socialMedia/telegram.png",
      alt: "Telegram",
    },
    {
      id: 2,
      link: "Toosi_Amlak",
      image: "../../images/socialMedia/linkdin.png",
      alt: "LinkedIn",
    },
    {
      id: 3,
      link: "Toosi_Amlak",
      image: "../../images/socialMedia/instagram.png",
      alt: "Instagram",
    },
    {
      id: 4,
      link: "Toosi_Amlak.com",
      image: "../../images/socialMedia/site.png",
      alt: "Website",
    },
  ];

  // 🔍 Data Initialization Effect
  useEffect(() => {
    const targetAgency = dataCardRealestates.find((item) => item.id === +id);
    const agencyProperties = dataBase.filter(
      (item) => item.advisor.office === targetAgency?.title
    );
    const agencyRealtors = agents.filter(
      (item) => item.agency === targetAgency?.title
    );

    setReviewsList(targetAgency?.reviews || []);
    setRealestateData(targetAgency || {});
    setPropertyListings(agencyProperties);
    setRealtorList(agencyRealtors);
  }, [id, location.search]);

  // 🖱️ Modal Event Listeners
  useEffect(() => {
    document.addEventListener("click", handleModalClick);
    return () => document.removeEventListener("click", handleModalClick);
  }, [handleModalClick]);

  return (
    <>
      {/* 🏢 Page Header with Social Links */}
      <header className="realestate__header">
        <div className="container">
          <Header />
        </div>

        {/* 📱 Social Media Links */}
        <div className="realestate__social-box">
          {socialMediaLinks.map(({ id, link, image, alt }) => (
            <span key={id} className="realestate__social-item">
              <a className="realestate__social-link" href="#">
                {link}
                <img
                  className="realestate__social-icon"
                  src={image}
                  loading="lazy"
                  alt={alt}
                />
              </a>
            </span>
          ))}
        </div>

        {/* 🏷️ Agency Logo */}
        <div className="realestate__logo-circle">
          <img
            className="realestate__logo"
            src={realestateData.image}
            loading="lazy"
            alt={`${realestateData.title}Logo`}
          />
        </div>
      </header>

      {/* 🏡 Main Content Sections */}
      <main>
        {/* 👤 Agency Profile Section */}
        <section className="realestate__profile">
          <div className="container">
            <div className="realestate__grid grid">
              <RealtyIntro realestateData={realestateData} />
              <PropertyRatingCard
                realestateData={realestateData}
                handleModalClick={handleModalClick}
              />
            </div>
          </div>
        </section>

        {/* 👥 Realtors List Section */}
        <section className="section-spacing">
          <div className="container">
            <RealEstateAgents relatorList={realtorList} />
          </div>
        </section>

        {/* 🏘️ Property Listings Section */}
        <section className="section-spacing">
          <div className="container">
            <RealestateListing dataList={propertyListings} />
          </div>
        </section>

        {/* ⭐ User Reviews Section */}
        <section className="section-spacing">
          <div className="container">
            <UserReviews listReviews={reviewsList} />
          </div>
        </section>
      </main>

      {/* 🏁 Page Footer */}
      <footer className="realestate__footer">
        <div className="container">
          <Footer />
        </div>
        <p className="footer-copyright-shared">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>

      {/* 🪟 Modal Windows */}
      <PremierRealtorsModal
        isOpenModal={modalState.premier}
        realestateData={realestateData}
      />
      <FilterModal isOpenModal={modalState.filter} />
      <ShareModal isOpenModal={modalState.share} />
      <ReportAdModal
        isOpenModal={modalState.reportAd}
        setIsOpenModal={setModalState}
      />

      {/* 💬 Notification System */}
      <ToastContainer />
    </>
  );
}
