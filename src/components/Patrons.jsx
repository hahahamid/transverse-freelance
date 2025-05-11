import React from "react";
import image from "../assets/patrons.png";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

const Patrons = () => {
  const riseAnimation = {
    initial: { opacity: 0, y: 50 }, // Start 50px below and invisible
    animate: { opacity: 1, y: 0 }, // Move to original position and fully visible
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 7,
      duration: 0.5, // Smooth duration for the rise
      delay: 0.3, // Add 0.3s delay for the animation
    },
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#00296B] py-10">
      <motion.div
        initial={riseAnimation.initial} // Explicitly set initial state
        whileInView={riseAnimation.animate} // Use whileInView for viewport detection
        transition={riseAnimation.transition} // Apply transition with delay
        viewport={{ once: true, amount: 0.5 }}
        className="font-urbanist  text-white flex items-baseline"
      >
        <span className="text-[88px]">Our Esteemed Patrons</span>
        <img src={image} alt="" className="w-[40px] h-[40px] pl-1.5" />
      </motion.div>

      <motion.div
        initial={riseAnimation.initial} // Explicitly set initial state
        whileInView={riseAnimation.animate} // Use whileInView for viewport detection
        transition={riseAnimation.transition} // Apply transition with delay
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col justify-center items-center text-center text-white text-sm pt-5 font-poppins"
      >
        Transverse works with organizations that require precision, reliability,
        and strategic communication. From public institutions to
        <br />
        multinational corporations, we help streamline communication across
        languages and industries. Our clients trust us to refine and
        <br />
        optimize their communication strategies, enabling clarity and efficiency
        at every level. With a commitment to excellence,
        <br />
        Transverse continues to be a trusted ally for organizations that operate
        on a global scale.
      </motion.div>
    </div>
  );
};

export default Patrons;
