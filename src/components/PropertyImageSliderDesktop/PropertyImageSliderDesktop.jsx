import React, { memo } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useSwiperSlider from "../../hooks/useSwiperSlider";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import clsx from "classnames";

const PropertyImageSliderDesktop = memo(() => {

  // 🧑‍💻 Destructure hook values for handling slider state
  const { isBeginning, setIsBeginning, isEnd, handleNext, handlePrev, setSwiper, setIsEnd } = useSwiperSlider();

  // 🖼️ List of property images
  const listImage = [
    { id: 1, img: "images/rent/home-details/house_1.webp", alt: "house_1" },
    { id: 2, img: "images/rent/home-details/house_2.webp", alt: "house_2" },
    { id: 3, img: "images/rent/home-details/house_3.webp", alt: "house_3" },
    { id: 4, img: "images/rent/home-details/house_4.webp", alt: "house_4" },
    { id: 5, img: "images/rent/home-details/house_5.webp", alt: "house_5" },
  ];

  // ⛔ Fill remaining space with default images if there are less than 10 images
  for (let i = 0; i < 10; i++) {
    if (listImage.length < 10) {
      listImage.push({ id: listImage.length + 1, img: "images/landing/home-prouser/no-image.webp", alt: "noImage" });
    } else {
      break;
    }
  }

  return (
    <div className="property-image-slider__container">
      {/* 🎡 Swiper component to display images */}
      <Swiper
        spaceBetween={24} // 🧑‍🔬 Space between slides
        slidesPerView={1} // 👀 Number of slides to show at once
        loop={false} // 🔄 Disable looping
        modules={[Navigation]} // 🧩 Enable navigation controls
        onSwiper={(swiper) => {
          setSwiper(swiper); // 📝 Initialize swiper state
          setIsBeginning(swiper.isBeginning); // 🏁 Check if at the beginning
          setIsEnd(swiper.isEnd); // 🏁 Check if at the end
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning); // 🏁 Update beginning state
          setIsEnd(swiper.isEnd); // 🏁 Update end state
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 16 }, // 📱 Mobile breakpoint
          768: { slidesPerView: 1, spaceBetween: 20 }, // 💻 Tablet breakpoint
          1024: { slidesPerView: 1, spaceBetween: 24 }, // 🖥️ Desktop breakpoint
        }}
      >
        {/* 🖼️ First SwiperSlide displaying first set of images */}
        <SwiperSlide>
          <div className="property-image-slider__grid">
            {listImage.slice(0, 5).map(({ id, img, alt }) => (
              <div key={id} className={clsx("property-image-slider__item", id === 1 && "row-span-2")}>
                <img className="property-image-slider__image" src={img} alt={alt} loading="lazy" />
              </div>
            ))}
          </div>
        </SwiperSlide>

        {/* 🖼️ Second SwiperSlide displaying second set of images */}
        <SwiperSlide>
          <div className="property-image-slider__grid">
            {listImage.slice(5, 10).map(({ id, img, alt }) => (
              <div key={id} className={clsx("property-image-slider__item", id === 6 && "row-span-2")}>
                <img className="property-image-slider__image" src={img} alt={alt} loading="lazy" />
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>

      {/* ⬅️ Prev button, visible when not at the beginning */}
      {!isBeginning && (
        <div onClick={handlePrev} className="property-image-slider__button property-image-slider__button--prev">
          <ArrowRight2 color="#353535" size={24} />
        </div>
      )}

      {/* ➡️ Next button, visible when not at the end */}
      {!isEnd && (
        <div onClick={handleNext} className="property-image-slider__button property-image-slider__button--next">
          <ArrowLeft2 color="#353535" size={24} />
        </div>
      )}
    </div>
  );
});

export default PropertyImageSliderDesktop;
