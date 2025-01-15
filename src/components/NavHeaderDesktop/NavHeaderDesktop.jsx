import { HambergerMenu } from 'iconsax-react';
import React from 'react'

export default function NavHeaderDesktop() {
  // Desktop menu items
      const menuItemsDesktop = [
        { id: 1, name: "اجاره" },
        { id: 2, name: "خرید" },
        { id: 3, name: "املاک و مستغلات" },
        { id: 4, name: "مشاورین املاک" },
        { id: 5, name: "اخبار روز" },
      ];

  return (
    <>
    {/* Desktop menu */}
          <div className="menu-desktop">
            <div className="child:md:flex child:hidden">
              <nav className="flex">
                {/* Logo */}
                <img className="w-[110px] lg:w-[130px]" src="images/logos/Logo.webp" loading="lazy" alt="Logo"/>
    
                {/* Menu Items */}
                <ul className="flex items-center mr-2 lg:mr-11 gap-x-4 lg:gap-x-6">
                  {menuItemsDesktop.map((item) => (
                    <li key={item.id} className="group relative">
                      <a href="#" className="hover:text-red-600 transition-colors duration-300">{item.name}</a>
                      {/* Underline effect on hover */}
                      <span className="undeline-effect"></span>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
    
            {/* Mobile menu trigger */}
            <div className="flex-center justify-between md:hidden w-full">
              <span className="hamberger-menu">
                <HambergerMenu size="24" color="#353535" variant="Outline"/>
              </span>
              <img src="images/logos/Logo.webp" alt="Logo" width={72} height={35} />
              <a href="#" className="register-ad">ثبت آگهی</a>
            </div>
    
            {/* User actions */}
            <div className="flex items-center gap-x-4 lg:gap-x-9 child:md:flex child:hidden">
              <a href="#" className="hover:text-primary transition-colors duration-300">ورود</a>
              <a href="#" className="Register-ad-desktop">ثبت آگهی</a>
            </div>
          </div>
    </>
  )
}
