import React from "react";
import clsx from "classnames";

export default function PropertyFilterBox({id, name, handleChangeBox, selected, context}) {
  
  return (
    <div 
      // Class for the checkbox container with conditional styling based on selected state
      className={clsx("property-filter-box__check-box", selected && "property-filter-box__check-box--selected")}
      onClick={() => handleChangeBox(id)} // Handles the click event to change the box state
      >
      
      <img 
        // Conditional source based on selected state, either checked or unchecked icon
        src={selected ? "svgs/icons/checked.svg" : "svgs/icons/checkBox.svg"} 
        loading="lazy" 
        alt="checkBox" // Descriptive alt text for accessibility
      />
      
      <span 
        // Class for the label text with conditional styling based on the context (mobile or desktop)
        className={clsx("property-filter-box__label",
        context === "mobile" ? "property-filter-box__label--mobile" : "property-filter-box__label--desktop")}
      >
        {name} {/* Displays the name of the filter option */}
      </span>
    </div>
  );
}


