import React from "react";
import Header from "../../../layouts/Header/Header";
import MarketTrends from "../../../components/MarketTrends/MarketTrends";
import NewsSidebar from "../../../components/NewsSidebar/NewsSidebar";
import MarketAnalysis from "../../../components/MarketAnalysis/MarketAnalysis";
import MarketRecovery from "../../../components/MarketRecovery/MarketRecovery";
import FuturePredictions from "../../../components/FuturePredictions/FuturePredictions";
import HousingTags from "../../../components/HousingTags/HousingTags";
import Footer from "../../../layouts/Footer/Footer";

export default function NewsDetails() {
  return (
    <>
      {/* 🗂 Header Section */}
      <header className="news-details__header">
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

            <section className="news-details__market-recovery">
              <div className="container lg:px-0">
                <MarketRecovery />
              </div>
            </section>

            <section className="news-details__future-predictions">
              <div className="container lg:px-0">
                <FuturePredictions />
              </div>
            </section>

            <section className="news-details__housing-tags">
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
        <p className="news-details__footer-copyright">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>
    </>
  );
}
