import React from "react";
import Header from "../../layouts/Header/Header";
import SaghfinoStory from "../../components/SaghfinoStory/SaghfinoStory";
import Footer from "../../layouts/Footer/Footer";

export default function AboutUs() {
  return (
    <>
      {/* Header section containing the main site header 🏠 */}
      <header className="about-us__header">
        <div className="container">
          <Header />
        </div>
      </header>

      {/* Main content section with the story of Saghfino 📖 */}
      <main className="about-us__main">
        <div className="container">
          <SaghfinoStory />
        </div>
      </main>

      {/* Footer section containing the footer content and copyright 📝 */}
      <footer className="about-us__footer">
        <div className="container">
          <Footer />
        </div>
        <p className="about-us__footer-copyright">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>
    </>
  );
}
