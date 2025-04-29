import React, { memo, useContext } from "react";
import { Buliding, ExportCurve, RulerPen, TableLamp, Warning2 } from "iconsax-react";
import { FilterContext } from "../../../../context/FilterContext";
import useToast from "../../../../hooks/useToast";

const PropertyOverview = memo(({
  transactionType,
  labelCity,
  shortLocation,
  size,
  bedrooms,
  floor,
  totalFloors,
  mortgage,
  rent,
  propertyCode,
  releaseTime,
  price,
  handleModalClick,
}) => {

  const { user } = useContext(FilterContext);
  const { handleToastError } = useToast();

  const formatPrice = (amount) => {
    if (+amount % 1000000 !== 0) {
      return `${amount.toLocaleString("fa-IR")} تومان`;
    } else if (amount >= 1_000_000_000) {
      return `${(amount / 1_000_000_000).toLocaleString("fa-IR")} میلیارد تومان`;
    } else if (amount >= 1_000_000) {
      return `${(amount / 1_000_000).toLocaleString("fa-IR")} میلیون تومان`;
    } else {
      return `${amount.toLocaleString("fa-IR")} تومان`;
    }
  };

  const convertToPersianNumber = (number) => {
    return String(number).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);
  };

  const handleReportAdClick = (e) => {
    user ? handleModalClick(e) : handleToastError("لطفاً ابتدا وارد حساب کاریری خود شوید!");
  };

  const propertyDetails = [
    {
      id: 1,
      title: "متراژ",
      value: `${size.toLocaleString("fa-IR")} متر`,
      Icon: RulerPen,
    },
    {
      id: 2,
      title: "اتاق",
      value: `${bedrooms.toLocaleString("fa-IR")} خواب`,
      Icon: TableLamp,
    },
    {
      id: 3,
      title: "طبقه",
      value: `${floor.toLocaleString("fa-IR")} از ${totalFloors.toLocaleString("fa-IR")}`,
      Icon: Buliding,
    },
  ];

  const leaseDetails = [
    { id: 1, title: "ودیعه", value: mortgage && formatPrice(mortgage) },
    { id: 2, title: "اجاره ماهیانه", value: rent && formatPrice(rent) },
    { id: 3, title: "فروش", value: price && formatPrice(price) },
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
            <ExportCurve
              className="icon-size property-rating__icon cursor-pointer pointer-events-auto"
              color="#353535"
              variant="Outline"
            />
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
          {propertyDetails.map(({ id, title, value, Icon }) => (
            <div key={id} className="property-overview__box">
              <div className="property-overview__box-header">
                <Icon
                  className="property-overview__icon"
                  color="#353535"
                  variant="Outline"
                />
                <h4 className="property-overview__box-title">{title}</h4>
              </div>
              <h5 className="property-overview__box-caption">{value}</h5>
            </div>
          ))}
        </div>
      </div>

      {/* 💸 Lease Information */}
      <div className="property-overview__lease-info">
        <div className="property-overview__lease-list">
          {transactionType === "rent"
            ? leaseDetails.slice(0, 2).map(({ id, title, value }) => (
                <div key={id} className="property-overview__lease-item">
                  <h4 className="property-overview__lease-title">{title}</h4>
                  <h6 className="property-overview__lease-caption">{value}</h6>
                </div>
              ))
            : leaseDetails.slice(2).map(({ id, title, value }) => (
                <div key={id} className="property-overview__lease-item">
                  <h4 className="property-overview__lease-title">{title}</h4>
                  <h6 className="property-overview__lease-caption">{value}</h6>
                </div>
              ))}
        </div>

        {/* 🚨 Report Section */}
        <div className="property-overview__report">
          <div className="property-overview__report-header">
            <span className="property-overview__report-time">
              {releaseTime} {labelCity}
            </span>

            <div className="report-button" onClick={handleReportAdClick}>
              <Warning2 className="icon-size" color="#ED2E2E" variant="Outline" />
              <span className="property-overview__report-text">
                گزارش تخلف آگهی
              </span>
            </div>
          </div>

          {/* 📌 Advertisement ID */}
          <span className="property-overview__report-id">
            شناسه آگهی: {convertToPersianNumber(propertyCode)}
          </span>
        </div>
      </div>
    </div>
  );
});

export default PropertyOverview;
