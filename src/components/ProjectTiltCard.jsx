"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ProjectTiltCard = ({ children, index = 0 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, {
    stiffness: 160,
    damping: 18,
    mass: 0.2,
  });

  const smoothY = useSpring(y, {
    stiffness: 160,
    damping: 18,
    mass: 0.2,
  });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const percentageX = mouseX / rect.width - 0.5;
    const percentageY = mouseY / rect.height - 0.5;

    x.set(percentageX);
    y.set(percentageY);

    e.currentTarget.style.setProperty("--mouse-x", `${mouseX}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${mouseY}px`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative overflow-hidden rounded-[2rem] border border-white bg-white/85 p-6 shadow-xl shadow-[var(--shadow-brown)] backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[var(--shadow-brown)]"
    >
      {/* Moving spotlight */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(196,122,36,0.18),transparent_38%)]" />
      </div>

      {/* Gold border glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-transparent transition duration-300 group-hover:border-[var(--accent-main)]/40" />

      {/* Card content depth */}
      <div className="relative z-10" style={{ transform: "translateZ(35px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

export default ProjectTiltCard;