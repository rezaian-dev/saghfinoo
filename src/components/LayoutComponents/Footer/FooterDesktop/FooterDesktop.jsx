import React ,{memo} from "react";
import CategoryBoxes from "../../../InteractiveComponents/Filters/CategoryBoxes/CategoryBoxes";
import ContactInfoBox from "../../Boxes/ContactInfoBox/ContactInfoBox";
import ServicesSection from "../../Sections/ServicesSection/ServicesSection";

/**
 * 🖥️ FooterDesktop Component
 * 
 * Displays the desktop version of the footer, including categories, contact info, and services.
 */
const FooterDesktop = memo(() => {
  // 📌 Data for categories displayed in the footer
  const dataCategory = [
    {
      id: 1,
      title: "بازارهای املاک و مستغلات", // 🏠 Real estate markets category
      items: [
        { id: 1, content: "بازار املاک و مستغلات تهران" },
        { id: 2, content: "بازار املاک و مستغلات اصفهان" },
        { id: 3, content: "بازار املاک و مستغلات شمال" },
      ],
    },
    {
      id: 2,
      title: "بیشترین جست‌وجوها", // 🔍 Most searched category
      items: [
        { id: 1, content: "آپارتمان نزدیک مترو" },
        { id: 2, content: "خانه نزدیک بر اصلی خیابان" },
        { id: 3, content: "آپارتمان تک واحده" },
      ],
    },
    {
      id: 3,
      title: "پرامتیازترین مشاوران املاک", // ⭐ Most rated real estate agents category
      items: [
        { id: 1, content: "میترا جباری" },
        { id: 2, content: "حسام‌الدین عزیزی" },
        { id: 3, content: "بهرام مشعوف" },
      ],
    },
  ];

  return (
    <>
      {/* 📦 Footer container for desktop version */}
      <div className="footer-desktop">
        {/* 🏡 Main title of the footer */}
        <h3 className="footer-desktop__title">
          سقفینو؛ سقفی ایده‌آل برای زندگی
        </h3>

        {/* 📂 Categories and contact info section */}
        <div className="footer-desktop__categories-section">
          {/* 📌 Render each category box */}
          {dataCategory.map((item) => (
            <CategoryBoxes key={item.id} {...item} />
          ))}
          {/* 📞 Contact info box */}
          <ContactInfoBox />
        </div>

        {/* 🛠️ Services section */}
        <div className="footer-desktop__services-section">
          <ServicesSection />
        </div>

        {/* 🌆 Footer graphic image */}
        <div className="mt-[27px]">
          <img className="mx-auto" src="../images/footer_graphic_city.png" loading="lazy" alt="grapphicCity" />
        </div>
      </div>
    </>
  );
});

export default FooterDesktop;
