import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DetailCard from './DetailCard';

const stats = [
  { 
    icon: "🌍", 
    text: "4 Continents",
    details: ["Africa", "Europe", "Latin America", "Asia and Pacific", "(Arab States)", "4 countries in 6 years"]
  },
  { 
    icon: "👥", 
    text: "Team of 18 | 8 direct",
    details: [
      "Finance",
      "Budget",
      "HR",
      "Procurement",
      "IT",
      "Logistics",
      "Travel",
      "..."
    ]
  },
  { 
    icon: "🗣", 
    text: "4 Languages",
    details: ["Wolof", "French", "English", "Portuguese", "(Spanish)"]
  }
];

function Stats() {
  const [selectedStat, setSelectedStat] = useState(null);

  const handleClick = (index) => {
    setSelectedStat(selectedStat === index ? null : index);
  };

  return (
    <div className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={stat.text}>
            <motion.div
              className={`stat-card ${selectedStat === index ? 'active' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              onClick={() => handleClick(index)}
            >
              <span className="stat-icon">{stat.icon}</span>
              <span className="stat-text">{stat.text}</span>
            </motion.div>
            <DetailCard 
              details={stat.details} 
              isVisible={selectedStat === index} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;