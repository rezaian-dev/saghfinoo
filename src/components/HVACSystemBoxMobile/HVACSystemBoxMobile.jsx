import React from 'react'
import clsx from "classnames";

export default function HVACSystemBoxMobile({ selected, id, name, handleChangeBox }) {
  return (
    <>
      <div className={clsx("hvac-system-box", selected && "hvac-system-box--active")} onClick={() => handleChangeBox(id)}>
        {/* Icon representing the selection state */}
        <div>
          <img
            src={clsx( selected ? "svgs/icons/checked.svg" : "svgs/icons/checkBox.svg")}
            loading="lazy"
            alt="checkBox"
          />
        </div>
        
        {/* Displaying the name of the HVAC system option */}
        <span className="hvac-system-box__title">{name}</span>
      </div>
    </>
  );
}

