"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[999] h-1 w-full origin-left bg-gradient-to-r from-[var(--accent-dark)] via-[var(--accent-main)] to-[var(--accent-light)]"
    />
  );
};

export default ScrollProgress;