import React, { memo } from "react";
import NewRentalListingsBox from "../../../LayoutComponents/Boxes/NewRentalListingsBox/NewRentalListingsBox";
import { dataBase } from "../../../../data/realEstateData";

const SimilarListings = memo(({city,transactionType}) => {
  
  // 🏙️ Filter the data to get listings from Tehran
  const selectedCity = dataBase.filter(item => item.city === city && item.transactionType ===transactionType );
  
  return (
    <div>
      {/* 🔖 Section title */}
      <h4 className="similar-listings__title">
        آگهی های مشابه
      </h4>

      {/* 🏠 Grid layout to display rental listings */}
      <div className="similar-listings__grid">
        {/* 🔄 Loop through each item and display the NewRentalListingsBox */}
        {selectedCity.slice(0, 3).map((item) => (
          <NewRentalListingsBox key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
});

export default SimilarListings;
