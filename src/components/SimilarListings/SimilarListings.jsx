import React from "react";
import NewRentalListingsBox from "../NewRentalListingsBox/NewRentalListingsBox";
import { dataCard } from "../../data/realEstateData";

export default function SimilarListings() {
  const selectedCity = dataCard.filter(item => item.label === "Tehran");
  
  return (
    <div>
      {/* Section title */}
      <h4 className="similar-listings__title">
        آگهی های مشابه
      </h4>

      {/* Grid layout to display rental listings */}
      <div className="similar-listings__grid">
        {/* Loop through each item in dataCard and display the NewRentalListingsBox component */}
        {selectedCity.slice(0, 3).map((item) => (
          <NewRentalListingsBox key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

