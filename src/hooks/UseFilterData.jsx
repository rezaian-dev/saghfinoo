import React, { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

// 🏠 Categories for bathroom filters
export const categoriesBathroom = [
  {
    id: 1,
    name: "سرویس بهداشتی", // Bathroom
    labels: [
      { id: 1, name: "هر تعداد", value: "any" }, // Any number
      { id: 3, name: "۱", value: "1" },
      { id: 4, name: "۲", value: "2" },
      { id: 5, name: "۳", value: "3" },
      { id: 6, name: "۴", value: "4" },
      { id: 7, name: "۵+", value: "5+" },
    ],
  },
];

// 🏢 Categories for floor selection
export const categoriesFloor = [
  {
    id: 1,
    name: "طبقه", // Floor
    labels: [
      { id: 1, name: "مهم نیست", value: "any" }, // Doesn't matter
      { id: 2, name: "همکف", value: "groundFloor" }, // Ground floor
      { id: 3, name: "۱", value: "1" },
      { id: 4, name: "۲", value: "2" },
      { id: 5, name: "۳", value: "3" },
      { id: 6, name: "۴", value: "4" },
      { id: 7, name: "۵+", value: "5+" },
    ],
  },
];

// 🚽 Categories for bathroom type
export const categoriesBathroomType = [
  {
    id: 1,
    name: "نوع سرویس بهداشتی", // Bathroom type
    labels: [
      { id: 1, name: "مهم نیست", value: "any" }, // Doesn't matter
      { id: 2, name: "ایرانی", value: "irani" }, // Iranian style
      { id: 3, name: "فرنگی", value: "foreign" }, // Western style
      { id: 4, name: "هر دو", value: "both" }, // Both types
    ],
  },
];

// 🔍 Main hook to access and manage filter data from context
export default function UseFilterData() {
  // Extract all filter-related state and setter functions from context
  const {
    // 🛏️ Amenities filters
    selectedRooms,
    setSelectedRooms,
    selectedParking,
    setSelectedParking,
    selectedStorage,
    setSelectedStorage,
    selectedElevator,
    setSelectedElevator,
    
    // 🧊 Systems and materials filters
    listCoolSystem,
    listHotSystem,
    listFloorMaterial,
    listPropertyType,
    listArea,
    setListCoolSystem,
    setListHotSystem,
    setListFloorMaterial,
    setListPropertyType,
    setListArea,
   
    // 🏙️ Location filters
    selectedCity,
    setSelectedCity,
    selectedPropertyType,
    setSelectedPropertyType,
    selectedArea,
    setSelectedArea,
    listCities,
    setListCities,
    
    // 🌡️ System selection states
    coolSystem,
    setCoolSystem,
    hotSystem,
    setHotSystem,
    floorMaterial,
    setFloorMaterial,
  } = useContext(FilterContext);

  // 🌡️ HVAC and floor material configuration data
  const hvacSystemMobileData = [
    {
      key: "coolSystem",
      label: "سیستم سرمایش", // Cooling system
      name: "انتخاب سیستم", // Select system
      context: "coolSystem",
      listSystemState: listCoolSystem, // Current system options state
      setListSystemState: setListCoolSystem, // Function to update options
      systemState: coolSystem, // Current selection
      setSystemState: setCoolSystem, // Function to update selection
      
      options: [
        { id: 1, name: "مهم نیست", selected: true }, // Doesn't matter
        { id: 2, name: "کولر آبی", selected: false }, // Evaporative cooler
        { id: 3, name: "اسپلیت", selected: false }, // Split AC
        { id: 4, name: "فن کوئل", selected: false }, // Fan coil
        { id: 5, name: "چیلر", selected: false }, // Chiller
      ],
    },
    {
      key: "hotSystem",
      label: "سیستم گرمایش", // Heating system
      name: "انتخاب سیستم", // Select system
      context: "hotSystem",
      listSystemState: listHotSystem,
      setListSystemState: setListHotSystem,
      systemState: hotSystem,
      setSystemState: setHotSystem,
      options: [
        { id: 1, name: "مهم نیست", selected: true }, // Doesn't matter
        { id: 2, name: "مرکزی", selected: false }, // Central heating
        { id: 3, name: "اسپلیت", selected: false }, // Split unit
        { id: 4, name: "شومینه", selected: false }, // Fireplace
        { id: 5, name: "از کف", selected: false }, // Floor heating
        { id: 6, name: "رادیاتور", selected: false }, // Radiator
      ],
    },
    {
      key: "floorMaterial",
      label: "جنس کف", // Floor material
      name: "انتخاب جنس کف", // Select floor material
      context: "floorMaterial",
      listSystemState: listFloorMaterial,
      setListSystemState: setListFloorMaterial,
      systemState: floorMaterial,
      setSystemState: setFloorMaterial,
      options: [
        { id: 1, name: "مهم نیست", selected: true }, // Doesn't matter
        { id: 2, name: "سنگ", selected: false }, // Stone
        { id: 3, name: "سرامیک", selected: false }, // Ceramic
        { id: 4, name: "پارکت", selected: false }, // Parquet
        { id: 5, name: "لمینت", selected: false }, // Laminate
        { id: 6, name: "موزائیک", selected: false }, // Mosaic
      ],
    },
  ];

  // 🔢 Common numeric labels used across multiple filters
  const commonLabels = [
    { id: 1, name: "هر تعداد", value: "any" }, // Any number
    { id: 7, name: "ندارد", value: "none" }, // None
    { id: 2, name: "۱", value: "1" },
    { id: 3, name: "۲", value: "2" },
    { id: 4, name: "۳", value: "3" },
    { id: 5, name: "۴", value: "4" },
    { id: 6, name: "۵+", value: "5+" },
  ];

  // 🏠 Filter data for property amenities
  const amenitiesData = [
    {
      key: "selectedRooms",
      name: "اتاق خواب", // Bedrooms
      systemState: selectedRooms,
      setSystemState: setSelectedRooms,
      labels: commonLabels,
    },
    {
      key: "selectedParking",
      name: "پارکینگ", // Parking
      systemState: selectedParking,
      setSystemState: setSelectedParking,
      labels: commonLabels,
    },
    {
      key: "selectedStorage",
      name: "انباری", // Storage
      systemState: selectedStorage,
      setSystemState: setSelectedStorage,
      labels: commonLabels,
    },
    {
      key: "selectedElevator",
      name: "آسانسور", // Elevator
      systemState: selectedElevator,
      setSystemState: setSelectedElevator,
      labels: commonLabels,
    },
  ];

  // 🏙️ Property location and type filter configurations
  const propertyFilterData = [
    {
      id: 1,
      listSystemState: listCities,
      setListSystemState: setListCities,
      systemState: selectedCity,
      setSystemState: setSelectedCity,
      name: "انتخاب شهر", // Select city
      label: "شهر", // City
      context: "city",
      options: [
        { id: 1, name: "آبادان", selected: false },
        { id: 2, name: "بابل", selected: false },
        { id: 3, name: "بوشهر", selected: false },
        { id: 4, name: "تبریز", selected: false },
        { id: 5, name: "اراک", selected: false },
        { id: 6, name: "اصفهان", selected: false },
        { id: 7, name: "خراسان رضوی", selected: false },
        { id: 8, name: "خراسان شمالی", selected: false },
        { id: 9, name: "خراسان جنوبی", selected: false },
        { id: 10, name: "هرمزگان", selected: false },
        { id: 11, name: "قم", selected: false },
        { id: 12, name: "ساری", selected: false },
        { id: 13, name: "سنندج", selected: false },
        { id: 14, name: "گیلان", selected: false },
        { id: 15, name: "گلستان", selected: false }, 
        { id: 16, name: "مشهد", selected: false },
        { id: 17, name: "رشت", selected: false },
        { id: 18, name: "قزوین", selected: false },
        { id: 19, name: "کرج", selected: false },
        { id: 20, name: "کرمانشاه", selected: false },
        { id: 21, name: "کرمان", selected: false },
        { id: 22, name: "شیراز", selected: false },
        { id: 23, name: "اردبیل", selected: false },
        { id: 24, name: "ایلام", selected: false },
        { id: 25, name: "یزد", selected: false },
        { id: 26, name: "همدان", selected: false },
        { id: 27, name: "زنجان", selected: false },
        { id: 28, name: "زاهدان", selected: false },
        { id: 29, name: "لرستان", selected: false },
        { id: 30, name: "چهارمحال و بختیاری", selected: false },
        { id: 31, name: "تهران", selected: false }
      ],
    },
    {
      id: 2,
      listSystemState: listArea,
      setListSystemState: setListArea,
      systemState: selectedArea,
      setSystemState: setSelectedArea,
      name: "انتخاب منطقه", // Select area
      label: "منطقه‌", // Area/district
      context: "area",
      options: [
        { id: 1, name: "منطقه ۱", selected: false },
        { id: 2, name: "منطقه ۲", selected: false },
        { id: 3, name: "منطقه ۳", selected: false },
        { id: 4, name: "منطقه ۴", selected: false },
        { id: 5, name: "منطقه ۵", selected: false },
        { id: 6, name: "منطقه ۶", selected: false },
        { id: 7, name: "منطقه ۷", selected: false },
        { id: 8, name: "منطقه ۸", selected: false },
        { id: 9, name: "منطقه ۹", selected: false },
        { id: 10, name: "منطقه ۱۰", selected: false },
        { id: 11, name: "منطقه ۱۱", selected: false },
        { id: 12, name: "منطقه ۱۲", selected: false },
        { id: 13, name: "منطقه ۱۳", selected: false },
        { id: 14, name: "منطقه ۱۴", selected: false },
        { id: 15, name: "منطقه ۱۵", selected: false },
        { id: 16, name: "منطقه ۱۶", selected: false },
        { id: 17, name: "منطقه ۱۷", selected: false },
        { id: 18, name: "منطقه ۱۸", selected: false },
        { id: 19, name: "منطقه ۱۹", selected: false },
        { id: 20, name: "منطقه ۲۰", selected: false },
        { id: 21, name: "منطقه ۲۱", selected: false },
        { id: 22, name: "منطقه ۲۲", selected: false },
      ],
    },
    {
      id: 3,
      listSystemState: listPropertyType,
      setListSystemState: setListPropertyType,
      systemState: selectedPropertyType,
      setSystemState: setSelectedPropertyType,
      name: "انتخاب نوع ملک", // Select property type
      label: "نوع ملک", // Property type
      context: "propertyType",
      options: [
        { id: 1, name: "آپارتمان", selected: false }, // Apartment
        { id: 2, name: "خانه ویلایی", selected: false }, // Villa
        { id: 3, name: "خانه تک واحدی", selected: false }, // Single unit house
        { id: 4, name: "پنت‌هاوس", selected: false }, // Penthouse
        { id: 5, name: "مغازه/واحد تجاری", selected: false }, // Shop/Commercial unit
        { id: 6, name: "دفتر اداری", selected: false }, // Office
        { id: 7, name: "زمین", selected: false }, // Land
        { id: 8, name: "ویلای باغ", selected: false }, // Garden villa
        { id: 9, name: "مزرعه/اراضی کشاورزی", selected: false }, // Farm/Agricultural land
      ],
    },
  ];

  // Return all filter data for component use
  return { hvacSystemMobileData, amenitiesData, propertyFilterData };
}
