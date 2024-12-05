import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { motion } from 'framer-motion';

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const locations = [
  { name: "Mali", coordinates: [2.2137, 13.5437], date: "2014-2015" },
  { name: "Kabul", coordinates: [69.1776, 34.5553], date: "2018-2021" },
  { name: "Paris", coordinates: [2.3522, 48.8566], date: "2021-2022" },
  { name: "Brasilia", coordinates: [-47.8645, -15.7942], date: "2022-2024" },
  { name: "Baghdad", coordinates: [44.3661, 33.3152], date: "2024-Present" }
];

function WorldMap() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="map-container"
    >
      <h2>Professional Timeline</h2>
      <ComposableMap projection="geoMercator" projectionConfig={{ scale: 150 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
                style={{
                  default: { outline: 'none' },
                  hover: { fill: '#F5F5F5', outline: 'none' },
                  pressed: { outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>
        {locations.map((location, index) => (
          <motion.g
            key={location.name}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.3 }}
          >
            <Marker coordinates={location.coordinates}>
              <circle r={5} fill="#2B90B6" />
              <text
                textAnchor="middle"
                y={-10}
                style={{ 
                  fontSize: "12px", 
                  fill: "#213547",
                  fontFamily: "Outfit",
                  fontWeight: 500
                }}
              >
                {location.name}
                <tspan x="0" dy="14" style={{ fontSize: "10px", fill: "#666" }}>{location.date}</tspan>
              </text>
            </Marker>
          </motion.g>
        ))}
      </ComposableMap>
    </motion.div>
  );
}

export default WorldMap;