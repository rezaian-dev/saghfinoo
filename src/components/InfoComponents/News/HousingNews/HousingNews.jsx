import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import HousingNewsBox from "../../../LayoutComponents/Boxes/HousingNewsBox/HousingNewsBox";
import useSwiperSlider from "../../../../hooks/useSwiperSlider";
import { housingNewsArticles } from "../../../../data/realEstateData";

const HousingNews = memo(() => {
  const { isBeginning, setIsBeginning, isEnd, handleNext, handlePrev, setSwiper, setIsEnd } = useSwiperSlider();

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
          {housingNewsArticles.map((item) => (
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
