import React, { memo } from 'react';
import clsx from 'classnames';

// ✅ SelectionFilterOption component to render a checkbox with a label
// 💡 Uses memo to prevent unnecessary re-renders

const SelectionFilterOption = memo(({ id, label, selected, handleChangeBox, context = "desktop" }) => {
  
  return (
    <div
      className={clsx(
        // 📝 Apply base and selected styles conditionally
        "property-filter-box__check-box",
        selected && "bg-tint-1",
      )}
      onClick={() => handleChangeBox(id)}  // 🚀 Trigger checkbox change on click
    >
      <img
        // 🖼️ Display appropriate checkbox icon based on selection state
        src={selected ? "../../svgs/icons/checked.svg" : "../../svgs/icons/checkBox.svg"}
        loading="lazy"  // ⚡ Improve performance with lazy loading
        alt="checkBox"  // 🌟 Accessible description for screen readers
      />
      
      <span
        className={clsx(
          // 📱 Apply mobile or desktop styles based on context
          "property-filter-box__label",
          context === "mobile" 
            ? "text-[10px]" 
            : "md:text-sm"
        )}
        // 🏷️ Render the checkbox label
      >
        
        {label}   
      </span>
    </div>
  );
});

export default SelectionFilterOption;  // 🌐 Export the memoized component
