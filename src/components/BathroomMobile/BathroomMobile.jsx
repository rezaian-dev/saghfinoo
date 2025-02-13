import React, { memo, useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import clsx from "classnames";

/**
 * BathroomMobile Component
 *
 * A mobile-friendly selector for choosing the number of bathrooms.
 * Utilizes context to manage the selected bathroom count.
 * 
 * Props:
 * - name: The title of the selector.
 * - labels: Array of label objects containing id, name, and value for each button.
 */

const BathroomMobile = memo(({ name, labels }) => {
  // Extract selected bathroom count and the setter function from context
  const { selectedBathroomCount, setSelectedBathroomCount } = useContext(FilterContext);

  return (
    <div className="bathroom-selector">
      {/* Title of the bathroom selector */}
      <span className="bathroom-selector__title">{name}</span>

      <div className="bathroom-selector__buttons">
        {/* Render each button based on the labels array */}
        {labels.map(({ id, name, value }) => (
          <button
            key={id}
            onClick={() => setSelectedBathroomCount(value)} // Update selected bathroom count when a button is clicked
            className={clsx(
              "bathroom-selector__button", // Base button class
              {
                "bathroom-selector__button--active": selectedBathroomCount === value, // Active button style
                "bathroom-selector__button--rounded-right": value === "any", // Apply right-rounded class if value is "any"
                "bathroom-selector__button--rounded-left": value === "5+", // Apply left-rounded class if value is "5+"
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

export default BathroomMobile;
