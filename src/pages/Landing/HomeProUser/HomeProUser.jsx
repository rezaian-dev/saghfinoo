import React from "react";
import Header from "../../../layouts/Header/Header";
import HeaderContent from "../../../components/HeaderContent/HeaderContent";
import NewRentalListings from "../../../components/NewRentalListings/NewRentalListings";

export default function HomeProUser() {
  return (
    <>
      {/* Header component & Header content section */}
      <header className="home-pro-user__header">
        <div className="container">
          <Header />
          <HeaderContent />
        </div>
      </header>
      <main>
        {/* <section className="home-pro-user__new-houses-section">
          <div className="container">
          <NewRentalListings/>
          </div>
        </section> */}
      </main>
    </>
  );
}
