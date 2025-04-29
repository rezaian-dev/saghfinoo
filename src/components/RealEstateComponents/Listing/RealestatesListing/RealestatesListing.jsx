import React, { memo } from "react";
import PremierRealtorsBox from "../../../LayoutComponents/Boxes/PremierRealtorsBox/PremierRealtorsBox";
import useShowItem from "../../../../hooks/useShowItem";

const RealestatesListing = memo(({listRealestates}) => {
  // Use custom hook to manage the number of items shown
  const { isCountShowItem, handlerShowItem } = useShowItem(6, listRealestates);

  return (
    <>
      {/* 🏡 Display real estate items */}
      <div className="realestates-listing__grid">
        {listRealestates.slice(0, isCountShowItem).map((item) => (
          <PremierRealtorsBox key={item.id} {...item} hover={true} />
        ))}
      </div>

      {/* 📲 Show "Show More" button if there are more than 6 items */}
      <div className={listRealestates.length > 6 ? "block" : "hidden"}>
        <span
          className="realestates-listing__show-more-btn"
          onClick={handlerShowItem}
        >
          {isCountShowItem > listRealestates.length ? "مشاهده کمتر" : "مشاهده بیشتر"}
        </span>
      </div>
    </>
  );
});

export default RealestatesListing;
