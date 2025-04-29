import React, { useEffect, useState } from "react";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import useModal from "../../hooks/useModal";
import RealtyIntro from "../../components/MiscellaneousComponents/RealtyIntro/RealtyIntro";
import PropertyRatingCard from "../../components/RealEstateComponents/Property/PropertyRatingCard/PropertyRatingCard";
import RealestateListing from "../../components/RealEstateComponents/Listing/RealestateListing/RealestateListing";
import UserReviews from "../../components/UserComponents/Reviews/UserReviews/UserReviews";
import PremierRealtorsModal from "../../components/CoreComponents/Modals/PremierRealtorsModal/PremierRealtorsModal";
import FilterModal from "../../components/CoreComponents/Modals/FillterModal/FillterModal";
import ReportAdModal from "../../components/CoreComponents/Modals/ReportAdModal/ReportAdModal";
import RatingModal from "../../components/CoreComponents/Modals/RatingModal/RatingModal";
import ShareModal from "../../components/CoreComponents/Modals/ShareModal/ShareModal";
import { agents } from "../../data/realEstateData";
import { useLocation, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function Realator() {
  // 🧭 Routing and State Management
  const location = useLocation();
  const { id } = useParams();
  const [dataRelator, setDataRelator] = useState([]);
  const { modalState, setModalState, handleModalClick } = useModal();

  // 🔍 Fetch Realtor Data
  useEffect(() => {
    const result = agents.filter((item) => item.id === +id);
    setDataRelator(result);
  }, [location.search]);

  // 🖱️ Modal Event Listeners
  useEffect(() => {
    document.addEventListener("click", handleModalClick);
    return () => document.removeEventListener("click", handleModalClick);
  }, []);

  return (
    <>
      {/* 🏢 Page Header with Realtor Logo */}
      <header className="realestate__header">
        <div className="container">
          <Header />
        </div>

        <div className={"realestate__logo-circle realator__logo-circle"}>
          <img
            className="image-full"
            src={dataRelator[0]?.image}
            loading="lazy"
            alt="Realtor profile"
          />
        </div>
      </header>

      {/* 🏡 Main Content Sections */}
      <main>
        {/* 👤 Realtor Profile Section */}
        <section className="realestate__profile">
          <div className="container">
            <div className="realestate__grid">
              <RealtyIntro
                realestate={false}
                dataRelator={dataRelator[0]}
                handleModalClick={handleModalClick}
              />
              <PropertyRatingCard
                realestate={false}
                dataRelator={dataRelator[0]}
                handleModalClick={handleModalClick}
              />
            </div>
          </div>
        </section>

        {/* 🏘️ Property Listings */}
        <section className="section-spacing">
          <div className="container">
            <RealestateListing
              realestate={false}
              dataRelator={dataRelator[0]}
            />
          </div>
        </section>

        {/* ⭐ User Reviews Section */}
        <section className="section-spacing">
          <div className="container">
            <UserReviews />
          </div>
        </section>
      </main>

      {/* 🏁 Page Footer */}
      <footer className="realestate__footer">
        <div className="container">
          <Footer />
        </div>
        {/* © Copyright Notice (Persian) */}
        <p className="footer-copyright-shared">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>

      {/* 🪟 Modal Components */}
      <PremierRealtorsModal
        isOpenModal={modalState.premier}
        dataRelator={dataRelator[0]}
      />
      <FilterModal isOpenModal={modalState.filter} />
      <ReportAdModal
        isOpenModal={modalState.reportAd}
        setIsOpenModal={setModalState}
      />
      <RatingModal
        isOpenModal={modalState.rating}
        setIsOpenModal={setModalState}
        dataRelator={dataRelator[0]}
      />
      <ShareModal isOpenModal={modalState.share} />
      
      {/* 💬 Notification System */}
      <ToastContainer />
    </>
  );
}
