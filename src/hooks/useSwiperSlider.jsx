import React, { useState } from "react";



export default function useSwiperSlider() {
  const [isBeginning, setIsBeginning] = useState(true); // Track if the slider is at the beginning
  const [isEnd, setIsEnd] = useState(false); // Track if the slider is at the end
  const [swiper, setSwiper] = useState(null); // Store Swiper instance

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
 

  return {isBeginning, setIsBeginning, isEnd, handleNext, handlePrev,setSwiper,setIsEnd};
}
