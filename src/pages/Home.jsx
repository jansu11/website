import { motion } from 'framer-motion';
import { useEffect,useState } from 'react';
import Section from '../components/Section';
import Project from '../components/Project'

const Home = () => {

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Section bgColor="" 
          className="bg-[url('/bg2.jpg')] bg-cover bg-center bg-no-repeat h-screen sm:bg-left-top md:bg-left-top mb-10 pb-10"
      >



        <div className="min-h-screen grid grid-rows-3 max-w-4xl mx-auto my-4 py-3 text-center">
          <div className='flex items-end justify-center'>
            <motion.h1 
              className="text-5xl font-bold text-secondary dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Data Engineer & Developer
          </motion.h1>

          </div>
          <motion.p 
            className="text-xl text-supporting1 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Building scalable data solutions and transforming raw data into actionable insights
          </motion.p>
          <div className='flex items-start justify-center'>
            <button
            className="px-6 py-3  bg-btgold hover:bg-primary hover:text-secondary
             text-gray-200 font-semibold rounded-full bg-transparent border-4  border-btgold shadow-lg transition-all duration-300"
            onClick={() => alert("Hello! Thanks for stopping by.")}
            >
            Say Hi
            </button>

          </div>
        </div>

      </Section>
      
      {/* Projects Preview Section */}

           {/* Projects Preview Section */}
      <Section bgColor="bg-gray-100 bg-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-300 dark:text-white mb-8 text-center">
            Featured Projects
          </h2>
          
          <Project></Project>
        </div>
      </Section>

      {/* Skills Section */}
      <Section bgColor="bg-primary dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-300 dark:text-white mb-8 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-transparent dark:bg-gray-700 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-secondary dark:text-white mb-4">
                Core Skills
              </h3>
              <ul className="space-y-2 text-gray-300 dark:text-gray-300">
                <li>• Python & Data Processing</li>
                <li>• SQL & Database Design</li>
                <li>• ETL Pipeline Development</li>
                <li>• React & Web Development</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-transparent dark:bg-gray-700 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-secondary dark:text-white mb-4">
                Technologies
              </h3>
              <ul className="space-y-2 text-gray-300 dark:text-gray-300">
                <li>• Apache Airflow</li>
                <li>• PostgreSQL</li>
                <li>• AWS Services</li>
                <li>• Docker & Kubernetes</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Contact Preview Section */}
      <Section bgColor="bg-primary dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-300 dark:text-white mb-8">
            Let's Connect
          </h2>
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent  border-2 border-btgold text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Home;