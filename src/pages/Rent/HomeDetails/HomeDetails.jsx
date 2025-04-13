import React, { useEffect } from "react";
import Header from "../../../layouts/Header/Header";
import PropertyImageSlider from "../../../components/PropertyImageSliderDesktop/PropertyImageSliderDesktop";
import PropertyImageSliderMobile from "../../../components/PropertyImageSliderMobile/PropertyImageSliderMobile";
import PropertyOverview from "../../../components/PropertyOverview/PropertyOverview";
import AgentCard from "../../../components/AgentCard/AgentCard";
import PropertyAmenities from "../../../components/PropertyAmenities/PropertyAmenities";
import PropertyDescription from "../../../components/PropertyDescription/PropertyDescription";
import PropertyLocation from "../../../components/PropertyLocation/PropertyLocation";
import SimilarListings from "../../../components/SimilarListings/SimilarListings";
import Footer from "../../../layouts/Footer/Footer";
import useModal from "../../../hooks/useModal";
import AgentCardModal from "../../../components/AgentCardModal/AgentCardModal";
import ReportAdModal from "../../../components/ReportAdModal/ReportAdModal";
import ShareModal from "../../../components/ShareModal/ShareModal";

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
          <PropertyImageSlider />
        </div>
        <PropertyImageSliderMobile />
      </header>

      {/* Main content section containing property details, amenities, location, and similar listings */}
      <main>
        <section className="home-section-spacing">
          <div className="md:container">
            <div className="home-details__grid home-details__grid--info">
              <PropertyOverview />
              <AgentCard />
            </div>
          </div>
        </section>

        <section className="home-section-spacing">
          <div className="container">
            <div className="home-details__grid home-details__grid--feature">
              <PropertyAmenities />
            </div>
          </div>
        </section>

        <section className="home-section-spacing">
          <div className="container">
            <div className="home-details__grid home-details__grid--description">
              <PropertyDescription />
            </div>
          </div>
        </section>

        <section className="home-section-spacing">
          <div className="container">
            <div className="home-details__grid home-details__grid--location">
              <PropertyLocation />
            </div>
          </div>
        </section>

        <section className="home-details__similar-ads">
          <div className="container">
            <SimilarListings />
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
