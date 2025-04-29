import { AddCircle, Edit, Logout, ProfileCircle, ReceiptText } from "iconsax-react";
import React, { memo, useContext } from "react";
import clsx from "classnames";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FilterContext } from "../../../../context/FilterContext";

/**
 * 🧑‍💼 Profile Management Component
 * Displays user profile with navigation menu
 */
const ProfileManagement = memo(({ activeLabel }) => {
  const { setUser } = useContext(FilterContext);

  const navigate = useNavigate();
  // 📋 Menu items configuration array
  const menuItems = [
    {
      id: 1,
      title: "ویرایش اطلاعات",
      label: "editInfo",
      icon: <Edit size="24" color="#717171" variant="Outline" />,
      link: "/profile",
    },
    {
      id: 2,
      title: "ثبت آگهی جدید",
      label: "newAd",
      icon: <AddCircle size="24" color="#717171" variant="Outline" />,
      link: "/register/1",
    },
    {
      id: 3,
      title: "آگهی‌های من",
      label: "myAds",
      icon: <ReceiptText size="24" color="#717171" variant="Outline" />,
      link: "/profile/my-ads",
    },
    {
      id: 4,
      title: "آگهی‌های ذخیره‌شده",
      label: "savedAds",
      icon: (
        <img
          src="../../svgs/icons/archive-minus.svg"
          alt="archiveMenu"
          loading="lazy"
        />
      ),
      link: "/profile/saved-ads",
    },
    {
      id: 5,
      title: "خروج",
      label: "logout",
      icon: <Logout size="24" color="#717171" variant="Outline" />,
      link: "",
    },
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
        <ul className="space-y-4">
          {/* 🔄 Loop through menu items to create list */}
          {menuItems.map(({ id, title, icon, label, link }) => (
            <li
              key={id}
              className="profile__menu-item"
              onClick={(e) => {
                if (label === "logout") {
                  e.preventDefault(); // ❗ جلوگیری از رفتن به لینک
                  Swal.fire({
                    title: "خروج از حساب کاربری",
                    text: "آیا مطمئن هستید که می‌خواهید از حساب کاربری خود خارج شوید؟",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#2F80ED",
                    cancelButtonColor: "#CB1B1B",
                    confirmButtonText: "بله",
                    cancelButtonText: "خیر",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      localStorage.removeItem("user");
                      setTimeout(() => {
                        setUser(null);
                      }, 500);
                      navigate("/", { replace: true });
                    }
                  });
                }
              }}
            >
              <Link to={link} className="profile__menu-link group">
                {icon}
                <span className="profile__menu-text group-hover:text-primary">
                  {title}
                </span>
              </Link>
              {/* 🟢 Active indicator - only active for the selected item */}
              <span
                className={clsx(
                  "profile__menu-indicator",
                  label === activeLabel && "block"
                )}
              ></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default ProfileManagement;
