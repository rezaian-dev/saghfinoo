import React, { memo } from "react";

import NoAdPlaceholder from "../../../LayoutComponents/Boxes/NoAdPlaceholder/NoAdPlaceholder";
import UserAdList from "../UserAdList/UserAdList";
import { userAdlist } from "../../../../data/realEstateData";
/**
 * 📢 UserAds Component
 * Main container for displaying user's advertisements
 * Shows either a list of ads or a placeholder when no ads exist 🏘️
 */

const UserAds = memo(({ text, myad, savead, title, description, image, searchAd = false }) => {
  return (
    <>
      <div className="user-ads__container">
        {/* 📝 Section title */}
        <h4 className="user-ads__title">{text}</h4>
        
        {/* 📋 Conditionally render user's ad list when ads exist */}
        <div className={userAdlist.length ? "block" : "hidden"}>
          <UserAdList myad={myad} savead={savead} />
        </div>
        
        {/* ❌ Conditionally render placeholder when no ads exist */}
        <div className={!userAdlist.length ? "block" : "hidden"}>
          <NoAdPlaceholder title={title} description={description} image={image} searchAd={searchAd} />
        </div>
      </div>
    </>
  );
});

export default UserAds;
