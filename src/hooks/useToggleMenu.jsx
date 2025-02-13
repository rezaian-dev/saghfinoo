import { useState, useRef } from 'react';

export default function useToggleMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActiveOverrlay,setIsActiveOverlay] = useState(false);

  const btnRef = useRef(null);
  const navToggleRef = useRef(null);
  const menuRef = useRef(null);
  const fillterInteractiveRef = useRef(null);
  const btnCloseRef = useRef(null);

  const handleClick = ({ target }) => {
    const isFilterInteractive = fillterInteractiveRef.current && fillterInteractiveRef.current.contains(target);
    const isFilterButton = target.classList.contains("rental-property-listing__filters");
    const isCloseButton = btnCloseRef.current && btnCloseRef.current.contains(target);
    const isFilterMenu = menuRef.current && menuRef.current.contains(target);
    const isFilterButtonRef = btnRef.current && btnRef.current.contains(target);
    const isNavToggleRef = navToggleRef.current && navToggleRef.current.contains(target);

    // Handle mobile menu toggle first
    if (isNavToggleRef) {
 
      setIsActiveOverlay(prev => !prev);
      setIsMenuOpen(prev => !prev);
      
      return; // Add return to prevent other conditions from executing
    }

    // Toggle menu for filter interactive or filter buttons
    if (isFilterButton || isFilterInteractive) {
      
      setIsMenuOpen(prev => !prev);
    }

    // Close menu if clicked outside filter menu and not on filter buttons
    if ((!isFilterMenu && !isFilterButton) || isCloseButton) {
  
      setIsActiveOverlay(false);
      setIsMenuOpen(false);
    }

    // Dropdown open/close logic
    if ((isFilterButtonRef && !isFilterMenu) || isFilterInteractive) {

      setIsDropdownOpen(prev => !prev);
    }
    else if (!isFilterMenu) {
      
      setIsDropdownOpen(false);
    }
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
    isActiveOverrlay
  };
}