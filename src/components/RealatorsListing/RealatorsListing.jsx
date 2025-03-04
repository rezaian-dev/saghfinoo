import React, { memo } from "react";
import clsx from "classnames";
import TopConsultantsBox from "../TopConsultantsBox/TopConsultantsBox";
import useShowItem from "../../hooks/useShowItem";
import { agents } from "../../data/realEstateData";

const RealatorsListing = memo(() => {
  const { isCountShowItem, handlerShowItem } = useShowItem(8, agents);
  const hasMoreItems = agents.length > 8;

  return (
    <>
      {/* 🔹 Agents Grid */}
      <div className="realators-listing__grid">
        {agents.slice(0, isCountShowItem).map((item) => (
          <TopConsultantsBox key={item.id} {...item} hover={true} />
        ))}
      </div>

      {/* 🔻 Show More / Show Less Button */}
      <div className={clsx(hasMoreItems ? "block" : "hidden")}>
        <span
          className="realators-listing__show-more-btn"
          onClick={handlerShowItem}
        >
          {isCountShowItem > agents.length ? "مشاهده کمتر" : "مشاهده بیشتر"}
        </span>
      </div>
    </>
  );
});

export default RealatorsListing;
