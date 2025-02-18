import React from "react";
import Header from "../../../layouts/Header/Header";
import PropertyImageSlider from "../../../components/PropertyImageSliderDesktop/PropertyImageSliderDesktop";
import PropertyImageSliderMobile from "../../../components/PropertyImageSliderMobile/PropertyImageSliderMobile";

export default function HouseDetails() {
  return (
    <>
      {/* This section includes the header and both desktop and mobile image sliders for the property */}
      <header className="house-details__header">
        <div className="container">
          <Header />
          <PropertyImageSlider />
        </div>
          <PropertyImageSliderMobile />
      </header>
    </>
  );
}
