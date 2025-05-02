import React, {memo} from 'react';
import CategoryBoxes from '../../../InteractiveComponents/Filters/CategoryBoxes/CategoryBoxes';
import ServicesSectionItems from '../../Sections/ServicesSectionItems/ServicesSectionItems';
import { mobileFooterCategories, mobileFooterSections } from '../../../../data/realEstateData';

// 📌 Footer component for mobile version
const FooterMobile = memo(() => {

  return (
    <>
      {/* 📌 Main footer container for mobile */}
      <div className='footer-mobile'>
        
        {/* 🔹 Footer logo */}
        <div>
          <img src="../../images/logos/Logo-footer.png" width={64} height={31} loading='lazy' alt="logoFooter" />
        </div>

        {/* 🔹 Footer description and slogan */}
        <div className='footer-mobile__description'>
          <h5 className='footer-mobile__title'>سقفینو؛ سقفی برای یک زندگی ایده‌آل</h5>
          <span className='footer-mobile__subtitle'>تجربه لذت خانه‌دار شدن آنی و آسان</span>
        </div>

        {/* 🔹 Categories section */}
        <div className='footer-mobile__categories'>
          {mobileFooterCategories.map(item => <CategoryBoxes key={item.id} {...item} />)} {/* 📦 Render categories */}
        </div>

        {/* 🔹 Footer main description text */}
        <p className='footer-mobile__description-text'>
          سقفینو پلی است تا به سرعت در بین هزاران آگهی ثبت‌شده جست‌وجو کنید. ملک مورد نظر را پیدا کنید و برای انجام معامله‌ای مطمئن، با مشاورین املاک معتمد و متخصص شهرتان در ارتباط باشید.
        </p>

        {/* 🔹 Services section */}
        <div className='footer-mobile__services'>
          {mobileFooterSections.map(item => <ServicesSectionItems key={item.id} {...item} />)} {/* 🔧 Render services */}
        </div>

        {/* 🔹 Trust logo */}
        <div className='footer-mobile__trust-logo'>
          <img src="../../images/logos/Logo-trust.webp" width={35} loading='lazy' alt="logoTrust" />
        </div>

        {/* 🔹 Footer graphic image */}
        <div>
          <img className='mx-auto' src="../../images/footer_graphic_city.png" width={324} height={60} loading='lazy' alt="grapphicCity" />
        </div>
      </div>
    </>
  )
});

export default FooterMobile;
