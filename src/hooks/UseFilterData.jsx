import React, { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

// Categories for filters such as bathroom, floor, and bathroom type
export const categoriesBathroom = [
  {
    id: 1,
    name: "سرویس بهداشتی",
    labels: [
      { id: 1, name: "هر تعداد", value: "any" },
      { id: 3, name: "۱", value: "1" },
      { id: 4, name: "۲", value: "2" },
      { id: 5, name: "۳", value: "3" },
      { id: 6, name: "۴", value: "4" },
      { id: 7, name: "۵+", value: "5+" },
    ],
  },
];

export const categoriesFloor = [
  {
    id: 1,
    name: "طبقه",
    labels: [
      { id: 1, name: "مهم نیست", value: "any" },
      { id: 2, name: "همکف", value: "groundFloor" },
      { id: 3, name: "۱", value: "1" },
      { id: 4, name: "۲", value: "2" },
      { id: 5, name: "۳", value: "3" },
      { id: 6, name: "۴", value: "4" },
      { id: 7, name: "۵+", value: "5+" },
    ],
  },
];

export const categoriesBathroomType = [
  {
    id: 1,
    name: "نوع سرویس بهداشتی",
    labels: [
      { id: 1, name: "مهم نیست", value: "any" },
      { id: 2, name: "ایرانی", value: "irani" },
      { id: 3, name: "فرنگی", value: "foreign" },
      { id: 4, name: "هر دو", value: "both" },
    ],
  },
];

// Main hook to get the necessary filter data from context
export default function UseFilterData() {
  // Accessing context values and functions for various filters
  const {
    selectedRooms,
    setSelectedRooms,
    selectedParking,
    setSelectedParking,
    selectedStorage,
    setSelectedStorage,
    selectedElevator,
    setSelectedElevator,
    coolSystem,
    setCoolSystem,
    hotSystem,
    setHotSystem,
    floorMaterial,
    setFloorMaterial,
    selectedPropertyType,
    setSelectedPropertyType,
    selectedArea,
    setSelectedArea,
  } = useContext(FilterContext);

  // HVAC system data (cooling, heating) and floor material options
  const hvacSystemMobileData = [
    {
      key: "coolSystem",
      label: "سیستم سرمایش",
      name: "انتخاب سیستم",
      context: "coolSystem", // Used to store and get system state
      systemState: coolSystem, // The current state of the system
      setSystemState: setCoolSystem, // Function to update the state
      options: [
        { id: 1, name: "مهم نیست", selected: true },
        { id: 2, name: "کولر آبی", selected: false },
        { id: 3, name: "اسپلیت", selected: false },
        { id: 4, name: "فن کوئل", selected: false },
        { id: 5, name: "چیلر", selected: false },
      ],
    },
    {
      key: "hotSystem",
      label: "سیستم گرمایش",
      name: "انتخاب سیستم",
      context: "hotSystem",
      systemState: hotSystem,
      setSystemState: setHotSystem,
      options: [
        { id: 1, name: "مهم نیست", selected: true },
        { id: 2, name: "مرکزی", selected: false },
        { id: 3, name: "اسپلیت", selected: false },
        { id: 4, name: "شومینه", selected: false },
        { id: 5, name: "از کف", selected: false },
        { id: 6, name: "رادیاتور", selected: false },
      ],
    },
    {
      key: "floorMaterial",
      label: "جنس کف",
      name: "انتخاب جنس کف",
      context: "floorMaterial",
      systemState: floorMaterial,
      setSystemState: setFloorMaterial,
      options: [
        { id: 1, name: "مهم نیست", selected: true },
        { id: 2, name: "سنگ", selected: false },
        { id: 3, name: "سرامیک", selected: false },
        { id: 4, name: "پارکت", selected: false },
        { id: 5, name: "لمینت", selected: false },
        { id: 6, name: "موزائیک", selected: false },
      ],
    },
  ];

  // Common labels used across different filters
  const commonLabels = [
    { id: 1, name: "هر تعداد", value: "any" },
    { id: 7, name: "ندارد", value: "none" },
    { id: 2, name: "۱", value: "1" },
    { id: 3, name: "۲", value: "2" },
    { id: 4, name: "۳", value: "3" },
    { id: 5, name: "۴", value: "4" },
    { id: 6, name: "۵+", value: "5+" },
  ];

  // Filter data for amenities (rooms, parking, storage, elevator)
  const amenitiesData = [
    {
      key: "selectedRooms",
      name: "اتاق خواب",
      systemState: selectedRooms, // The selected state for rooms
      setSystemState: setSelectedRooms, // Function to set the rooms filter state
      labels: commonLabels, // Common labels for the rooms filter
    },
    {
      key: "selectedParking",
      name: "پارکینگ",
      systemState: selectedParking,
      setSystemState: setSelectedParking,
      labels: commonLabels,
    },
    {
      key: "selectedStorage",
      name: "انباری",
      systemState: selectedStorage,
      setSystemState: setSelectedStorage,
      labels: commonLabels,
    },
    {
      key: "selectedElevator",
      name: "آسانسور",
      systemState: selectedElevator,
      setSystemState: setSelectedElevator,
      labels: commonLabels,
    },
  ];

  // Property-related filter data (area and property type)
  const propertyFilterData = [
    {
      id: 1,
      systemState: selectedArea,
      setSystemState: setSelectedArea,
      name: "انتخاب منطقه",
      label: "منطقه‌",
      context: "area", // Context for area filter
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
      id: 2,
      systemState: selectedPropertyType,
      setSystemState: setSelectedPropertyType,
      name: "انتخاب نوع ملک",
      label: "نوع ملک",
      context: "propertyType", // Context for property type filter
      options: [
        { id: 1, name: "آپارتمان", selected: false },
        { id: 2, name: "خانه ویلایی", selected: false },
        { id: 3, name: "خانه تک واحدی", selected: false },
        { id: 4, name: "پنت‌هاوس", selected: false },
        { id: 5, name: "مغازه/واحد تجاری", selected: false },
        { id: 6, name: "دفتر اداری", selected: false },
        { id: 7, name: "زمین", selected: false },
        { id: 8, name: "ویلای باغ", selected: false },
        { id: 9, name: "مزرعه/اراضی کشاورزی", selected: false },
      ],
    },
  ];

  return { hvacSystemMobileData, amenitiesData, propertyFilterData };
}
