import React from "react";
import TopConsultantsBox from "../TopConsultantsBox/TopConsultantsBox";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import useSwiperSlider from "../../hooks/useSwiperSlider";
import { agents } from "../../data/realEstateData";

export default function TopConsultants() {
  
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
          {agents.slice(0,5).map((item) => (
            <SwiperSlide key={item.id}>
              <TopConsultantsBox {...item} /> {/* Render consultant details */}
            </SwiperSlide>
          ))}
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
}
