import React from "react";
export default function Header() {
  const menuItems = [
    { id: 1, name: "اجاره" },
    { id: 2, name: "خرید" },
    { id: 3, name: "املاک و مستغلات" },
    { id: 4, name: "مشاورین املاک" },
    { id: 5, name: "اخبار روز" },
  ];

  return (
    <div className="flex justify-between items-center bg-white text-gray-10 px-9 py-[26px] rounded-2xl">
      {/* Navigation Menu */}
      <nav className="flex">
        {/* Logo */}
        <img src="images/logos/Logo.webp" loading="lazy" alt="Logo" />

        {/* Menu Items */}
        <ul className="flex items-center mr-11 gap-x-6">
          {/* Single Menu Item */}
          {menuItems.map((item) => (
            <li key={item.id} className="group relative">
              <a
                href="#"
                className="hover:text-red-600 transition-colors duration-300"
              >
                {item.name}
              </a>
              {/* Underline effect */}
              <span className="absolute right-0 bottom-[-4px] h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>
      </nav>
      {/* User Actions */}
      <div className="flex items-center gap-x-9">
        {/* Login Button */}
        <a
          href="#"
          className="hover:text-primary transition-colors duration-300"
        >
          ورود
        </a>
        {/* Post Ad Button */}
        <a
          href="#"
          className="text-primary py-2 px-4 border border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
        >
          ثبت آگهی
        </a>
      </div>
    </div>
  );
}
