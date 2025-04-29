import React from "react";
import Header from "../../../layouts/Header/Header";
import Footer from "../../../layouts/Footer/Footer";
import MarketTrends from "../../../components/AnalyticsComponents/MarketTrends/MarketTrends";
import NewsSidebar from "../../../components/LayoutComponents/Sidebar/NewsSidebar/NewsSidebar";
import MarketAnalysis from "../../../components/AnalyticsComponents/MarketAnalysis/MarketAnalysis";
import MarketRecovery from "../../../components/AnalyticsComponents/MarketRecovery/MarketRecovery";
import FuturePredictions from "../../../components/AnalyticsComponents/FuturePredictions/FuturePredictions";
import HousingTags from "../../../components/RealEstateComponents/Housing/HousingTags/HousingTags";
import { ToastContainer } from "react-toastify";

export default function NewsDetails() {
  return (
    <>
      {/* 🏛️ Page Header with Navigation */}
      <header className="md:pt-10">
        <div className="container">
          <Header />
        </div>
      </header>

      {/* 📊 Main Analytics Content */}
      <main>
        {/* 📈 Market Trends Overview */}
        <section className="news-details__market-trends">
          <div className="container">
            <MarketTrends />
          </div>
        </section>

        {/* 🪢 Two-Column Layout */}
        <section className="row">
          {/* 📝 Left Column - Main Content */}
          <div>
            {/* 🔍 Detailed Market Analysis */}
            <section className="news-details__market-analysis">
              <div className="container lg:px-0">
                <MarketAnalysis />
              </div>
            </section>

            {/* 📉 Recovery Status */}
            <section className="section-spacing">
              <div className="container lg:px-0">
                <MarketRecovery />
              </div>
            </section>

            {/* 🔮 Future Projections */}
            <section className="section-spacing">
              <div className="container lg:px-0">
                <FuturePredictions />
              </div>
            </section>

            {/* 🏷️ Related Housing Tags */}
            <section className="section-spacing">
              <div className="container lg:px-0">
                <HousingTags />
              </div>
            </section>
          </div>

          {/* 📰 Right Column - News Sidebar */}
          <div className="news-details__sidebar">
            <div className="container lg:px-0">
              <NewsSidebar />
            </div>
          </div>
        </section>
      </main>

      {/* 🏁 Page Footer */}
      <footer className="news-details__footer">
        <div className="container">
          <Footer />
        </div>
        {/* © Copyright Notice (Persian) */}
        <p className="footer-copyright-shared">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>

      {/* 💬 Toast Notifications */}
      <ToastContainer />
    </>
  );
}
