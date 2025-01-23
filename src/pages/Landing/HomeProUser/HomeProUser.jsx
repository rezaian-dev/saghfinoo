import React from "react";
import Header from "../../../layouts/Header/Header";
import HeaderContent from "../../../components/HeaderContent/HeaderContent";
import NewRentalListings from "../../../components/NewRentalListings/NewRentalListings";
import SaghfinooOpportunity from "../../../components/SaghfinooOpportunity/SaghfinooOpportunity";

export default function HomeProUser() {
  return (
    <>
      {/* Header section with Header and HeaderContent components */}
      <header className="home-pro-user__header">
        <div className="container">
          <Header />
          <HeaderContent />
        </div>
      </header>
      <main>
        {/* New rental listings section */}
        <section className="home-pro-user__new-houses-section">
          <div className="container">
            <NewRentalListings />
          </div>
        </section>
        {/* Saghfinoo Opportunity Section */}
        <section className="home-pro-user__opportunity-section">
          <div className="container">
            <SaghfinooOpportunity />
          </div>
        </section>
      </main>
    </>
  );
}

