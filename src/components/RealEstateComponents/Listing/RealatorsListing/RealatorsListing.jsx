import React, { memo } from "react";
import clsx from "classnames";
import TopConsultantsBox from "../../../LayoutComponents/Boxes/TopConsultantsBox/TopConsultantsBox";
import useShowItem from "../../../../hooks/useShowItem";

const RealatorsListing = memo(({result}) => {
  const { isCountShowItem, handlerShowItem } = useShowItem(8, result);
  const hasMoreItems = result.length > 8;

  return (
    <>
      {/* 🔹 Agents Grid */}
      {result.length > 0 ?
      <div className="realators-listing__grid">
      {result.slice(0, isCountShowItem).map((item) => (
        <TopConsultantsBox key={item.id} {...item} hover={true} />
      ))}
    </div>:
     <h2 className="empty-state__title">مشاوری یافت نشد!</h2>
      }
      

      {/* 🔻 Show More / Show Less Button */}
      <div className={clsx(hasMoreItems ? "block" : "hidden")}>
        <span
          className="realators-listing__show-more-btn"
          onClick={handlerShowItem}
        >
          {isCountShowItem > result.length ? "مشاهده کمتر" : "مشاهده بیشتر"}
        </span>
      </div>
    </>
  );
});

export default RealatorsListing;
