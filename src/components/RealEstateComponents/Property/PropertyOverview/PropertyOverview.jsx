import React, { memo, useContext } from "react";
import { Buliding, ExportCurve, RulerPen, TableLamp, Warning2 } from "iconsax-react";
import { FilterContext } from "../../../../context/FilterContext";
import useToast from "../../../../hooks/useToast";
import { dataBase } from "../../../../data/realEstateData";
import { convertToPersianNumber, formatPrice } from "../../../../utils/priceUtils";
import { handleSaveAd } from "../../../../utils/adUtils";
/**
 * 🏢 PropertyOverview Component
 * Displays comprehensive property information including:
 * - Basic details (size, bedrooms, floor)
 * - Pricing (mortgage, rent, or sale price)
 * - Reporting functionality
 */
const PropertyOverview = memo(({
  transactionType,  // 🔄 'rent' or 'sale'
  labelCity,        // 🏙️ City name
  shortLocation,    // 📍 Short address
  size,             // 📏 Property size in sqm
  bedrooms,         // 🛏️ Number of bedrooms
  floor,            // 🏢 Current floor
  totalFloors,      // 🏢 Total floors in building
  mortgage,         // 💰 Mortgage amount
  rent,             // 💵 Monthly rent
  propertyCode,     // 🔢 Unique property ID
  releaseTime,      // ⏰ When ad was posted
  price,            // 💲 Sale price
  handleModalClick, // 🖱️ Report modal handler
  id                // #️⃣ Property ID
}) => {

  // 🔍 Context hooks
  const { user: acountUser, userAdSaveLists, setUserAdSaveLists } = useContext(FilterContext);
  const { handleToastError } = useToast();

  /**
   * 🚨 Handle report ad click
   **/
  const handleReportAdClick = (e) => {
    acountUser ? handleModalClick(e) : handleToastError("لطفاً ابتدا وارد حساب کاریری خود شوید!");
  };

  // 📋 Property detail items
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

  // 💰 Pricing information based on transaction type
  const leaseDetails = [
    { id: 1, title: "ودیعه", value: mortgage && formatPrice(mortgage) },
    { id: 2, title: "اجاره ماهیانه", value: rent && formatPrice(rent) },
    { id: 3, title: "فروش", value: price && formatPrice(price) },
  ];

  // Check if current property is saved
  const isSaved = userAdSaveLists?.some((ad) => ad.id === id);

  return (
    <div className="w-full">
      {/* 🏠 Header Section */}
      <div className="property-overview__header container">
        <div className="property-overview__header-title">
          <span className="property-overview__header-title-text">
            {transactionType === "rent"
              ? `رهن و اجاره آپارتمان ${labelCity}`
              : `خرید آپارتمان ${labelCity}`}
          </span>

          {/* 🛠️ Action Icons */}
          <span className="icon-sizes">
            <ExportCurve className="icon-size property-rating__icon pointer-events-auto cursor-pointer" 
              color="#353535" variant="Outline" />
            <img
              className="icon-size pointer-events-auto cursor-pointer"
              src={isSaved 
                ? "../../svgs/icons/archive-minus-red.svg" 
                : "../../svgs/icons/archive-minus(bg-gray-11).svg"}
              loading="lazy"
              alt="archiveMenu"
              onClick={(e) => handleSaveAd(e, id, acountUser, dataBase, setUserAdSaveLists,handleToastError)}
            />
          </span>
        </div>

        {/* 📍 Location */}
        <h4 className="property-overview__location">{shortLocation}</h4>
      </div>

      {/* 📊 Property Details Grid */}
      <div className="property-overview__details">
        <div className="property-overview__grid">
          {propertyDetails.map(({ id, title, value, Icon }) => (
            <div key={id} className="property-overview__box">
              <div className="property-overview__box-header">
                <Icon className="property-overview__icon" color="#353535" variant="Outline" />
                <h4 className="property-overview__box-title">{title}</h4>
              </div>
              <h5 className="property-overview__box-caption">{value}</h5>
            </div>
          ))}
        </div>
      </div>

      {/* 💸 Pricing Information */}
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

        {/* ⚠️ Report Section */}
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

          {/* 🔢 Property ID */}
          <span className="property-overview__report-id">
            شناسه آگهی: {convertToPersianNumber(propertyCode)}
          </span>
        </div>
      </div>
    </div>
  );
});

export default PropertyOverview;
