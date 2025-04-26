/**
 * Generate random listings for real estate agents
 */

// The base property object to clone and modify for creating listings
const baseProperty = {
  id: 57,
  city: "tehran",
  labelCity: "تهران",
  district: 13,
  propertyType: "garden_villa",
  size: 146,
  bedrooms: 1,
  parking: 0,
  floor: 3,
  totalFloors: 7,
  releaseTime: "۳ روز پیش",
  address: "خیابان ولیعصر، منطقه 13",
  images: [
    { id: 169, img: "../../images/rent/rent-page/house_4.webp", alt: "house_4" },
    { id: 170, img: "../../images/rent/rent-page/house_1.webp", alt: "house_1" },
    { id: 171, img: "../../images/rent/rent-page/house_6.webp", alt: "house_6" },
    { id: 172, img: "../../images/rent/rent-page/house_8.webp", alt: "house_8" },
    { id: 173, img: "../../images/rent/rent-page/house_3.webp", alt: "house_3" },
    { id: 174, img: "../../images/rent/rent-page/house_9.webp", alt: "house_9" }
  ],
  locationOnMap: [
    {
      id: 58,
      name: "موقعیت در تهران - منطقه 13",
      coordinates: [35.686530202872945, 51.35326036634886]
    }
  ],
  propertyCode: 18392,
  ageBuilding: 5,
  securityFeatures: ["نگهبان"],
  otherAmenities: ["باربیکیو"],
  visitTime: "روزهای تعطیل",
  neighborhood: "پاسداران",
  block: "یاس",
  shortLocation: "۱۴۶ متر، محدوده پاسداران، یاس، شهر تهران",
  coolingSystem: ["fan", "chiller", "water"],
  coolingSystemLabels: [" فن کوئل", " چیلر", " کولر آبی"],
  floorMaterial: ["laminate", "parquet"],
  floorMaterialLabels: [" لمینت", " پارکت"],
  heatingSystem: ["package", "split", "fireplace"],
  heatingSystemLabels: [" پکیج", " اسپلیت", " شومینه"],
  bathroomType: "both",
  bathroomTypeLabel: "هر دو",
  documentType: "shared",
  documentTypeLabel: "مشاعی",
  elevator: 2,
  storage: 1,
  viewCount: 3413,
  saveCount: 254,
  geographicalPosition: "سه بر",
  immediate: true,
  transactionType: "buy",
  price: 10000000000
};

// Property types in Persian
const propertyTypes = [
  "garden_villa", "apartment", "office", "commercial", "land", 
  "industrial", "farm", "house", "duplex", "penthouse", "single_unit"
];

// Property type labels in Persian
const propertyTypeLabels = [
  "ویلا باغ", "آپارتمان", "دفتر", "تجاری", "زمین", 
  "صنعتی", "مزرعه", "خانه", "دوبلکس", "پنت هاوس", "تک واحدی"
];

// Neighborhoods in Persian
const neighborhoods = [
  "پاسداران", "فرمانیه", "زعفرانیه", "نیاوران", "جردن", 
  "ولنجک", "قیطریه", "دزاشیب", "اقدسیه", "ولیعصر",
  "جمهوری", "انقلاب", "گیشا", "آرژانتین", "میرداماد",
  "ظفر", "ونک", "سعادت آباد", "شهرک غرب", "تهرانپارس"
];

// Blocks in Persian
const blocks = [
  "یاس", "نرگس", "لاله", "نسترن", "شقایق", 
  "بنفشه", "رز", "سنبل", "آلاله", "مریم"
];

// Release times in Persian
const releaseTimes = [
  "۱ ساعت پیش", "۳ ساعت پیش", "۶ ساعت پیش", "دیروز", 
  "۲ روز پیش", "۳ روز پیش", "۵ روز پیش", "هفته پیش", 
  "۱۰ روز پیش", "۲ هفته پیش", "۳ هفته پیش", "۱ ماه پیش"
];

