import React from "react";
import SaghfinooOpportunityBox from "../SaghfinooOpportunityBox/SaghfinooOpportunityBox";

export default function SaghfinooOpportunity() {

  const dataCard = [
      {id:1, image:"images/landing/home-prouser/24-7-consultant-support.webp", caption:"مشاورین ما ۲۴ ساعته پاسخگوی سوالات ملکی شما هستند", alt:"consultantSupport"},
      {id:2, image:"images/landing/home-prouser/property-search-with-filters.webp", caption:"اگر در جست‌وجوی یک سقف نو هستید اینجا کلیک کنید", alt:"propertySearch"},
      {id:3, image:"images/landing/home-prouser/easy-property-registration.webp", caption:"با ثبت آسان آگهی، ملک خود را برای اجاره یا فروش اعلان کنید", alt:"easyProperty"},
  ];

  return (
      <>
          {/* Header Section */}
          <div className="saghfinoo-opportunity__header">
              <h3 className="saghfinoo-opportunity__title">
                  سقفینو فرصتی برای همه
              </h3>
              <span className="saghfinoo-opportunity__description">
                  اگر مالک یا در جست‌‌وجوی سقفی نو هستید، کلیک کنید
              </span>
          </div>

          {/* Opportunity Cards Grid */}
          <div className="saghfinoo-opportunity__cards-grid">
              {dataCard.map(item => (<SaghfinooOpportunityBox key={item.id} {...item} />))}
          </div>
      </>
  );
}

