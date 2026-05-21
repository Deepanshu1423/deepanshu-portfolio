"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

const MagneticWrapper = ({ children, className = "", strength = 0.28 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, {
    stiffness: 180,
    damping: 18,
    mass: 0.2,
  });

  const smoothY = useSpring(y, {
    stiffness: 180,
    damping: 18,
    mass: 0.2,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    x.set((mouseX - centerX) * strength);
    y.set((mouseY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-flex ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default MagneticWrapper;