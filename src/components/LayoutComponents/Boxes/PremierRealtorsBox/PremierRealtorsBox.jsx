import React, { memo } from "react";
import clsx from "classnames";
import { Link, useLocation } from "react-router-dom";

const PremierRealtorsBox = memo(
  ({
    id,
    title,
    image,
    location,
    popularity,
    activeAd,
    comment,
    tikBlue,
    alt,
    hover,
  }) => {
    // Get current location to check the pathname
    const { pathname } = useLocation();
    
    // Check if the current path is buy or rent
    const isBuyOrRent = ["/home-pro-user","/buy","/rent"].includes(pathname);
    
    // 🔗 Update URL with agency ID on click
    const handleOpenAgencyModal = () => {
      const url = new URL(window.location);
      url.searchParams.set("agency-id", id.toString());
      history.pushState({}, "", url);
    };

    // Create the content of the box
    const boxContent = (
      <div
        className={clsx(
          "premier-realtors-box",
          hover && "hover:translate-y-[-10px] hover:shadow-2xl"
        )}
        onClick={(e) => {
          if (isBuyOrRent) {
            handleOpenAgencyModal();
          }
        }}
      >
        {/* 🖼️ Image container for realtor */}
        <div className="premier-realtors-box__image-container">
          {/* 🏠 Image of the realtor with lazy loading */}
          <img className="image-full" src={image} loading="lazy" alt={alt} />
        </div>

        <div className="premier-realtors-box__header">
          {/* 🏷️ Title of the realtor */}
          <h5 className="premier-realtors-box__title">{title}</h5>

          {/* ✅ Display blue tick if provided */}
          {tikBlue && (
            <img src="svgs/icons/blue-tick.svg" loading="lazy" alt="blueTick" />
          )}
        </div>

        <div className="premier-realtors-box__details">
          {/* 📍 Location of the realtor */}
          <span className="premier-realtors-box__location">{location}</span>

          {/* 🌟 Popularity rating */}
          <span>میزان رضایتمندی: {popularity}</span>

          {/* 📝 Number of active ads */}
          <span>آگهی‌های فعال: {activeAd}</span>

          {/* 💬 User comments link */}
          <span className="premier-realtors-box__comments">
            مشاهده نظرات کاربران: {comment}
          </span>
        </div>
      </div>
    );

    // Conditionally wrap with Link based on pathname
    return !isBuyOrRent ? (
      <Link to={`/realestate/${id}`}>{boxContent}</Link>
    ) : (
      boxContent
    );
  }
);

export default PremierRealtorsBox;
