import React, { memo, useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import clsx from "classnames";
import { cityNamesFa } from "../../../../data/realEstateData";

// 🎯 Component to update map center based on URL params
const UpdateMapCenter = ({ maps }) => {
  const map = useMap();
  
  useEffect(() => {
    const cityParam = new URLSearchParams(location.search).get("city");
    const getAllCities = cityParam ? cityParam.split(",") : ["tehran"];
    const lastCity = getAllCities[getAllCities.length - 1];
  
    if (maps?.length > 0 && map) {
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

// ✨ Component for map loading animation
const MapLoadingEffect = () => {
  const map = useMap();
  
  useEffect(() => {
    // Start with less zoom and animate to original zoom
    const originalZoom = map.getZoom();
    map.setZoom(originalZoom - 2);
    
    setTimeout(() => {
      map.flyTo(map.getCenter(), originalZoom, {
        duration: 1.5,
        easeLinearity: 0.25
      });
    }, 300);
  }, [map]);
  
  return null;
};

const LeafletMap = memo(({ width, height, maps }) => {
  // 🗺️ Map configuration
  const zoomLevel = window.innerWidth > 768 ? 12 : 11;
  const minZoomLevel = 8;
  const maxZoomLevel = 18;
  const [isLoading, setIsLoading] = useState(true);
  const [mapVisible, setMapVisible] = useState(false);

  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  // 📍 Custom marker icon
  const customIcon = new L.Icon({
    iconUrl: "/images/location-tick.png",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  // 🖐️ Prevent unwanted scrolling on touch devices
  const handleTouchMove = (e) => {
    if (mapRef.current?.contains(e.target)) {
      e.preventDefault();
    }
  };

  // 🔄 Initialize map and loading animation
  useEffect(() => {
    document.body.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    // Simulate map loading
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setMapVisible(true), 100);
    }, 800);

    return () => {
      document.body.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  // 🔒 Prevent default map interactions
  useEffect(() => {
    mapInstanceRef.current =
      mapRef.current?.querySelector(".leaflet-container");

    if (mapInstanceRef.current) {
      const mapElement = mapInstanceRef.current;

      const preventDefaultHandler = (e) => e.preventDefault();
      
      mapElement.addEventListener("wheel", preventDefaultHandler);
      mapElement.addEventListener("mousedown", preventDefaultHandler);

      return () => {
        mapElement.removeEventListener("wheel", preventDefaultHandler);
        mapElement.removeEventListener("mousedown", preventDefaultHandler);
      };
    }
  }, []);

  // 📌 Default center coordinates (Tehran if no maps data)
  const defaultCenter = maps?.length > 0 
    ? maps[maps.length - 1].coordinates
    : [35.6892, 51.3890];

  return (
    <div 
      ref={mapRef} 
      className={clsx("leaflet-map", width, height)}
    >
      {/* 🔄 Loading spinner */}
      {isLoading && (
        <div className="leaflet-map__loading">
          <div className="leaflet-map__loading__content">
            <div className="leaflet-map__spinner"></div>
            <p className="leaflet-map__loading-text">در حال بارگذاری نقشه...</p>
          </div>
        </div>
      )}
      
      {/* 🗺️ Map with fade-in effect */}
      <div 
        className={clsx(
          "leaflet-map__container", 
          mapVisible ? "leaflet-map__container--visible" : "leaflet-map__container--hidden"
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
          {/* 🌐 Map tile layer */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* 📍 Map markers */}
          {maps?.map((position) => (
            <Marker
              key={position.id}
              position={position.coordinates}
              icon={customIcon}
            >
              <Popup>{position.name}</Popup>
            </Marker>
          ))}
          
          {/* 🎯 Center map on selected city */}
          <UpdateMapCenter maps={maps} />
          
          {/* ✨ Map loading animation */}
          <MapLoadingEffect />
        </MapContainer>
      </div>
      
      {/* 🖼️ Shadow effect around map */}
      <div 
        className={clsx("leaflet-map__shadow",
          mapVisible ? "opacity-100" : "opacity-0"
        )}
        
      ></div>
    </div>
  );
});

export default LeafletMap;
