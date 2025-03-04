import React, { memo } from "react";
import HousingInfoBox from "../HousingInfoBox/HousingInfoBox";

const HousingPlanner = memo(() => {
  const dataCards = [
    {
      id: 1,
      title: "به آسانی یک خانه اجاره کنید",
      caption:
        "در میان صدها آگهی که روزانه به وب‌سایت سقفینو افزوده می‌شود، با استفاده از بیش از ۲۸ فیلتر کاربردی تلاش کرده‌ایم خانه‌ای که در جست‌وجوی آن هستید را هر چه سریعتر پیدا و اجاره کنید.",
      btnContent: "اجاره خانه",
      img: "images/landing/home-newuser/rent-home-easily.webp",
      alt: "RentHome",
    },
    {
      id: 2,
      title: "خانه مورد علاقه‌تان را بخرید",
      caption:
        "بالای ۱ میلیون آگهی فروش در وب‌سایت سقفینو وجود دارد. ما علاوه بر آگهی‌های فراوان با به‌کارگیری املاک و مشاورین متخصص در هر شهر، تلاش می‌کنیم در تجربه لذت یک خرید آسان با شما سهیم باشد.",
      btnContent: "خرید خانه",
      img: "images/landing/home-newuser/buy-your-home.webp",
      alt: "buyHome",
    },
    {
      id: 3,
      title: "مالک هستید؟",
      caption:
        "آیا می‌دانید میانگین بازدید از وب‌سایت به‌طور متوسط روزانه بالای هزاران نفر است؟ پس به‌سادگی و با چند کلیک ساده، ملک‌تان را به‌صورت رایگان در سقفینو آگهی و در سریع‌ترین زمان ممکن معامله کنید.",
      btnContent: "ثبت آگهی",
      img: "images/landing/home-newuser/property-owner.webp",
      alt: "propertyOwner",
    },
  ];

  return (
    <>
      {/* 🏡 Section Title - Helping you find a home */}
      <h3 className="housing-planner__title">
        سقفینو چطور به خانه‌دار شدن شما کمک می‌کند
      </h3>

      {/* 📦 Grid container for displaying housing information cards */}
      <div className="housing-planner__grid">
        {dataCards.map((item) => (
          // 🔹 Rendering each HousingInfoBox component with data
          <HousingInfoBox key={item.id} {...item} />
        ))}
      </div>
    </>
  );
});

export default HousingPlanner;
