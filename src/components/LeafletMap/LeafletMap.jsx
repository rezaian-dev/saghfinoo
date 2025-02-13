import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function LeafletMap() {
  const position = [35.6895, 51.3890]; // Tehran coordinates
  const zoomLevel = 12;
  const minZoomLevel = 8;
  const maxZoomLevel = 18;
  const mapRef = useRef(null); // Reference for MapContainer
  const mapInstanceRef = useRef(null); // Reference to store the map instance

  // Define custom map marker icon
  const customIcon = new L.Icon({
    iconUrl: "/images/location-tick.png", // Ensure the path is correct
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  // Prevent unintended scrolling on touch screens
  const handleTouchMove = (e) => {
    // Prevent scrolling if touch is inside the map
    if (mapRef.current && mapRef.current.contains(e.target)) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    // Add touchmove prevention only when necessary
    document.body.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      document.body.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  useEffect(() => {
    // Initialize map instance and prevent scrolling when zooming
    mapInstanceRef.current = mapRef.current && mapRef.current.querySelector('.leaflet-container');

    if (mapInstanceRef.current) {
      const mapElement = mapInstanceRef.current;

      mapElement.addEventListener("wheel", (e) => {
        e.preventDefault(); // Prevent scroll while zooming
      });

      // Prevent scrolling if zooming in or out
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
    <div ref={mapRef} className="relative w-[90%] md:w-full h-[357px] mx-auto md:h-[750px] z-10">
      <MapContainer
        center={position}
        zoom={zoomLevel}
        minZoom={minZoomLevel}
        maxZoom={maxZoomLevel}
        scrollWheelZoom={true}
        touchZoom={true}
        className="w-full h-full"
      >
        {/* OpenStreetMap tile layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Marker with custom icon */}
        <Marker position={position} icon={customIcon}>
          <Popup>Tehran! <br /> Capital of Iran.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
