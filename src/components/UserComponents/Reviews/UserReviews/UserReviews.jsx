import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import useSwiperSlider from "../../../../hooks/useSwiperSlider";
import { agents, dataCardRealestates } from "../../../../data/realEstateData";
import { useParams } from "react-router-dom";

/**
 * 📝 UserReviews Component
 * Displays user reviews for a selected consultant with swiper slider functionality
 */
const UserReviews = memo(() => {
  const {id} = useParams();
 
  const target = agents.find(item => item.id === +id)

  // 🔍 Filter selected consultant's reviews
  const selectedConsultant = dataCardRealestates.filter((item) => item.title ===target.agency);


  // 🔄 Swiper slider state and handlers
  const { isBeginning, setIsBeginning, isEnd, handleNext, handlePrev, setSwiper, setIsEnd } = useSwiperSlider();

  return (
    <div>
      <h3 className="user-reviews__title">نظرات کاربران</h3>

      <div className="relative">
        <Swiper
          spaceBetween={24}
          slidesPerView={4}
          loop={false}
          modules={[Navigation]}
          onSwiper={setSwiper} // 🖱️ Capture swiper instance
          onSlideChange={(swiperInstance) => {
            setIsBeginning(swiperInstance.isBeginning); // 🏁 Set swiper start state
            setIsEnd(swiperInstance.isEnd); // 🏁 Set swiper end state
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 16 },
            1280: { slidesPerView: 4, spaceBetween: 32 },
          }}
        >
          {/* 🔄 Render reviews from selected consultant */}
          {selectedConsultant[0].reviews.map(({ id, userName, rating, comment, image }) => (
            <SwiperSlide className="p-1" key={id}>
              <div className="user-reviews__card">
                <div className="user-reviews__card-header">
                  {/* 🖼️ User avatar */}
                  <img className="user-reviews__avatar" src={image} loading="lazy" alt={userName} />
                  <div className="user-reviews__user-info">
                    {/* 👤 User name */}
                    <span className="user-reviews__username">{userName}</span>
                    {/* ⭐ User rating */}
                    <span className="user-reviews__rating">{`امتیاز ${rating.toLocaleString("fa-IR")} از ۵`}</span>
                  </div>
                </div>
                {/* 💬 User comment */}
                <p className="user-reviews__comment">{comment}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 🔙 Prev button - only show when not at the beginning */}
        {!isBeginning && (
          <div onClick={handlePrev} className="navigation-button navigation-button--prev">
            <ArrowRight2 className="navigation-button__icon" color="#353535" variant="Outline" />
          </div>
        )}

        {/* 🔜 Next button - only show when not at the end */}
        {!isEnd && (
          <div onClick={handleNext} className="navigation-button navigation-button--next">
            <ArrowLeft2 className="navigation-button__icon" color="#353535" variant="Outline" />
          </div>
        )}
      </div>
    </div>
  );
});

export default UserReviews;
