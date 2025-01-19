import {motion} from 'framer-motion' 
import { useState } from 'react';
import TechLogo from '../TechLogo';

const Card = ({project ,key}) => {

        const [currentImage, setCurrentImage] = useState(0);

        const handleDotClick = (index) => {
            setCurrentImage(index);
        };

    return(
            <motion.div
            key={project.id}
            className="bg-primary dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay:  0.1 }}
            >
            <div className="flex flex-col  md:flex-row   dark:bg-gray-800  overflow-hidden min-h-96 min-w-full md:w-3/4 ">

                {/* Left Side - Image Slider */}
                <div className=" md:w-1/2 relative  mx-3 " >
                    <img
                    src={project.images[currentImage]}
                    alt={`Project preview ${currentImage + 1}`}
                    className="w-full h-96 p-2 rounded-xl shadow-lg  object-cover"
                    />
                    {/* Dots for navigation */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {project.images.map((_, index) => (
                        <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-5 h-5 rounded-full ${
                            currentImage === index
                            ? "bg-btgold"
                            : "bg-gray-300 dark:bg-gray-600"
                        }`}
                        ></button>
                    ))}
                    </div>
                </div>

                {/* Right Side - Project Details */}
                <div className="w-full md:w-1/2 p-6 min-h-full flex flex-col  items-start justify-center ">
                    <h2 className="text-lg font-bold text-secondary dark:text-white mb-2">
                    {project.title}
                    </h2>
                    <p className="text-gray-300 dark:text-gray-400 text-sm mb-4 pb-2 ">
                    {project.description}
                    </p>
                    <p className="text-gray-300 dark:text-gray-400  text-left text-sm pb-4 ">
                        <strong>Tools Used:</strong>
                        <div className='flex  min-w-full'>
                        {
                            project.tools.map((tech) => (
                                <div key={tech} className='  text-btgold p-4'>
                                    <TechLogo name={tech}/>

                                </div>

                            ))
                        }

                        </div>
                    </p>
                    <a
                    href={project.docsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block align-bottom px-4 py-2  bg-transparent border-2 border-btgold text-white text-sm   rounded shadow hover:bg-gray-800 hover:text-btgold hover:border-2  hover:border-gray-300 transition-colors duration-300"
                    >
                    Read Docs
                    </a>
                </div>
            </div>

            </motion.div>

    )

}

export default Card 