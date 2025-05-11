import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import image from "../assets/lang3.png";
import image2 from "../assets/lang1.png";
import image3 from "../assets/lang2.png";

const Language = () => {
  const [isHoveredTitle, setIsHoveredTitle] = useState(false); // Track hover state for title (Translation/अनुवाद)
  const [isHoveredDescription, setIsHoveredDescription] = useState(false); // Track hover state for description

  // Spring animation settings for a faster transition
  const springSettings = {
    type: "spring",
    mass: 1,
    stiffness: 200, // Increased stiffness for a quicker snap
    damping: 20, // Slightly increased damping to reduce bounciness
  };

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
    <div className="grid grid-cols-2 bg-[#00296B] text-white py-16">
      <div className="flex flex-col items-start text-[88px] pl-20 space-y-40">
        {/* Container for the title text with relative positioning */}
        <div className="relative h-[76px] ">
          <motion.div
            onMouseEnter={() => setIsHoveredTitle(true)} // Show Hindi title on hover
            onMouseLeave={() => setIsHoveredTitle(false)} // Show English title on hover out
            initial={riseAnimation.initial} // Explicitly set initial state
            whileInView={riseAnimation.animate} // Use whileInView for viewport detection
            transition={riseAnimation.transition} // Apply transition with delay
            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of component is in view
          >
            <AnimatePresence mode="sync">
              {isHoveredTitle ? (
                <motion.div
                  key="hindi-title"
                  initial={{ opacity: 0, y: 10 }} // Start below
                  animate={{ opacity: 1, y: 0 }} // Move to position
                  exit={{ opacity: 0, y: 10 }} // Exit below
                  transition={{ ...springSettings, delay: 0.001 }} // 1ms delay
                  className="absolute flex flex-col"
                >
                  <div>भाषा</div>
                  <div>प्रशिक्षण</div>
                </motion.div>
              ) : (
                <motion.div
                  key="english-title"
                  initial={{ opacity: 0, y: 10 }} // Start below
                  animate={{ opacity: 1, y: 0 }} // Move to position
                  exit={{ opacity: 0, y: 10 }} // Exit below
                  transition={{ ...springSettings, delay: 0.001 }} // 1ms delay
                  className="absolute font-urbanist flex flex-col"
                >
                  <div>Language</div>
                  <div>Training</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
        {/* Image below the text */}
        <div className="pt-20">
          <img src={image} className="pl-12" alt="" />
          <img src={image} alt="" />
        </div>
      </div>

      <div className="flex flex-col items-start text-[16px] pl-20 gap-y-20">
        <div className="flex flex-col justify-center items-center">
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image2} alt="" />
        </div>
        {/* Container for the description text */}
        <div className="relative w-full ">
          <motion.div
            onMouseEnter={() => setIsHoveredDescription(true)} // Show Hindi description on hover
            onMouseLeave={() => setIsHoveredDescription(false)} // Show English description on hover out
            initial={riseAnimation.initial} // Explicitly set initial state
            whileInView={riseAnimation.animate} // Use whileInView for viewport detection
            transition={riseAnimation.transition} // Apply transition with delay
            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of component is in view
          >
            <AnimatePresence mode="sync">
              {isHoveredDescription ? (
                <motion.div
                  key="hindi-description"
                  initial={{ opacity: 0, y: 10 }} // Start below
                  animate={{ opacity: 1, y: 0 }} // Move to position
                  exit={{ opacity: 0, y: 10 }} // Exit below
                  transition={{ ...springSettings, delay: 0.001 }} // 1ms delay
                  className="absolute tracking-wide"
                >
                  उद्देश्यपूर्ण भाषा प्रशिक्षण के साथ प्रवाह्यता प्राप्त करें।
                  हमारे अनुभवी और
                  <br />
                  कुशल द्विभाषी प्रशिक्षक आपकी आवश्यकताओं और समयानुसार अनुकूलित
                  <br />
                  कार्यक्रम प्रदान करते हैं, जिससे आप आत्मविश्वास, स्पष्टता और{" "}
                  <br />
                  प्रभावशीलता के साथ किसी भी भाषा में संवाद कर सकें।
                </motion.div>
              ) : (
                <motion.div
                  key="english-description"
                  initial={{ opacity: 0, y: 10 }} // Start below
                  animate={{ opacity: 1, y: 0 }} // Move to position
                  exit={{ opacity: 0, y: 10 }} // Exit below
                  transition={{ ...springSettings, delay: 0.001 }} // 1ms delay
                  className="absolute tracking-wide font-poppins"
                >
                  Achieve fluency with purpose-driven language training. Our
                  <br />
                  expert bilingual trainers deliver tailored programs that fit
                  your
                  <br />
                  schedule, empowering you to communicate confidently and
                  <br />
                  effectively.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Language;
