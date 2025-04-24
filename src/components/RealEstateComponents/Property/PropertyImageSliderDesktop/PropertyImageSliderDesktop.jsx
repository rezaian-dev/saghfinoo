import React, { memo } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import clsx from "classnames";
import useSwiperSlider from "../../../../hooks/useSwiperSlider";

const PropertyImageSliderDesktop = memo(({images}) => {
  // 🧑‍💻 Destructure hook values for handling slider state
  const { isBeginning, setIsBeginning, isEnd, handleNext, handlePrev, setSwiper, setIsEnd } = useSwiperSlider();

  // 🧷 Create a shallow copy to avoid mutating the original images array
  const filledImages = [...images];

  // ⛔ Fill remaining space with default images if there are less than 5 images (for first slide)
  const minImagesForFirstSlide = 5;
  for (let i = filledImages.length; i < minImagesForFirstSlide; i++) {
    filledImages.push({
      id: i, // Fixed ID generation
      img: "../../images/rent/rent-page/no-image.webp",
      alt: "noImage"
    });
  }

  // Determine if we need a second slide
  const needsSecondSlide = images.length > 5;
  
  // If we need a second slide, fill it with images or defaults as needed
  if (needsSecondSlide) {
    // Fill up to 10 total images for second slide if needed
    for (let i = filledImages.length; i < 10; i++) {
      filledImages.push({
        id: i, // Fixed ID generation
        img: "../../images/rent/rent-page/no-image.webp",
        alt: "noImage"
      });
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
            {filledImages.slice(0, 5).map(({ id, img, alt }, index) => (
              <div key={id} className={clsx("property-image-slider__item", index === 0 && "row-span-2")}>
                <img className="property-image-slider__image" src={img} alt={alt} loading="lazy" />
              </div>
            ))}
          </div>
        </SwiperSlide>

        {/* 🖼️ Second SwiperSlide displaying second set of images - only if needed */}
        {needsSecondSlide && (
          <SwiperSlide>
            <div className="property-image-slider__grid">
              {filledImages.slice(5, 10).map(({ id, img, alt }, index) => (
                <div key={id} className={clsx("property-image-slider__item", index === 0 && "row-span-2")}>
                  <img className="property-image-slider__image" src={img} alt={alt} loading="lazy" />
                </div>
              ))}
            </div>
          </SwiperSlide>
        )}
      </Swiper>

      {/* ⬅️ Prev button, visible when not at the beginning */}
      {!isBeginning && (
        <div onClick={handlePrev} className="property-image-slider__button property-image-slider__button--prev">
          <ArrowRight2 color="#353535" size={24} />
        </div>
      )}

      {/* ➡️ Next button, visible when not at the end and we need a second slide */}
      {!isEnd && needsSecondSlide && (
        <div onClick={handleNext} className="property-image-slider__button property-image-slider__button--next">
          <ArrowLeft2 color="#353535" size={24} />
        </div>
      )}
    </div>
  );
});

export default PropertyImageSliderDesktop;
