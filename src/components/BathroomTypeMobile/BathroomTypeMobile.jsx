import React, { memo, useContext } from "react";
import clsx from "classnames";
import { FilterContext } from "../../context/FilterContext";

/**
 * BathroomTypeMobile Component
 *
 * A mobile-friendly selector for choosing the bathroom type.
 * Uses context to manage the selected bathroom type.
 * 
 * Props:
 * - name: The title of the selector.
 * - labels: Array of label objects containing id, name, and value for each button.
 */

const BathroomTypeMobile = memo(({ name, labels }) => {
  // Extract selected bathroom type and the setter function from context
  const { selectedBathroomType, setSelectedBathroomType } = useContext(FilterContext);

  return (
    <div className="bathroom-type-selector">
      {/* Title of the bathroom type selector */}
      <span className="bathroom-type-selector__title">{name}</span>

      <div className="bathroom-type-selector__buttons">
        {/* Render each button based on the labels array */}
        {labels.map(({ id, name, value }) => (
          <button
            key={id}
            onClick={() => setSelectedBathroomType(value)} // Update selected bathroom type on button click
            className={clsx(
              "bathroom-type-selector__button", // Base button class
              {
                "bathroom-type-selector__button--active": selectedBathroomType === value, // Active button style
                "bathroom-type-selector__button--rounded-right": value === "any", // Apply right-rounded style if value is "any"
                "bathroom-type-selector__button--rounded-left": value === "5+", // Apply left-rounded style if value is "5+"
              }
            )}
          >
            {name} {/* Display the label name */}
          </button>
        ))}
      </div>
    </div>
  );
});

export default BathroomTypeMobile;
