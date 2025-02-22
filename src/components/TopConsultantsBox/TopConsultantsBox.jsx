import React from "react";
import clsx from "classnames";
export default function TopConsultantsBox({ name, image, agency, ratingText, alt,hover }) {
  return (
    <>
      {/* Card container */}
      <div className={clsx("consultants-box",hover && "hover:translate-y-[-10px] hover:shadow-2xl")}>
        {/* Image container */}
        <div className="consultants-box__image-container">
          <img className="consultants-box__image" loading="lazy" src={image} alt={alt} />
        </div>

        {/* Consultant name */}
        <h5 className="consultants-box__name">{name}</h5>

        {/* Agency and rating */}
        <div className="consultants-box__info">
          <span>{agency}</span>
          <span>{ratingText}</span>
        </div>

        {/* Profile button */}
        <a href="#" className="consultants-box__button">نمایش پروفایل</a>
      </div>
    </>
  );
}

