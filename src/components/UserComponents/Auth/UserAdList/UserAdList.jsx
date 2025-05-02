import React, { memo, useEffect } from "react";
import { Trash } from "iconsax-react";
import Swal from "sweetalert2";
import { dataBase } from "../../../../data/realEstateData";
import NewRentalListingsBox from "../../../LayoutComponents/Boxes/NewRentalListingsBox/NewRentalListingsBox";

/**
 * 📋 UserAdList Component
 * Displays a list of user's real estate ads
 * - Loads ads from localStorage
 * - Allows individual and bulk deletion 🗑️
 */

const UserAdList = memo(({ myad, savead, adList, setAdList }) => {
  // 🧹 Delete all ads with confirmation
  const cleanAllAds = () => {
    Swal.fire({
      title: "آیا مطمئن هستید؟",
      text: "همه آگهی‌های شما حذف خواهند شد!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله، حذف کن!",
      cancelButtonText: "لغو",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6"
    }).then((result) => {
      if (result.isConfirmed) {
        // ✅ Clear list in UI
        setAdList([]);
  
        // 📦 Get user and usersDataBase from localStorage
        const user = JSON.parse(localStorage.getItem("user")) || {};
        const usersDataBase = JSON.parse(localStorage.getItem("usersDataBase")) || [];
  
        // 🧹 Remove data from user object
        if (myad) {
          user.adList = []; // 🔥 Clear user's own ads
        } else {
          user.userAdSaveLists = []; // 🔥 Clear saved ads
        }
  
        // 💾 Update user in localStorage
        localStorage.setItem("user", JSON.stringify(user));
  
        // 👥 Sync the user in usersDataBase
        const updatedUsers = usersDataBase.map(u =>
          u.id === user.id ? { ...u, ...user } : u
        );
        localStorage.setItem("usersDataBase", JSON.stringify(updatedUsers));
  
        // ✅ Success message
        Swal.fire({
          title: "حذف شد!",
          text: "همه آگهی‌ها با موفقیت حذف شدند.",
          icon: "success",
          confirmButtonText: "باشه"
        });
      }
    });
  };
  

 // 🧹 Delete a single ad by id
const cleanAd = (id) => {
  // 🔄 Remove ad from local state
  setAdList((prev) => prev.filter((item) => item.id !== id));

  // 📦 Get user and usersDataBase from localStorage
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const usersDataBase = JSON.parse(localStorage.getItem("usersDataBase")) || [];

  // 🔍 Check and remove ad from user.adList
  if (user.adList && user.adList.length > 0) {
    user.adList = user.adList.filter((ad) => ad.id !== id);
  }

  // 💾 Update user in localStorage
  localStorage.setItem("user", JSON.stringify(user));

  // 👥 Sync user update in usersDataBase
  const updatedUsers = usersDataBase.map((u) =>
    u.id === user.id ? { ...u, ...user } : u
  );
  localStorage.setItem("usersDataBase", JSON.stringify(updatedUsers));
};



  // 📥 Load user ads from localStorage on mount
  useEffect(() => {
    if (myad) {
      const loadUserAds = () => {
        try {
          const userData = JSON.parse(localStorage.getItem("user")) || {};
          const userAdList = userData.adList || [];

          if (userAdList.length > 0) {
            const baseData = dataBase.slice(0, Math.min(userAdList.length, dataBase.length));

            const combinedData = baseData.map((item, index) => {
              if (index < userAdList.length) {
                const userAd = userAdList[index];

                return {
                  ...item,
                  shortLocation: userAd.shortLocation || item.shortLocation,
                  price: userAd.price ? parseInt(userAd.price) : item.price,
                  mortgage: userAd.mortgage ? parseInt(userAd.mortgage) : item.mortgage,
                  rent: userAd.rent ? parseInt(userAd.rent) : item.rent,
                  ...(userAd.transactionType === "خرید" && {
                    rent: 0,
                    mortgage: 0,
                    transactionType: "buy"
                  }),
                  ...(userAd.transactionType === "رهن و اجاره" && {
                    price: 0,
                    transactionType: "rent"
                  }),
                  isAdConfirmed: Math.random() > 0.5
                };
              }
              return { ...item };
            });

            setAdList(combinedData);
          } else {
            setAdList([]);
          }
        } catch (error) {
          console.error("🚫 Failed to load user ads:", error);

          const defaultItems = dataBase.slice(0, 3).map((item) => ({ ...item }));
          setAdList(defaultItems);
        }
      };

      loadUserAds();
    }
  }, [location.pathname]);

  return (
    <div>
      {/* 🗑️ Header with "delete all ads" option */}
      <div className="user-ad-list__header" onClick={cleanAllAds}>
        <Trash className="user-ad-list__icon" color="#505050" variant="Outline" />
        <span className="user-ad-list__text">پاک کردن همه آگهی‌ها</span>
      </div>

      {/* 🏘️ Grid container for user ads */}
      <div className="user-ad-list__grid">
        {adList?.length > 0 &&
          adList.map((item) => (
            <NewRentalListingsBox
              key={item.id}
              {...item}
              myad={myad}
              savead={savead}
              cleanAd={() => cleanAd(item.id)}
            />
          ))}
      </div>
    </div>
  );
});

export default UserAdList;
