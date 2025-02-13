import React, { memo, useContext } from 'react';
import clsx from 'classnames';
import { FilterContext } from '../../context/FilterContext';

/**
 * FloorMobile Component
 * 
 * A mobile-friendly selector for choosing the floor level.
 * Utilizes context to manage the selected floor.
 * 
 * Props:
 * - name: The title of the selector.
 * - labels: Array of label objects containing id, name, and value for each button.
 */

const FloorMobile = memo(({ name, labels }) => {
  // Extract selected floor level and the setter function from context
  const { selectedFloor, setSelectedFloor } = useContext(FilterContext);

  return (
    <div className="floor-selector">
      {/* Title of the floor selector */}
      <span className="floor-selector__title">{name}</span>

      <div className="floor-selector__buttons">
        {/* Render each button based on the labels array */}
        {labels.map(({ id, name, value }) => (
          <button
            key={id}
            value={value}
            onClick={() => setSelectedFloor(value)} // Update selected floor level on button click
            className={clsx(
              "floor-selector__button", // Base button class
              {
                "floor-selector__button--active": selectedFloor === value, // Active button style
                "floor-selector__button--rounded-right": value === "any", // Apply right-rounded style if value is "any"
                "floor-selector__button--rounded-left": value === "5+", // Apply left-rounded style if value is "5+"
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

export default FloorMobile;
