import {motion} from 'framer-motion' 
import { useState } from 'react';
import TechLogo from '../TechLogo';

const Card = ({project}) => {

        const [currentImage, setCurrentImage] = useState(0);

        const handleDotClick = (index) => {
            setCurrentImage(index);
        };

    return(
            <motion.div
            key={project.id}
            className="bg-white dark:bg-primary-dark rounded-lg  overflow-hidden mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay:  0.1 }}
            >
            <div className="flex flex-col  md:flex-row  bg-white  dark:bg-transparent  overflow-hidden min-h-96 min-w-full md:w-3/4 mx-5 px-5">

                {/* Left Side - Image Slider */}
                <div className=" md:w-1/2 relative  mx-3 " >
                    <img
                    src={project.images[currentImage]}
                    alt={`Project preview ${currentImage + 1}`}
                    className="w-full h-96 p-2 rounded-xl   object-cover"
                    />
                    {/* Dots for navigation */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {project.images.map((_, index) => (
                        <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-5 h-5 rounded-full ${
                            currentImage === index
                            ? "bg-btgold-dark"
                            : "bg-gray-900 dark:bg-gray-200"
                        }`}
                        ></button>
                    ))}
                    </div>
                </div>

                {/* Right Side - Project Details */}
                <div className="w-full md:w-1/2 p-6 ml-5 min-h-full flex flex-col  items-start justify-center ">
                    <h2 className="text-lg font-bold dark:text-secondary-dark  text-gray-800 mb-2">
                    {project.title}
                    </h2>
                    <p className="dark:text-gray-300 text-primary-light text-sm  mb-4 pb-2 w-3/4 ">
                    {project.description}
                    </p>
                    <p className="dark:text-gray-300 text-gray-900  text-left text-sm pb-4 ">
                        <strong>Tools Used:</strong>
                        <div className='flex  min-w-full '>
                        {
                            project.tools.map((tech) => (
                                <div key={tech} className=' text-gray-900 dark:text-btgold-dark p-4 '>
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
                    className="inline-block align-center px-4 py-2  bg-transparent border-2 border-gray-900 dark:border-btgold-dark dark:text-white text-sm  rounded-full shadow hover:bg-gray-500 hover:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-btgold-dark hover:border-2  dark:hover:border-gray-300 transition-colors duration-300"
                    >
                        View Details
                    </a>
                </div>
            </div>

            </motion.div>

    )

}

export default Card 