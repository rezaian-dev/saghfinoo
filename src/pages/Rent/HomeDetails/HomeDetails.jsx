import React, { useEffect } from "react";
import Header from "../../../layouts/Header/Header";
import Footer from "../../../layouts/Footer/Footer";
import useModal from "../../../hooks/useModal";
import PropertyImageSliderDesktop from "../../../components/RealEstateComponents/Property/PropertyImageSliderDesktop/PropertyImageSliderDesktop";
import PropertyImageSliderMobile from "../../../components/RealEstateComponents/Property/PropertyImageSliderMobile/PropertyImageSliderMobile";
import PropertyOverview from "../../../components/RealEstateComponents/Property/PropertyOverview/PropertyOverview";
import AgentCard from "../../../components/InfoComponents/Cards/AgentCard/AgentCard";
import PropertyAmenities from "../../../components/RealEstateComponents/Property/PropertyAmenities/PropertyAmenities";
import PropertyDescription from "../../../components/RealEstateComponents/Property/PropertyDescription/PropertyDescription";
import PropertyLocation from "../../../components/RealEstateComponents/Property/PropertyLocation/PropertyLocation";
import SimilarListings from "../../../components/RealEstateComponents/Listing/SimilarListings/SimilarListings";
import AgentCardModal from "../../../components/CoreComponents/Modals/AgentCardModal/AgentCardModal";
import ReportAdModal from "../../../components/CoreComponents/Modals/ReportAdModal/ReportAdModal";
import ShareModal from "../../../components/CoreComponents/Modals/ShareModal/ShareModal";
import { useParams } from "react-router-dom";
import { dataBase } from "../../../data/realEstateData";


export default function HomeDetails() {
  const {
    handleModal,
    isOpenModalAgentCard,
    isOpenModalReportAd,
    setIsOpenModalReportAd,
    setIsOpenModalAgentCard,
    isOpenModalShare,
    setIsOpenModalShare,
  } = useModal();

  const {id} = useParams();

  const adTarget = dataBase.filter(city => city.id == id);

  useEffect(() => {
    document.addEventListener("click", handleModal);
    return () => document.removeEventListener("click", handleModal);
  }, []);
  return (
    <>
      {/* Header with image sliders (desktop and mobile) */}
      <header className="md:pt-10">
        <div className="container">
          <Header />
          <PropertyImageSliderDesktop images={adTarget[0].images}  />
        </div>
        <PropertyImageSliderMobile images={adTarget[0].images} />
      </header>

      {/* Main content section containing property details, amenities, location, and similar listings */}
      <main>
        <section className="home-section-spacing">
          <div className="md:container">
            <div className="home-details__grid home-details__grid--info">
              <PropertyOverview {...adTarget[0]} />
              <AgentCard {...adTarget[0]} />
            </div>
          </div>
        </section>

        <section className="home-section-spacing">
          <div className="container">
            <div className="home-details__grid home-details__grid--feature">
              <PropertyAmenities {...adTarget[0]} />
            </div>
          </div>
        </section>

        <section className="home-section-spacing">
          <div className="container">
            <div className="home-details__grid home-details__grid--description">
              <PropertyDescription {...adTarget[0]} />
            </div>
          </div>
        </section>

        <section className="home-section-spacing">
          <div className="container">
            <div className="home-details__grid home-details__grid--location">
              <PropertyLocation {...adTarget[0]} />
            </div>
          </div>
        </section>

        <section className="home-details__similar-ads">
          <div className="container">
            <SimilarListings {...adTarget[0]} />
          </div>
        </section>
      </main>

      <footer className="home-details__footer">
        <div className="container">
          <Footer />
        </div>
        {/* Copyright text displayed at the bottom of the footer (visible only on medium and larger screens) */}
        <p className="footer-copyright-shared">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>
      <AgentCardModal
        isOpenModal={isOpenModalAgentCard}
        setIsOpenModal={setIsOpenModalAgentCard}
        {...adTarget[0]}
      />
      <ReportAdModal
        isOpenModal={isOpenModalReportAd}
        setIsOpenModal={setIsOpenModalReportAd}
      />
      <ShareModal
        isOpenModal={isOpenModalShare}
        setIsOpenModal={setIsOpenModalShare}
        
      />
    </>
  );
}
