import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const ProjectsList = () => {
  return (
    <div className="relative pt-screen">
      <PageTitle />
      <div className="relative z-20 bg-white p-6">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-lg p-6 mb-8"
          >
            <h2 className="text-2xl font-semibold mb-4">{project.name}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="space-y-2">
              {project.features.map(feature => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center"
                >
                  <span className="mr-2 text-blue-500">✓</span>
                  {feature}
                </motion.div>
              ))}
            </div>
            <Link 
              to={`/project/${project.id}`} 
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              View Project Details
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList