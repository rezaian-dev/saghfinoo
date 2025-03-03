import React from "react";
import { userAdlist } from "../../data/realEstateData";
import NoAdPlaceholder from "../NoAdPlaceholder/NoAdPlaceholder";
import UserAdList from "../UserAdList/UserAdList";

/**
 * 📢 UserAds Component
 * Main container for displaying user's advertisements
 * Shows either a list of ads or a placeholder when no ads exist
 */

export default function UserAds() {
  return (
    <>
      <div className="user-ads__container">
        {/* 📝 Section title */}
        <h4 className="user-ads__title">آگهی های من</h4>
        {/* 📋 Conditionally render user's ad list when ads exist */}
        <div className={userAdlist.length ? "block" : "hidden"}>
          <UserAdList />
        </div>
        {/* �empty Conditionally render placeholder when no ads exist */}
        <div className={!userAdlist.length ? "block" : "hidden"}>
          <NoAdPlaceholder />
        </div>
      </div>
    </>
  );
}
