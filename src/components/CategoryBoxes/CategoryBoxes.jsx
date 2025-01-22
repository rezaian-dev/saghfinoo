import React, { useState } from "react";
import { ArrowDown2 } from "iconsax-react";
// CategoryBoxes component that renders a list of categories with a toggle for showing more/less items
export default function CategoryBoxes({ title, items}) {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {/* Container for category box */}
      <div>
        {/* Title and list of items with dynamic height based on the 'showMore' state */}
        <div className={`category-boxes__content ${showMore ? "h-[87px]" : "h-[47px]"}`}>
          {/* Category title with dynamic font size based on the 'mobile' prop */}
          <span className="category-boxes__title">
            {title}
          </span>
          {/* List of items in the category */}
          <ul className="category-boxes__list">
            {items.map((item) => (
              <li key={item.id} className="category-boxes__list-item">
                {item.content}
              </li>
            ))}
          </ul>
        </div>

        {/* Toggle button to show more or less items */}
        <span className="category-boxes__toggle" onClick={() => setShowMore(!showMore)}>
          {showMore ? "مشاهده کمتر" : "مشاهده بیشتر"}
          <ArrowDown2 className={`category-boxes__toggle-icon  ${showMore ? "rotate-180" : ""
            }`} size="20" color="#871212"/>
        </span>
      </div>
    </>
  );
}

