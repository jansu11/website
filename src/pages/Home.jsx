import { motion } from 'framer-motion';
import { useEffect,useState } from 'react';
import Section from '../components/Section';
import Project from '../components/Project'
import SkillsSection from '../components/SkillsSection';
import TechLogo from '../components/TechLogo';
import {Link} from 'react-router-dom'
import TypingAnimation from '../components/Animation/TypingAnimation'
import AnimatedMessages from '../components/Animation/AnimateMessages';
import SlideFadeText from '../components/Animation/SlideFadeText';

const Home = () => {

  return (
    <div className="max-w-full ">
      {/* Hero Section */}
      <Section bgColor="" 
          className=" min-w-full max-h-[80vh]  bg-aliceblue-light dark:bg-blend-dark g-[url('/bg2.jpg')] bg-cover bg-center bg-no-repeat h-screen sm:bg-left-top md:bg-left-top mb-10 pb-10"
      >



        <div className="min-h-full flex flex-col w-[70vw] items-center justify-center  mx-auto my-4 py-3 text-center ">
          <div className='mb-8'>
            <h1 className='text-lg'>👋 I AM Sujan.</h1>
          </div>
          <TypingAnimation/>
          <SlideFadeText/>
            <button
            className="px-6 py-4 mt-  hover:bg-gray-200 dark:border hover:scale-110 dark:text-gray-50 dark:hover:text-gray-900 dark:hover:gray-600 
            dark:hover:border-gray-900  text-primary-dark uppercase font-semibold rounded-full bg-transparent border-4 hover:border-2 hover:border-accent-dark border-aliceblue-light shadow-xl  transition-all duration-700"
            >
              <Link to={'/contact'}>

                <span className='text-xs md:text-lg'>Get in Touch</span>
              </Link>

            </button>

        </div>

      </Section>
      
      {/* Projects Preview Section */}

           {/* Projects Preview Section */}
      <Section bgColor="dark:bg-primary-dark bg-smokewhite-light ">
        <div className=" ">
          <h2 className="text-3xl uppercase tracking-wider  font-bold text-header-light dark:text-header-dark mb-6 text-center pb-">
            Featured Projects
          </h2>
          
          <Project></Project>
        </div>
      </Section>

      {/* Skills Section */}
      <Section bgColor="bg-transparent dark:bg-primary-dark ">
        <div className="lg:w-3/5 mx-auto mb-10 pb-10">
          <h2 className="text-3xl font-bold text-accent-light dark:text-header-dark mb-16 text-center">
            Technical Skills
          </h2>
            <motion.div 
              className="dark:bg-primary-dark bg-transparent  rounded-lg shadow-lg mt-0 p-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <SkillsSection/>


            </motion.div>

        </div>
      </Section>

      {/* Contact Preview Section */}
      <Section bgColor="bg-ghostwhite-light dark:bg-primary-dark dark:from-gray-900 dark:to-gray-800 py-0 h-full">
        <div className="min-w-full text-center  flex flex-col justify-between max-h-24 ">
          <h2 className="text-3xl  font-bold text-primary-dark dark:text-white mb-8 justify-start   ">
            Contact me 
          </h2>
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            
            <a
              href="https://github.com/jansu11"
              target='_blank'
              className="dark:text-btgold-dark dark:hover:text-white  hover:text-white text-gray-900 transition-all mx-5 px-5"
            >
              <TechLogo key={'github'} name={'GitHub'} className='h-8 w-8 hover:h-12 hover:w-12 transition-all duration-300'></TechLogo>
            </a>
            <a
              href="https://www.linkedin.com/in/bohorasujan/"
              target='_blank'
              className="dark:text-btgold-dark dark:hover:text-white hover:text-white text-gray-900 transition-all mx-5 px-5"
            >
              <TechLogo key={'linkedIn'} name={'LinkedIn'} className='h-8 w-8 hover:h-12 hover:w-12 transition-all duration-300'></TechLogo>
            </a>
            <a
              href="mailto:bohorasujan3@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20there,%20I%20would%20like%20to%20connect%20with%20you."
              className="dark:text-btgold-dark dark:hover:text-white hover:text-white text-gray-900 transition-all mx-5 px-5"
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