// Visit times in Persian
const visitTimes = [
  "روزهای تعطیل", "روزهای غیرتعطیل", "صبح‌ها", 
  "بعدازظهرها", "هر روز", "با هماهنگی قبلی", "آخر هفته‌ها"
];

// Cities in Persian
const cities = ["tehran", "mashhad", "isfahan", "tabriz", "shiraz", 
               "ahvaz", "karaj", "qom", "urmia", "yazd", "shomal"];

// City labels in Persian
const cityLabels = ["تهران", "مشهد", "اصفهان", "تبریز", "شیراز", 
                    "اهواز", "کرج", "قم", "ارومیه", "یزد", "شمال"];

// Bathroom types in Persian
const bathroomTypes = ["iranian", "foreign", "both"];
const bathroomLabels = ["ایرانی", "فرنگی", "هر دو"];

// Document types in Persian
const documentTypes = ["single", "shared", "qolnameh", "endowment"];
const documentLabels = ["تک برگ", "مشاعی", "قولنامه‌ای", "وقفی"];

// Security features in Persian
const securityFeatures = [
  "نگهبان", "دوربین مدار بسته", "سیستم اعلام حریق", 
  "درب ضد سرقت", "حفاظ پنجره", "گاوصندوق", "سنسور حرکتی"
];

// Other amenities in Persian
const otherAmenities = [
  "باربیکیو", "استخر", "سونا", "جکوزی", "سالن ورزشی", 
  "روف گاردن", "آلاچیق", "آنتن مرکزی", "اینترنت مرکزی", "بالکن"
];

// Cooling systems in Persian
const coolingSystems = ["fan", "chiller", "water", "split", "central", "none"];
const coolingLabels = ["فن کوئل", "چیلر", "کولر آبی", "اسپلیت", "مرکزی", "ندارد"];

// Heating systems in Persian
const heatingSystems = ["package", "split", "fireplace", "central", "radiator", "none"];
const heatingLabels = ["پکیج", "اسپلیت", "شومینه", "مرکزی", "رادیاتور", "ندارد"];

// Floor materials in Persian
const floorMaterials = ["laminate", "parquet", "ceramic", "stone", "carpet", "none"];
const floorLabels = ["لمینت", "پارکت", "سرامیک", "سنگ", "موکت", "ندارد"];

// Transaction types in Persian
const transactionTypes = ["buy", "rent"];

// Geographical positions in Persian
const geographicalPositions = ["جنوبی", "شمالی", "شرقی", "غربی", "سه بر", "دو بر"];

// Office names
const officeNames = [
 "مشاور املاک توسی",
    "مشاور املاک ولیعصر",
    "مشاور املاک محمدی",
    "مشاور املاک خلیج فارس",
    "مشاور املاک داریوش",
    "مشاور املاک صادقی نیا",
    "مشاور املاک نیما",
    "مشاور املاک آزاد",
    "مشاور املاک ایران مهر",
    "مشاور املاک البرز",
    "مشاور املاک فدایی",
    "مشاور املاک رحیمی",
    "مشاور املاک سلمانی",
    "مشاور املاک تهران‌ پارس",
    "مشاور املاک هدایتی",
    "مشاور املاک گاندی",
    "مشاور املاک محمدیان",
    "مشاور املاک لواسانی",
    "مشاور املاک شیراز",
    "مشاور املاک کریمی",
    "مشاور املاک توچال",
];

// Agent names - note which are female (for appropriate profile images)
const agentNames = [
  "پویا موحد", "حامد توکلی", "دیبا رحیمی", "مرجان مرادی", "سارا احمدی", 
  "علی مهدوی", "محمد رضایی", "فاطمه کاظمی", "امیر حسینی", "آرش صادقی",
  "لیلا جعفری", "مهسا نجفی", "رضا اکبری", "نیما محمدی", "آناهیتا تبریزی",
  "حسین کریمی", "زهرا فرجی", "بهنام حسنی", "مینا سعیدی", "پارسا جمشیدی",
  "سحر قاسمی", "مجید یوسفی", "ندا طاهری", "کاوه بابایی", "بهار عزیزی",
  "سعید فرهادی", "نازنین کمالی", "داوود عباسی"
];

