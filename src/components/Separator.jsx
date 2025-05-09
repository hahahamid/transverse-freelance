import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Separator = () => {
  // Text content for each slide
  const text = `-.-. --- -. -. . -.-. - .. -. --. .. -.. . .- ... --..-- -.-. .-. . .- - .. -. --. .. -- .--. .- -.-. -
  
  -.-. --- -. -. . -.-. - .. -. --. .. -.. . .- ... --..-- -.-. .-. . .- - .. -. --. .. -- .--. .- -.-. -
  
  -.-. --- -. -. . -.-. - .. -. --. .. -.. . .- ... --..-- -.-. .-. . .- - .. -. --. .. -- .--. .- -.-. -
  `;
  // Array of slides (4 identical texts)
  const slides = [text, text, text, text];
  // State to track the active slide index
  const [activeIndex, setActiveIndex] = useState(0);

  // Change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Animation variants for the container
  const containerVariants = {
    initial: { x: 0 },
    animate: (index) => ({
      x: `-${index * 100}%`, // Move left by 100% of container width per slide
      transition: {
        x: {
          type: "spring",
          mass: 1,
          stiffness: 80,
          damping: 20,
          delay: 0.001, // 1ms delay
        },
      },
    }),
  };

  // Animation variants for individual slides
  const slideVariants = {
    active: {
      opacity: 1,
      transition: {
        type: "spring",
        mass: 1,
        stiffness: 80,
        damping: 20,
        delay: 0.001, // 1ms delay
      },
    },
    inactive: {
      opacity: 1,
      transition: {
        type: "spring",
        mass: 1,
        stiffness: 80,
        damping: 20,
        delay: 0.001, // 1ms delay
      },
    },
  };

  return (
    <div className="overflow-hidden py-20">
      <motion.div
        className="flex w-[100%]" // 4 slides, each 100% of parent width
        variants={containerVariants}
        initial="initial"
        animate={{ x: `-${activeIndex * 100}%` }}
      >
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="flex-1 flex items-center justify-center text-xl text-nowrap"
            variants={slideVariants}
            animate={index === activeIndex ? "active" : "inactive"}
          >
            {slide}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Separator;
