import {motion} from 'framer-motion' 
import { useState } from 'react';

const Card = ({project ,key}) => {

        const [currentImage, setCurrentImage] = useState(0);

        const handleDotClick = (index) => {
            setCurrentImage(index);
        };

    return(
            <motion.div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay:  0.1 }}
            >
            <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full md:w-3/4 mx-auto">
                {/* Left Side - Image Slider */}
                <div className="w-full md:w-1/2 relative">
                    <img
                    src={project.images[currentImage]}
                    alt={`Project preview ${currentImage + 1}`}
                    className="w-full h-64 object-cover"
                    />
                    {/* Dots for navigation */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {project.images.map((_, index) => (
                        <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 rounded-full ${
                            currentImage === index
                            ? "bg-blue-500"
                            : "bg-gray-300 dark:bg-gray-600"
                        }`}
                        ></button>
                    ))}
                    </div>
                </div>

                {/* Right Side - Project Details */}
                <div className="w-full md:w-1/2 p-6">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {project.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    <strong>Tools Used:</strong> {project.tools.join(", ")}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {project.description}
                    </p>
                    <a
                    href={project.docsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded shadow hover:bg-blue-600 transition duration-300"
                    >
                    View Documentation
                    </a>
                </div>
            </div>

            </motion.div>

    )

}

export default Card 