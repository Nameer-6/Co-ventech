import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const MapboxMap = () => {
  useEffect(() => {
    // Initialize map when component mounts
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2Y29jby12ZW50ZWNoIiwiYSI6ImNscjZnZWtoMzF4d28yam8xcHcwZ3J0MmUifQ.nzciq2JqhoPhNL735qiFUw';
    const map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-106.954918, 44.797729], // Default center coordinates
      zoom: 13,
    });

    // Add a marker at the specified coordinates
    new mapboxgl.Marker()
      .setLngLat([-106.954918, 44.797729]) // Set the marker coordinates [longitude, latitude]
      .addTo(map);

    // Optional: Add any additional map configuration or events here

    // Cleanup when component unmounts
    return () => {
      map.remove();
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div id="map-container" style={{ width: '100%', height: '60vh' }}>
      {/* Map will be rendered inside this div */}
    </div>
  );
};

export default MapboxMap;
