import React, { memo, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import clsx from "classnames";
import {AddCircle, ArrowLeft2, CloseCircle, Edit, HambergerMenu,House, House2, Key, People, ProfileCircle, Receipt21, ReceiptText } from "iconsax-react";
import useToggleMenu from "../../hooks/useToggleMenu";
import useModal from "../../hooks/useModal";
import ModalLogin from "../../components/CoreComponents/Modals/ModalLogin/ModalLogin";
import ModalLoginMobile from "../../components/CoreComponents/Modals/ModalLoginMobile/ModalLoginMobile";
import { FilterContext } from "../../context/FilterContext";
import useToast from "../../hooks/useToast";

const Header = memo(() => {
  // 🔄 Menu state and toggle functions
  const { dropdowns, navToggleRef, menuRef, btnCloseRef, handleClick, closeMenu } = useToggleMenu();
  const { handleModalClick, modalState, setModalState } = useModal(closeMenu);
  const { user } = useContext(FilterContext);
  const { handleToastError } = useToast();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // 📱 Menu items for desktop & mobile
  const menuItemsDesktop = [
    { id: 1, name: "اجاره", path: "/rent" },
    { id: 2, name: "خرید", path: "/buy" },
    { id: 3, name: "املاک و مستغلات", path: "/realestates" },
    { id: 4, name: "مشاورین املاک", path: "/realators" },
    { id: 5, name: "اخبار روز", path: "/news" },
  ];

  const menuItemsMobile = [
    { id: 1, label: "ثبت آگهی", path: "/register/1", icon: <AddCircle size="20" /> },
    { id: 2, label: "آگهی های من", path: "/my-ad", icon: <ReceiptText size="20" /> },
    { id: 3, label: "آگهی های ذخیره شده", path: "/rent", icon: <img src="svgs\icons\archive-minus(bg-gray-11).svg" width={20} /> },
    { id: 4, label: "اجاره خانه", path: "/rent", icon: <House size="20" /> },
    { id: 5, label: "خرید خانه", path: "/buy", icon: <Key size="20" /> },
    { id: 6, label: "املاک و مستغلات", path: "/realestates", icon: <House2 size="20" /> },
    { id: 7, label: "مشاورین املاک", path: "/realators", icon: <People size="20" /> },
    { id: 8, label: "اخبار روز", path: "/news", icon: <Receipt21 size="20" /> },
  ];

  // 👤 User related logic
  const userProfilePages = ["/profile", "/my-ad", "/save-ad"];
  const isUserProfilePage = userProfilePages.includes(pathname);
  let userName = user?.fullName?.split(" ")[0] || user?.firstName?.split(" ")[0];
  
  // 🖱️ Handle clicks
  const handleRegisterClick = () => {
    user ? navigate("/register/1") : handleToastError("لطفاً ابتدا وارد حساب کاریری خود شوید!");
  };

  // 🔍 Filter menu items based on page
  const filteredMenuItems = isUserProfilePage
    ? menuItemsMobile
    : menuItemsMobile.filter((item) => item.id !== 2 && item.id !== 3);

  // 🎯 Setup event listeners
  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("click", handleModalClick);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("click", handleModalClick);
    };
  }, []);

  // 🎨 Check if we need gray background
  const needsGrayBg = [
    "/realestates", "/realators", "/news", "/news-details", 
    "/rent", "/my-ad", "/about", "/buy", "/news/news-details"
  ].includes(pathname);

  return (
    <>
      {/* 🖥️ Desktop menu */}
      <div className={clsx("menu-desktop", {
        "md:bg-gray-2": pathname !== "/" || pathname !== "/home-pro-user",
        "bg-gray-2": needsGrayBg
      })}>
        <div className="child:md:flex child:hidden">
          <nav className="flex">
            {/* 🖼️ Logo */}
            <Link to={"/"}>
              <img className="menu-desktop__logo" src="/images/logos/Logo.png" loading="lazy" alt="Logo" />
            </Link>
            
            {/* 📜 Desktop Menu Items */}
            <ul className="menu-desktop__items">
              {menuItemsDesktop.map(({ name, id, path }) => (
                <li key={id} className={clsx("group relative", pathname.includes(path) && "text-primary")}>
                  <Link to={path} className="menu-desktop__link">{name}</Link>
                  <span className="menu-desktop__underline"></span>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* 🍔 Mobile menu trigger */}
        <div className="menu-desktop__mobile-trigger">
          <span ref={navToggleRef} className="menu-desktop__hamburger">
            <HambergerMenu size="24" color="#353535" variant="Outline" />
          </span>
          <Link to={"/"}>
            <img src="/images/logos/Logo.png" loading="lazy" alt="Logo" width={72} height={35} />
          </Link>
          <button className="menu-desktop__register-link" onClick={handleRegisterClick}>
            ثبت آگهی
          </button>
        </div>

        {/* 👤 User actions section */}
        <div className="menu-desktop__user-actions">
          {user ? (
            <Link to={"/profile"} className="header__profile-info">
              {user.image ? 
                <img className="rounded-full w-14 h-14 object-cover" src={user.image} alt="imageUser" /> : 
                <ProfileCircle size="24" color="#505050" />
              }
              <span>{userName}</span>
            </Link>
          ) : (
            <a href="#" className="menu-desktop__login-link" onClick={(e) => e.preventDefault()}>
              ورود
            </a>
          )}

          <button className="register-ad-desktop" onClick={handleRegisterClick}>
            ثبت آگهی
          </button>
        </div>
      </div>

      {/* 📱 Mobile menu */}
      <div ref={menuRef} className={clsx("menu-mobile", { "menu-mobile--open": dropdowns.menuMobile })}>
        {/* ❌ Close button */}
        <div className="menu-mobile__close-button">
          <span ref={btnCloseRef} className="menu-mobile__close-icon">
            <CloseCircle size="24" color="#505050" variant="Outline" />
          </span>
        </div>

        {/* 📝 Profile section */}
        <div className={clsx("menu-mobile__profile-section", (user && (user.firstName || userName)) && "py-1")}>
          {user ? (
            <Link to={"/profile"} className="menu-mobile__profile-info">
              {user.image ? (
                <img className="rounded-full overflow-hidden object-cover w-[70px] h-[70px]" 
                  src={user.image} loading="lazy" alt="userProfile" />
              ) : (
                <ProfileCircle size="70" color="#505050" variant="Outline" />
              )}
              <div className="flex items-center gap-x-2">
                <Edit size="20" color="#505050" />
                <span>{userName}</span>
                <ArrowLeft2 size="20" color="#505050" />
              </div>
            </Link>
          ) : (
            <div className="menu-mobile__profile-link">
              <ProfileCircle size="20" color="#505050" variant="Outline" />
              <span>ورود یا ثبت‌ نام</span>
            </div>
          )}
        </div>

        {/* 📱 Mobile Menu Items */}
        <ul className="menu-mobile__list">
          {filteredMenuItems.map(({ label, icon, id, path }) => (
            <li key={id} className="menu-mobile__list-item">
              {id === 1 ? (
                <div onClick={handleRegisterClick}
                  className={clsx("menu-mobile__link cursor-pointer", pathname.includes(path) && "text-primary")}>
                  <div className="menu-mobile__link-content">
                    {icon}
                    <span>{label}</span>
                  </div>
                  <ArrowLeft2 size="20" color="#505050" variant="Outline" />
                </div>
              ) : (
                <Link to={path} className={clsx("menu-mobile__link", pathname.includes(path) && "text-primary")}>
                  <div className="menu-mobile__link-content">
                    {icon}
                    <span>{label}</span>
                  </div>
                  <ArrowLeft2 size="20" color="#505050" variant="Outline" />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* 🌫️ Overlay background */}
      <div className={clsx("overlay", dropdowns.menuMobile && "overlay--active")} />

      {/* 🛠️ Login Modals */}
      <div className="hidden md:block">
        <ModalLogin isOpenModal={modalState.main} setIsOpenModal={setModalState} />
      </div>
      <div className="block md:hidden">
        <ModalLoginMobile isOpenModal={modalState.mobile} setIsOpenModal={setModalState} />
      </div>
    </>
  );
});

export default Header;
