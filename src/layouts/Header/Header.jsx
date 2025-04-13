import React, { memo, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import clsx from "classnames";
import {
  AddCircle,
  ArrowLeft2,
  CloseCircle,
  Edit,
  HambergerMenu,
  House,
  House2,
  Key,
  People,
  ProfileCircle,
  Receipt21,
  ReceiptText,
} from "iconsax-react";
import useToggleMenu from "../../hooks/useToggleMenu";
import ModalLogin from "../../components/ModalLogin/ModalLogin";
import useModal from "../../hooks/useModal";
import ModalLoginMobile from "../../components/ModalLoginMobile/ModalLoginMobile";
import { FilterContext } from "../../context/FilterContext";


const Header = memo(() => {
  // Get menu state and refs from custom hook
  const {
    isMenuOpen,
    navToggleRef,
    menuRef,
    btnCloseRef,
    isActiveOverlay,
    handleClick,
    closeMenu, // دریافت تابع closeMenu از هوک
  } = useToggleMenu();

  // پاس دادن تابع closeMenu به useModal
  const {
    isOpenModal,
    isOpenModalMobile,
    setIsOpenModal,
    setIsOpenModalMobile,
    handleModal,
  } = useModal(closeMenu);

  const { user } = useContext(FilterContext);

  // Get current path from react-router
  const { pathname } = useLocation();

  // Desktop menu items 📱
  const menuItemsDesktop = [
    { id: 1, name: "اجاره", path: "/rent" },
    { id: 2, name: "خرید", path: "/buy" },
    { id: 3, name: "املاک و مستغلات", path: "/realestates" },
    { id: 4, name: "مشاورین املاک", path: "/realators" },
    { id: 5, name: "اخبار روز", path: "/news" },
  ];

  // Mobile menu items with icons 📱
  const menuItemsMobile = [
    {
      id: 1,
      label: "ثبت آگهی",
      path: "/register",
      icon: <AddCircle size="20" />,
    },
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

  const userProfilePages = ["/user-profile", "/my-ad", "/save-ad"];
  const isUserProfilePage = userProfilePages.includes(pathname);

  // Filter menu items based on the page type 🔍
  const filteredMenuItems = isUserProfilePage
    ? menuItemsMobile // Show only items 2 and 3 on the profile page
    : menuItemsMobile.filter((item) => item.id !== 2 && item.id !== 3); // Remove items 2 and 3 on other pages

  // Handle click events for opening and closing the menu 🖱️
  useEffect(() => {
    document.addEventListener("click", handleClick); // Listen for menu click
    document.addEventListener("click", handleModal); // Listen for modal click

    return () => {
      document.removeEventListener("click", handleClick); // Clean up event listeners
      document.removeEventListener("click", handleModal); // Clean up event listeners
    };
  }, [handleClick, handleModal]);

  return (
    <>
      {/* Desktop menu 🖥️ */}
      <div
        className={clsx("menu-desktop", {
          "md:bg-gray-2": pathname !== "/" || pathname !== "/home-pro-user",
          "bg-gray-2":
            pathname === "/realestates" ||
            pathname === "/realators" ||
            pathname === "/news" ||
            pathname === "/news-details" ||
            pathname === "/rent" ||
            pathname === "/my-ad" ||
            pathname === "/about" ||
            pathname === "/news/news-details"


        })}
      >
        <div className="child:md:flex child:hidden">
          <nav className="flex">
            {/* Logo 🖼️ */}
            <img
              className="menu-desktop__logo"
              src="/images/logos/Logo.png"
              loading="lazy"
              alt="Logo"
            />
            {/* Desktop Menu Items 📜 */}
            <ul className="menu-desktop__items">
              {menuItemsDesktop.map(({ name, id, path }) => (
                <li
                  key={id}
                  className={clsx(
                    "group relative",
                    pathname.includes(path) &&
                      "text-primary"
                  )}
                >
                  <a href="#" className="menu-desktop__link">
                    {name}
                  </a>
                  <span className="menu-desktop__underline"></span>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile menu trigger 🍔 */}
        <div className="menu-desktop__mobile-trigger">
          <span ref={navToggleRef} className="menu-desktop__hamburger">
            <HambergerMenu size="24" color="#353535" variant="Outline" />
          </span>
          <img
            src="/images/logos/Logo.png"
            loading="lazy"
            alt="Logo"
            width={72}
            height={35}
          />
          <a href="#" className="menu-desktop__register-link">
            ثبت آگهی
          </a>
        </div>

        {/* User actions section 👤 */}
        <div className="menu-desktop__user-actions">
          {user ? (
            <a
              href="#"
              className="header__profile-info"
            >
              <ProfileCircle size="24" color="#505050" />
              <span>{user.firstName}</span>
            </a>
          ) : (
            <a href="#" className="menu-desktop__login-link">
              ورود
            </a>
          )}

          <a href="#" className="register-ad-desktop">
            ثبت آگهی
          </a>
        </div>
      </div>

      {/* Mobile menu 📱 */}
      <div
        ref={menuRef}
        className={clsx("menu-mobile", {
          "menu-mobile--open": isMenuOpen,
        })}
      >
        {/* Close button for mobile menu ❌ */}
        <div className="menu-mobile__close-button">
          <span ref={btnCloseRef} className="menu-mobile__close-icon">
            <CloseCircle size="24" color="#505050" variant="Outline" />
          </span>
        </div>

        {/* Profile section - Login or Sign-up for mobile 📝 */}
        <div
          className={clsx(
            "menu-mobile__profile-section",
            (user && user.firstName) && "py-1"
          )}
        >
          {user ? (
            <div className="menu-mobile__profile-info">
              {user.image ? (
                <img
                  width={70}
                  height={70}
                  src="../images/landing/home-prouser/ali-parto.png"
                  loading="lazy"
                  alt="userProfile"
                />
              ) : (
                <ProfileCircle size="70" color="#505050" variant="Outline" />
              )}
           
              <div className="flex items-center gap-x-2">
                <Edit size="20" color="#505050" />
                <span>{user.firstName}</span>
                <ArrowLeft2 size="20" color="#505050" />
              </div>
            </div>
          ) : (
            <a className="menu-mobile__profile-link" href="#">
              <ProfileCircle size="20" color="#505050" variant="Outline" />
              <span>ورود یا ثبت‌ نام</span>
            </a>
          )}
        </div>

        {/* Mobile Menu Items 📱 */}
        <ul className="menu-mobile__list">
          {filteredMenuItems.map(({ label, icon, id, path }) => (
            <li key={id} className="menu-mobile__list-item">
              <a
                href="#"
                className={clsx(
                  "menu-mobile__link",
                  pathname.includes(path) && "text-primary"
                )}
              >
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

      {/* Overlay background for mobile menu 🌫️ */}
      <div className={clsx("overlay", isActiveOverlay && "overlay--active")} />

      {/* Login Modal using Headless UI 🛠️ */}
      <div className="hidden md:block">
        <ModalLogin isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      </div>
      <div className="block md:hidden">
        <ModalLoginMobile
          isOpenModal={isOpenModalMobile}
          setIsOpenModal={setIsOpenModalMobile}
        />
      </div>
    </>
  );
});

export default Header;
