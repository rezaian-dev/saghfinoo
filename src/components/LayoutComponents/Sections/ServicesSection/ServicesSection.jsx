import React, { memo } from "react";
import ServicesSectionItems from "../ServicesSectionItems/ServicesSectionItems";
import { Link } from "react-router-dom";

// Wrapping ServicesSection in React.memo for performance optimization
const ServicesSection = memo(() => {
  // 📝 Data for sections to display in the services section
  const sections = [
    {
      id: 1,
      title: "خدمات", // Services section
      items: [
        { id: 1, content: "اجاره", link:"/rent" },
        { id: 2, content: "خرید", link:"/buy" },
        { id: 3, content: "ثبت رایگان آگهی ملک", link:"/register/1" },
        { id: 4, content: "املاک و مستغلات", link:"/realestates" },
        { id: 5, content: "مشاورین املاک", link:"/realators" },
        { id: 6, content: "اخبار روز املاک", link:"/news" },
        { id: 7, content: "سوال ملکی دارید؟", link:"/contact-us" },
      ],
    },
    {
      id: 2,
      title: "اطلاعات", // Information section
      items: [
        { id: 1, content: "دانلود اپلیکیشن سقفینو", link:"https://cafebazaar.ir/" },
        { id: 2, content: "تماس با ما",link:"/contact-us" },
        { id: 3, content: "داستان سقفینو",link:"/about" },
        { id: 4, content: "پرسش‌های پرتکرار",link:"" },
        { id: 5, content: "یک سقف؛ بلاگ سقفینو" ,link:"/about"},
        { id: 6, content: "حریم شخصی شما",link:"#" },
        { id: 7, content: "تعهدات ما و شما",link:"#" },
      ],
    },
    {
      id: 3,
      title: "حساب کاربری", // User account section
      items: [
        { id: 1, content: "پروفایل من", link: "/profile" },
        { id: 2, content: "ملک‌های نشان‌شده", link: "/saved-ads" },
        { id: 3, content: "آگهی‌های من", link: "/my-ads" },
      ]
    },
  ];

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
        {sections.map((item) => (
          <ServicesSectionItems key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
});

export default ServicesSection;
