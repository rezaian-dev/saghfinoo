import React, { useEffect } from 'react'
import Header from '../../layouts/Header/Header';
import RealtyIntro from '../../components/RealtyIntro/RealtyIntro';
import PropertyRatingCard from '../../components/PropertyRatingCard/PropertyRatingCard';
import RealestateListing from '../../components/RealestateListing/RealestateListing';
import UserReviews from '../../components/UserReviews/UserReviews';
import Footer from '../../layouts/Footer/Footer';
import PremierRealtorsModal from '../../components/PremierRealtorsModal/PremierRealtorsModal';
import useModal from '../../hooks/useModal';
import FilterModal from '../../components/FillterModal/FillterModal';
import ReportAdModal from '../../components/ReportAdModal/ReportAdModal';
import RatingModal from '../../components/RatingModal/RatingModal';
import ShareModal from '../../components/ShareModal/ShareModal';


export default function Realator() {

  const { handleModal, isOpenModalPremier,isOpenModalFillter,isOpenModalReportAd,isOpenModalRating,setIsOpenModalReportAd,
    setIsOpenModalRating,isOpenModalShare, setIsOpenModalShare } =useModal();

  useEffect(() => {
    document.addEventListener("click", handleModal);
    return () => document.removeEventListener("click", handleModal);
  }, [isOpenModalPremier]);
  return (
    <>
      {/* 🏠 Header section with logo and navigation */}
      <header className="realestate__header">
        <div className="container">
          <Header />
        </div>

        <div className={"realestate__logo-circle realator__logo-circle"}>
          <img
            className="realestate__image"
            src="images\landing\home-prouser\ali-parto.png"
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
              <RealtyIntro realestate={false} />
              <PropertyRatingCard realestate={false}/>
            </div>
          </div>
        </section>
     
        <section className="realestate__property-listing">
          <div className="container">
          <RealestateListing realestate={false}/>
          </div>
        </section>
        <section className="realestate__user-comments">
          <div className="container">
          <UserReviews/>
          </div>
        </section>
      </main>
      
      {/* 🏢 Footer with site information and copyright */}
      <footer className="realestate__footer">
        <div className="container">
          <Footer/>
        </div>
        <p className="realestate__footer-copyright">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>
      <PremierRealtorsModal image={"../images/landing/home-prouser/ali-parto.png"} title={"علی پرتو"} isOpenModal={isOpenModalPremier}/>
      <FilterModal isOpenModal={isOpenModalFillter}/>
      <ReportAdModal isOpenModal={isOpenModalReportAd} setIsOpenModal={setIsOpenModalReportAd}/>
      <RatingModal isOpenModal={isOpenModalRating} setIsOpenModal={setIsOpenModalRating} />
      <ShareModal isOpenModal={isOpenModalShare} setIsOpenModal={setIsOpenModalShare}/>
    </>
  );
}
