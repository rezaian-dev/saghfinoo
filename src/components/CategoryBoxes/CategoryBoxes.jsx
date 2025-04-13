import React, { memo,useState } from "react";
import { ArrowDown2 } from "iconsax-react";
import clsx from "classnames";

// 📑 CategoryBoxes component that renders a list of categories with a toggle for showing more/less items
const CategoryBoxes = memo(({ title, items }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {/* 📦 Container for category box */}
      <div className="category-boxes">
        {/* 🔍 Title and list of items with dynamic height based on the 'showMore' state */}
        <div
          className={clsx("category-boxes__content", {
            "h-[87px]": showMore,
          })}
        >
          {/* 🏷️ Category title */}
          <span className="category-boxes__title">
            {title}
          </span>
          {/* 📋 List of items in the category */}
          <ul className="category-boxes__list">
            {items.map(({ id, content }) => (
              <li key={id} className="category-boxes__list-item">
                {content}
              </li>
            ))}
          </ul>
        </div>

        {/* 🔽 Toggle button to show more or less items */}
        <span
          className="category-boxes__toggle"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? "مشاهده کمتر" : "مشاهده بیشتر"}
          <ArrowDown2
            className={clsx("category-boxes__toggle-icon", {
              "rotate-180": showMore,
            })}
            size="20"
            color="#871212"
          />
        </span>
      </div>
    </>
  );
});

export default CategoryBoxes;
