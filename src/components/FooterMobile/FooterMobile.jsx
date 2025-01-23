import React from 'react'
import CategoryBoxes from '../CategoryBoxes/CategoryBoxes'
import ServicesSectionItems from '../ServicesSectionItems/ServicesSectionItems';
import { Call, Instagram } from 'iconsax-react';

export default function FooterMobile() {
  const dataCategory = [
    {
      id: 1,
      title: "بیشترین جست‌وجوها",
      items: [
        { id: 1, content: "آپارتمان کوچک مترو" },
        { id: 2, content: "خانه ویلایی در اطراف شهر" },
        { id: 3, content: "آپارتمان‌های تازه‌ساز" },
      ],
    },
    {
      id: 2,
      title: "بازارهای املاک و مستغلات",
      items: [
        { id: 1, content: "بازار املاک و مستغلات تهران" },
        { id: 2, content: "بازار املاک و مستغلات اصفهان" },
        { id: 3, content: "بازار املاک و مستغلات شمال" },
      ],
    }
  ]
  const sections = [
  {
    id: 1,
    title: "خدمات",
    items: [
      { id: 1, content: "اجاره" },
      { id: 2, content: "خرید" },
      { id: 3, content: "ثبت رایگان آگهی ملک" },
      { id: 4, content: "املاک و مستغلات" },
      { id: 5, content: "مشاورین املاک" },
      { id: 6, content: "اخبار روز املاک" },
      { id: 7, content: "سوال ملکی دارید؟" },
    ],
    mobile: true
  },
  {
    id:2,
    title:"ارتباط با ما",
    items:[
      {id: 1, content: "تلفن",icon:<Call size="16" color="#CB1B1B" variant="Bold"/>},
      {id: 2, content: "اینستاگرام",icon:<Instagram size="16" color="#CB1B1B" variant="Bold"/>},
      {id: 3, content: "تلگرام",icon:<img src="svgs/icons/telegram.svg" width={16} loading='lazy' alt="telegram"/>},
    ]
  },
  {
    id: 3,
    title: "اطلاعات",
    items: [
      { id: 1, content: "دانلود اپلیکیشن سقفینو" },
      { id: 2, content: "تماس با ما" },
      { id: 3, content: "داستان سقفینو" },
      { id: 4, content: "پرسش‌های پرتکرار" },
      { id: 5, content: "یک سقف؛ بلاگ سقفینو" },
      { id: 6, content: "حریم شخصی شما" },
      { id: 7, content: "تعهدات ما و شما" },
    ],
    mobile: true
  },
  
];

  return (
    <>
      {/* Main footer container for mobile */}
      <div className='footer-mobile'>
        
        {/* Footer logo */}
        <div>
          <img src="images/logos/Logo-footer.png" width={64} height={31} loading='lazy' alt="logoFooter" />
        </div>

        {/* Footer description and slogan */}
        <div className='footer-mobile__description'>
          <h5 className='footer-mobile__title'>سقفینو؛ سقفی برای یک زندگی ایده‌آل</h5>
          <span className='footer-mobile__subtitle'>تجربه لذت خانه‌دار شدن آنی و آسان</span>
        </div>

        {/* Categories section */}
        <div className='footer-mobile__categories'>
          {dataCategory.map(item => <CategoryBoxes key={item.id} {...item} />)} {/* Dynamically render CategoryBoxes */}
        </div>

        {/* Footer main description text */}
        <p className='footer-mobile__description-text'>
          سقفینو پلی است تا به سرعت در بین هزاران آگهی ثبت‌شده جست‌وجو کنید. ملک مورد نظر را پیدا کنید و برای انجام معامله‌ای مطمئن، با مشاورین املاک معتمد و متخصص شهرتان در ارتباط باشید.
        </p>

        {/* Services section */}
        <div className='footer-mobile__services'>
          {sections.map(item => <ServicesSectionItems key={item.id} {...item} />)} {/* Dynamically render ServicesSectionItems */}
        </div>

        {/* Trust logo */}
        <div className='footer-mobile__trust-logo'>
          <img src="images/logos/Logo-trust.webp" width={35} loading='lazy' alt="logoTrust" />
        </div>

        {/* Footer graphic image */}
        <div>
          <img className='footer-mobile__graphic-image' src="images/footer_graphic_city.png" width={324} height={60} loading='lazy' alt="grapphicCity" />
        </div>
      </div>
    </>
  )
}
