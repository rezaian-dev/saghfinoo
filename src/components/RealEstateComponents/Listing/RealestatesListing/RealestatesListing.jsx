import React, { memo } from "react";
import { useLocation } from "react-router-dom";
import PremierRealtorsBox from "../../../LayoutComponents/Boxes/PremierRealtorsBox/PremierRealtorsBox";
import useShowItem from "../../../../hooks/useShowItem";

const RealestatesListing = memo(({ listRealestates }) => {
  const { isCountShowItem, handlerShowItem } = useShowItem(6, listRealestates);
  const { pathname } = useLocation();

  const isRealestatePage = pathname === "/realestates";
  const emptyMessage = isRealestatePage ? "دفتر املاکی یافت نشد" : "مشاوری یافت نشد";

  return (
    <>
      {/* 🏡 Display real estate items */}
      {listRealestates.length > 0 ? (
        <div className="realestates-listing__grid">
          {listRealestates.slice(0, isCountShowItem).map((item) => (
            <PremierRealtorsBox key={item.id} {...item} hover={true} />
          ))}
        </div>
      ) : (
        <h2 className="empty-state__title">{emptyMessage}</h2>
      )}

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
