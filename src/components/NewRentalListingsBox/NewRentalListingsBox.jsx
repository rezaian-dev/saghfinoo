import React from "react";
export default function NewRentalListingsBox({ locationAddress, rent, posted_at, image, alt,mortgage }) {

    let convertRent = rent.replaceAll(",","");
    let convertMortage = mortgage.replaceAll(",","");
  
  return (
    <>
      {/* Main container for rental listing, including hover effects */}
      <div className="rental-listing">
        {/* Image container */}
        <div className="rental-listing__image-container">
          {image ? <img className="rental-listing__image" src={image} loading="lazy" alt={alt} /> : <img className="rental-listing__image" src="images\landing\homeprouser\no-image.webp" loading="lazy" alt={alt} /> }
        </div>
        {/* Posted date container */}
        <span className="rental-listing__posted-at">
          {posted_at}
        </span>
        {/* Content section containing the listing details */}
        <div className="rental-listing__content">
          {/* Header section for title and archive icon */}
          <div className="rental-listing__header">
            {/* Title of the listing */}
            <span className="rental-listing__title">
              رهن و اجاره آپارتمان
            </span>
            {/* Archive icon */}
            <img className="rental-listing__archive-icon" src="svgs\icons\archive-minus.svg" loading="lazy" alt="archiveMinus" />
          </div>
          {/* Size and location of the property */}
          <span className="rental-listing__size-location">
            {locationAddress}
          </span>
          {/* Pricing section (deposit and rent) */}
          <div className="rental-listing__pricing">
            <h6>{convertMortage.length >= 10 ? `${mortgage} میلیارد تومان رهن`:`${mortgage} میلیون رهن`}</h6>
            <h6>{convertRent.length <= 10 ? `${rent} میلیون تومان اجاره`:`${rent} میلیارد اجاره`}</h6>
          </div>
        </div>
      </div>
    </>
  );
}


