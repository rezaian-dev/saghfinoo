import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import PremierRealtorsBox from "../../../LayoutComponents/Boxes/PremierRealtorsBox/PremierRealtorsBox";
import useSwiperSlider from "../../../../hooks/useSwiperSlider";
import { premierRealtorsData } from "../../../../data/realEstateData";

 const PremierRealtors = memo(({text,btnModal}) => {

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
          {premierRealtorsData.map((item) => (
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
