import { Car, Fatrows, Grid2, House2, Receipt1, Slider, Sun, Sun1 } from "iconsax-react";
import React from "react";

export default function PropertyAmenities() {
  // Data list containing property amenities
  const dataList = [
    { id: 1, title: "پارکینگ", icon: <Car className="!w-4 !h-4 md:!w-6 md:!h-6" color="#353535" variant="Outline" />, value: "۱" },
    { id: 2, title: "انباری", icon: <House2 className="!w-4 !h-4 md:!w-6 md:!h-6" color="#353535" variant="Outline" />, value: "۱" },
    { id: 3, title: "آسانسور", icon: <Slider className="!w-4 !h-4 md:!w-6 md:!h-6" color="#353535" variant="Outline" />, value: "۲" },
    { id: 4, title: "جنس کف", icon: <Grid2 className="!w-4 !h-4 md:!w-6 md:!h-6" color="#353535" variant="Outline" />, value: "سرامیک" },
    { id: 5, title: "سرویس بهداشتی", icon: <Receipt1 className="!w-4 !h-4 md:!w-6 md:!h-6" color="#353535" variant="Outline" />, value: "۲" },
    { id: 6, title: "نوع سرویس بهداشتی", icon: <Fatrows className="!w-4 !h-4 md:!w-6 md:!h-6" color="#353535" variant="Outline" />, value: "فرنگی" },
    { id: 7, title: "سیستم سرمایش", icon: <Sun className="!w-4 !h-4 md:!w-6 md:!h-6" color="#353535" variant="Outline" />, value: "چیلر" },
    { id: 8, title: "سیستم گرمایش", icon: <Sun1 className="!w-4 !h-4 md:!w-6 md:!h-6" color="#353535" variant="Outline" />, value: "نوساز" }
  ];

  return (
    <>
      <div>
        {/* Section Title */}
        <h4 className="property-amenities__title">امکانات</h4>

        {/* Grid for the amenities sections */}
        <div className="property-amenities__grid">
          {/* First section with the first 4 items */}
          <div className="property-amenities__section">
            {dataList.slice(0, 4).map(({ id, title, icon, value }) => {
              return (
                <div key={id} className="property-amenities__item">
                  {/* Icon and title for the amenity */}
                  <div className="property-amenities__item-icon-title">
                    {icon}
                    <span className="property-amenities__item-title">
                      {title}:
                    </span>
                  </div>
                  {/* Value of the amenity */}
                  <span className="property-amenities__item-value">
                    {value}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Second section with the remaining items */}
          <div className="property-amenities__section">
            {dataList.slice(4).map(({ id, title, icon, value }) => {
              return (
                <div key={id} className="property-amenities__item">
                  {/* Icon and title for the amenity */}
                  <div className="property-amenities__item-icon-title">
                    {icon}
                    <span className="property-amenities__item-title">
                      {title}:
                    </span>
                  </div>
                  {/* Value of the amenity */}
                  <span className="property-amenities__item-value">
                    {value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

