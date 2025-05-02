import { Edit, Trash } from "iconsax-react";
import React, { memo, useContext } from "react";
import clsx from "classnames";
import { Link, useLocation } from "react-router-dom";
import { FilterContext } from "../../../../context/FilterContext";
import { dataBase } from "../../../../data/realEstateData";
import useToast from "../../../../hooks/useToast";
import { formatPrice } from "../../../../utils/priceUtils";
import { handleSaveAd } from "../../../../utils/adUtils";

/**
 * 🏠 NewRentalListingsBox Component
 * A reusable component for displaying rental/real estate listings
 * Handles both regular listings and user's own ads (myad)
 */
const NewRentalListingsBox = memo(
  ({
    id,
    releaseTime,
    images,
    shortLocation,
    price,
    mortgage,
    rent,
    myad = false, // 🏷️ Flag to indicate if this is user's own ad
    isAdConfirmed,
    cleanAd,
  }) => {
    // 🧭 Router hooks
    const location = useLocation();
    const basePath = location.pathname.split("/")[1];

    // 🔍 Context hooks
    const { userAdSaveLists, setUserAdSaveLists, user: acountUser } = useContext(FilterContext);
    const { handleToastError } = useToast();

    // 💾 Check if ad is saved in user's favorites
    const isSaved = userAdSaveLists?.some((ad) => ad.id === id);

    /**
     * 🗑️ Handle trash icon click (for deleting user's ad)
     **/
    const handleTrashClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (cleanAd) cleanAd();
    };

    return (
      <div className="rental-listing">
        {/* 🔗 Link to ad details page */}
        <Link to={`/${basePath}/home-details/${id}`}>
          {/* 🖼️ Image container */}
          <div className="rental-listing__image-container">
            {images ? (
              <img
                className="rental-listing__image"
                src={images[0].img || images}
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

          {/* ⏰ Posted time or ad status (for user's ads) */}
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
                <span onClick={handleTrashClick}>
                  <Trash
                    className="rental-listing__icon"
                    color="#ffffff"
                    variant="Outline"
                  />
                </span>
              )}
            </div>
          )}

          {/* 📝 Ad content section */}
          <div className="rental-listing__content">
            <div className="rental-listing__header">
              {!myad ? (
                <>
                  <span className="rental-listing__title">
                    {mortgage && mortgage !== 0 && rent && rent !== 0
                      ? " رهن و اجاره آپارتمان"
                      : "خرید آپارتمان"}
                  </span>
                  {/* 💾 Save/unsave icon */}
                  <img
                    className="rental-listing__archive-icon"
                    src={
                      isSaved
                        ? "../../svgs/icons/archive-minus-red.svg"
                        : "../../svgs/icons/archive-minus.svg"
                    }
                    loading="lazy"
                    alt="archiveMinus"
                    onClick={(e) => handleSaveAd(e, id, acountUser, dataBase, setUserAdSaveLists,handleToastError)}
                  />
                </>
              ) : (
                <div className="mr-auto">
                  {/* ✏️ Edit icon for user's ads */}
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

            {/* 💵 Pricing information */}
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
