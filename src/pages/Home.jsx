import { motion } from 'framer-motion';
import { useEffect,useState } from 'react';
import Section from '../components/Section';
import Project from '../components/Project'
import SkillsSection from '../components/SkillsSection';
import TechLogo from '../components/TechLogo';
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
        <div className=" ">
          <h2 className="text-3xl font-bold text-gray-300 dark:text-white mb-8 text-center">
            Featured Projects
          </h2>
          
          <Project></Project>
        </div>
      </Section>

      {/* Skills Section */}
      <Section bgColor="bg-primary dark:bg-gray-800 ">
        <div className="lg:w-3/5 mx-auto">
          <h2 className="text-3xl font-bold text-gray-300 dark:text-white mb-8 text-center">
            Technical Skills
          </h2>
            <motion.div 
              className="bg-primary dark:bg-gray-700  rounded-lg shadow-lg m-0 p-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <SkillsSection/>


            </motion.div>

        </div>
      </Section>

      {/* Contact Preview Section */}
      <Section bgColor="bg-primary dark:from-gray-900 dark:to-gray-800 py-0 h-full">
        <div className="min-w-full text-center  flex flex-col justify-between max-h-24 ">
          <h2 className="text-3xl  font-bold text-gray-300 dark:text-white mb-8 justify-start   ">
            Contact me 
          </h2>
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            
            <a
              href="#contact"
              className="text-btgold  hover:text-white  transition-all mx-5 px-5"
            >
              <TechLogo key={'github'} name={'GitHub'} className='h-8 w-8 hover:h-12 hover:w-12 transition-all duration-300'></TechLogo>
            </a>
            <a
              href="#contact"
              className="text-btgold  hover:text-white  transition-all"
            >
              <TechLogo key={'linkedIn'} name={'LinkedIn'} className='h-8 w-8 hover:h-12 hover:w-12 transition-all duration-300'></TechLogo>
            </a>
            <a
              href="#contact"
              className="text-btgold  hover:text-white  transition-all mx-5 px-5"
            >
              <TechLogo key={'gmail'} name={'Email'} className='h-8 w-8 hover:h-12 hover:w-12 transition-all duration-300'></TechLogo>
            </a>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Home;