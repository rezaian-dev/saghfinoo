import React from 'react'
import Header from '../../layouts/Header/Header';
import RealtyIntro from '../../components/RealtyIntro/RealtyIntro';
import PropertyRatingCard from '../../components/PropertyRatingCard/PropertyRatingCard';
import RealestateListing from '../../components/RealestateListing/RealestateListing';
import UserReviews from '../../components/UserReviews/UserReviews';
import Footer from '../../layouts/Footer/Footer';

export default function Realator() {
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
    </>
  );
}
