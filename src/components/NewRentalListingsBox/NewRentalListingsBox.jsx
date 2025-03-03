import { Edit, Trash } from "iconsax-react";
import React from "react";
import clsx from "classnames";

export default function NewRentalListingsBox({
  locationAddress,
  rent,
  posted_at,
  image,
  alt,
  mortgage,
  myad = false,
  isAdConfirmed,
}) {
  // 🔢 Convert numbers to Persian digits
  function toPersianDigits(number) {
    return number.toLocaleString("fa-IR");
  }

  // 💰 Format price based on amount (Million, Billion, etc.)
  function formatPrice(amount) {
    amount = parseInt(amount, 10);

    if (amount % 1000000 !== 0) {
      return `${toPersianDigits(amount)} تومان`; // Normal price
    } else if (amount >= 1000000000) {
      return `${toPersianDigits(amount / 1000000000)} میلیارد تومان`; // Convert to Billion
    } else if (amount >= 1000000) {
      return `${toPersianDigits(amount / 1000000)} میلیون تومان`; // Convert to Million
    } else {
      return `${toPersianDigits(amount)} تومان`; // Small values
    }
  }

  return (
    <>
      {/* 📦 Main container for rental listing, including hover effects */}
      <div className="rental-listing">
        {/* 🖼️ Image container */}
        <div className="rental-listing__image-container">
          {image ? (
            <img className="rental-listing__image" src={image} loading="lazy" alt={alt}/>
          ) : (
            <img className="rental-listing__image" src="images\landing\homeprouser\no-image.webp" loading="lazy" alt={alt}/>
          )}
        </div>
        
        {/* ⏱️ Posted date container or ad status */}
        {!myad ? (
          <span className="rental-listing__posted-at">{posted_at}</span>
        ) : (
          <>
            <div className="rental-listing__status">
              <span className={clsx("rental-listing__status-badge",isAdConfirmed && "rental-listing__status-badge--confirmed")}>
                {isAdConfirmed ? "تائید شده" : "در انتظار تائید"}
              </span>
              {myad && (<span><Trash className="rental-listing__icon" color="#ffffff" variant="Outline"/></span>)}
            </div>
          </>
        )}
        
        {/* 📝 Content section containing the listing details */}
        <div className="rental-listing__content">
          {/* 🏷️ Header section for title and archive icon */}
          <div className="rental-listing__header">
            {/* Title of the listing */}
            {!myad ? (
              <>
                <span className="rental-listing__title">
                  رهن و اجاره آپارتمان
                </span>
                {/* 🗂️ Archive icon */}
                <img
                  className="rental-listing__archive-icon"
                  src="svgs\icons\archive-minus.svg"
                  loading="lazy"
                  alt="archiveMinus"
                />
              </>
            ) : (
              <>
                <div className="mr-auto">
                  <Edit className="rental-listing__icon" color="#717171" />
                </div>
              </>
            )}
          </div>
          
          {/* 📍 Size and location of the property */}
          <div>
            {myad && (
              <span className="rental-listing__type">
                رهن و اجاره آپارتمان
              </span>
            )}
            <span className="rental-listing__size-location">
              {locationAddress}
            </span>
          </div>
          
          {/* 💵 Pricing section (deposit and rent) */}
          <div className="rental-listing__pricing">
            <h6>
              {mortgage.length >= 10
                ? `${formatPrice(mortgage)}   رهن`
                : `${formatPrice(mortgage)}   رهن`}
            </h6>
            <h6>
              {rent.length >= 10
                ? `${formatPrice(rent)}    اجاره`
                : `${formatPrice(rent)}   اجاره`}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}
