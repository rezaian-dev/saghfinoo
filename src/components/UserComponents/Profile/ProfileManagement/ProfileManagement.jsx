import { ProfileCircle } from "iconsax-react";
import React, { memo, useContext } from "react";
import clsx from "classnames";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FilterContext } from "../../../../context/FilterContext";
import { profileMenuItems } from "../../../../data/realEstateData";
/**
 * 🧑‍💼 Profile Management Component
 * Displays user profile with navigation menu
 */
const ProfileManagement = memo(({ activeLabel }) => {
  const { user,setUser } = useContext(FilterContext);
  const navigate = useNavigate();

  return (
    <div className="profile">
      {/* 👤 User profile header section */}
      <div className="profile__header">
        {user?.image ?  <img className="w-10 h-10 rounded-full" src={user?.image} alt="userImage" />:<ProfileCircle size="40" color="#717171" />}
        
        <div className="profile__info">
          <span className="profile__name">{user?.fullName ||user?.firstName}</span>
          <span className="profile__activity">کاربر</span>
        </div>
      </div>

      {/* 📱 Navigation menu section */}
      <div className="profile__menu">
        <ul className="space-y-4">
          {/* 🔄 Loop through menu items to create list */}
          {profileMenuItems.map(({ id, title, icon, label, link }) => (
            <li
              key={id}
              className="profile__menu-item"
              onClick={(e) => {
                if (label === "logout") {
                  e.preventDefault();
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
