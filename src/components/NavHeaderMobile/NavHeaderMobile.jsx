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
        <div className="flex justify-end px-4 mb-2 cursor-pointer">
          <span className="close-circle">
            <CloseCircle size="24" color="#505050" variant="Outline" onClick={handleMenuToggle}/>
          </span>
        </div>

        {/* Profile section */}
        <div className="py-[29px] bg-gray-1 px-4">
          <a className="flex gap-x-2 items-center" href="#">
            <ProfileCircle size="20" color="#505050" variant="Outline" />
            <span>ورود یا ثبت‌نام</span>
          </a>
        </div>

        {/* Menu items */}
        <ul className="pl-4 pr-2 space-y-6 my-6 text-gray-10">
          {menuItemsMobile.map(({ label, icon }) => (
            <li key={label} className="hover:bg-gray-4 hover:text-gray-13 rounded-lg p-2 transition-all">
              <a href="#" className="flex-center justify-between">
                <div className="flex items-center gap-x-2">
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
