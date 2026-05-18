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

const skills = [
  { name: "React.js", icon: SiReact, level: "Advanced" },
  { name: "Next.js", icon: SiNextdotjs, level: "Learning + Building" },
  { name: "JavaScript", icon: SiJavascript, level: "Strong" },
  { name: "Node.js", icon: SiNodedotjs, level: "Good" },
  { name: "Express.js", icon: SiExpress, level: "Good" },
  { name: "MySQL", icon: SiMysql, level: "Good" },
  { name: "MongoDB", icon: SiMongodb, level: "Basic to Good" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced UI" },
  { name: "Git", icon: SiGit, level: "Good" },
  { name: "GitHub", icon: SiGithub, level: "Good" },
];

const skillGroups = [
  {
    title: "Frontend",
    items: "React.js, Next.js, JavaScript, Tailwind CSS, Responsive UI",
  },
  {
    title: "Backend",
    items: "Node.js, Express.js, REST APIs, JWT Auth, MVC Structure",
  },
  {
    title: "Database",
    items: "MySQL, MongoDB, Database Tables, Relations, CRUD Operations",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[var(--bg-main)] px-6 py-24 text-[var(--text-dark)]"
    >
      <div className="absolute right-[-100px] top-10 h-80 w-80 rounded-full bg-[var(--accent-light)]/35 blur-3xl" />
      <div className="absolute bottom-20 left-[-120px] h-80 w-80 rounded-full bg-[var(--accent-main)]/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-3 inline-flex rounded-full border border-[var(--accent-light)] bg-[var(--accent-soft)] px-4 py-2 text-sm font-bold text-[var(--accent-dark)] shadow-sm shadow-[var(--shadow-brown)]">
            Skills
          </p>

          <h2 className="text-4xl font-black tracking-tight text-[var(--text-heading)] sm:text-5xl">
            Technologies I use to build modern web apps.
          </h2>

          <p className="mt-5 text-base leading-8 text-[var(--text-muted)] sm:text-lg">
            My skill set covers frontend development, backend API development
            and database-driven application flow.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.12 }}
              className="rounded-[2rem] border border-white bg-white/80 p-6 shadow-xl shadow-[var(--shadow-brown)] backdrop-blur-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--bg-dark)] text-sm font-black text-white">
                0{index + 1}
              </div>

              <h3 className="text-xl font-black text-[var(--text-heading)]">
                {group.title}
              </h3>

              <p className="mt-3 leading-7 text-[var(--text-muted)]">
                {group.items}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group rounded-[1.5rem] border border-[var(--accent-light)]/70 bg-white/85 p-5 shadow-sm shadow-[var(--shadow-brown)] backdrop-blur-md transition hover:-translate-y-1 hover:border-[var(--accent-main)] hover:shadow-xl hover:shadow-[var(--shadow-brown)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-2xl text-[var(--accent-main)] transition group-hover:bg-[var(--bg-dark)] group-hover:text-white">
                  <Icon />
                </div>

                <h3 className="font-black text-[var(--text-heading)]">
                  {skill.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-[var(--text-muted)]">
                  {skill.level}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;