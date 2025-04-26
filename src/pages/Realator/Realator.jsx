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
import { generateAgentListings } from "../../data/relator";

export default function Realator() {
  const location = useLocation();
  const { id } = useParams();
  const [dataRelator, setDataRelator] = useState([]);
  
  // 🧩 Modal state and handlers from custom hook
  const {
    handleModal,
    isOpenModalPremier,
    isOpenModalFillter,
    isOpenModalReportAd,
    isOpenModalRating,
    setIsOpenModalReportAd,
    setIsOpenModalRating,
    isOpenModalShare,
    setIsOpenModalShare,
  } = useModal();
  
  // 🎯 Add/remove global click event listener for modal handling
  useEffect(() => {
    document.addEventListener("click", handleModal);
    return () => document.removeEventListener("click", handleModal);
  }, []);
  
  // 🔎 Find and set the selected agent based on URL param id
  useEffect(() => {
    const result = agents.filter((item) => item.id === +id);
    setDataRelator(result);
  }, [location.search]);
  
  return (
    <>
      {/* 🏠 Header section with logo and navigation */}
      <header className="realestate__header">
        <div className="container">
          <Header />
        </div>

        <div className={"realestate__logo-circle realator__logo-circle"}>
          <img
            className="image-full"
            src={dataRelator[0]?.image}
            loading="lazy"
            alt="logo"
          />
        </div>
      </header>
      {/* 📑 Main content section - Contains all primary page content */}
      <main>
        <section className="realestate__profile">
          <div className="container">
            <div className="realestate__grid">
              <RealtyIntro realestate={false} dataRelator={dataRelator[0]} />
              <PropertyRatingCard
                realestate={false}
                dataRelator={dataRelator[0]}
              />
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container">
            <RealestateListing
              realestate={false}
              dataRelator={dataRelator[0]}
            />
          </div>
        </section>
        <section className="section-spacing">
          <div className="container">
            <UserReviews />
          </div>
        </section>
      </main>

      {/* 🏢 Footer with site information and copyright */}
      <footer className="realestate__footer">
        <div className="container">
          <Footer />
        </div>
        <p className="footer-copyright-shared">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>
      <PremierRealtorsModal
        isOpenModal={isOpenModalPremier}
        dataRelator={dataRelator[0]}
      />
      <FilterModal isOpenModal={isOpenModalFillter} />
      <ReportAdModal
        isOpenModal={isOpenModalReportAd}
        setIsOpenModal={setIsOpenModalReportAd}
      />
      <RatingModal
        isOpenModal={isOpenModalRating}
        setIsOpenModal={setIsOpenModalRating}
        dataRelator={dataRelator[0]}
      />
      <ShareModal
        isOpenModal={isOpenModalShare}
        setIsOpenModal={setIsOpenModalShare}
      />
      {/* <generateAgentListings/> */}
    </>
  );
}
