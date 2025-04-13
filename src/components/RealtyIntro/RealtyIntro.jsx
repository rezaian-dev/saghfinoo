import { ExportCurve, HomeTrendUp, Location, More, UserSquare, Warning2 } from "iconsax-react";
import React, { memo } from "react";

// Memoize the component to optimize re-renders
const RealtyIntro = memo(({ realestate = true }) => {
  // Data for the details section (location and active listings)
  const dataList = [
    {
      id: 1,
      caption: "مشاور املاک توسی",
      icon: <UserSquare className="realty-intro__icon" color="#505050" />,
    },
    {
      id: 2,
      caption: "۵۰۰ آگهی‌های فعال",
      icon: <HomeTrendUp className="realty-intro__icon" color="#505050" />,
    },
    {
      id: 3,
      caption: "تهران، نیاوران، سه راه یاسر",
      icon: <Location className="realty-intro__icon" color="#505050" />,
    },
    {
      id: 4,
      caption: "بیش از ۴۰۰۰ آگهی‌های فعال",
      icon: <HomeTrendUp className="realty-intro__icon" color="#505050" />,
    },
  ];

  return (
    <div className="realty-intro">
      {/* 🏠 Header section with title and icon */}
      <div className="realty-intro__header">
        <div className="realty-intro__title-container">
          {/* 🏡 Title and logo */}
          <div className="realty-intro__title">
            <h2 className="realty-intro__main-title">
              {realestate ? "املاک توسی" : "علی پرتو"}
            </h2>
          </div>
          {/* 🔽 More icon (visible on mobile only) */}
          <div className="realty-intro__more-icon">
            <More
              className="realty-intro__more-icon-img"
              color="#505050"
              variant="Outline"
            />
                  {/* 🔹 Action buttons (Export & Archive) */}
                  <div className="property-rating__actions">
                    {/* 📤 Export button */}
                    <ExportCurve className="property-rating__icon !w-6 !h-6"  color="#505050" />
            
                    {/* 📂 Archive button */}
                    <img
                      className="cursor-pointer"
                      src="svgs/icons/archive-minus(bg-gray-11).svg"
                      loading="lazy"
                      alt="archiveMenu"
                    />
                  </div>
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
        {realestate
          ? dataList.slice(2).map(({ id, caption, icon }) => (
              <div key={id} className="realty-intro__detail">
                {icon} {/* 📍 Icon for each detail */}
                <h4 className="realty-intro__detail-caption">
                  {caption} {/* 🏡 Caption for each detail */}
                </h4>
              </div>
            ))
          : dataList.slice(0, 2).map(({ id, caption, icon }) => (
              <div key={id} className="realty-intro__detail">
                {icon} {/* 📍 Icon for each detail */}
                <h4 className="realty-intro__detail-caption">
                  {caption} {/* 🏡 Caption for each detail */}
                </h4>
              </div>
            ))}
      </div>

      {/* 📞 Contact button */}
      <span className="realty-intro__contact-btn">
        {realestate ? "تماس با ما" : "تماس با مشاور"}
      </span>
      {/* 🚨 Report Section */}
              <div className="property-rating__report md:hidden justify-start mt-4">
                {/* ⚠️ Warning Icon */}
                <Warning2 className="property-rating__warning-icon" size="32" color="#ED2E2E" />
      
                {/* 📢 Report Text */}
                <span className="property-rating__report-text text-sm custom:text-base">گزارش تخلف</span>
              </div>
    </div>
  );
});

export default RealtyIntro;
