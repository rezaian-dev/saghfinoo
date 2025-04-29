import React, { memo, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FilterContext } from "../../../../context/FilterContext";
import useToast from "../../../../hooks/useToast";

const HousingInfoBox = memo(({ title, caption, img, alt, btnContent, link }) => {
  const navigate = useNavigate();
  const { user } = useContext(FilterContext);
  const { handleToastError } = useToast();

  // 🚀 Handle button click based on user login
  const handleClick = () => {
    user ? navigate(link) : handleToastError("لطفاً ابتدا وارد حساب کاریری خود شوید!");
  };

  const isRegisterLink = link === "/register/1";

  return (
    <div className="housing-info-box">
      {/* 🖼️ Image */}
      <div>
        <img className="image-full" loading="lazy" src={img} alt={alt} />
      </div>

      {/* 📝 Content */}
      <div className="housing-info-box__content">
        <h5 className="housing-info-box__title">{title}</h5>
        <p className="housing-info-box__caption">{caption}</p>
      </div>

      {/* 🔘 Action Button */}
      {isRegisterLink ? (
        <button onClick={handleClick} className="housing-info-box__button">
          {btnContent}
        </button>
      ) : (
        <Link to={link} className="housing-info-box__button">
          {btnContent}
        </Link>
      )}
    </div>
  );
});

export default HousingInfoBox;
