import React ,{memo} from "react";
import CategoryBoxes from "../../../InteractiveComponents/Filters/CategoryBoxes/CategoryBoxes";
import ContactInfoBox from "../../Boxes/ContactInfoBox/ContactInfoBox";
import ServicesSection from "../../Sections/ServicesSection/ServicesSection";
import { footerCategories } from "../../../../data/realEstateData";
/**
 * 🖥️ FooterDesktop Component
 * 
 * Displays the desktop version of the footer, including categories, contact info, and services.
 */
const FooterDesktop = memo(() => {

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
          {footerCategories.map((item) => (
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
          <img className="mx-auto" src="../../images/footer_graphic_city.png" loading="lazy" alt="grapphicCity" />
        </div>
      </div>
    </>
  );
});

export default FooterDesktop;
