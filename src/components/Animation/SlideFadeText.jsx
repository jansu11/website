import React, { useState, useEffect } from 'react';

const SlideFadeText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const texts = [
    "Full Stack Websites",
    "Query Ready Data",
    "Python Scripts",
    "Websites with Selenium"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Start fade out and slide down
      setIsVisible(false);
      
      // Wait for animation to complete before changing text
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        // Trigger slide up and fade in
        setIsVisible(true);
      }, 300); // This should match the duration of the fade-out transition
      
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-[10vh] dark:bg-transparent min-w-full md:min-w-[60vw] bg-transparent p-2 mt-4">
      <div className="relative h-full overflow-hidden">
        <div
          className={`
            absolute 
            w-full 
            transition-all 
            duration-500 
            ease-in-out
            ${isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-full opacity-0'
            }
          `}
        >
          <h2 className="flex items-center justify-center text-lg uppercase md:text-3xl dark:text-subheader-dark font-semibold text-blue-400">
            {texts[currentIndex]}
          </h2>
        </div>
      </div>

      {/* Optional controls for demonstration */}
    </div>
  );
};

export default SlideFadeText;