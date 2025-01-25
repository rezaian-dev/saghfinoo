import React from "react";
import TopConsultantsBox from "../TopConsultantsBox/TopConsultantsBox";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import useSwiperSlider from "../../hooks/useSwiperSlider";

export default function TopConsultants() {
  const agents = [
    {id:1, name: "علی پرتو", image: "images/landing/homeprouser/ali-parto.png", agency: "املاک توسی", ratingText: "امتیاز 5 از 5", alt: "aliParto" },
    {id:2, name: "زیبا تاجدار", image: "images/landing/homeprouser/zita-tajdar.png", agency: "املاک فرشته", ratingText: "امتیاز 4 از 5", alt: "fereshteh" },
    {id:3, name: "رز دانش", image: "images/landing/homeprouser/roz-danesh.png", agency: "املاک سبز", ratingText: "امتیاز 4.8 از 5", alt: "rozDanesh" },
    {id:4, name: "ماندانا تبریزی", image: "images/landing/homeprouser/mandana-tabrizi.png", agency: "املاک ولیعصر", ratingText: "امتیاز 4 از 5", alt: "mandanaTabrizi" },
    {id:5, name: "ماندانا تبریزی", image: "images/landing/homeprouser/mandana-tabrizi.png", agency: "املاک ولیعصر", ratingText: "امتیاز 4 از 5", alt: "mandanaTabrizi" },
  ];
  
// Swiper slider hooks and handlers
  const { isBeginning, setIsBeginning, isEnd, handleNext, handlePrev, setSwiper, setIsEnd } = useSwiperSlider();

  return (
    <>
     {/* Section title */}
      <h3 className="top-consultants__title">مشاورین برتر تهران</h3>

       {/* Slider container */}
      <div className="top-consultants__slider">
        <Swiper
          spaceBetween={24}
          slidesPerView={4}
          loop={false}
          modules={[Navigation]}
          onSwiper={setSwiper} // Capture the swiper instance
          onSlideChange={(swiper) => {
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
          {/* Map through the agents list to render each consultant */}
          {agents.map((item) => (
            <SwiperSlide key={item.id}>
              <TopConsultantsBox {...item} /> {/* Render consultant details */}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Previous button - hidden if at the beginning */}
        {!isBeginning && (
          <div onClick={handlePrev} className="top-consultants__button top-consultants__button--prev">
            <ArrowRight2 className="top-consultants__icon" color="#353535" variant="Outline"/>
          </div>
        )}

        {/* Next button - hidden if at the end */}
        {!isEnd && (
          <div onClick={handleNext} className="top-consultants__button top-consultants__button--next">
            <ArrowLeft2 className="top-consultants__icon" color="#353535" variant="Outline"/>
          </div>
        )}
      </div>
    </>
  );
}

