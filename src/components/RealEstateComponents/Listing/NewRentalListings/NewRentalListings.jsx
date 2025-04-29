import React, { memo } from "react";
import { dataBase } from "../../../../data/realEstateData";
import NewRentalListingsBox from "../../../LayoutComponents/Boxes/NewRentalListingsBox/NewRentalListingsBox";
import { Link } from "react-router-dom";

const NewRentalListings = memo(() => {
  // 🏙️ Filter rental listings in Tehran
  const tehranRentalListings = dataBase.filter(
    (property) => property.city === "tehran" && property.transactionType === "rent"
  );

  return (
    <>
      {/* 🏠 Header section for the new rental listings */}
      <div className="new-rental__header">
        {/* 📋 Title for the new rental listings */}
        <h3 className="new-rental__title">جدیدترین خانه‌های اجاره‌ای تهران</h3>
        
        {/* 🔗 Link to view all listings */}
        <Link to="/rent?city=tehran" className="new-rental__link">
          مشاهده همه
        </Link>
      </div>

      {/* 🧩 Grid layout to display rental listings */}
      <div className="new-rental__grid">
        {tehranRentalListings.slice(0, 8).map((listing) => (
          <NewRentalListingsBox key={listing.id} {...listing} />
        ))}
      </div>
    </>
  );
});

export default NewRentalListings;
