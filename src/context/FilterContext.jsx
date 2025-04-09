import React, { createContext, useEffect, useState } from "react";

// 🌐 Create FilterContext for global state management
export const FilterContext = createContext();

/**
 * 🧩 FilterProvider Component
 * Manages all filter states for the real estate search application
 */
const FilterProvider = ({ children }) => {
  // 🔄 General reset trigger

  const [sortBy, setSortBy] = useState("newest"); // Sorting option
  const [searchCity, setSearchCity] = useState(""); // City search
  const [usersDataBase, setUsersDataBase] = useState([]);
  const [userRegister, setUserRegister] = useState(false);
  const [showVerificationStep, setShowVerificationStep] = useState(false);
  const [userPhoneNumber,setUserPhoneNumber] = useState("");

  const [user,setUser] = useState({});

 
  const [selectedCity, setSelectedCity] = useState([]); // 🏙️ Selected cities

  // 📜 OPTION LISTS (For dropdowns/selects)
  const [listPropertyType, setListPropertyType] = useState([]); // Property types list
  const [listArea, setListArea] = useState([]); // Areas list
  const [listCoolSystem, setListCoolSystem] = useState([]); // Cooling systems list
  const [listHotSystem, setListHotSystem] = useState([]); // Heating systems list
  const [listFloorMaterial, setListFloorMaterial] = useState([]); // Floor materials list
  const [listCities, setListCities] = useState([]); // Cities list

  

    
    const [filtersCountDesktop, setFiltersCountDesktop] = useState(0);
    const [filtersCountMobile, setFiltersCountMobile] = useState(0);
    const[filterCount,setFilterCount] = useState(0);

    useEffect(()=>{
      setFiltersCountDesktop(+localStorage.getItem("filtersDesktopCount"))
      setFiltersCountMobile(+localStorage.getItem("filtersMobileCount"))
      setFilterCount(+localStorage.getItem("filterCount"))
    },[filtersCountDesktop,filtersCountMobile,filterCount])

    useEffect(()=>{
      setUsersDataBase(JSON.parse(localStorage.getItem("usersDataBase")))
      setUser(JSON.parse(localStorage.getItem("user")))
    },[])
  // 🔗 Context Provider with all state values and setters
  return (
    <FilterContext.Provider
      value={{
       
        filterCount,
        setFilterCount,
        userRegister,
        setUserRegister,
        // 📋 Single selection filters
       
        sortBy,
        searchCity,
        setSortBy,
        setSearchCity,
        listCities,
        setListCities,
        showVerificationStep,
        setShowVerificationStep,

        usersDataBase,
        setUsersDataBase,


        user,
        setUser,

        userPhoneNumber,
        setUserPhoneNumber,

        listPropertyType,
        listArea,
        listCoolSystem,
        listHotSystem,
        listFloorMaterial,
        selectedCity,
        setListPropertyType,
        setListArea,
        setListCoolSystem,
        setListHotSystem,
        setListFloorMaterial,
        setSelectedCity,
        filtersCountDesktop,
        setFiltersCountDesktop,
        filtersCountMobile,
        setFiltersCountMobile,


      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
