import React, { memo } from "react";
import PremierRealtorsBox from "../../../LayoutComponents/Boxes/PremierRealtorsBox/PremierRealtorsBox";
import { dataCardRealestates } from "../../../../data/realEstateData";
import useShowItem from "../../../../hooks/useShowItem";

// Memoize the component to optimize re-renders
const RealestatesListing = memo(() => {
  // Use custom hook to manage the number of items shown
  const { isCountShowItem, handlerShowItem } = useShowItem(6, dataCardRealestates);

  return (
    <>
      {/* 🏡 Display real estate items */}
      <div className="realestates-listing__grid">
        {dataCardRealestates.slice(0, isCountShowItem).map((item) => (
          <PremierRealtorsBox key={item.id} {...item} hover={true} />
        ))}
      </div>

      {/* 📲 Show "Show More" button if there are more than 6 items */}
      <div className={dataCardRealestates.length > 6 ? "block" : "hidden"}>
        <span
          className="realestates-listing__show-more-btn"
          onClick={handlerShowItem}
        >
          {isCountShowItem > dataCardRealestates.length ? "مشاهده کمتر" : "مشاهده بیشتر"}
        </span>
      </div>
    </>
  );
});

export default RealestatesListing;
