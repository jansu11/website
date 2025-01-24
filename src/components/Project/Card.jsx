import {motion} from 'framer-motion' 
import React, { useState } from 'react';
import TechLogo from '../TechLogo';
import { useSwipeable } from 'react-swipeable';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Card = ({project}) => {

    const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    trackMouse: true
  });

    return(
            <motion.div
            key={project.id}
            className="bg-transparent dark:bg-primary-dark  dark:shadow-zinc-600     overflow-hidden lg:px-16 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay:  0.1 }}
            >
            <div className="flex flex-col  md:flex-row shadow-lg  dark:shadow-blend-dark dark:drop-shadow-2xl border-b-2 dark:border-b-0 bg-white  dark:bg-transparent py-12 overflow-hidden min-h-96 sm:max-w-full lg:min-w-full md:min-w-full md:w-3/4 lg:mx-auto px-auto ">

                {/* Left Side - Image Slider */}

                <div className="md:w-1/2 relative mx-3 " {...swipeHandlers}>
                    <div className="relative ">
                        <Zoom>
                        <img
                            src={project.images[currentImage]}
                            alt={`Project preview ${currentImage + 1}`}
                            className="lg:w-3/4 w-full h-96 lg:mx-auto rounded-xl mb-5 object-cover"
                        />
                        </Zoom>
            
                        {/* Navigation Arrows */}
                        <button 
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity duration-300"
                        aria-label="Previous image"
                        >
                        ←
                        </button>
                        <button 
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity duration-300"
                        aria-label="Next image"
                        >
                        →
                        </button>
                    </div>

                    {/* Dots for navigation */}
                    <div className="absolute bottom- left-1/2 transform -translate-x-1/2 flex space-x-2 ">
                        {project.images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-3 h-3 rounded-full ${
                            currentImage === index
                                ? "bg-btgold-dark"
                                : "bg-gray-900 dark:bg-gray-200"
                            }`}
                        />
                        ))}
                    </div>
                </div>

                {/* Right Side - Project Details */}
                <div className="w-full md:w-1/2  ml-5 min-h-full flex flex-col  items-start justify-center mt-16 ">
                    <h2 className="text-lg lg:text-2xl font-bold dark:text-subheader-dark  text-gray-800 mb-5">
                    {project.title}
                    </h2>
                    <p className="dark:text-textbody-dark text-primary-light text-sm lg:text-lg mb-4 pb-2 w-3/4 ">
                    {project.description}
                    </p>
                    <p className="dark:text-gray-300 text-gray-900  text-left text-sm pb-4 ">
                        <strong>Tools Used:</strong>
                        <div className='flex  min-w-full '>
                        {
                            project.tools.map((tech) => (
                                <div key={tech} className=' text-gray-900 dark:text-header-dark p-4 '>
                                    <TechLogo name={tech} className=' h-6 w-6 hover:h-10 hover:w-10 transition-all duration-300'/>

                                </div>

                            ))
                        }

                        </div>
                    </p>
                    <a
                    href={project.docsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block align-center px-4 py-2 
                     dark:bg-button-dark bg-transparent border-0 border-gray-900
                      dark:border-btgold-dark dark:text-white text-sm  rounded-md shadow-md hover:bg-gray-500
                       hover:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-btgold-dark hover:border-2  dark:hover:border-gray-300 
                       transition-colors duration-700"
                    >
                        View Details
                    </a>
                </div>
            </div>

            </motion.div>

    )

}

export default Card 