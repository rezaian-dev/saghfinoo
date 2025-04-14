import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import HousingNewsBox from "../../../LayoutComponents/Boxes/HousingNewsBox/HousingNewsBox";
import useSwiperSlider from "../../../../hooks/useSwiperSlider";

const HousingNews = memo(() => {
  const {
    isBeginning,
    setIsBeginning,
    isEnd,
    handleNext,
    handlePrev,
    setSwiper,
    setIsEnd,
  } = useSwiperSlider();

  const dataCard = [
    {
      id: 1,
      caption:
        "رکود بازار مسکن؛فروشندگان در انتظار خریداران و خریداران در انتظار شکست نرخ فروشندگان",
      img: "images/landing/home-newuser/rokod_bazaar_maskan.webp",
      alt: "rokodBazaar",
    },
    {
      id: 2,
      caption:
        "خطر ویرانی زلزله در آسمان‌خراش‌ها بیشتر است یا در آپارتمان‌های کم‌ارتفاع و یا خانه‌های ویلایی ؟",
      img: "images/landing/home-newuser/khatar_zelze_asemankharash.webp",
      alt: "khatarZelzeAsemankharash",
    },
    {
      id: 3,
      caption:
        "بازار کساد کسب و کار معماران داخلی در پی بالا رفتن قیمت مواد و متریال اولیه و مصالح خارجی",
      img: "images/landing/home-newuser/kasad_bazaar_memaran.webp",
      alt: "kasadBazaar",
    },
    {
      id: 4,
      caption:
        "شهرک ساحلی زمزم در منطقه نور استان مازندران از سوم شهریور وارد بازار مزایده شده است.",
      img: "images/landing/home-newuser/shahrek_sahli_mazandaran.webp",
      alt: "shahrekSahli",
    },
    {
      id: 5,
      caption:
        "شهرک ساحلی زمزم در منطقه نور استان مازندران از سوم شهریور وارد بازار مزایده شده است.",
      img: "images/landing/home-newuser/shahrek_sahli_mazandaran.webp",
      alt: "shahrekSahli",
    },
  ];

  return (
    <>
      <h3 className="title">آخرین اخبار املاک را از سقفینو دنبال کنید</h3>

      <div className="housing-news__carousel">
        {/* 📰 Swiper component for displaying news slides */}
        <Swiper
          spaceBetween={24}
          slidesPerView={4}
          loop={false}
          modules={[Navigation]}
          onSwiper={setSwiper} // 📝 Capture the swiper instance
          onSlideChange={(swiper) => {
            // 📍 Update the state on slide change
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 16 },
            390: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 16 },
            1280: { slidesPerView: 4, spaceBetween: 24 },
          }}
        >
          {dataCard.map((item) => (
            <SwiperSlide key={item.id}>
              <HousingNewsBox {...item} /> {/* 🏠 Render each news item */}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 🔙 Previous Button */}
        {!isBeginning && (
          <div
            onClick={handlePrev}
            className="navigation-button navigation-button--prev"
          >
            <ArrowRight2
              className="navigation-button__icon"
              color="#353535"
              variant="Outline"
            />
          </div>
        )}

        {/* 🔜 Next Button */}
        {!isEnd && (
          <div
            onClick={handleNext}
            className="navigation-button navigation-button--next"
          >
            <ArrowLeft2
              className="navigation-button__icon"
              color="#353535"
              variant="Outline"
            />
          </div>
        )}
      </div>
    </>
  );
});

export default HousingNews;
