import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import image from "../assets/translation.png";
import image2 from "../assets/trans_2.png";

const Translation = () => {
  const [isHoveredTitle, setIsHoveredTitle] = useState(false); // Track hover state for title (Translation/अनुवाद)
  const [isHoveredDescription, setIsHoveredDescription] = useState(false); // Track hover state for description

  // Spring animation settings for a faster transition
  const springSettings = {
    type: "spring",
    mass: 1,
    stiffness: 200, // Increased stiffness for a quicker snap
    damping: 20, // Slightly increased damping to reduce bounciness
  };

  return (
    <div className="grid grid-cols-2 bg-[#00296B] h-[414px] pt-14 py-10">
      <div className="flex flex-col items-start text-[88px] text-white pl-20 space-y-28">
        {/* Container for the title text with relative positioning */}
        <div className="relative h-[76px]">
          <motion.div
            onMouseEnter={() => setIsHoveredTitle(true)} // Show Hindi title on hover
            onMouseLeave={() => setIsHoveredTitle(false)} // Show English title on hover out
          >
            <AnimatePresence mode="sync">
              {isHoveredTitle ? (
                <motion.div
                  key="hindi-title"
                  initial={{ opacity: 0, y: 10 }} // Start below
                  animate={{ opacity: 1, y: 0 }} // Move to position
                  exit={{ opacity: 0, y: 10 }} // Exit below
                  transition={{ ...springSettings, delay: 0.001 }} // 1ms delay
                  className="absolute"
                >
                  अनुवाद
                </motion.div>
              ) : (
                <motion.div
                  key="english-title"
                  initial={{ opacity: 0, y: 10 }} // Start below
                  animate={{ opacity: 1, y: 0 }} // Move to position
                  exit={{ opacity: 0, y: 10 }} // Exit below
                  transition={{ ...springSettings, delay: 0.001 }} // 1ms delay
                  className="absolute font-urbanist"
                >
                  Translation
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
        {/* Image below the text */}
        <div>
          <img src={image} alt="" />
        </div>
      </div>

      <div className="flex flex-col items-start text-[16px] text-white pl-20 gap-y-10">
        <div>
          <img src={image2} alt="" />
        </div>
        {/* Container for the description text */}
        <div className="relative w-full ">
          <motion.div
            onMouseEnter={() => setIsHoveredDescription(true)} // Show Hindi description on hover
            onMouseLeave={() => setIsHoveredDescription(false)} // Show English description on hover out
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
                  अपने वैश्विक सफलता को सटीक और विश्वसनीय अनुवाद के साथ आगे
                  <br />
                  बढ़ाएं। 50+ कंपनियों द्वारा विश्वसनीय, ट्रांसवर्स व्यवसायों और
                  व्यक्तियों के <br />
                  लिए सटीक समाधान प्रदान करता है, जिससे आपका संदेश विभिन्न
                  उद्योगों में <br />
                  सहजता से संनादित हो।
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
                  Drive your global success with precise, reliable translations.
                  <br />
                  Trusted by 50+ companies, Transverse delivers accurate
                  <br />
                  solutions for businesses and individuals, ensuring your
                  <br />
                  message resonates seamlessly across industries.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Translation;
