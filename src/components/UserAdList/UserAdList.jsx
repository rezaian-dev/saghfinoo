import React from "react";
import { userAdlist } from "../../data/realEstateData";
import NewRentalListingsBox from "../NewRentalListingsBox/NewRentalListingsBox";
import { Trash } from "iconsax-react";

/**
 * 📋 UserAdList Component
 * Displays a list of user's real estate advertisements
 * with ability to delete all listings
 */

export default function UserAdList() {
  return (
    <div>
      {/* 🗑️ Header with delete all option */}
      <div className="user-ad-list__header">
        <Trash className="user-ad-list__icon" color="#505050" variant="Outline" />
        <span className="user-ad-list__text">پاک کردن همه آگهی‌ها</span>
      </div>
      {/* 🏘️ Grid container for property listings */}
      <div className="user-ad-list__grid">
        {/* 🔄 Map through user's advertisements data */}
        {userAdlist.map((item) => (
          <NewRentalListingsBox key={item.id} {...item} myad={true} />
        ))}
      </div>
    </div>
  );
}

