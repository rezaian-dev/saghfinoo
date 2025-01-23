import {AddCircle,ArrowLeft2,CloseCircle,House,House2,Key,People,ProfileCircle,Receipt21} from "iconsax-react";
import React from "react";

export default function NavHeaderMobile({ isOpen, handleMenuToggle, menuRef }) {
  // Mobile menu items with icons
  const menuItemsMobile = [
    { label: "ثبت آگهی", icon: <AddCircle size="20" /> },
    { label: "اجاره خانه", icon: <House size="20" /> },
    { label: "خرید خانه", icon: <Key size="20" /> },
    { label: "املاک و مستغلات", icon: <House2 size="20" /> },
    { label: "مشاورین املاک", icon: <People size="20" /> },
    { label: "اخبار روز", icon: <Receipt21 size="20" /> },
  ];

  return (
    <>
      {/* Mobile menu */}
      <div ref={menuRef} className={`menu-mobile ${isOpen ? "translate-x-0 opacity-100" : "translate-x-[100%] opacity-0"}`}
      >
        {/* Close button */}
        <div className="menu-mobile__close-button">
          <span className="menu-mobile__close-icon">
            <CloseCircle size="24" color="#505050" variant="Outline" onClick={handleMenuToggle}/>
          </span>
        </div>

        {/* Profile section - Login or Sign-up */}
        <div className="menu-mobile__profile-section">
          <a className="menu-mobile__profile-link" href="#">
            <ProfileCircle size="20" color="#505050" variant="Outline" />
            <span>ورود یا ثبت‌نام</span>
          </a>
        </div>

        {/* Menu items list */}
        <ul className="menu-mobile__list">
          {menuItemsMobile.map(({ label, icon }) => (
            <li key={label} className="menu-mobile__list-item">
              <a href="#" className="menu-mobile__link">
                <div className="menu-mobile__link-content">
                  {icon}
                  <span>{label}</span>
                </div>
                <ArrowLeft2 size="20" color="#505050" variant="Outline" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
