import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Animation variants for fade-in effect with delay
const fadeInVariants = {
  hidden: { opacity: 0, y: 30 }, // Start completely transparent and slightly offset
  visible: { opacity: 1, y: 0 }, // Fade in and move to original position
};

const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" }); // Trigger slightly before fully in view

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInVariants}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} // 0.5s delay, smooth easing
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;