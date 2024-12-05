import React from 'react';
import { motion } from 'framer-motion';
import Stats from './components/Stats';
import Timeline from './components/Timeline';
import Interests from './components/Interests';
import '@fontsource/outfit';

function App() {
  return (
    <div className="app">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="header"
      >
        <h1>My Leadership Journey</h1>
        <p className="subtitle">Ismaila Ba | 48 years old | 5 children </p>
      </motion.div>

      <Stats />
      <Timeline />
      <Interests />
    </div>
  );
}

export default App;