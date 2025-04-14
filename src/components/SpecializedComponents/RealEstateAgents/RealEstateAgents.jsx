import React, { memo } from "react";
import { agents } from "../../../data/realEstateData";
import useShowItem from "../../../hooks/useShowItem";

const RealEstateAgents = memo(() => {
  const { isCountShowItem, handlerShowItem } = useShowItem(11, agents);

  return (
    <div className="space-y-4">
      {/* 🏡 Section title */}
      <h3 className="real-estate-agents__title">مشاوران توسی</h3>
      {/* 📊 Grid layout for displaying agents */}
      <div className="real-estate-agents__grid">
        {agents.slice(0, isCountShowItem).map(({ id, name, image }) => {
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
        {/* ➕ Button to show more or less agents */}
        <div className="real-estate-agents__more" onClick={handlerShowItem}>
          <h5 className="real-estate-agents__more-text">
            {agents.length - isCountShowItem > 0 ? (
              <>
                {/* ➕ Show more icon */}
                {agents.length - isCountShowItem > 1 ? "+" : ""}
                {(agents.length - isCountShowItem).toLocaleString("fa-IR")}
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
      </div>
    </div>
  );
});

export default RealEstateAgents;
