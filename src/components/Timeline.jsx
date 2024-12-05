import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  { 
    year: 2002, 
    event: "First contract with UNESCO", 
    location: "November 2002",
    icon: "🌟",
    duration: ""
  },
  { 
    year: 2003, 
    event: "Join UNESCO", 
    location: "Headquarters (Paris) - Bureau of Budget/Bureau of Strategic Planning",
    icon: "🎯",
    duration: "April 2003"
  },
  { 
    year: 2014, 
    event: "Mali", 
    location: "Operations",
    icon: "🌍",
    duration: "July 2014 - Jan 2015"
  },
  { 
    year: 2018, 
    event: "Kabul", 
    location: "Operations",
    icon: "🏔",
    duration: "May 2018 - Jun 2021"
  },
  { 
    year: 2021, 
    event: "Paris", 
    location: "Bureau of Financial Management",
    icon: "🗼",
    duration: "July 2021 - July 2022"
  },
  { 
    year: 2022, 
    event: "Brasilia", 
    location: "",
    icon: "🌴",
    duration: "August 2022 - July 2024"
  },
  { 
    year: 2024, 
    event: "Baghdad", 
    location: "",
    icon: "🕌",
    duration: "since August 2024"
  }
];

function Timeline() {
  return (
    <div className="timeline-section">
      <h2>Professional Timeline</h2>
      <div className="timeline-container">
        {timelineEvents.map((item, index) => (
          <motion.div
            key={item.year}
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="timeline-icon">{item.icon}</div>
            <div className="timeline-content">
              <h3>{item.year}</h3>
              <h4>{item.event}</h4>
              {item.location && <p className="location">{item.location}</p>}
              <p className="duration">{item.duration}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;