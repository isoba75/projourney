import React from 'react';
import { motion } from 'framer-motion';

const interests = [
  { icon: "💻", title: "Coding Apps", description: "Building digital solutions" },
  { icon: "🏃‍♂️", title: "Endurance Sports", description: "Pushing boundaries" },
  { icon: "🧠", title: "Psychology", description: "Understanding human behavior" },
  { icon: "🔬", title: "Science", description: "Exploring discoveries" }
];

function Interests() {
  return (
    <div className="interests-container">
      <h2>Personal Interests</h2>
      <div className="interests-grid">
        {interests.map((interest, index) => (
          <motion.div
            key={interest.title}
            className="interest-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <span className="interest-icon">{interest.icon}</span>
            <h3>{interest.title}</h3>
            <p>{interest.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Interests;