import React, { useState } from "react";
import PremierRealtorsBox from "../PremierRealtorsBox/PremierRealtorsBox";
import { dataCardRealestates } from "../../data/realEstateData";

export default function RealestatesListing() {
  const [isCountShowItem, setIsCountShowItem] = useState(6);

  // Toggle item count (Show More / Show Less)
  const handlerShowItem = () => {
    // Reset to 6 items if all items are shown
    if (isCountShowItem > dataCardRealestates.length) {
      setIsCountShowItem(6);
    } else {
      // Increase item count by 6
      setIsCountShowItem((prev) => prev + 6);
    }
  };

  return (
    <>
      {/* Display real estate items */}
      <div className="realestates-listing__grid">
        {dataCardRealestates.slice(0, isCountShowItem).map((item) => {
          return <PremierRealtorsBox key={item.id} {...item} hover={true} />;
        })}
      </div>
      {/* Show "Show More" button if there are more than 6 items */}
      <div className={dataCardRealestates.length > 6 ? "block" : "hidden"}>
        <span
          className="realestates-listing__show-more-btn"
          onClick={handlerShowItem}>
          {isCountShowItem > dataCardRealestates.length ? "مشاهده کمتر" : "مشاهده بیشتر"}
        </span>
      </div>
    </>
  );
}

