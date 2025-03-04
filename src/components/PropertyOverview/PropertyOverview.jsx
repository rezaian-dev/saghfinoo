import React, { memo } from "react";
import { Buliding, ExportCurve, RulerPen, TableLamp, Warning2 } from "iconsax-react";
import clsx from "classnames";

const PropertyOverview = memo(() => {
  // 🏠 Property details (area, rooms, floors)
  const dataBox = [
    { id: 1, title: "متراژ", caption: "۱۱۵ متر", icon: RulerPen },
    { id: 2, title: "اتاق", caption: "۲ خواب", icon: TableLamp },
    { id: 3, title: "طبقه", caption: "۳ از ۴", icon: Buliding },
  ];

  // 💰 Lease information (deposit, monthly rent)
  const leaseInfo = [
    { id: 1, title: "ودیعه", caption: "۶۰۰ میلیون تومان" },
    { id: 2, title: "اجاره ماهیانه", caption: "۳۰ میلیون تومان" },
  ];

  return (
    <div className="property-overview">
      {/* 🏠 Property Overview Header */}
      <div className="property-overview__header container">
        <div className="property-overview__header-title">
          <span className="property-overview__header-title-text">
            رهن و اجاره آپارتمان تهران
          </span>
          <span className="property-overview__header-icons">
            {/* 📤 Export icon */}
            <ExportCurve className="property-overview__header-icon" color="#353535" variant="Outline" />
            {/* 📂 Archive icon */}
            <img
              className="property-overview__header-icon"
              src="svgs/icons/archive-minus(bg-gray-11).svg"
              loading="lazy"
              alt="archiveMenu"
            />
          </span>
        </div>
        {/* 📍 Location */}
        <h4 className="property-overview__location">۲۰۰ متر، محدوده ونک، بلوار دانش</h4>
      </div>

      {/* 📌 Property Details */}
      <div className="property-overview__details">
        <div className="property-overview__grid">
          {dataBox.map(({ id, title, caption, icon: Icon }) => (
            <div key={id} className="property-overview__box">
              <div className="property-overview__box-header">
                <Icon className="property-overview__icon" color="#353535" variant="Outline" />
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
          {leaseInfo.map(({ id, title, caption }) => (
            <div key={id} className="property-overview__lease-item">
              <h4 className="property-overview__lease-title">{title}</h4>
              <h6 className="property-overview__lease-caption">{caption}</h6>
            </div>
          ))}
        </div>

        {/* 🚨 Report Section */}
        <div className="property-overview__report">
          <div className="property-overview__report-header">
            <span className="property-overview__report-time">ساعاتی پیش تهران</span>
            <div className="property-overview__report-actions">
              <Warning2 className="property-overview__report-icon" color="#ED2E2E" variant="Outline" />
              <span className="property-overview__report-text">گزارش تخلف آگهی</span>
            </div>
          </div>
          {/* 📌 Advertisement ID */}
          <span className="property-overview__report-id">شناسه آگهی: ۲۳۴۴</span>
        </div>
      </div>
    </div>
  );
});

export default PropertyOverview;
