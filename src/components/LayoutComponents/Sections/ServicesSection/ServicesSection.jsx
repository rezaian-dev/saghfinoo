import React, { memo } from "react";
import ServicesSectionItems from "../ServicesSectionItems/ServicesSectionItems";
import { Link } from "react-router-dom";
import { desktopFooterSections } from "../../../../data/realEstateData";

const ServicesSection = memo(() => {
  // 📝 Data for sections to display in the services section

  return (
    <div className="services-section">
      {/* 🖥️ Left side container with logo and description */}
      <div className="services-section__left">
        <div>
          <Link to={"/"}>
          <img
            src="../../images/logos/Logo-footer.png"
            loading="lazy"
            alt="logoFooter"
          />
          </Link>
        </div>
        <div className="services-section__description">
          <span className="services-section__subtitle">
            تجربه لذت خانه‌دار شدن سریع و آسان
          </span>
          <p className="services-section__text">
            سقفینو پلی است تا به سرعت در بین هزاران آگهی ثبت‌شده جست‌وجو کنید.
            ملک مورد نظر را پیدا کنید و برای انجام معامله‌ای مطمئن، با مشاورین
            املاک معتمد و متخصص شهرتان در ارتباط باشید.
          </p>
        </div>
      </div>

      {/* 🧭 Right side container with the services sections */}
      <div className="services-section__right">
        {/* Rendering each section with its items */}
        {desktopFooterSections.map((item) => (
          <ServicesSectionItems key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
});

export default ServicesSection;
