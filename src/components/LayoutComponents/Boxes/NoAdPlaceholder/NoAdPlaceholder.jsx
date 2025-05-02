import React, { memo } from 'react';
import { Link } from 'react-router-dom';

 const NoAdPlaceholder = memo((({title,description,image,searchAd}) => {
  return (
    // 🏠 Main block container
    <div className="no-ad">
      
      {/* 🖼️ Image element */}
      <div className="no-ad__image-container">
        <img src={image} loading="lazy" alt="panda" className="no-ad__image"/>
      </div>
      
      {/* 📝 Text content section */}
      <div className="no-ad__content">
        <h4 className="no-ad__title">{title}</h4>
        <span className="no-ad__description">{description}</span>
      </div>
      
      {/* 🔘 Call to action button */}
      <div className="mt-8">
        <Link to={searchAd ? "/rent" :"/register/1"} className="no-ad__button">
          {searchAd ? "املاک اجاره ای" :"ثبت آگهی"}
        </Link>
      </div>
      
    </div>
  );
}))

export default NoAdPlaceholder
