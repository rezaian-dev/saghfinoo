import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function PropertyImageSliderMobile() {
  // List of images for the property slider
  const listImage = [
    { id: 1, img: "images/rent/home-details/mobile-house_1.webp", alt: "house_1" },
    { id: 2, img: "images/rent/home-details/mobile-house_2.webp", alt: "house_2" },
    { id: 3, img: "images/rent/home-details/mobile-house_3.webp", alt: "house_3" },
    { id: 4, img: "images/rent/home-details/mobile-house_4.webp", alt: "house_4" },
    { id: 5, img: "images/rent/home-details/mobile-house_5.webp", alt: "house_5" },
  ];

  return (
    <>
      {/* Swiper component for mobile view */}
      <Swiper
        className="property-image-slider-mobile__container"
        spaceBetween={50}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {/* Mapping through the list of images */}
        {listImage.map(({ id, img, alt }) => (
          <SwiperSlide key={id}>
            <img className="property-image-slider-mobile__image" src={img} loading="lazy" alt={alt}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
