import React, { memo, useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import clsx from "classnames";
import Test from "../../../../data/Test";

const UpdateMapCenter = ({ maps }) => {
  const map = useMap();


  useEffect(() => {
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
  
    const cityParam = new URLSearchParams(location.search).get("city");
    const getAllCities = cityParam ? cityParam.split(",") : ["tehran"];
    const lastCity = getAllCities[getAllCities.length - 1];
  
    if (maps && maps.length > 0 && map) {
      const faCityName = cityNamesFa[lastCity];
      const selectedMarker = maps.find(item => item.name.includes(faCityName));
  
      if (selectedMarker) {
        map.setView(selectedMarker.coordinates, map.getZoom());
      } else {
        const lastMarker = maps[maps.length - 1];
        map.setView(lastMarker.coordinates, map.getZoom());
      }
    }
  }, [maps, map, location.search]);
  

  return null;
};


// کامپوننت جدید برای افکت نمایشی نقشه
const MapLoadingEffect = () => {
  const map = useMap();
  
  useEffect(() => {
    // شروع با زوم کمتر و انیمیشن به زوم اصلی
    const originalZoom = map.getZoom();
    map.setZoom(originalZoom - 2);
    
    // زمان مناسب برای اجرای انیمیشن زوم
    setTimeout(() => {
      map.flyTo(map.getCenter(), originalZoom, {
        duration: 1.5, // مدت زمان انیمیشن به ثانیه
        easeLinearity: 0.25
      });
    }, 300);
  }, [map]);
  
  return null;
};

const LeafletMap = memo(({ width, height, maps }) => {

  
  const zoomLevel = window.innerWidth > 768 ? 12 : 11;
  const minZoomLevel = 8;
  const maxZoomLevel = 18;
  const [isLoading, setIsLoading] = useState(true);
  const [mapVisible, setMapVisible] = useState(false);

  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  // تعریف آیکون سفارشی
  const customIcon = new L.Icon({
    iconUrl: "/images/location-tick.png",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  // جلوگیری از اسکرول ناخواسته در دستگاه‌های لمسی
  const handleTouchMove = (e) => {
    if (mapRef.current && mapRef.current.contains(e.target)) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    document.body.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    // شبیه‌سازی لود شدن نقشه
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setMapVisible(true), 100);
    }, 800);

    return () => {
      document.body.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  useEffect(() => {
    mapInstanceRef.current =
      mapRef.current && mapRef.current.querySelector(".leaflet-container");

    if (mapInstanceRef.current) {
      const mapElement = mapInstanceRef.current;

      mapElement.addEventListener("wheel", (e) => {
        e.preventDefault();
      });

      mapElement.addEventListener("mousedown", (e) => {
        e.preventDefault();
      });
    }

    return () => {
      if (mapInstanceRef.current) {
        const mapElement = mapInstanceRef.current;
        mapElement.removeEventListener("wheel", (e) => e.preventDefault());
        mapElement.removeEventListener("mousedown", (e) => e.preventDefault());
      }
    };
  }, []);

  // مختصات پیش‌فرض (در صورت خالی بودن آرایه maps)
  const defaultCenter = maps && maps.length > 0 
    ? maps[maps.length - 1].coordinates // استفاده از آخرین مارکر به عنوان مرکز پیش‌فرض
    : [35.6892, 51.3890]; // مختصات تهران

  return (
    <div 
      ref={mapRef} 
      className={clsx(
        "leaflet-map relative overflow-hidden", 
        width, 
        height
      )}
    >
      {/* نمایش لودینگ */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-700">در حال بارگذاری نقشه...</p>
          </div>
        </div>
      )}
      
      {/* نقشه با افکت ظاهر شدن */}
      <div 
        className={clsx(
          "w-full h-full transition-all duration-1000", 
          mapVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}
      >
        <MapContainer
          center={defaultCenter}
          zoom={zoomLevel}
          minZoom={minZoomLevel}
          maxZoom={maxZoomLevel}
          scrollWheelZoom={true}
          touchZoom={true}
          className="w-full h-full"
          fadeAnimation={true}
          zoomAnimation={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {maps && maps.map((position) => (
            <Marker
              key={position.id}
              position={position.coordinates}
              icon={customIcon}
            >
              <Popup>{position.name}</Popup>
            </Marker>
          ))}
          
          {/* اضافه کردن کامپوننت UpdateMapCenter برای تمرکز روی آخرین مارکر */}
          <UpdateMapCenter maps={maps} />
          
          {/* افکت نمایشی نقشه */}
          <MapLoadingEffect />
        </MapContainer>
        <Test />
      </div>
      
      {/* افکت سایه دور نقشه که با انیمیشن نمایان می‌شود */}
      <div 
        className={clsx(
          "absolute inset-0 pointer-events-none transition-opacity duration-1000",
          mapVisible ? "opacity-100" : "opacity-0"
        )}
        style={{
          boxShadow: "inset 0 0 15px rgba(0, 0, 0, 0.3)",
          zIndex: 1
        }}
      ></div>
    </div>
  );
});

export default LeafletMap;
