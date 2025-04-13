import React, { memo } from "react";
import SearchBar from "../SearchBar/SearchBar";

const ListingHeader = memo(({ title }) => {
  return (
    <div>
      {/* 📑 Displaying the title of the listing */}
      <h3 className="title">{title}</h3>

      {/* 🔍 Search bar for filtering or searching listings */}
      <SearchBar />
    </div>
  );
});

export default ListingHeader;
