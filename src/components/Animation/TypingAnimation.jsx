import React, { useState, useEffect } from "react";

const TypingAnimation = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const phrases = ["build...", "prepare.", "automate", " scrape.."];

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (currentIndex < phrases[currentPhraseIndex].length) {
        timeout = setTimeout(() => {
          setText((prev) => prev + phrases[currentPhraseIndex][currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1000);
      }
    } else {
      if (currentIndex > 0) {
        timeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setCurrentIndex((prev) => prev - 1);
        }, 100);
      } else {
        setIsTyping(true);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isTyping, currentPhraseIndex]);

  return (
    <div className="h-10 flex items-center justify-center bg-transparent dark:bg-transparent">
      <div className="flex items-center space-x-2 ">
        {/* Fixed "I will" Text */}
        <p className=" pl-4 text-2xl md:text-3xl uppercase font-bold text-gray-400 dark:text-gray-50 mb-1">
          I can
        </p>

        {/* Typing Animation */}
        <div
          className="text-4xl font-bold text-gray-900 mb-3 dark:text-gray-400 flex items-center"
          style={{ width: "8ch" }} // Fix the width for smooth transitions
        >
          {text}
          <span className="animate-pulse ml-1 w-2 h-8 bg-black dark:bg-gray-400"></span>
        </div>
      </div>
    </div>
  );
};

export default TypingAnimation;
