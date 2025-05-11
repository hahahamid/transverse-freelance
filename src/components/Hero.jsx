import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import image1 from "../assets/hero_image_1.png";
import image2 from "../assets/hero_image_2.png";
import image3 from "../assets/hero_image_3.png";

const Hero = () => {
  // Animation for rising in (used for text, button, and images)
  const riseAnimation = {
    initial: { opacity: 0, y: 50 }, // Start 50px below and invisible
    animate: { opacity: 1, y: 0 }, // Move to original position and fully visible
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 7,
      duration: 0.5,
      delay: 0.3,
    },
  };

  // Infinite loop animation for image2 (up with pauses) and image3 (left with pauses)
  const loopAnimation = {
    image2: {
      animate: { y: [0, -70, -70, 0, 0] }, // Move 40px up, pause, return, pause
      transition: {
        y: {
          times: [0, 0.3, 0.5, 0.8, 1], // 30% to -40, 20% pause, 30% to 0, 20% pause
          repeat: Infinity,
          duration: 2.5, // 5s total (1.5s up, 1s pause, 1.5s down, 1s pause)
          ease: "easeInOut", // Smooth easing
          delay: 0.8, // Start after riseAnimation
        },
      },
    },
    image3: {
      animate: { x: [0, -100, -100, 0, 0] }, // Move 100px left, pause, return, pause
      transition: {
        x: {
          times: [0, 0.3, 0.5, 0.8, 1], // 30% to -100, 20% pause, 30% to 0, 20% pause
          repeat: Infinity,
          duration: 2.5, // 5s total (1.5s to -100, 1s pause, 1.5s to 0, 1s pause)
          ease: "easeInOut", // Smooth easing
          delay: 0.8, // Start after riseAnimation
        },
      },
    },
  };

  return (
    <div className="grid grid-cols-2 h-[378px] bg-white px-20 pl-40 pt-20">
      <div className="flex flex-col pt-20">
        <motion.div
          initial={riseAnimation.initial}
          whileInView={riseAnimation.animate}
          transition={riseAnimation.transition}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-start text-[64px] font-urbanist"
        >
          <div>Your Language</div>
          <div>Partner</div>
        </motion.div>
        <motion.div
          initial={riseAnimation.initial}
          whileInView={riseAnimation.animate}
          transition={riseAnimation.transition}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-start text-[16px] font-poppins"
        >
          <div>Empowering businesses</div>
          <div>worldwide</div>
        </motion.div>
        <motion.div
          initial={riseAnimation.initial}
          whileInView={riseAnimation.animate}
          transition={riseAnimation.transition}
          viewport={{ once: true, amount: 0.5 }}
          className="call-us-button mt-[30px]"
        >
          call us
        </motion.div>
      </div>
      <div className="flex">
        <motion.div
          initial={riseAnimation.initial}
          whileInView={riseAnimation.animate}
          transition={riseAnimation.transition}
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-2 gap-x-5"
        >
          <motion.img
            src={image1}
            alt="Logo 1"
            className="w-[367px] h-[259px] mt-1.5"
          />
          <div className="flex flex-col gap-y-5 mt-28">
            <motion.img
              src={image2}
              alt="Logo 2"
              className="w-[152px] h-[152px]"
              viewport={{ once: true, amount: 0.5 }}
              animate={loopAnimation.image2.animate}
              transition={loopAnimation.image2.transition}
            />
            <motion.img
              src={image3}
              alt="Logo 3"
              className="w-[76px] h-[76px]"
              animate={loopAnimation.image3.animate}
              transition={loopAnimation.image3.transition}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
