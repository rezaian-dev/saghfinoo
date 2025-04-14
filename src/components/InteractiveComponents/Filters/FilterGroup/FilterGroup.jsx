import React, { memo } from "react";
import FilterButton from "../../../CoreComponents/Buttons/FilterButton/FilterButton";

const FilterGroup = memo(({ title, name, options, value, setValue }) => {
 
  return (
    <div className="mb-6" dir="rtl">
      {/* 🏷️ Filter group title */}
      <h5 className="filter-group__title">{title}</h5>
      {/* 🔘 Filter buttons container */}
      <div className="flex">
        {options.map((option, index) => {
          const isFirstButton = index === 0;
          const isLastButton = index === options.length - 1;

          return (
            <FilterButton
              key={option.id}
              option={option}
              value={value}
              setValue={setValue}
              name={name}
              isFirstButton={isFirstButton}
              isLastButton={isLastButton}
            />
          );
        })}
      </div>
    </div>
  );
});

export default FilterGroup;
