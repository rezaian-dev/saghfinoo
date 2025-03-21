import { useState, useRef } from "react";

export default function useToggleMenu() {
  // 🔹 States
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // ⬇️ Dropdown
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 📂 Menu
  const [isActiveOverlay, setIsActiveOverlay] = useState(false); // 🌫️ Overlay

  // 🔹 Refs
  const btnRef = useRef(null); // 🎯 Button
  const navToggleRef = useRef(null); // 🎯 Navbar toggle
  const menuRef = useRef(null); // 🎯 Menu
  const fillterInteractiveRef = useRef(null); // 🎯 Interactive area
  const btnCloseRef = useRef(null); // 🎯 Close button
  const menuModalRef = useRef(null); // 🎯 Modal

  // 🔹 Handle clicks
  const handleClick = ({ target }) => {
    const isFilterInteractive = fillterInteractiveRef.current?.contains(target);
    const isFilterButton = target.classList.contains(
      "rental-property-listing__filters"
    );
    const isCloseButton = btnCloseRef.current?.contains(target);
    const isFilterMenu = menuRef.current?.contains(target);
    const isFilterButtonRef = btnRef.current?.contains(target);
    const isNavToggleRef = navToggleRef.current?.contains(target);

    if (isNavToggleRef)
      return (
        setIsActiveOverlay((prev) => !prev), setIsMenuOpen((prev) => !prev)
      );
    if (isFilterButton || isFilterInteractive) setIsMenuOpen((prev) => !prev);
    if ((!isFilterMenu && !isFilterButton) || isCloseButton)
      setIsActiveOverlay(false), setIsMenuOpen(false);
    if ((isFilterButtonRef && !isFilterMenu) || isFilterInteractive)
      setIsDropdownOpen((prev) => !prev);
    else if (!isFilterMenu) setIsDropdownOpen(false);
  };

  // ❌ Close menu
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsActiveOverlay(false);
  };

  return {
    isDropdownOpen,
    isMenuOpen,
    btnRef,
    menuRef,
    fillterInteractiveRef,
    btnCloseRef,
    handleClick,
    navToggleRef,
    isActiveOverlay,
    menuModalRef,
    closeMenu,
    setIsMenuOpen,
  };
}
