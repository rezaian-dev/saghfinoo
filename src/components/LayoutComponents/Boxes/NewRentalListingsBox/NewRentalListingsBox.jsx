import { Edit, Trash } from "iconsax-react";
import React, { memo } from "react";
import clsx from "classnames";
import { Link, useLocation } from "react-router-dom";

const NewRentalListingsBox = memo(
  ({
    id,
    releaseTime,
    images,
    shortLocation,
    price,
    mortgage,
    rent,
    myad = false,
    savead = false,
    isAdConfirmed,
  }) => {
    const location = useLocation();
    const basePath = location.pathname.split("/")[1];

    // 🔢 Convert numbers to Persian digits
    function toPersianDigits(number) {
      return number.toLocaleString("fa-IR");
    }

    // 💰 Format price based on amount (Million, Billion, etc.)
    function formatPrice(amount) {
      if (+amount % 1000000 !== 0) {
        return `${toPersianDigits(amount)} تومان`;
      } else if (amount >= 1000000000) {
        return `${toPersianDigits(amount / 1000000000)} میلیارد تومان`;
      } else if (amount >= 1000000) {
        return `${toPersianDigits(amount / 1000000)} میلیون تومان`;
      } else {
        return `${toPersianDigits(amount)} تومان`;
      }
    }

    return (
      <div className="rental-listing">
        <Link to={`/${basePath}/home-details/${id}`}>
          <div className="rental-listing__image-container">
            {images ? (
              <img
                className="rental-listing__image"
                src={images[0].img}
                loading="lazy"
                alt={images[0].alt}
              />
            ) : (
              <img
                className="rental-listing__image"
                src="../images/landing/home-prouser/no-image.webpp"
                loading="lazy"
                alt="noImage"
              />
            )}
          </div>

          {!myad ? (
            <span className="rental-listing__posted-at">{releaseTime}</span>
          ) : (
            <div className="rental-listing__status">
              <span
                className={clsx(
                  "rental-listing__status-badge",
                  isAdConfirmed && "bg-black/40"
                )}
              >
                {isAdConfirmed ? "تائید شده" : "در انتظار تائید"}
              </span>
              {myad && (
                <span>
                  <Trash
                    className="rental-listing__icon"
                    color="#ffffff"
                    variant="Outline"
                  />
                </span>
              )}
            </div>
          )}

          <div className="rental-listing__content">
            <div className="rental-listing__header">
              {!myad ? (
                <>
                  <span className="rental-listing__title">
                    {mortgage && mortgage !== 0 && rent && rent !== 0
                      ? " رهن و اجاره آپارتمان"
                      : "خرید آپارتمان"}
                  </span>
                  <img
                    className="rental-listing__archive-icon"
                    src={
                      savead
                        ? "../../svgs/icons/archive-minus-red.svg"
                        : "../../svgs/icons/archive-minus.svg"
                    }
                    loading="lazy"
                    alt="archiveMinus"
                  />
                </>
              ) : (
                <div className="mr-auto">
                  <Edit className="rental-listing__icon" color="#717171" />
                </div>
              )}
            </div>

            <div>
              {myad && (
                <span className="rental-listing__type">
                  {mortgage && mortgage !== 0 && rent && rent !== 0
                    ? " رهن و اجاره آپارتمان"
                    : "خرید آپارتمان"}
                </span>
              )}
              <span className="rental-listing__size-location">
                {shortLocation}
              </span>
            </div>

            <div className="rental-listing__pricing">
              {mortgage && mortgage !== 0 && rent && rent !== 0 ? (
                <>
                  <h6>{`${formatPrice(mortgage)} رهن`}</h6>
                  <h6>{`${formatPrice(rent)} اجاره`}</h6>
                </>
              ) : (
                price &&
                price !== 0 && <h6>{`${formatPrice(price)} خرید`}</h6>
              )}
            </div>
          </div>
        </Link>
      </div>
    );
  }
);

export default NewRentalListingsBox;
