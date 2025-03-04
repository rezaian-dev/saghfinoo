import React, { memo } from "react";
import NewRentalListingsBox from "../NewRentalListingsBox/NewRentalListingsBox";
import { dataCard } from "../../data/realEstateData";

 const NewRentalListings = memo((() => {

  const selectTehran = dataCard.filter(item => item.label === "Tehran"); 
  
  return (
    <>
      {/* 🏠 Header section for the new rental listings */}
      <div className="new-rental__header">
        {/* 📋 Title for the new rental listings */}
        <h3 className="new-rental__title">
          جدیدترین خانه‌های اجاره‌ای تهران
        </h3>
        {/* 🔗 Link to view all listings */}
        <a className="new-rental__link" href="#">
          مشاهده همه
        </a>
      </div>
  
      {/* 🧩 Grid layout to display rental listings */}
      <div className="new-rental__grid">
        {/* 🔄 Loop through each item in dataCard and display the NewRentalListingsBox component */}
        {selectTehran.slice(0, 8).map((item) => (
          <NewRentalListingsBox key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}))

export default NewRentalListings
