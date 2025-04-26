import React, { memo } from "react";
import clsx from "classnames";
import { Link } from "react-router-dom";

const TopConsultantsBox = memo(({ id,name, image, agency, ratingText, alt, hover }) => {
  
  return (
    <>
      {/* 🖼️ Card container with hover effect */}
      <div className={clsx("consultants-box", hover && "hover:translate-y-[-10px] hover:shadow-2xl")}>
        
        {/* 🖼️ Image container */}
        <div className="consultants-box__image-container">
          <img className="w-full" loading="lazy" src={image} alt={alt} />
        </div>

        {/* 👨‍💼 Consultant name */}
        <h5 className="consultants-box__name">{name}</h5>

        {/* 🏢 Agency and 🌟 Rating */}
        <div className="consultants-box__info">
          <span>{agency}</span>
          <span>{(ratingText.slice(7,8))} از ۵</span>

        </div>

        {/* 🔗 Profile button */}
        <Link to={`/realator/${id}`} className="consultants-box__button">نمایش پروفایل</Link>
      </div>
    </>
  );
});

export default TopConsultantsBox;
