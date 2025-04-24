import React from "react";

export default function Test() {
  const cityNamesFa = {
    tehran: "تهران",
    mashhad: "مشهد",
    isfahan: "اصفهان",
    tabriz: "تبریز",
    shiraz: "شیراز",
    ahvaz: "اهواز",
    karaj: "کرج",
    qom: "قم",
    urmia: "ارومیه",
    yazd: "یزد",
    shomal: "شمال", // اضافه کردن شهر شمال
  };

  const cityData = {
    tehran: {
      coordinates: [35.6895, 51.389],
      districts: Array.from({ length: 22 }, (_, i) => i + 1),
      addressPrefix: "خیابان ولیعصر،",
    },
    mashhad: {
      coordinates: [36.2605, 59.6168],
      districts: [1, 2, 3, 4, 5],
      addressPrefix: "بلوار وکیل‌آباد،",
    },
    isfahan: {
      coordinates: [32.6539, 51.666],
      districts: [1, 2, 3, 4],
      addressPrefix: "خیابان چهارباغ،",
    },
    tabriz: {
      coordinates: [38.08, 46.2919],
      districts: [1, 2, 3, 4],
      addressPrefix: "خیابان آزادی،",
    },
    shiraz: {
      coordinates: [29.5918, 52.5837],
      districts: [1, 2, 3, 4, 5],
      addressPrefix: "خیابان زند،",
    },
    ahvaz: {
      coordinates: [31.3203, 48.6692],
      districts: [1, 2, 3],
      addressPrefix: "خیابان نادری،",
    },
    karaj: {
      coordinates: [35.84, 50.9391],
      districts: [1, 2, 3, 4],
      addressPrefix: "خیابان مطهری،",
    },
    qom: {
      coordinates: [34.6399, 50.8759],
      districts: [1, 2, 3],
      addressPrefix: "خیابان ارم،",
    },
    urmia: {
      coordinates: [37.5527, 45.0761],
      districts: [1, 2],
      addressPrefix: "خیابان امام،",
    },
    yazd: {
      coordinates: [31.868, 54.356],
      districts: [1, 2, 3, 4, 5],
      addressPrefix: "خیابان امام،",
    },
    shomal: {
      coordinates: [36.5659, 52.0668],
      districts: [1, 2, 3],
      addressPrefix: "خیابان ساحلی،",
    }, // اضافه کردن اطلاعات شهر شمال
  };

  const neighborhoods = [
    "ظفر",
    "ستارخان",
    "ونک",
    "شریعتی",
    "جنت‌آباد",
    "قیطریه",
    "پاسداران",
  ];
  const blocks = ["کوثر", "بهار", "نرگس", "یاس", "گلستان", "میلاد"];
  const securityFeatures = [
    "دوربین مداربسته",
    "سیستم دزدگیر",
    "نگهبان",
    "درب ضد سرقت",
    "سیستم اعلام حریق",
  ];
  const otherAmenities = [
    "لابی",
    "استخر",
    "سونا",
    "جکوزی",
    "سالن ورزش",
    "باربیکیو",
    "روف گاردن",
    "بالکن",
    "آنتن مرکزی",
    "اینترنت مرکزی",
    "لاندری",
  ];
  const visitTimes = [
    "با هماهنگی قبلی",
    "صبح‌ها",
    "عصرها",
    "تمام روز",
    "روزهای تعطیل",
  ];

  // آرایه‌های با مقادیر انگلیسی
  const coolingSystemTypes = ["none", "water", "split", "fan", "chiller"];
  const floorMaterialTypes = [
    "none",
    "stone",
    "ceramic",
    "parquet",
    "laminate",
    "mosaic",
  ];
  const heatingSystemTypes = [
    "none",
    "central",
    "split",
    "fireplace",
    "package",
    "radiator",
  ];
  const bathroomTypes = ["iranian", "foreign", "both"];

  // انواع سند - اصلاح شده
  const documentTypes = [
    "deed",
    "preliminary",
    "personal",
    "shared",
    "leasing",
    "endowment",
  ];

  // ابجکت‌های برای ترجمه‌های فارسی
  const coolingSystemLabels = {
    none: "ندارد",
    water: " کولر آبی",
    split: " اسپلیت",
    fan: " فن کوئل",
    chiller: " چیلر",
  };

  const floorMaterialLabels = {
    none: "ندارد",
    stone: " سنگ",
    ceramic: " سرامیک",
    parquet: " پارکت",
    laminate: " لمینت",
    mosaic: " موزاییک",
  };

  const heatingSystemLabels = {
    none: "ندارد",
    central: " مرکزی",
    split: " اسپلیت",
    fireplace: " شومینه",
    package: " پکیج",
    radiator: " رادیاتور",
  };

  const bathroomTypeLabels = {
    iranian: "ایرانی",
    foreign: "فرنگی",
    both: "هر دو",
  };

  // ترجمه‌های فارسی نوع سند - اصلاح شده
  const documentTypeLabels = {
    deed: "سند شش دانگ",
    preliminary: "قولنامه‌ای",
    personal: "شخصی",
    shared: "مشاعی",
    leasing: "اجاره به شرط تملیک",
    endowment: "وقفی",
  };

  // آرایه اسامی مشاوران
  const advisorNames = [
    "پویا موحد",
    "حامد توکلی",
    "دیبا رحیمی",
    "علی پرتو",
    "ماندانا غفاری",
    "بهروز تهرانی",
    "نیما سرلک",
    "سهراب زمانی",
    "محمدرضا ایزدیار",
    "مرجان مرادی",
    "سارا شیبانی",
    "علی یگانه",
    "ایرج شایان فر",
    "مهرداد اسلامی",
    "حسام فدایی",
    "آناهیتا تبریزی",
    "صدف سلیمانی",
    "فاطمه ایزدی",
    "آتنا یزدی",
    "ثمین تیزبین",
    "امید بی‌پناه",
    "عادل سردمدیان",
    "محمد علیپور",
    "حبیب فرجی",
    "آرش سعادت مهر",
    "پویا پیونده",
    "نازی فرهنگی",
    "پویان موحد",
  ];

  // آرایه نام دفاتر املاک
  const realEstateOffices = [
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
  const realEstateOfficeLogos = {
    "مشاور املاک توسی": "../../images/landing/home-prouser/logo-tusi.png",
    "مشاور املاک ولیعصر": "../../images/landing/home-prouser/logo-valiasr.png",
    "مشاور املاک محمدی": "../../images/landing/home-prouser/logo-mohammadi.png",
    "مشاور املاک خلیج فارس":
      "../../images/landing/home-prouser/logo-khalij-fars.png",
    "مشاور املاک داریوش": "../../images/landing/home-prouser/logo-dariush.png",
    "مشاور املاک صادقی نیا":
      "../../images/landing/home-prouser/logo-sadeghinia.png",
    "مشاور املاک نیما": "../../images/landing/home-prouser/logo-nima.png",
    "مشاور املاک آزاد": "../../images/landing/home-prouser/logo-mehr.png", // استفاده از لوگوی مهر برای آزاد
    "مشاور املاک ایران مهر": "../../images/landing/home-prouser/logo-mehr.png",
    "مشاور املاک البرز":
      "../../images/landing/home-prouser/logo-tehran-pars.png", // استفاده از لوگوی تهران پارس
    "مشاور املاک فدایی": "../../images/landing/home-prouser/logo-fadaei.png",
    "مشاور املاک رحیمی": "../../images/landing/home-prouser/logo-rahimi.png",
    "مشاور املاک سلمانی": "../../images/landing/home-prouser/logo-freshteh.png", // استفاده از لوگوی فرشته
    "مشاور املاک تهران‌ پارس":
      "../../images/landing/home-prouser/logo-tehran-pars.png",
    "مشاور املاک هدایتی": "../../images/landing/home-prouser/logo-nima.png", // استفاده از لوگوی نیما
    "مشاور املاک گاندی": "../../images/landing/home-prouser/logo-gandi.png",
    "مشاور املاک محمدیان":
      "../../images/landing/home-prouser/logo-mohammadi.png", // استفاده از لوگوی محمدی
    "مشاور املاک لواسانی":
      "../../images/landing/home-prouser/logo-lavasani.png",
    "مشاور املاک شیراز": "../../images/landing/home-prouser/logo-shiraz.png",
    "مشاور املاک کریمی": "../../images/landing/home-prouser/logo-dariush.png", // استفاده از لوگوی داریوش
    "مشاور املاک توچال": "../../images/landing/home-prouser/logo-tochal.png",
  };

  // آدرس تصاویر مشاوران مرد
  const maleAdvisorImages = [
    "../../images/landing/home-prouser/habib-faragi.png",
    "../../images/landing/home-prouser/hamed-tavakoli.png",
    "../../images/landing/home-prouser/ali-parto.png",
    "../../images/landing/home-prouser/mohammadreza-izadyar.png",
  ];

  // آدرس تصاویر مشاوران زن
  const femaleAdvisorImages = [
    "../../images/landing/home-prouser/anahita-tabrizi.png",
    "../../images/landing/home-prouser/roya.png",
    "../../images/landing/home-prouser/zita-tajdar.png",
    "../../images/landing/home-prouser/nazi-farhangi.png",
  ];

  // تعیین جنسیت برای هر مشاور (به صورت کلی بر اساس نام)
  const advisorGenders = {
    "پویا موحد": "male",
    "حامد توکلی": "male",
    "دیبا رحیمی": "female",
    "علی پرتو": "male",
    "ماندانا غفاری": "female",
    "بهروز تهرانی": "male",
    "نیما سرلک": "male",
    "سهراب زمانی": "male",
    "محمدرضا ایزدیار": "male",
    "مرجان مرادی": "female",
    "سارا شیبانی": "female",
    "علی یگانه": "male",
    "ایرج شایان فر": "male",
    "مهرداد اسلامی": "male",
    "حسام فدایی": "male",
    "آناهیتا تبریزی": "female",
    "صدف سلیمانی": "female",
    "فاطمه ایزدی": "female",
    "آتنا یزدی": "female",
    "ثمین تیزبین": "female",
    "امید بی‌پناه": "male",
    "عادل سردمدیان": "male",
    "محمد علیپور": "male",
    "حبیب فرجی": "male",
    "آرش سعادت مهر": "male",
    "پویا پیونده": "male",
    "نازی فرهنگی": "female",
    "پویان موحد": "male",
  };

  let globalId = 1;
  let imageId = 1;

  const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const getRandomSize = () => Math.floor(Math.random() * 200) + 50;
  const getRandomBedrooms = () => Math.floor(Math.random() * 4) + 1;
  const getRandomParking = () => Math.floor(Math.random() * 3);
  const getRandomFloor = () => Math.floor(Math.random() * 10) + 1;
  const getRandomTransactionType = () => (Math.random() < 0.5 ? "buy" : "rent");

  const getRandomTotalFloors = (floor) => {
    return Math.max(floor, Math.floor(Math.random() * 15) + 1);
  };

  function determinePropertyStrategy() {
    const random = Math.random();
    if (random < 0.05) return "none";
    if (random < 0.15) return "minimal";
    if (random < 0.8) return "mixed";
    return "comprehensive";
  }

  const getRandomItems = (arr, n) => {
    const result = [];
    const tempArray = [...arr];

    for (let i = 0; i < n; i++) {
      if (tempArray.length === 0) break;

      const randomIndex = Math.floor(Math.random() * tempArray.length);
      result.push(tempArray[randomIndex]);
      tempArray.splice(randomIndex, 1);
    }

    return result;
  };

  const getRandomMultipleItems = (arr, strategy) => {
    const hasNone = arr.includes("none");
    const workingArray = hasNone ? arr : [...arr, "none"];

    switch (strategy) {
      case "none":
        return ["none"];

      case "minimal":
        if (Math.random() < 0.8) {
          const filteredArr = workingArray.filter((item) => item !== "none");
          return filteredArr.length > 0
            ? [getRandomItem(filteredArr)]
            : ["none"];
        } else {
          return ["none"];
        }

      case "mixed":
        if (Math.random() < 0.1) {
          return ["none"];
        } else {
          const filteredArr = workingArray.filter((item) => item !== "none");
          const count = Math.floor(Math.random() * 2) + 1;
          return getRandomItems(
            filteredArr,
            Math.min(count, filteredArr.length)
          );
        }

      case "comprehensive":
        const filteredArr = workingArray.filter((item) => item !== "none");
        const count = Math.floor(Math.random() * 2) + 2;
        return getRandomItems(filteredArr, Math.min(count, filteredArr.length));

      default:
        return ["none"];
    }
  };

  const getLabelsForValues = (values, labelsObj) => {
    return values.map((value) => labelsObj[value]);
  };

  const getRandomImageData = () => {
    const num = Math.floor(Math.random() * 10) + 1;
    const currentImageId = imageId++;
    return {
      id: currentImageId,
      img: `../../images/rent/rent-page/house_${num}.webp`,
      alt: `house_${num}`,
    };
  };

  // تابع برای ایجاد آرایه تصادفی از تصاویر با طول متغیر (بین 1 تا 10)
  const getRandomImagesArray = () => {
    // تعیین تعداد تصادفی تصاویر بین 1 تا 10
    const imageCount = Math.floor(Math.random() * 10) + 1;
    const images = [];

    // ایجاد تعداد مشخص شده تصویر
    for (let i = 0; i < imageCount; i++) {
      images.push(getRandomImageData());
    }

    return images;
  };

  const getRandomDate = () => {
    const now = new Date();
    const past = new Date(
      now.getTime() - Math.floor(Math.random() * 60 * 24 * 60 * 60 * 1000)
    );
    return past;
  };

  const getRelativeTime = (date) => {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);

    if (minutes < 60) return "لحظاتی پیش";
    else if (hours < 24) return `${hours.toLocaleString("fa-IR")} ساعت پیش`;
    else if (days < 30) return `${days.toLocaleString("fa-IR")} روز پیش`;
    else return `${months.toLocaleString("fa-IR")} ماه پیش`;
  };

  const getMortgageAndRent = () => {
    const mortgage = (Math.floor(Math.random() * 141) + 60) * 1e6; // بین ۶۰ تا ۲۰۰ میلیون
    const rent = Math.max(Math.floor(mortgage / 30 / 1e6) * 1e6, 2e6); // حداقل ۲ میلیون
    return { mortgage, rent };
  };

  // تابع برای تولید اطلاعات مشاور
  function generateAdvisorInfo() {
    const advisorName = getRandomItem(advisorNames);
    const gender = advisorGenders[advisorName];
    let profileImage;

    // انتخاب تصویر پروفایل مناسب با جنسیت
    if (gender === "male") {
      profileImage = getRandomItem(maleAdvisorImages);
    } else {
      profileImage = getRandomItem(femaleAdvisorImages);
    }

    // امتیاز مشاور (بین 1 تا 5 با یک رقم اعشار)
    const rating = (Math.floor(Math.random() * 41) + 10) / 10; // بین 1.0 تا 5.0

    // تعداد آگهی‌های فعال (بین 1 تا 50)
    const activeListings = Math.floor(Math.random() * 50) + 1;

    // تولید شماره تلفن همراه
    const mobileNumber = `09${Math.floor(Math.random() * 90000000) + 10000000}`;

    // تولید شماره تلفن ثابت
    const officeNumber = `021${
      Math.floor(Math.random() * 90000000) + 10000000
    }`;

    // انتخاب دفتر املاک
    const office = getRandomItem(realEstateOffices);

    // اضافه کردن لوگوی مربوط به دفتر املاک
    const logo =
      realEstateOfficeLogos[office] ||
      "../../images/landing/home-prouser/logo-mehr.png"; // استفاده از لوگوی پیش‌فرض اگر مطابقت دقیقی پیدا نشد

    return {
      name: advisorName,
      gender,
      profileImage,
      rating,
      activeListings,
      mobileNumber,
      officeNumber,
      office,
      logo, // اضافه کردن لوگو به آبجکت برگشتی
    };
  }

  function generateRandomAd(city) {
    const cityInfo = cityData[city];
    if (!cityInfo) return null;

    const district = getRandomItem(cityInfo.districts);
    const transactionType = getRandomTransactionType();
    const size = getRandomSize();
    const bedrooms = getRandomBedrooms();
    const parking = getRandomParking();
    const floor = getRandomFloor();
    const totalFloors = getRandomTotalFloors(floor);
    const address = `${cityInfo.addressPrefix} منطقه ${district}`;
    const coordinates = [
      cityInfo.coordinates[0] + (Math.random() * 0.1 - 0.05),
      cityInfo.coordinates[1] + (Math.random() * 0.1 - 0.05),
    ];
    const neighborhood = getRandomItem(neighborhoods);
    const block = getRandomItem(blocks);
    const shortLocation = `${size.toLocaleString(
      "fa-IR"
    )} متر، محدوده ${neighborhood}، ${block}، شهر ${cityNamesFa[city]}`;
    const releaseDate = getRandomDate();

    const images = getRandomImagesArray();
    const propertyStrategy = determinePropertyStrategy();

    const coolingSystemValues = getRandomMultipleItems(
      coolingSystemTypes,
      propertyStrategy
    );
    const floorMaterialValues = getRandomMultipleItems(
      floorMaterialTypes,
      propertyStrategy
    );
    const heatingSystemValues = getRandomMultipleItems(
      heatingSystemTypes,
      propertyStrategy
    );
    const bathroomType = getRandomItem(bathroomTypes);
    const documentType = getRandomItem(documentTypes);

    const coolingSystemLabelValues = getLabelsForValues(
      coolingSystemValues,
      coolingSystemLabels
    );
    const floorMaterialLabelValues = getLabelsForValues(
      floorMaterialValues,
      floorMaterialLabels
    );
    const heatingSystemLabelValues = getLabelsForValues(
      heatingSystemValues,
      heatingSystemLabels
    );
    const documentTypeLabel = documentTypeLabels[documentType];

    // تولید اطلاعات مشاور
    const advisor = generateAdvisorInfo();

    const viewCount = Math.floor(Math.random() * 4991) + 10;

    // تعداد ذخیره آگهی - معمولاً کمتر از تعداد مشاهده (بین 0 تا 10% تعداد مشاهده)
    const saveCount = Math.floor(Math.random() * (viewCount * 0.1));

    const propertyDirections = [
      "شمالی",
      "جنوبی",
      "شرقی",
      "غربی",
      "شمالی-جنوبی",
      "شرقی-غربی",
      "سه بر",
      "دو بر",
    ];
    const geographicalPosition = getRandomItem(propertyDirections);
    const immediate = Math.random() < 0.5;
    const baseData = {
      id: globalId++,
      city,
      labelCity: cityNamesFa[city], // اضافه کردن نام فارسی شهر
      district,
      propertyType: getRandomItem([
        "apartment",
        "villa",
        "single_unit",
        "penthouse",
        "commercial",
        "office",
        "land",
        "garden_villa",
        "farm",
      ]),
      size,
      bedrooms,
      parking,
      floor,
      totalFloors,
      releaseTime: getRelativeTime(releaseDate),
      address,
      images: images,
      locationOnMap: [
        {
          id: globalId++,
          name: `موقعیت در ${cityNamesFa[city]} - منطقه ${district}`,
          coordinates,
        },
      ],
      propertyCode: Math.floor(Math.random() * 10000) + 10000,
      ageBuilding: Math.floor(Math.random() * 30) + 1,
      securityFeatures: [getRandomItem(securityFeatures)],
      otherAmenities: [getRandomItem(otherAmenities)],
      visitTime: getRandomItem(visitTimes),
      neighborhood,
      block,
      shortLocation,
      coolingSystem: coolingSystemValues,
      coolingSystemLabels: coolingSystemLabelValues,
      floorMaterial: floorMaterialValues,
      floorMaterialLabels: floorMaterialLabelValues,
      heatingSystem: heatingSystemValues,
      heatingSystemLabels: heatingSystemLabelValues,
      bathroomType: bathroomType,
      bathroomTypeLabel: bathroomTypeLabels[bathroomType],
      documentType: documentType,
      documentTypeLabel: documentTypeLabel,
      elevator: Math.floor(Math.random() * 6),
      storage: Math.floor(Math.random() * 3),
      viewCount: viewCount,
      saveCount: saveCount,
      geographicalPosition: geographicalPosition,
      immediate: immediate,

      // اضافه کردن اطلاعات مشاور و دفتر املاک
      advisor: {
        name: advisor.name,
        profileImage: advisor.profileImage,
        rating: advisor.rating,
        activeListings: advisor.activeListings,
        mobileNumber: advisor.mobileNumber,
        officeNumber: advisor.officeNumber,
        office: advisor.office,
        logo: advisor.logo, // اضافه کردن لوگو به آبجکت advisor
      },
    };

    if (transactionType === "buy") {
      return {
        ...baseData,
        transactionType,
        price: (Math.floor(Math.random() * 10) + 1) * 1e9,
      };
    } else {
      const { mortgage, rent } = getMortgageAndRent();
      return {
        ...baseData,
        transactionType,
        mortgage,
        rent,
      };
    }
  }

  // تابع برای تولید تعداد مساوی آگهی برای همه شهرها با کمی تصادفی‌سازی
  function generateTotalAdsForAllCities(totalAds) {
    const allCities = Object.keys(cityNamesFa);
    const totalCities = allCities.length;

    // تعداد آگهی برای هر شهر به صورت پایه
    const adsPerCity = Math.floor(totalAds / totalCities);

    // مجموع آگهی‌های تخصیص داده شده تا اینجا
    let assignedAds = adsPerCity * totalCities;

    // باقیمانده آگهی‌ها که باید به صورت تصادفی توزیع شوند
    let remainingAds = totalAds - assignedAds;

    // نگهداری تعداد آگهی‌ها برای هر شهر
    const adsCountPerCity = {};
    allCities.forEach((city) => {
      adsCountPerCity[city] = adsPerCity;
    });

    // تخصیص باقیمانده آگهی‌ها به صورت تصادفی
    while (remainingAds > 0) {
      const randomCityIndex = Math.floor(Math.random() * totalCities);
      const randomCity = allCities[randomCityIndex];
      adsCountPerCity[randomCity]++;
      remainingAds--;
    }

    // تولید آگهی‌ها برای هر شهر
    const allAds = [];
    allCities.forEach((city) => {
      for (let i = 0; i < adsCountPerCity[city]; i++) {
        allAds.push(generateRandomAd(city));
      }
    });

    return {
      adsCountPerCity,
      allAds,
    };
  }

  // تولید 1000 آگهی برای همه شهرها
  const result = generateTotalAdsForAllCities(1000);


  return <div>test</div>;
}
