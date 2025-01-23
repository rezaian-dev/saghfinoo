import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import HousingNewsBox from "../HousingNewsBox/HousingNewsBox";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

export default function HousingNews() {
  const [isBeginning, setIsBeginning] = useState(true); // Track if the slider is at the beginning
  const [isEnd, setIsEnd] = useState(false); // Track if the slider is at the end
  const [swiper, setSwiper] = useState(null); // Store Swiper instance

  const dataCard = [
    { id: 1, caption: "رکود بازار مسکن؛فروشندگان در انتظار خریداران و خریداران در انتظار شکست نرخ فروشندگان", img: "images/landing/homenewuser/rokod_bazaar_maskan.webp", alt: "rokodBazaar"},
    { id: 2, caption: "خطر ویرانی زلزله در آسمان خراش ها بیشتر است یا", img: "images/landing/homenewuser/khatar_zelze_asemankharash.webp", alt: "khatarZelzeAsemankharash"},
    { id: 3, caption: "بازار کساد کسب و کار معماران داخلی در پی بالا رفتن قیمت مو", img: "images/landing/homenewuser/kasad_bazaar_memaran.webp", alt: "kasadBazaar"},
    { id: 4, caption: "شهرک ساحلی زمزم در منطقه نور استان مازندران از سوم شهر", img: "images/landing/homenewuser/shahrek_sahli_mazandaran.webp", alt: "shahrekSahli"},
    { id: 5, caption: "شهرک ساحلی زمزم در منطقه نور استان مازندران از سوم شهر", img: "images/landing/homenewuser/shahrek_sahli_mazandaran.webp", alt: "shahrekSahli"}
  ];

  // Handle previous slide action
  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    }
  };

  // Handle next slide action
  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    }
  };

  return (
    <>
      <h3 className="housing-news__title">
        آخرین اخبار املاک را از سقفینو دنبال کنید
      </h3>

      <div className="housing-news__carousel">
        {/* Swiper component for displaying the news slides */}
        <Swiper
          spaceBetween={24}
          slidesPerView={4}
          loop={false}
          modules={[Navigation]}
          onSwiper={setSwiper} // Capture the swiper instance
          onSlideChange={(swiper) => { // Update the beginning and end state on slide change
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
              <HousingNewsBox {...item} /> {/* Render each news item */}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Prev button - only show when not at the beginning */}
        {!isBeginning && (
          <div onClick={handlePrev} className="housing-news__slider-button housing-news__slider-button--prev">
            <ArrowRight2 className="housing-news__icon" color="#353535" variant="Outline" />
          </div>
        )}

        {/* Next button - only show when not at the end */}
        {!isEnd && (
          <div onClick={handleNext} className="housing-news__slider-button housing-news__slider-button--next">
            <ArrowLeft2 className="housing-news__icon" color="#353535" variant="Outline" />
          </div>
        )}
      </div>
    </>
  );
}
