import { AddCircle, Edit, Logout, ProfileCircle, ReceiptText } from "iconsax-react";
import React, { memo } from "react";
import clsx from "classnames";

/**
 * 🧑‍💼 Profile Management Component
 * Displays user profile with navigation menu
 */
const ProfileManagement = memo((({activeLabel}) => {
  // 📋 Menu items configuration array
  const menuItems = [
    { id: 1, title: "ویرایش اطلاعات", label: "editInfo", icon: <Edit size="24" color="#717171" variant="Outline"/>, href: "#" },
    { id: 2, title: "ثبت آگهی جدید", label: "newAd", icon: <AddCircle size="24" color="#717171" variant="Outline"/>, href: "#" },
    { id: 3, title: "آگهی‌های من", label: "myAds", icon: <ReceiptText size="24" color="#717171" variant="Outline"/>, href: "#" },
    { id: 4, title: "آگهی‌های ذخیره‌شده", label: "savedAds", icon: <img src="svgs/icons/archive-minus.svg" alt="archiveMenu" loading="lazy" />, href: "#" },
    { id: 5, title: "خروج", label: "logout", icon: <Logout size="24" color="#717171" variant="Outline"/>, href: "#" }
  ];

  return (
    <div className="profile">
      {/* 👤 User profile header section */}
      <div className="profile__header">
        <ProfileCircle size="40" color="#717171" />
        <div className="profile__info">
          <span className="profile__name">نام کاربر</span>
          <span className="profile__activity">نوع فعالیت</span>
        </div>
      </div>
      
      {/* 📱 Navigation menu section */}
      <div className="profile__menu">
        <ul className="profile__menu-list">
          {/* 🔄 Loop through menu items to create list */}
          {menuItems.map(({ id, title, icon, label }) => (
            <li key={id} className="profile__menu-item">
              <a className="profile__menu-link group" href="#">
                {icon}
                <span className="profile__menu-text  group-hover:text-primary">{title}</span>
              </a>
              {/* 🟢 Active indicator - only active for the selected item */}
              <span className={clsx("profile__menu-indicator", label === activeLabel && "profile__menu-indicator--active")}></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}));

export default ProfileManagement
