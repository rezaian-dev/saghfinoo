import React, { memo } from "react";

const PropertyDescription = memo(({ageBuilding, documentTypeLabel, securityFeatures, otherAmenities, visitTime, geographicalPosition}) => {
    // List of property details with descriptions
    const propertyDetails = [
      {id: 1, label: "سن بنا", value: `${ageBuilding.toLocaleString("fa-IR")} سال `},
      { id: 2, label: "موقعیت جغرافیایی بنا", value: geographicalPosition },
      { id: 3, label: "نوع سند", value: documentTypeLabel },
      { id: 4, label: "امکانات امنیتی", value: securityFeatures },
      { id: 5, label: "سایر امکانات", value: otherAmenities },
      { id: 6, label: "زمان بازدید", value: visitTime },
    ];

    return (
      // 🏡 Main container for the property description
      <div>
        {/* 📌 Section title */}
        <h4 className="property-description__title">توضیحات</h4>

        {/* 📋 List of property details */}
        <div className="space-y-3">
          {propertyDetails.map(({ id, label, value }) => {
            const valueString = Array.isArray(value) ? value.join("، ") : value;

            return (
              <span key={id} className="property-description__item">
                {/* 🏷️ Displaying label and value */}
                {label}: {valueString}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
);

export default PropertyDescription;
