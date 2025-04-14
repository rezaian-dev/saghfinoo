import React, { useEffect } from "react";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import useModal from "../../hooks/useModal";
import RealtyIntro from "../../components/MiscellaneousComponents/RealtyIntro/RealtyIntro";
import PropertyRatingCard from "../../components/RealEstateComponents/Property/PropertyRatingCard/PropertyRatingCard";
import RealEstateAgents from "../../components/SpecializedComponents/RealEstateAgents/RealEstateAgents";
import RealestateListing from "../../components/RealEstateComponents/Listing/RealestateListing/RealestateListing";
import UserReviews from "../../components/UserComponents/Reviews/UserReviews/UserReviews";
import PremierRealtorsModal from "../../components/CoreComponents/Modals/PremierRealtorsModal/PremierRealtorsModal";
import ShareModal from "../../components/CoreComponents/Modals/ShareModal/ShareModal";

export default function Realestate() {
  // 🔹 Social media links data
  const dataSocialMedia = [
    {
      id: 1,
      link: "t.me/amlaktoosi",
      image: "images/socialMedia/telegram.png",
    },
    { id: 2, link: "Toosi_Amlak", image: "images/socialMedia/linkdin.png" },
    { id: 3, link: "Toosi_Amlak", image: "images/socialMedia/instagram.png" },
    { id: 4, link: "Toosi_Amlak.com", image: "images/socialMedia/site.png" },
  ];

  const { handleModal, isOpenModalPremier, isOpenModalShare } = useModal();

  useEffect(() => {
    document.addEventListener("click", handleModal);
    return () => document.removeEventListener("click", handleModal);
  }, []);

  return (
    <>
      {/* 📌 Header Section */}
      <header className="realestate__header">
        <div className="container">
          <Header />
        </div>

        {/* 📌 Social Media Box (Visible only on medium and larger screens) */}
        <div className="realestate__social-box">
          {dataSocialMedia.map(({ id, link, image }) => (
            <span key={id} className="realestate__social-item">
              <a className="realestate__social-link" href="#">
                {link}
                <img
                  className="realestate__social-icon"
                  src={image}
                  loading="lazy"
                  alt="icon"
                />
              </a>
            </span>
          ))}
        </div>

        {/* 📌 Floating Logo Circle */}
        <div className="realestate__logo-circle">
          <img
            className="realestate__logo"
            src="images/realestate/Vector.png"
            loading="lazy"
            alt="logo"
          />
        </div>
      </header>
      {/* 📑 Main content area - contains profile, realtors, property listings, and user comments */}
      <main>
        <section className="realestate__profile">
          <div className="container">
            <div className="realestate__grid grid">
              <RealtyIntro />
              <PropertyRatingCard />
            </div>
          </div>
        </section>
        <section className="section-spacing">
          <div className="container">
            <RealEstateAgents />
          </div>
        </section>
        <section className="section-spacing">
          <div className="container">
            <RealestateListing />
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
      <PremierRealtorsModal isOpenModal={isOpenModalPremier} />
      <ShareModal isOpenModal={isOpenModalShare} />
    </>
  );
}
