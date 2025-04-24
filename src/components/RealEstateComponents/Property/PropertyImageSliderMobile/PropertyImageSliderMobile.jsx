import React, { memo } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const PropertyImageSliderMobile = memo(({images}) => {

  return (
    <>
      {/* 📱 Swiper component for mobile view */}
      <Swiper
        className="property-image-slider-mobile__container"
        spaceBetween={50} // 🔄 Space between slides
        pagination={{ clickable: true }} // 🎯 Enable clickable pagination
        modules={[Pagination]} // 🧩 Enable pagination module
      >
        {/* 🔄 Mapping through the list of images */}
        {images.map(({ id, img, alt }) => (
          <SwiperSlide key={id}>
            {/* 🖼️ Display image for the property */}
            <img className="property-image-slider-mobile__image" src={img} loading="lazy" alt={alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
});

export default PropertyImageSliderMobile;
