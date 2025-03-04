import React, { memo } from 'react';
import clsx from "classnames";

const HVACSystemBoxMobile = memo(({ selected, id, name, handleChangeBox }) => {
  return (
    <>
      {/* 🏷️ HVAC system box with dynamic class for active state */}
      <div className={clsx("hvac-system-box", selected && "hvac-system-box--active")} onClick={() => handleChangeBox(id)}>
        
        {/* ✅ Icon representing the selection state (checked or unchecked) */}
        <div>
          <img
            src={selected ? "svgs/icons/checked.svg" : "svgs/icons/checkBox.svg"}
            loading="lazy"
            alt="checkBox"
          />
        </div>
        
        {/* 🏠 Displaying the name of the HVAC system option */}
        <span className="hvac-system-box__title">{name}</span>
      </div>
    </>
  );
});

export default HVACSystemBoxMobile;
