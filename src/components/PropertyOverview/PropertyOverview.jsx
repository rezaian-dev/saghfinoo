import { Buliding, ExportCurve, RulerPen, TableLamp, Warning2 } from "iconsax-react";
import React from "react";

export default function PropertyOverview() {
   // Data for the property details section
  const dataBox = [
    {id: 1, title: "متراژ", caption: "۱۱۵ متر", icon: (<RulerPen className="property-overview__icon" color="#353535" variant="Outline"/>) },
    { id: 2, title: "اتاق", caption: "۲ خواب", icon: (<TableLamp className="property-overview__icon" color="#353535" variant="Outline"/>)} ,
    { id: 3, title: "طبقه", caption: "۳ از ۴", icon: (<Buliding className="property-overview__icon" color="#353535" variant="Outline"/>) },
  ];
   // Data for the lease information section
  const leaseInfo = [
    { id: 1, title: "ودیعه", caption: "۶۰۰ میلیون تومان" },
    { id: 2, title: "اجاره ماهیانه", caption: "۳۰ میلیون تومان" },
  ];

  return (
    <>
      <div className="property-overview">
        {/* Property Overview Header */}
        <div className="property-overview__header container">
          <div className="property-overview__header-title">
            {/* Title of the property */}
            <span className="property-overview__header-title-text">رهن و اجاره آپارتمان تهران</span>
            <span className="property-overview__header-icons">
               {/* Export and Archive Icons */}
              <ExportCurve className="property-overview__header-icon" color="#353535" variant="Outline" />
              <img className="property-overview__header-icon" src="svgs/icons/archive-minus(bg-gray-11).svg" loading="lazy" alt="archiveMenu" />
            </span>
          </div>
          {/* Location of the property */}
          <h4 className="property-overview__location">۲۰۰ متر، محدوه ونک، بلوار دانش</h4>
        </div>
        {/* Property Details Section */}
        <div className="property-overview__details">
          <div className="property-overview__grid">
            {/* Loop through dataBox to display property details */}
            {dataBox.map(({ id, title, caption, icon }) => {
              return (
                <div key={id} className="property-overview__box">
                  <div className="property-overview__box-header">
                    {/* Icon for the property feature */}
                    {icon}
                    {/* Title of the property feature */}
                    <h4 className="property-overview__box-title">{title}</h4>
                  </div>
                  {/* Caption for the property feature */}
                  <h5 className="property-overview__box-caption">{caption}</h5>
                </div>
              );
            })}
          </div>
        </div>
          {/* Lease Information Section */}
        <div className="property-overview__lease-info">
          <div className="property-overview__lease-list">
            {/* Loop through leaseInfo to display lease details */}
            {leaseInfo.map(({ id, title, caption }) => {
              return (
                <div key={id} className="property-overview__lease-item">
                  {/* Title of the lease information */}
                  <h4 className="property-overview__lease-title">{title}</h4>
                  {/* Caption for the lease information */}
                  <h6 className="property-overview__lease-caption">{caption}</h6>
                </div>
              );
            })}
          </div>
          {/* Report Section */}
          <div className="property-overview__report">
            <div className="property-overview__report-header">
              {/* Time of the report */}
              <span className="property-overview__report-time">ساعاتی پیش تهران</span>
              <div className="property-overview__report-actions">
                {/* Report icon for violations */}
                <Warning2 className="property-overview__report-icon" color="#ED2E2E" variant="Outline" />
                {/* Report violation text */}
                <span className="property-overview__report-text">گزارش تخلف آگهی</span>
              </div>
            </div>
            {/* Advertisement ID */}
            <span className="property-overview__report-id">شناسه آگهی: ۲۳۴۴</span>
          </div>
        </div>
      </div>
    </>
  );
}


