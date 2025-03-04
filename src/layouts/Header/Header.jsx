import {
  AddCircle,
  ArrowLeft2,
  CloseCircle,
  HambergerMenu,
  House,
  House2,
  Key,
  People,
  ProfileCircle,
  Receipt21,
  ReceiptText,
} from "iconsax-react";
import React, { memo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useToggleMenu from "../../hooks/useToggleMenu";
import clsx from "classnames";

 const Header =memo((() => {
  // Desktop menu items
  const menuItemsDesktop = [
    { id: 1, name: "اجاره", path: "/rent" },
    { id: 2, name: "خرید", path: "/buy" },
    { id: 3, name: "املاک و مستغلات", path: "/realestates" },
    { id: 4, name: "مشاورین املاک", path: "/realators" },
    { id: 5, name: "اخبار روز", path: "/news" },
  ];

  // Mobile menu items with icons
  const menuItemsMobile = [
    { id: 1, label: "ثبت آگهی", path: "", icon: <AddCircle size="20" /> },
    {
      id: 2,
      label: "آگهی های من",
      path: "/my-ad",
      icon: <ReceiptText size="20" />,
    },
    {
      id: 3,
      label: "آگهی های ذخیره شده",
      path: "/rent",
      icon: <img src="svgs\icons\archive-minus(bg-gray-11).svg" width={20} />,
    },
    { id: 4, label: "اجاره خانه", path: "/rent", icon: <House size="20" /> },
    { id: 5, label: "خرید خانه", path: "/buy", icon: <Key size="20" /> },
    {
      id: 6,
      label: "املاک و مستغلات",
      path: "/realestates",
      icon: <House2 size="20" />,
    },
    {
      id: 7,
      label: "مشاورین املاک",
      path: "/realators",
      icon: <People size="20" />,
    },
    { id: 8, label: "اخبار روز", path: "/news", icon: <Receipt21 size="20" /> },
  ];

  // Get current path from react-router
  const { pathname } = useLocation();

  // Get menu state and refs from custom hook
  const {
    isMenuOpen,
    navToggleRef,
    menuRef,
    btnCloseRef,
    isActiveOverrlay,
    handleClick,
  } = useToggleMenu();

  const userProfilePages = ["/user-profile", "/my-ad", "/save-ad"];
  const isUserProfilePage = userProfilePages.includes(pathname);

  // Filter menu items based on the page type
  const filteredMenuItems = isUserProfilePage
    ? menuItemsMobile // Show only items 2 and 3 on the profile page
    : menuItemsMobile.filter((item) => item.id !== 2 && item.id !== 3); // Remove items 2 and 3 on other pages

  // Handle click events for opening and closing the menu
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {/* Desktop menu */}
      <div
        className={clsx("menu-desktop", {
          "md:bg-gray-2": pathname !== "/" || pathname !== "/home-pro-user", // Apply background color if on rent page
          "bg-gray-2": pathname === "/realestates" || pathname === "/realators",
        })}
      >
        {/* Navigation container with desktop layout */}
        <div className="child:md:flex child:hidden">
          <nav className="menu-desktop__nav">
            {/* Logo */}
            <img
              className="menu-desktop__logo"
              src="/images/logos/Logo.png"
              loading="lazy"
              alt="Logo"
            />

            {/* Desktop Menu Items */}
            <ul className="menu-desktop__items">
              {menuItemsDesktop.map(({ name, id, path }) => (
                <li
                  key={id}
                  className={clsx(
                    "group relative",
                    pathname === path && "menu-desktop__link-desktop--active"
                  )}
                >
                  <a href="#" className="menu-desktop__link">
                    {name}
                  </a>
                  {/* Underline effect on hover */}
                  <span className="menu-desktop__underline"></span>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile menu trigger (hamburger icon, logo, and register link) */}
        <div className="menu-desktop__mobile-trigger">
          {/* Hamburger menu icon for mobile */}
          <span ref={navToggleRef} className="menu-desktop__hamburger">
            <HambergerMenu size="24" color="#353535" variant="Outline" />
          </span>

          {/* Logo for mobile */}
          <img
            src="/images/logos/Logo.png"
            loading="lazy"
            alt="Logo"
            width={72}
            height={35}
          />

          {/* Register ad link for mobile */}
          <a href="#" className="menu-desktop__register-link">
            ثبت آگهی
          </a>
        </div>

        {/* User actions section (login and register links) */}
        <div className="menu-desktop__user-actions">
          <a href="#" className="menu-desktop__login-link">
            ورود
          </a>
          <a href="#" className="Register-ad-desktop">
            ثبت آگهی
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className={clsx("menu-mobile", {
          "menu-mobile--open": isMenuOpen, // Toggle class when menu is open
        })}
      >
        {/* Close button for mobile menu */}
        <div className="menu-mobile__close-button">
          <span ref={btnCloseRef} className="menu-mobile__close-icon">
            <CloseCircle size="24" color="#505050" variant="Outline" />
          </span>
        </div>

        {/* Profile section - Login or Sign-up for mobile */}
        <div className="menu-mobile__profile-section">
          <a className="menu-mobile__profile-link" href="#">
            <ProfileCircle size="20" color="#505050" variant="Outline" />
            <span>ورود یا ثبت‌نام</span>
          </a>
        </div>

        {/* Mobile Menu Items */}
        <ul className="menu-mobile__list">
          {filteredMenuItems.map(({ label, icon, id, path }) => (
            <li key={id} className="menu-mobile__list-item">
              <a
                href="#"
                className={clsx(
                  "menu-mobile__link",
                  pathname === path && "menu-mobile__link-mobile--active"
                )}
              >
                <div className="menu-mobile__link-content">
                  {icon} {/* Icon for mobile menu item */}
                  <span>{label}</span>
                </div>
                <ArrowLeft2 size="20" color="#505050" variant="Outline" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay background for mobile menu */}
      <div
        className={clsx("overlay", {
          "overlay--active": isActiveOverrlay, // Toggle class when overlay is active
        })}
      />
    </>
  );
}));

export default Header
