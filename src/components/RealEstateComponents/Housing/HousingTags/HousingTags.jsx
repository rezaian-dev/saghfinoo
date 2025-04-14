import React, { memo } from "react";

const HousingTags = memo(() => {
  const dataTages = [
    { id: 1, title: "رونق و رکود بازار" },
    { id: 2, title: "رکود قیمت مسکن در سال ۱۴۰۲" },
    { id: 3, title: "تورم منفی مسکن" },
  ];

  return (
    <div>
      {/* 🏷 Tags Section Title */}
      <h4 className="housing-tags__title">
        برچسب ها
      </h4>

      {/* 🔖 Tags List */}
      <div className="housing-tags__list">
        {dataTages.map(({ id, title }) => (
          <a
            href="#"
            key={id}
            className="housing-tags__item"
          >
            {title}
          </a>
        ))}
      </div>
    </div>
  );
});

export default HousingTags;
