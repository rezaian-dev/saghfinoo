import React from "react";
import PremierRealtorsBox from "../PremierRealtorsBox/PremierRealtorsBox";
import { dataCardRealestates } from "../../data/realEstateData";
import useShowItem from "../../hooks/useShowItem";

export default function RealestatesListing() {
 const {isCountShowItem, handlerShowItem} = useShowItem(6,dataCardRealestates);

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

