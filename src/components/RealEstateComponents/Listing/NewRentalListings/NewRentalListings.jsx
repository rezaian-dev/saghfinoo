import React, { memo } from "react";
import { dataBase } from "../../../../data/realEstateData";
import NewRentalListingsBox from "../../../LayoutComponents/Boxes/NewRentalListingsBox/NewRentalListingsBox";
import { Link } from "react-router-dom";

 const NewRentalListings = memo((() => {

  const selectTehran = dataBase.filter(item => item.city === "tehran"); 
  
  return (
    <>
      {/* 🏠 Header section for the new rental listings */}
      <div className="new-rental__header">
        {/* 📋 Title for the new rental listings */}
        <h3 className="new-rental__title">
          جدیدترین خانه‌های اجاره‌ای تهران
        </h3>
        {/* 🔗 Link to view all listings */}
        <Link to={"/rent?city=tehran"} className="new-rental__link">
          مشاهده همه
        </Link>
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
