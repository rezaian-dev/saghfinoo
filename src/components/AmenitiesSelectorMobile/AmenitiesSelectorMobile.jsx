import React, { memo } from "react";
import clsx from "classnames";

/**
 * AmenitiesSelectorMobile Component
 * 
 * A mobile-friendly selector for choosing amenities.
 * This component uses the BEM methodology for class naming.
 * 
 * Props:
 * - name: The title of the selector.
 * - labels: Array of label objects containing id, name, and value for each button.
 * - systemState: Current selected value.
 * - setSystemState: Function to update the selected state.
 */

const AmenitiesSelectorMobile = memo(({ name, labels, systemState, setSystemState }) => {
  return (
    <div className="amenities-selector">
      {/* Title of the amenities selector */}
      <span className="amenities-selector__title">{name}</span>

      <div className="amenities-selector__buttons">
        {/* Render each button based on the labels array */}
        {labels.map(({ id, name, value }) => (
          <button
            key={id}
            onClick={() => setSystemState(value)} // Update selected state when a button is clicked
            className={clsx(
              "amenities-selector__button", // Base button class
              {
                "amenities-selector__button--active": systemState === value, // Highlight selected button
                "amenities-selector__button--rounded-right": value === "any", // Apply rounded-right class if value is "any"
                "amenities-selector__button--rounded-left": value === "5+" // Apply rounded-left class if value is "5+"
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

export default AmenitiesSelectorMobile;
