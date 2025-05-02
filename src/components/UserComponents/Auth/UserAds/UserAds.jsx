import React, { memo, useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import NoAdPlaceholder from "../../../LayoutComponents/Boxes/NoAdPlaceholder/NoAdPlaceholder";
import UserAdList from "../UserAdList/UserAdList";

/**
 * 📢 UserAds Component
 * Main container for displaying user's advertisements
 * Shows either a list of ads or a placeholder when no ads exist 🏘️
 */

const UserAds = memo(({ text, myad, savead, title, description, image, searchAd = false,adList,setAdList }) => {
const [isLoadong,setIsLoading] = useState(true);

useEffect(()=>{
setTimeout(() => {
  setIsLoading(false)
}, 2000);
},[])
    
  return (
    <>
      <div className="user-ads__container h-full">
        {/* 📝 Section title */}
        <h4 className="user-ads__title">{text}</h4>
        
        {/* 📋 Conditionally render user's ad list when ads exist */}
        {isLoadong ? <div className="flex-center h-full">
          <BounceLoader color="#CB1B1B" size={40} />
        </div> :
          <>
        <div className={adList?.length ? "block" : "hidden"}>
          <UserAdList myad={myad} savead={savead}
          adList={adList}
          setAdList={setAdList} />
        </div>
        
        {/* ❌ Conditionally render placeholder when no ads exist */}
        <div className={!adList?.length ? "block" : "hidden"}>
          <NoAdPlaceholder title={title} description={description} image={image} searchAd={searchAd} />
        </div>
          </>
        }
      </div>
    </>
  );
});

export default UserAds;
