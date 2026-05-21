"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxGlow = ({
  className = "",
  speed = 120,
  direction = "down",
}) => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "down" ? [0, speed] : [0, -speed]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "down" ? [0, 25] : [0, -25]
  );

  return (
    <motion.div
      style={{ y, rotate }}
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
    />
  );
};

export default ParallaxGlow;