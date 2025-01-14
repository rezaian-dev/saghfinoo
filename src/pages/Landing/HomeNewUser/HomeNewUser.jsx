import React from "react";
import HeaderContent from "../../../components/HeaderContent/HeaderContent";
import Header from "../../../layouts/Header/Header";

export default function HomeNewUser() {
  return (
    <>
      <header className="header bg-home-desktop bg-no-repeat bg-cover h-[690px] lg:pt-10">
        <div className="container">
          <Header/>
          <HeaderContent/>
        </div>
      </header>
    </>
  );
}
