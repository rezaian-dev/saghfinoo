import React, { memo } from "react";
import { Buliding, ExportCurve, RulerPen, TableLamp, Warning2 } from "iconsax-react";

const PropertyOverview = memo(({ transactionType, labelCity, shortLocation, size, bedrooms, floor, totalFloors, mortgage, rent, propertyCode, releaseTime, price}) => {
    function formatPrice(amount) {
      if (+amount % 1000000 !== 0) {
        return `${amount.toLocaleString("fa-IR")} تومان`; // Normal price
      } else if (amount >= 1000000000) {
        return `${(amount / 1000000000).toLocaleString("fa-IR")} میلیارد تومان`; // Convert to Billion
      } else if (amount >= 1000000) {
        return `${(amount / 1000000).toLocaleString("fa-IR")} میلیون تومان`; // Convert to Million
      } else {
        return `${amount.toLocaleString("fa-IR")} تومان`; // Small values
      }
    }
    const toPersianNumber = (num) => {
      return String(num).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);
    };

    // 🏠 Property details (area, rooms, floors)
    const dataBox = [
      {
        id: 1,
        title: "متراژ",
        caption: `${size.toLocaleString("fa-IR")} متر`,
        icon: RulerPen,
      },
      {
        id: 2,
        title: "اتاق",
        caption: `${bedrooms.toLocaleString("fa-IR")} خواب`,
        icon: TableLamp,
      },
      {
        id: 3,
        title: "طبقه",
        caption: `${floor.toLocaleString(
          "fa-IR"
        )} از ${totalFloors.toLocaleString("fa-IR")}`,
        icon: Buliding,
      },
    ];

    // 💰 Lease information (deposit, monthly rent)
    const leaseInfo = [
      { id: 1, title: "ودیعه", caption: mortgage && formatPrice(mortgage) },
      { id: 2, title: "اجاره ماهیانه", caption: rent && formatPrice(rent) },
      { id: 3, title: "فروش", caption: price && formatPrice(price) },
    ];

    return (
      <div className="w-full">
        {/* 🏠 Property Overview Header */}
        <div className="property-overview__header container">
          <div className="property-overview__header-title">
            <span className="property-overview__header-title-text">
              {transactionType === "rent"
                ? `رهن و اجاره آپارتمان ${labelCity}`
                : `خرید آپارتمان ${labelCity}`}
            </span>
            <span className="icon-sizes">
              {/* 📤 Export icon */}
              <ExportCurve
                className="icon-size cursor-pointer pointer-events-auto"
                color="#353535"
                variant="Outline"
              />
              {/* 📂 Archive icon */}
              <img
                className="icon-size"
                src="../../svgs/icons/archive-minus(bg-gray-11).svg"
                loading="lazy"
                alt="archiveMenu"
              />
            </span>
          </div>
          {/* 📍 Location */}
          <h4 className="property-overview__location">{shortLocation}</h4>
        </div>

        {/* 📌 Property Details */}
        <div className="property-overview__details">
          <div className="property-overview__grid">
            {dataBox.map(({ id, title, caption, icon: Icon }) => (
              <div key={id} className="property-overview__box">
                <div className="property-overview__box-header">
                  <Icon
                    className="property-overview__icon"
                    color="#353535"
                    variant="Outline"
                  />
                  <h4 className="property-overview__box-title">{title}</h4>
                </div>
                <h5 className="property-overview__box-caption">{caption}</h5>
              </div>
            ))}
          </div>
        </div>

        {/* 💸 Lease Information */}
        <div className="property-overview__lease-info">
          <div className="property-overview__lease-list">
            {transactionType === "rent"
              ? leaseInfo.slice(0,2).map(({ id, title, caption }) => (
                  <div key={id} className="property-overview__lease-item">
                    <h4 className="property-overview__lease-title">{title}</h4>
                    <h6 className="property-overview__lease-caption">
                      {caption}
                    </h6>
                  </div>
                ))
              : leaseInfo.slice(2).map(({ id, title, caption }) => (
                  <div key={id} className="property-overview__lease-item">
                    <h4 className="property-overview__lease-title">{title}</h4>
                    <h6 className="property-overview__lease-caption">
                      {caption}
                    </h6>
                  </div>
                ))}
          </div>

          {/* 🚨 Report Section */}
          <div className="property-overview__report">
            <div className="property-overview__report-header">
              <span className="property-overview__report-time">
                {releaseTime} {labelCity}
              </span>
              <div className="property-overview__report-actions">
                <Warning2
                  className="icon-size"
                  color="#ED2E2E"
                  variant="Outline"
                />
                <span className="property-overview__report-text">
                  گزارش تخلف آگهی
                </span>
              </div>
            </div>
            {/* 📌 Advertisement ID */}
            <span className="property-overview__report-id">
              شناسه آگهی: {toPersianNumber(propertyCode)}
            </span>
          </div>
        </div>
      </div>
    );
  }
);

export default PropertyOverview;
