import React, { memo } from "react";
import useShowItem from "../../../hooks/useShowItem";

const RealEstateAgents = memo(({relatorList = []}) => {
  const { isCountShowItem, handlerShowItem } = useShowItem(11, relatorList);

  return (
    <div className="space-y-4">
      {/* 🏡 Section title */}
      <h3 className="real-estate-agents__title">مشاوران {relatorList[0]?.agency.replace("مشاور املاک","")}</h3>
      
      {/* If no agents are found */}
      {relatorList.length === 0 ? (
        <h2 className="text-primary">مشاوری یافت نشد</h2>
      ) : (
        /* 📊 Grid layout for displaying agents */
        <div className="real-estate-agents__grid">
          {relatorList.slice(0, isCountShowItem).map(({ id, name, image }) => {
            return (
              <div key={id} className="real-estate-agents__item">
                <div className="real-estate-agents__image-wrapper">
                  {/* 🖼️ Agent image */}
                  <img
                    className="real-estate-agents__image"
                    src={image}
                    loading="lazy"
                    alt={name}
                  />
                </div>
                {/* 🏷️ Agent name */}
                <h6 className="real-estate-agents__name">{name}</h6>
              </div>
            );
          })}
          
          {/* ➕ Button to show more or less agents - only displayed when list length > 9 */}
          {relatorList.length > 9 && (
            <div className="real-estate-agents__more" onClick={handlerShowItem}>
              <h5 className="real-estate-agents__more-text">
                {relatorList.length - isCountShowItem > 0 ? (
                  <>
                    {/* ➕ Show more icon */}
                    {relatorList.length - isCountShowItem > 1 ? "+" : ""}
                    {(relatorList.length - isCountShowItem).toLocaleString("fa-IR")}
                    <br />
                    مشاور دیگر
                  </>
                ) : (
                  <>
                    {/* 🔼 Show less icon */}
                    مشاهده کمتر
                  </>
                )}
              </h5>
            </div>
          )}
        </div>
      )}
    </div>
  );
});

export default RealEstateAgents;
