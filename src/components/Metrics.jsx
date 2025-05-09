import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion"; // Import Framer Motion
import image1 from "../assets/metric1.png";
import image2 from "../assets/metric2.png";

const Metrics = () => {
  const [showImage2, setShowImage2] = useState(false); // Track which image to show
  const ref = useRef(null); // Ref to track viewport
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Detect when component is in view

  // Update state when the component enters the viewport
  useEffect(() => {
    if (isInView) {
      setShowImage2(true);
    }
  }, [isInView]);

  return (
    <div className="flex w-full bg-white px-20 py-6">
      {/* Container for the images */}
      <div ref={ref} className="relative w-full h-64">
        <AnimatePresence mode="wait">
          {!showImage2 ? (
            <motion.img
              key="image1"
              src={image1}
              alt="Metric 1"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }} // Fade out
              className="w-full h-full object-contain"
            />
          ) : (
            <motion.img
              key="image2"
              src={image2}
              alt="Metric 2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5 } }} // Fade in
              className="w-full h-full object-contain"
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Metrics;