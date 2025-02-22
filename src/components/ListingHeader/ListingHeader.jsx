import React from "react";
import SearchBar from "../SearchBar/SearchBar";

export default function ListingHeader({title}) {
  return (
    <div>
      <h3 className="listing-header__title">{title}</h3>
      <SearchBar />
    </div>
  );
}
