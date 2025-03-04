import React, { memo } from "react";
import NewRentalListingsBox from "../NewRentalListingsBox/NewRentalListingsBox";
import { dataCard } from "../../data/realEstateData";

const SimilarListings = memo(() => {
  // 🏙️ Filter the data to get listings from Tehran
  const selectedCity = dataCard.filter(item => item.label === "Tehran");
  
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
