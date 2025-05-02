import React, { memo } from "react";
import SmallNewsCard from "../../../InfoComponents/Cards/SmallNewsCard/SmallNewsCard";
import { relatedNewsData } from "../../../../data/realEstateData";

const NewsSidebar = memo(() => {

  return (
    <aside>
      {/* Sidebar title for related news 📢 */}
      <h4 className="news-sidebar__title">
        اخبار مرتبط
      </h4>

      {/* Displaying news items as cards in a grid layout 📰 */}
      <div className="news-sidebar__content">
        {/* Mapping through the news items and rendering each one */}
        {relatedNewsData.map((item) => {
          return <SmallNewsCard key={item.id} {...item} height={"h-[138px]"} />;
        })}
      </div>
    </aside>
  );
});

export default NewsSidebar;
