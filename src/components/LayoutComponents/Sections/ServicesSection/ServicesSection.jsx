import React, { memo } from "react";
import ServicesSectionItems from "../ServicesSectionItems/ServicesSectionItems";

// Wrapping ServicesSection in React.memo for performance optimization
const ServicesSection = memo(() => {
  // 📝 Data for sections to display in the services section
  const sections = [
    {
      id: 1,
      title: "خدمات", // Services section
      items: [
        { id: 1, content: "اجاره" },
        { id: 2, content: "خرید" },
        { id: 3, content: "ثبت رایگان آگهی ملک" },
        { id: 4, content: "املاک و مستغلات" },
        { id: 5, content: "مشاورین املاک" },
        { id: 6, content: "اخبار روز املاک" },
        { id: 7, content: "سوال ملکی دارید؟" },
      ],
    },
    {
      id: 2,
      title: "اطلاعات", // Information section
      items: [
        { id: 1, content: "دانلود اپلیکیشن سقفینو" },
        { id: 2, content: "تماس با ما" },
        { id: 3, content: "داستان سقفینو" },
        { id: 4, content: "پرسش‌های پرتکرار" },
        { id: 5, content: "یک سقف؛ بلاگ سقفینو" },
        { id: 6, content: "حریم شخصی شما" },
        { id: 7, content: "تعهدات ما و شما" },
      ],
    },
    {
      id: 3,
      title: "حساب کاربری", // User account section
      items: [
        { id: 1, content: "پروفایل من" },
        { id: 2, content: "ملک‌های نشان‌شده" },
        { id: 3, content: "آگهی‌های من" },
      ],
    },
  ];

  return (
    <div className="services-section">
      {/* 🖥️ Left side container with logo and description */}
      <div className="services-section__left">
        <div>
          <img
            src="../images/logos/Logo-footer.png"
            loading="lazy"
            alt="logoFooter"
          />
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
        {sections.map((item) => (
          <ServicesSectionItems key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
});

export default ServicesSection;
