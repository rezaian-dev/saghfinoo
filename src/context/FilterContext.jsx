import React, { createContext, useEffect, useState } from "react";

// 🌐 Global Context for Real Estate Application
export const FilterContext = createContext();

/**
 * 🏗️ FilterProvider Component
 * Central state management for the real estate application
 * Manages user data, filters, and global application state
 */
const FilterProvider = ({ children }) => {
  // 👥 USER MANAGEMENT
  const [usersDataBase, setUsersDataBase] = useState([]);
  const [user, setUser] = useState(null);
  const [userRegister, setUserRegister] = useState(false);
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [showVerificationStep, setShowVerificationStep] = useState(false);
  const [protectedRedirect, setProtectedRedirect] = useState(false);

  // 📦 AD MANAGEMENT
  const [adDraft, setAdDraft] = useState({});
  const [userAdlists, setUserAdLists] = useState([]);
  const [userAdSaveLists, setUserAdSaveLists] = useState([]);

  // 🏷️ FILTER OPTIONS DATA
  const [listPropertyType, setListPropertyType] = useState([]);
  const [listArea, setListArea] = useState([]);
  const [listCoolSystem, setListCoolSystem] = useState([]);
  const [listHotSystem, setListHotSystem] = useState([]);
  const [listFloorMaterial, setListFloorMaterial] = useState([]);
  const [listCities, setListCities] = useState([]);

  // 🔢 FILTER COUNTERS
  const [filtersCountDesktop, setFiltersCountDesktop] = useState(0);
  const [filtersCountMobile, setFiltersCountMobile] = useState(0);
  const [filterCount, setFilterCount] = useState(0);

  // 📥 INITIAL DATA LOADING
  useEffect(() => {
    // Load filter counts from localStorage
    setFiltersCountDesktop(+localStorage.getItem("filtersDesktopCount") || 0);
    setFiltersCountMobile(+localStorage.getItem("filtersMobileCount") || 0);
    setFilterCount(+localStorage.getItem("filterCount") || 0);
  }, [location.search]);

  useEffect(() => {
    // 🗄️ Load persisted data
    const loadPersistedData = () => {
      const storedUsers = localStorage.getItem("usersDataBase");
      const storedUser = localStorage.getItem("user");

      setUsersDataBase(storedUsers ? JSON.parse(storedUsers) : []);

      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setUserAdSaveLists(parsedUser.userAdSaveLists || []);
      }
    };

    loadPersistedData();
  }, [location.pathname]);

  // 📦 Context value object
  const contextValue = {
    // 👤 User related states
    user,
    setUser,
    userRegister,
    setUserRegister,
    userPhoneNumber,
    setUserPhoneNumber,
    showVerificationStep,
    setShowVerificationStep,
    protectedRedirect,
    setProtectedRedirect,
    usersDataBase,
    setUsersDataBase,

    // 🏠 Ad related states
    adDraft,
    setAdDraft,
    userAdlists,
    setUserAdLists,
    userAdSaveLists,
    setUserAdSaveLists,

    // 🏷️ Filter option lists
    listPropertyType,
    setListPropertyType,
    listArea,
    setListArea,
    listCoolSystem,
    setListCoolSystem,
    listHotSystem,
    setListHotSystem,
    listFloorMaterial,
    setListFloorMaterial,
    listCities,
    setListCities,

    // 🔢 Filter counters
    filterCount,
    setFilterCount,
    filtersCountDesktop,
    setFiltersCountDesktop,
    filtersCountMobile,
    setFiltersCountMobile,
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
