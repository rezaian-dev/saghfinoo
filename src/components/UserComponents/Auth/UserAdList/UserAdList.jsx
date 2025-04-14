import React, { memo } from "react";
import { Trash } from "iconsax-react";
import { userAdlist } from "../../../../data/realEstateData";
import NewRentalListingsBox from "../../../LayoutComponents/Boxes/NewRentalListingsBox/NewRentalListingsBox";

/**
 * 📋 UserAdList Component
 * Displays a list of user's real estate advertisements
 * with ability to delete all listings 🗑️
 */

const UserAdList = memo(({ myad, savead }) => {
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
          <NewRentalListingsBox key={item.id} {...item} myad={myad} savead={savead} />
        ))}
      </div>
    </div>
  );
});

export default UserAdList;