// Female agent names to identify which agents need women profile pictures
const femaleAgentNames = [
  "دیبا رحیمی", "مرجان مرادی", "سارا احمدی", "فاطمه کاظمی", 
  "لیلا جعفری", "مهسا نجفی", "آناهیتا تبریزی", "زهرا فرجی", 
  "مینا سعیدی", "سحر قاسمی", "ندا طاهری", "بهار عزیزی", "نازنین کمالی"
];

// Female profile images
const femaleProfileImages = [
  "../../images/landing/home-prouser/diba-rahimi.png",
  "../../images/landing/home-prouser/anahita-tabrizi.png",
  "../../images/landing/home-prouser/fatemeh-izadi.png",
  "../../images/landing/home-prouser/zita-tajdar.png",
  "../../images/landing/home-prouser/nazi-farhangi.png",
  "../../images/landing/home-prouser/mandana-tabrizi.png"
];

// Male profile images
const maleProfileImages = [
  "../../images/landing/home-prouser/ali-parto.png",
  "../../images/landing/home-prouser/adel-seradmadian.png",
  "../../images/landing/home-prouser/ali-yeganeh.png",
  "../../images/landing/home-prouser/behrooz-tehrani.png",
  "../../images/landing/home-prouser/habib-faragi.png",
  "../../images/landing/home-prouser/hamed-tavakoli.png"
];

// Logos
const logos = [
  "../../images/landing/home-prouser/logo-tehran-pars.png",
  "../../images/landing/home-prouser/logo-dariush.png"
];

/**
 * Generate a random number between min and max, inclusive
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Pick a random item from an array
 */
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Pick random items from an array (between 1 and maxItems)
 */
