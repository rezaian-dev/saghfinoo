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
  {/* Navigation container with desktop layout */}
  <div className="child:md:flex child:hidden">
    <nav className="menu-desktop__nav">
      {/* Logo */}
      <img className="menu-desktop__logo" src="images/logos/Logo.webp" loading="lazy" alt="Logo" />

      {/* Menu Items */}
      <ul className="menu-desktop__items">
        {menuItemsDesktop.map((item) => (
          <li key={item.id} className="group relative">
            <a href="#" className="menu-desktop__link">{item.name}</a>
            {/* Underline effect on hover */}
            <span className="menu-desktop__underline"></span>
          </li>
        ))}
      </ul>
    </nav>
  </div>

  {/* Mobile menu trigger (hamburger icon, logo, and register link) */}
  <div className="menu-desktop__mobile-trigger">
    <span className="menu-desktop__hamburger">
      <HambergerMenu size="24" color="#353535" variant="Outline" />
    </span>
    <img src="images/logos/Logo.webp" loading='lazy' alt="Logo" width={72} height={35} />
    <a href="#" className="menu-desktop__register-link">ثبت آگهی</a>
  </div>

  {/* User actions section (login and register links) */}
  <div className="menu-desktop__user-actions">
    <a href="#" className="menu-desktop__login-link">ورود</a>
    <a href="#" className="Register-ad-desktop">ثبت آگهی</a>
  </div>
</div>
 </>
  )
}
