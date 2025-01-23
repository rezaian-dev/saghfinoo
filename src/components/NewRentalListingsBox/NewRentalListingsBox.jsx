import React from "react";

export default function NewRentalListingsBox({ size_location, rent, deposit, posted_at, image, alt }) {
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
              رهن و اجاره آپارتمان تهران
            </span>
            {/* Archive icon */}
            <img className="rental-listing__archive-icon" src="svgs\icons\archive-minus.svg" loading="lazy" alt="archiveMinus" />
          </div>
          {/* Size and location of the property */}
          <span className="rental-listing__size-location">
            {size_location}
          </span>
          {/* Pricing section (deposit and rent) */}
          <div className="rental-listing__pricing">
            <h6>{deposit}</h6>
            <h6>{rent}</h6>
          </div>
        </div>
      </div>
    </>
  );
}


