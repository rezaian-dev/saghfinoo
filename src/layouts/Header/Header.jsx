import React, { memo, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import clsx from "classnames";
import {ArrowLeft2, CloseCircle, Edit, HambergerMenu,ProfileCircle } from "iconsax-react";
import useToggleMenu from "../../hooks/useToggleMenu";
import useModal from "../../hooks/useModal";
import ModalLogin from "../../components/CoreComponents/Modals/ModalLogin/ModalLogin";
import ModalLoginMobile from "../../components/CoreComponents/Modals/ModalLoginMobile/ModalLoginMobile";
import { FilterContext } from "../../context/FilterContext";
import useToast from "../../hooks/useToast";
import Swal from "sweetalert2"; // 🚨 Make sure Swal is imported
import { menuItemsDesktop,menuItemsMobile } from "../../data/realEstateData";

const Header = memo(() => {
  // 🎮 State management hooks
  const { dropdowns, navToggleRef, menuRef, btnCloseRef, handleClick, closeMenu } = useToggleMenu();
  const { handleModalClick, modalState, setModalState } = useModal(closeMenu);
  const { user, setUser } = useContext(FilterContext);
  const { handleToastError } = useToast();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // 👤 User profile setup
  const userProfilePages = ["/profile", "/profile/my-ads", "/profile/saved-ads"];
  const isUserProfilePage = userProfilePages.includes(pathname);
  let userName = user?.fullName?.split(" ")[0] || user?.firstName?.split(" ")[0];
  
  // 🔘 Click handler for ad registration
  const handleRegisterClick = () => {
    user ? navigate("/register/1") : handleToastError("لطفاً ابتدا وارد حساب کاریری خود شوید!");
  };

  // 📤 Logout handler
  const handleLogout = (e) => {
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
  };

  // 🧮 Filter menu items based on page
  const filteredMenuItems = isUserProfilePage
    ? menuItemsMobile
    : menuItemsMobile.filter((item) => item.id !== 2 && item.id !== 3 && item.id !== 9);

  // 🎯 Setup event listeners
  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("click", handleModalClick);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("click", handleModalClick);
    };
  }, []);

  // 🎨 Check if current page needs gray background
  const needsGrayBg = [
    "/realestates", "/realators", "/news", "/news-details", 
    "/rent", "/profile/saved-ads","/profile/my-ads", "/about", "/buy", "/news/news-details"
  ].includes(pathname);

  return (
    <>
      {/* 🖥️ Desktop header */}
      <div className={clsx("menu-desktop", {
        "md:bg-gray-2": pathname !== "/" || pathname !== "/home-pro-user",
        "bg-gray-2": needsGrayBg
      })}>
        <div className="child:md:flex child:hidden">
          <nav className="flex">
            {/* 🏠 Logo */}
            <Link to={"/"}>
              <img className="menu-desktop__logo" src="/images/logos/Logo.png" loading="lazy" alt="Logo" />
            </Link>
            
            {/* 📑 Navigation menu */}
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

        {/* 📱 Mobile menu trigger */}
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

        {/* 👤 User actions area */}
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

      {/* 📱 Mobile menu panel */}
      <div ref={menuRef} className={clsx("menu-mobile", { "menu-mobile--open": dropdowns.menuMobile })}>
        {/* ❌ Close button */}
        <div className="menu-mobile__close-button">
          <span ref={btnCloseRef} className="menu-mobile__close-icon">
            <CloseCircle size="24" color="#505050" variant="Outline" />
          </span>
        </div>

        {/* 👤 Profile section */}
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

        {/* 📋 Mobile menu items */}
        <ul className="menu-mobile__list">
          {filteredMenuItems.map(({ label, icon, id, path, type }) => (
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
              ) : type === "logout" ? (
                <div onClick={handleLogout}
                  className={clsx("menu-mobile__link cursor-pointer")}>
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

      {/* 🌫️ Background overlay */}
      <div className={clsx("overlay", dropdowns.menuMobile && "overlay--active")} />

      {/* 🔐 Login modals */}
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
