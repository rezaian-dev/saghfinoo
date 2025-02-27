import { HomeTrendUp, Location, More } from "iconsax-react";
import React from "react";

export default function RealtyIntro() {
  // Data for the details section (location and active listings)
  const dataList = [
    { id: 1, caption: "تهران، نیاوران، سه راه یاسر", icon: (<Location className="realty-intro__icon" color="#505050" />) },
    { id: 2, caption: "بیش از ۴۰۰۰ آگهی‌های فعال", icon: (<HomeTrendUp className="realty-intro__icon" color="#505050" />) },
  ];

  return (
    <div className="realty-intro">
      {/* 🏠 Header section with title and icon */}
      <div className="realty-intro__header">
        <div className="realty-intro__title-container">
          {/* 🏡 Title and logo */}
          <div className="realty-intro__title">
            <h2 className="realty-intro__main-title">
              املاک توسی
            </h2>
            <img className="realty-intro__icon-img" src="images/realestate/tik-blue.png" loading="lazy" alt="tikBlue"/>
          </div>
          {/* 🔽 More icon (visible on mobile only) */}
          <div className="realty-intro__more-icon">
            <More className="realty-intro__more-icon-img" color="#505050" variant="Outline"/>
          </div>
        </div>
      </div>

      {/* ⭐️ User rating */}
      <span className="realty-intro__user-rating">
        میزان رضایتمندی کاربران: ۴/۹ از ۵
      </span>

      {/* 🏠 Specialization title */}
      <h3 className="realty-intro__specialization-title">
        تخصص ما یافتن خانه دلخواه شماست.
      </h3>

      {/* 📍 Data details section (location and listings count) */}
      <div className="realty-intro__details">
        {dataList.map(({ id, caption, icon }) => {
          return (
            <div key={id} className="realty-intro__detail">
              {icon} {/* 📍 Icon for each detail */}
              <h4 className="realty-intro__detail-caption">
                {caption} {/* 🏡 Caption for each detail */}
              </h4>
            </div>
          );
        })}
      </div>

      {/* 📞 Contact button */}
      <span className="realty-intro__contact-btn">
        تماس با ما
      </span>
    </div>
  );
}



