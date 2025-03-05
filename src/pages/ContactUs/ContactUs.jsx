import React from "react";
import Header from "../../layouts/Header/Header";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import MapFocusArea from "../../components/MapFocusArea/MapFocusArea";
import Footer from "../../layouts/Footer/Footer";

export default function ContactUs() {
  return (
    <>
      {/* 🏠 Page Header with Navigation */}
      <header className="contact-us__header">
        <div className="container">
          <Header />
        </div>
      </header>

      {/* 📌 The main content of the Contact Us page, including contact details and location information. */}
      <main>
        <section className="contact-us__contact-section">
          <div className="container">
            <ContactInfo />
          </div>
        </section>
        <section className="contact-us__location-section">
          <div className="container">
            <MapFocusArea />
          </div>
        </section>
      </main>

      {/* 🔻 Page Footer with Copyright Notice */}
      <footer className="contact-us__footer">
        <div className="container">
          <Footer />
        </div>
        <p className="contact-us__footer-copyright">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>
    </>
  );
}
