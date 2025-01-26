import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const PageTitle = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <motion.div 
      style={{ scale, opacity }}
      className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 z-10"
    >
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold text-white text-center"
      >
        Project Showcase
      </motion.h1>
    </motion.div>
  );
};

export default PageTitle