import React, { useEffect, useRef, useState } from "react";
import HeaderDesktop from "../../components/NavHeaderDesktop/NavHeaderDesktop";
import NavHeaderMobile from "../../components/NavHeaderMobile/NavHeaderMobile";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);
  // Handle menu open/close
  const handleMenuToggle = ({ target }) => {
    // Open menu when hamburger icon is clicked
    if (target.className === "hamberger-menu") {
      setIsOpen(true);
    }
    // Close menu when close button or outside of the menu is clicked
    else if (
      target.className === "close-circle" ||
      !menuRef.current.contains(target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener to detect clicks outside the menu
    document.addEventListener("click", handleMenuToggle);

    return () => {
      // Clean up event listener on component unmount
      document.removeEventListener("click", handleMenuToggle);
    };
  }, []);

  return (
    <>
      <HeaderDesktop />
      <NavHeaderMobile isOpen={isOpen} menuRef={menuRef} handleMenuToggle={handleMenuToggle}/>

      {/* Overlay background */}
      <div className={`fixed ${isOpen ? "block" : "hidden"} inset-0 bg-info opacity-40 z-30`}/>
    </>
  );
}
