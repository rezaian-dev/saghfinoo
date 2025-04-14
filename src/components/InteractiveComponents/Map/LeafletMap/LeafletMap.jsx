import React, { memo, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import clsx from "classnames";

const LeafletMap = memo(({ width, height }) => {
  // Positions with multiple areas in Tehran
  const positions = [
    { name: "Downtown Tehran", coordinates: [35.6895, 51.389] }, // مرکز تهران
    { name: "Keshavarz Blvd", coordinates: [35.6998, 51.3755] }, // خیابان کشاورز
    { name: "Vali Asr Square", coordinates: [35.7022, 51.3961] }, // میدان ولیعصر
    { name: "Tajrish", coordinates: [35.847, 51.4236] }, // تجریش
    { name: "Niavaran", coordinates: [35.7869, 51.4064] }, // نیاوران
  ];

  const zoomLevel = 12; // 🔍 Default zoom level
  const minZoomLevel = 8; // 🔒 Minimum zoom level
  const maxZoomLevel = 18; // 🔓 Maximum zoom level

  const mapRef = useRef(null); // 🗺️ Reference for MapContainer
  const mapInstanceRef = useRef(null); // 🗺️ Reference to store the map instance

  // Define custom map marker icon 🔘
  const customIcon = new L.Icon({
    iconUrl: "/images/location-tick.png", // 🖼️ Ensure the path is correct
    iconSize: [40, 40], // 📏 Icon size
    iconAnchor: [20, 40], // 📍 Icon anchor point
    popupAnchor: [0, -40], // 📍 Popup position relative to the icon
  });

  // Prevent unintended scrolling on touch screens 📱
  const handleTouchMove = (e) => {
    if (mapRef.current && mapRef.current.contains(e.target)) {
      e.preventDefault(); // ✋ Prevent scrolling inside the map
    }
  };

  useEffect(() => {
    // 🖱️ Add touchmove prevention
    document.body.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    return () => {
      document.body.removeEventListener("touchmove", handleTouchMove); // 🧹 Clean up event listener
    };
  }, []);

  useEffect(() => {
    // 🗺️ Initialize map instance and prevent scrolling when zooming
    mapInstanceRef.current =
      mapRef.current && mapRef.current.querySelector(".leaflet-container");

    if (mapInstanceRef.current) {
      const mapElement = mapInstanceRef.current;

      // 🖱️ Prevent scroll when zooming with mouse wheel
      mapElement.addEventListener("wheel", (e) => {
        e.preventDefault();
      });

      // 🖱️ Prevent scroll when mouse button is pressed
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

  return (
    <div ref={mapRef} className={clsx("leaflet-map", width, height)}>
      <MapContainer
        center={positions[0].coordinates} // Initial center
        zoom={zoomLevel}
        minZoom={minZoomLevel}
        maxZoom={maxZoomLevel}
        scrollWheelZoom={true}
        touchZoom={true}
        className="w-full h-full"
      >
        {/* 🌍 OpenStreetMap tile layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* 📍 Markers for each location */}
        {positions.map((position) => (
          <Marker
            key={position.name}
            position={position.coordinates}
            icon={customIcon}
          >
            <Popup>{position.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
});

export default LeafletMap;
