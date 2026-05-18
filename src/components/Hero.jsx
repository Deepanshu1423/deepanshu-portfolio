"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { BsArrowUpRight } from "react-icons/bs";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MySQL", icon: SiMysql },
  { name: "Tailwind", icon: SiTailwindcss },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-[var(--bg-main)] px-4 pb-8 pt-24 text-[var(--text-dark)] sm:px-6 sm:pt-32"
    >
      {/* Warm premium background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,208,138,0.55),transparent_34%),radial-gradient(circle_at_top_right,rgba(196,122,36,0.16),transparent_32%),linear-gradient(180deg,#fff8ef,#f6eadb)]" />

      {/* Soft grid */}
      <div className="absolute inset-0 opacity-[0.28] [background-image:linear-gradient(to_right,rgba(196,122,36,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(196,122,36,0.18)_1px,transparent_1px)] [background-size:76px_76px]" />

      {/* Floating warm glow */}
      <motion.div
        animate={{ y: [0, 28, 0], x: [0, 18, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-8 top-36 h-72 w-72 rounded-full bg-[var(--accent-light)]/45 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, -25, 0], x: [0, -18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 right-10 h-80 w-80 rounded-full bg-[var(--accent-main)]/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-6rem)] max-w-7xl items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--accent-light)] bg-white/80 px-3 py-2 shadow-sm shadow-[var(--shadow-brown)] backdrop-blur-md sm:mb-5 sm:px-4">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_14px_rgba(16,185,129,0.65)]" />
            <span className="text-xs font-semibold text-[var(--text-muted)] sm:text-sm">
              Available for Frontend / MERN Developer roles
            </span>
          </div>

          <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-tight text-[var(--text-heading)] sm:text-5xl lg:text-6xl">
            Designing clean,
            <span className="block bg-gradient-to-r from-[var(--accent-dark)] via-[var(--text-heading)] to-[var(--accent-main)] bg-clip-text text-transparent">
              modern web interfaces.
            </span>
          </h1>

          <p className="mt-4 hidden max-w-2xl text-sm leading-7 text-[var(--text-muted)] sm:mt-6 sm:block sm:text-lg">
            Hi, I&apos;m{" "}
            <span className="font-bold text-[var(--text-heading)]">
              Deepanshu Pal
            </span>
            , a MERN Stack Developer focused on building responsive,
            professional and real-world web applications with clean UI, smooth
            UX and strong functionality.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--bg-dark)] px-5 py-3 text-xs font-bold text-white shadow-xl shadow-[var(--shadow-brown)] transition hover:bg-[var(--accent-main)] sm:px-6 sm:text-sm"
            >
              View Projects
              <BsArrowUpRight className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>

            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-light)] bg-white/85 px-5 py-3 text-xs font-bold text-[var(--text-heading)] shadow-sm shadow-[var(--shadow-brown)] backdrop-blur-md transition hover:border-[var(--accent-main)] hover:text-[var(--accent-main)] sm:px-6 sm:text-sm"
            >
              <HiOutlineDownload className="text-lg" />
              Resume
            </a>
          </div>

          <div className="mt-6 hidden items-center gap-3 sm:flex sm:mt-8 sm:gap-4">
            <a
              href="https://github.com/Deepanshu1423"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--accent-light)] bg-white text-[var(--text-heading)] shadow-sm shadow-[var(--shadow-brown)] transition hover:border-[var(--bg-dark)] hover:bg-[var(--bg-dark)] hover:text-white hover:shadow-md"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/deepanshu-pal-9391b422b"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--accent-light)] bg-white text-[var(--text-heading)] shadow-sm shadow-[var(--shadow-brown)] transition hover:border-[var(--accent-main)] hover:bg-[var(--accent-main)] hover:text-white hover:shadow-md"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <div className="mt-10 hidden flex-wrap gap-3 sm:flex">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 rounded-full border border-[var(--accent-light)] bg-white/75 px-4 py-2 text-sm font-semibold text-[var(--text-muted)] shadow-sm shadow-[var(--shadow-brown)] backdrop-blur-md"
                >
                  <Icon className="text-[var(--accent-main)]" />
                  {skill.name}
                </div>
              );
            })}
          </div>
        </motion.div>

       
        {/* Right Circular Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative mx-auto flex w-full max-w-[260px] items-center justify-center sm:max-w-[340px] lg:max-w-[370px] lg:translate-x-[-20px]"
        >
          {/* Soft background glow */}
          <div className="absolute h-[270px] w-[270px] rounded-full bg-[var(--accent-light)]/45 blur-3xl sm:h-[360px] sm:w-[360px] lg:h-[390px] lg:w-[390px]" />

          {/* Outer premium ring */}
          <div className="relative z-10 flex h-[250px] w-[250px] items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-light)] via-white to-[var(--accent-main)] p-2 shadow-2xl shadow-[var(--shadow-brown)] sm:h-[330px] sm:w-[330px] lg:h-[360px] lg:w-[360px]">
            {/* Inner circle background */}
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-[var(--accent-light)]/70 bg-[var(--bg-main)]">
              <Image
                src="/profile.jpeg"
                alt="Deepanshu Pal"
                width={500}
                height={600}
                quality={75}
                sizes="(max-width: 640px) 250px, (max-width: 1024px) 330px, 360px"
                className="h-[112%] w-[112%] translate-y-15 object-contain"
                priority
              />
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-3 left-0 z-20 hidden rounded-2xl border border-[var(--accent-light)] bg-white/90 px-4 py-3 shadow-xl shadow-[var(--shadow-brown)] backdrop-blur-xl sm:block"
          >
            <p className="text-[11px] font-semibold text-[var(--text-muted)]">
              Current Focus
            </p>
            <p className="text-sm font-black text-[var(--text-heading)]">
              Next.js UI
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-14 right-0 z-20 hidden rounded-2xl border border-[var(--accent-light)] bg-white/90 px-4 py-3 shadow-xl shadow-[var(--shadow-brown)] backdrop-blur-xl sm:block"
          >
            <p className="text-[11px] font-semibold text-[var(--text-muted)]">
              Developer
            </p>
            <p className="text-sm font-black text-[var(--text-heading)]">
              MERN Stack
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
