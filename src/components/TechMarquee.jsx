"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiGithub,
} from "react-icons/si";

const technologies = [
  { name: "React.js", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
];

const MarqueeRow = ({ reverse = false }) => {
  const items = [...technologies, ...technologies];

  return (
    <div className="relative flex overflow-hidden">
      <div
        className={`flex min-w-full shrink-0 gap-4 ${
          reverse ? "marquee-track-reverse" : "marquee-track"
        }`}
      >
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={`${item.name}-${index}`}
              className="flex min-w-fit items-center gap-3 rounded-full border border-[var(--accent-light)] bg-white/85 px-5 py-3 text-sm font-black text-[var(--text-muted)] shadow-sm shadow-[var(--shadow-brown)] backdrop-blur-md"
            >
              <Icon className="text-lg text-[var(--accent-main)]" />
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TechMarquee = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-main)] px-6 py-16">
      <div className="absolute left-[-100px] top-0 h-72 w-72 rounded-full bg-[var(--accent-light)]/35 blur-3xl" />
      <div className="absolute bottom-0 right-[-100px] h-72 w-72 rounded-full bg-[var(--accent-main)]/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 text-center"
        >
          <p className="mb-3 inline-flex rounded-full border border-[var(--accent-light)] bg-[var(--accent-soft)] px-4 py-2 text-sm font-bold text-[var(--accent-dark)] shadow-sm shadow-[var(--shadow-brown)]">
            Tech Stack
          </p>

          <h2 className="text-3xl font-black text-[var(--text-heading)] sm:text-4xl">
            Tools and technologies I work with
          </h2>
        </motion.div>

        <div className="space-y-4">
          <MarqueeRow />
          <MarqueeRow reverse />
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;