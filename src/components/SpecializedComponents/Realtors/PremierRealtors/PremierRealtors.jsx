import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import PremierRealtorsBox from "../../../LayoutComponents/Boxes/PremierRealtorsBox/PremierRealtorsBox";
import useSwiperSlider from "../../../../hooks/useSwiperSlider";

 const PremierRealtors = memo(({text,btnModal}) => {

  const dataCard = [
    {id: 1, title: "مشاور املاک توسی", image: "images/landing/home-prouser/logo-tusi.png", location: "تهران، نیاوران", popularity: "۴/۹ از ۵", activeAd: "بیش از ۴۰۰۰", comment: " (۱۲ نظر)", tikBlue: true, alt: "logoTusi"},
    {id: 2, title: "مشاوراملاک ولیعصر", image: "images/landing/home-prouser/logo-valiasr.png", location: "تهران، خیابان ولیعصر", popularity: "۴ از ۵", activeAd: "بیش از ۳۵۰۰", comment: " (۱۲ نظر)", tikBlue: true, alt: "logoValiasr"},
    {id: 3, title: "مشاور املاک فرشته", image: "images/landing/home-prouser/logo-freshteh.png", location: "تهران، خیابان فرشته", popularity: "۴ از ۵", activeAd: "بیش از ۲۰۰۰", comment: " (۱۲ نظر)", tikBlue: false, alt: "logoFreshteh"},
    {id: 4, title: "مشاور املاک سبز", image: "images/landing/home-prouser/logo-sabz.png", location: "تهران، پاسداران", popularity: "۴ از ۵", activeAd: "بیش از  ۲۰۰۰", comment: " (۱۲ نظر)", tikBlue: false, alt: "logoSabz"},
    {id: 5, title: "مشاور املاک سبز", image: "images/landing/home-prouser/logo-sabz.png", location: "تهران، پاسداران", popularity: "۴ از ۵", activeAd: "بیش از  ۲۰۰۰", comment: " (۱۲ نظر)", tikBlue: false, alt: "logoSabz"},
  ];

  const { isBeginning, setIsBeginning, isEnd, handleNext, handlePrev, setSwiper, setIsEnd } = useSwiperSlider();
         
  return (
    <>
      <h3 className="premier-realtors__title">
        {text}
      </h3>
      <div className="premier-realtors__slider">
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
            435: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 16 },
            1280: { slidesPerView: 4, spaceBetween: 24 },
          }}
        >
          <div ref={btnModal}>
          {dataCard.map((item) => (
            <SwiperSlide className="p-1" key={item.id}>
              <PremierRealtorsBox {...item} /> {/* Render each news item */}
            </SwiperSlide>
          ))}
          </div>
        </Swiper>

         {/* 🔙Prev button - only show when not at the beginning */}
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
        
                {/* 🔜 Next Button - only show when not at the end */}
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
})

export default PremierRealtors