function getRandomItems(array, maxItems) {
  const count = getRandomInt(1, Math.min(maxItems, array.length));
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

/**
 * Generate a random price in toman (between 500M and 50B)
 */
function generateRandomPrice() {
  // Between 500,000,000 and 50,000,000,000 tomans
  return getRandomInt(500000000, 50000000000);
}

/**
 * Generate a random mortgage amount (between 50M and 500M)
 */
function generateRandomMortgage() {
  // Between 50,000,000 and 500,000,000 tomans
  return getRandomInt(50000000, 500000000);
}

/**
 * Generate a random rent amount (between 1M and 20M)
 */
function generateRandomRent() {
  // Between 1,000,000 and 20,000,000 tomans
  return getRandomInt(1000000, 20000000);
}

/**
 * Generate a random mobile number in Persian format
 */
function generateRandomMobileNumber() {
  // Generate Persian-formatted mobile number
  const randomMobileNumber = `۰۹${getRandomInt(10, 99)}${getRandomInt(1000000, 9999999)}`;
  const latinMobileNumber = randomMobileNumber
    .replace(/۰/g, '0')
    .replace(/۱/g, '1')
    .replace(/۲/g, '2')
    .replace(/۳/g, '3')
    .replace(/۴/g, '4')
    .replace(/۵/g, '5')
    .replace(/۶/g, '6')
    .replace(/۷/g, '7')
    .replace(/۸/g, '8')
    .replace(/۹/g, '9');

  return {
    type: "mobile",
    number: randomMobileNumber,
    href: `tel:+${latinMobileNumber.substring(1)}`,
    display: randomMobileNumber,
  };
}

/**
 * Generate a random landline number in Persian format
 */
function generateRandomLandlineNumber() {
  // Generate Persian-formatted landline number
  const areaCode = getRandomInt(21, 28);
  const phoneNumber = getRandomInt(10000000, 99999999);
  const randomLandlineNumber = `۰${areaCode}${phoneNumber}`;
  
  const latinLandlineNumber = randomLandlineNumber
    .replace(/۰/g, '0')
    .replace(/۱/g, '1')
    .replace(/۲/g, '2')
    .replace(/۳/g, '3')
    .replace(/۴/g, '4')
    .replace(/۵/g, '5')
    .replace(/۶/g, '6')
    .replace(/۷/g, '7')
    .replace(/۸/g, '8')
    .replace(/۹/g, '9');

  return {
    type: "landline",
    number: randomLandlineNumber,
    href: `tel:+${latinLandlineNumber.substring(1)}`,
    display: randomLandlineNumber,
  };
}

/**
 * Generate contact numbers for an agent
 */
function generateContactNumbers() {
  return [
    generateRandomMobileNumber(),
    generateRandomLandlineNumber()
  ];
}

/**
 * Generate a single random property listing
 */
function generateRandomProperty(propertyId, agentId, agentCity) {
  const transactionType = getRandomItem(transactionTypes);
  const city = agentCity;
  const cityIndex = cities.indexOf(city);
  const labelCity = cityLabels[cityIndex];
  const district = getRandomInt(1, 22);
  const propertyTypeIndex = getRandomInt(0, propertyTypes.length - 1);
  const propertyType = propertyTypes[propertyTypeIndex];
  
  const neighborhood = getRandomItem(neighborhoods);
  const block = getRandomItem(blocks);
  
  const size = getRandomInt(50, 500);
  const bedrooms = getRandomInt(0, 5);
  const parking = getRandomInt(0, 3);
  const floor = getRandomInt(0, 20);
  const totalFloors = floor + getRandomInt(0, 10);
  
  // Select random cooling systems
  const coolingSystemIndices = getRandomItems([0, 1, 2, 3, 4, 5], 3).sort();
  const coolingSystem = coolingSystemIndices.map(i => coolingSystems[i]);
  const coolingSystemLabels = coolingSystemIndices.map(i => ` ${coolingLabels[i]}`);
  
  // Select random heating systems
  const heatingSystemIndices = getRandomItems([0, 1, 2, 3, 4, 5], 3).sort();
  const heatingSystem = heatingSystemIndices.map(i => heatingSystems[i]);
  const heatingSystemLabels = heatingSystemIndices.map(i => ` ${heatingLabels[i]}`);
  
  // Select random floor materials
  const floorMaterialIndices = getRandomItems([0, 1, 2, 3, 4, 5], 2).sort();
  const floorMaterial = floorMaterialIndices.map(i => floorMaterials[i]);
  const floorMaterialLabels = floorMaterialIndices.map(i => ` ${floorLabels[i]}`);
  
  // Other random properties
  const bathroomTypeIndex = getRandomInt(0, bathroomTypes.length - 1);
  const documentTypeIndex = getRandomInt(0, documentTypes.length - 1);
  
  const property = {
    id: propertyId,
    city,
    labelCity,
    district,
    propertyType,
    size,
    bedrooms,
    parking,
    floor,
    totalFloors,
    releaseTime: getRandomItem(releaseTimes),
    address: `خیابان ${getRandomItem(neighborhoods)}، منطقه ${district}`,
    images: [...baseProperty.images.map(img => ({...img, id: propertyId * 3 + img.id % 3}))],
    locationOnMap: [
      {
        id: propertyId + 1,
        name: `موقعیت در ${labelCity} - منطقه ${district}`,
        coordinates: [
          35.686530202872945 + (Math.random() - 0.5) * 0.1,
          51.35326036634886 + (Math.random() - 0.5) * 0.1
        ]
      }
    ],
    propertyCode: 10000 + propertyId,
    ageBuilding: getRandomInt(0, 30),
    securityFeatures: getRandomItems(securityFeatures, 3),
    otherAmenities: getRandomItems(otherAmenities, 3),
    visitTime: getRandomItem(visitTimes),
    neighborhood,
    block,
    shortLocation: `${size} متر، محدوده ${neighborhood}، ${block}، شهر ${labelCity}`,
    coolingSystem,
    coolingSystemLabels,
    floorMaterial,
    floorMaterialLabels,
    heatingSystem,
    heatingSystemLabels,
    bathroomType: bathroomTypes[bathroomTypeIndex],
    bathroomTypeLabel: bathroomLabels[bathroomTypeIndex],
    documentType: documentTypes[documentTypeIndex],
    documentTypeLabel: documentLabels[documentTypeIndex],
    elevator: getRandomInt(0, 2),
    storage: getRandomInt(0, 1),
    viewCount: getRandomInt(100, 5000),
    saveCount: getRandomInt(10, 500),
    geographicalPosition: getRandomItem(geographicalPositions),
    immediate: Math.random() > 0.5,
    advisor: {
      id: agentId,
      name: "", // Will be filled later
      profileImage: "", // Will be filled later
      rating: 0, // Will be filled later
      activeListings: 0, // Will be filled later
      contactNumbers: generateContactNumbers(), // New contact numbers array
      office: "", // Will be filled later
      logo: getRandomItem(logos)
    },
    transactionType
  };
  
  // Add transaction-specific fields
  if (transactionType === "buy") {
    property.price = generateRandomPrice();
  } else if (transactionType === "rent") {
    property.mortgage = generateRandomMortgage();
    property.rent = generateRandomRent();
  }
  
  return property;
}

/**
 * Generate a list of 28 agents
 */
function generateAgents() {
  const agents = [];
  
  for (let i = 0; i < 28; i++) {
    const name = agentNames[i];
    const isFemale = femaleAgentNames.includes(name);
    
    // Assign appropriate image based on gender
    const image = isFemale ? 
      getRandomItem(femaleProfileImages) : 
      getRandomItem(maleProfileImages);
    
    agents.push({
      id: i + 1,
      name: name,
      image: image,
      agency: getRandomItem(officeNames),
      ratingText: `امتیاز ${getRandomInt(3, 5).toLocaleString("fa-IR")} از ۵`,
      alt: name.replace(/\s+/g, '').toLowerCase(),
      city: getRandomItem(cities),
      isFemale: isFemale
    });
  }
  
  return agents;
}

/**
 * Generate listings for all agents
 */
export function generateAgentListings(agents = null) {
  // If no agents provided, generate 28 agents
  if (!agents) {
    agents = generateAgents();
  }
  
  let propertyIdCounter = 1000;
  const updatedAgents = [];
  
  agents.forEach(agent => {
    // Clone the agent data
    const updatedAgent = { ...agent };
    
    // Generate random number of listings (1-50)
    const listingCount = getRandomInt(1, 50);
    updatedAgent.listingCount = listingCount;
    
    // Generate listings for this agent
    const listings = [];
    for (let i = 0; i < listingCount; i++) {
      const property = generateRandomProperty(propertyIdCounter++, agent.id, agent.city);
      
      // Update property's advisor information
      property.advisor.name = agent.name;
      property.advisor.profileImage = agent.image;
      property.advisor.office = agent.agency;
      property.advisor.contactNumbers = generateContactNumbers(); // Generate unique contact numbers for each listing
      
      // Convert rating from text to number (e.g., "امتیاز ۴ از ۵" -> 4.0)
      let rating = 3.0; // Default
      const ratingMatch = agent.ratingText.match(/(\d)/);
      if (ratingMatch) {
        rating = parseFloat(ratingMatch[1]);
        // Add a random decimal component
        rating += Math.round(Math.random() * 9) / 10;
      }
      property.advisor.rating = rating;
      property.advisor.activeListings = listingCount;
      
      listings.push(property);
    }
    
    updatedAgent.listings = listings;
    updatedAgents.push(updatedAgent);
  });
  
  return updatedAgents;
}

// Generate the listings for 28 agents
const agentsWithListings = generateAgentListings();


agentsWithListings.forEach(agent => {
  // Log a summary of the first listing (if available)
  if (agent.listings && agent.listings.length > 0) {
    const firstListing = agent.listings[0];
    
    // Show total count of properties by transaction type
    const buyCount = agent.listings.filter(p => p.transactionType === "buy").length;
    const rentCount = agent.listings.filter(p => p.transactionType === "rent").length;
  }
});

// Function that returns the updated agents array
export function getAgentsWithListings(originalAgents = null) {
  if (originalAgents) {
    return generateAgentListings(originalAgents);
  }
  return agentsWithListings;
}