import React, { useEffect, useState } from "react";

const AnimatedMessages = () => {
  const messages = [
    "Full Stack Developer",
    "Data Engineer",
    "Data Analyst",
    "Your Next Team Member",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); // Change message every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full  flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      <div className="absolute">
        {messages.map((message, index) => (
          <h2
            key={index}
            className={`text-3xl md:text-5xl font-bold text-center transition-opacity duration-700 transform ${
              index === currentMessageIndex
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            {message}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default AnimatedMessages;
