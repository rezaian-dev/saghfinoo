import React from "react";
import Header from "../../../layouts/Header/Header";
import Footer from "../../../layouts/Footer/Footer";
import MarketTrends from "../../../components/AnalyticsComponents/MarketTrends/MarketTrends";
import NewsSidebar from "../../../components/LayoutComponents/Sidebar/NewsSidebar/NewsSidebar";
import MarketAnalysis from "../../../components/AnalyticsComponents/MarketAnalysis/MarketAnalysis";
import MarketRecovery from "../../../components/AnalyticsComponents/MarketRecovery/MarketRecovery";
import FuturePredictions from "../../../components/AnalyticsComponents/FuturePredictions/FuturePredictions";
import HousingTags from "../../../components/RealEstateComponents/Housing/HousingTags/HousingTags";

export default function NewsDetails() {
  return (
    <>
      {/* 🗂 Header Section */}
      <header className="md:pt-10">
        <div className="container">
          <Header />
        </div>
      </header>

      {/* 📄 Main Content Section - Contains all the primary news and information components */}
      <main>
        <section className="news-details__market-trends">
          <div className="container">
            <MarketTrends />
          </div>
        </section>

        <section className="row">
          <div>
            <section className="news-details__market-analysis">
              <div className="container lg:px-0">
                <MarketAnalysis />
              </div>
            </section>

            <section className="section-spacing">
              <div className="container lg:px-0">
                <MarketRecovery />
              </div>
            </section>

            <section className="section-spacing">
              <div className="container lg:px-0">
                <FuturePredictions />
              </div>
            </section>

            <section className="section-spacing">
              <div className="container lg:px-0">
                <HousingTags />
              </div>
            </section>
          </div>

          <div className="news-details__sidebar">
            <div className="container lg:px-0">
              <NewsSidebar />
            </div>
          </div>
        </section>
      </main>

      {/* 🦶 Footer Section */}
      <footer className="news-details__footer">
        <div className="container">
          <Footer />
        </div>
        {/* 📜 Copyright Notice */}
        <p className="footer-copyright-shared">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>
    </>
  );
}
