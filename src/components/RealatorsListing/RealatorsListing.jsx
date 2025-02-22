import React from "react";
import TopConsultantsBox from "../TopConsultantsBox/TopConsultantsBox";
import useShowItem from "../../hooks/useShowItem";
import { agents } from "../../data/realEstateData";

export default function RealatorsListing() {
  const { isCountShowItem, handlerShowItem } = useShowItem(8, agents);
  return (
    <>
      <div className="realators-listing__grid">
        {agents.slice(0, isCountShowItem).map((item) => {
          return <TopConsultantsBox key={item.id} {...item} hover={true} />;
        })}
      </div>
      {/* Show "Show More" button if there are more than 8 items */}
      <div className={agents.length > 8 ? "block" : "hidden"}>
        <span
          className="realators-listing__show-more-btn"
          onClick={handlerShowItem}>
          {isCountShowItem > agents.length ? "مشاهده کمتر" : "مشاهده بیشتر"}
        </span>
      </div>
    </>
  );
}
