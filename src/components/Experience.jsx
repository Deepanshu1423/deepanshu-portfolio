"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaDatabase } from "react-icons/fa";

const experiences = [
  {
    icon: FaBriefcase,
    title: "Frontend / MERN Stack Developer",
    company: "Project-Based Experience",
    duration: "1+ Year Experience",
    desc: "Worked on real-world projects using React.js, Next.js, Node.js, Express.js, MySQL and MongoDB with focus on responsive UI and practical functionality.",
  },
  {
    icon: FaCode,
    title: "Frontend Development",
    company: "React.js / Next.js",
    duration: "Modern UI Development",
    desc: "Built clean, responsive and reusable components using React, Tailwind CSS, Framer Motion and modern frontend structure.",
  },
  {
    icon: FaDatabase,
    title: "Backend & Database Flow",
    company: "Node.js / Express / MySQL",
    duration: "Full Stack Workflow",
    desc: "Created REST APIs, authentication flow, CRUD operations, database relations and complete frontend-backend integration.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[var(--bg-main)] px-6 py-24 text-[var(--text-dark)]"
    >
      <div className="absolute right-[-120px] top-20 h-80 w-80 rounded-full bg-[var(--accent-light)]/35 blur-3xl" />
      <div className="absolute bottom-10 left-[-120px] h-80 w-80 rounded-full bg-[var(--accent-main)]/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-3 inline-flex rounded-full border border-[var(--accent-light)] bg-[var(--accent-soft)] px-4 py-2 text-sm font-bold text-[var(--accent-dark)] shadow-sm shadow-[var(--shadow-brown)]">
            Experience
          </p>

          <h2 className="text-4xl font-black tracking-tight text-[var(--text-heading)] sm:text-5xl">
            Practical experience in building real-world web applications.
          </h2>

          <p className="mt-5 text-base leading-8 text-[var(--text-muted)] sm:text-lg">
            My work focuses on creating complete project flows from UI design to
            backend APIs and database integration.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-[var(--accent-light)] md:block" />

          <div className="grid gap-6">
            {experiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: index * 0.12 }}
                  className="relative rounded-[2rem] border border-white bg-white/85 p-6 shadow-xl shadow-[var(--shadow-brown)] backdrop-blur-xl md:ml-16"
                >
                  <div className="absolute -left-20 top-8 hidden h-12 w-12 items-center justify-center rounded-2xl bg-[var(--bg-dark)] text-white shadow-lg shadow-[var(--shadow-brown)] md:flex">
                    <Icon />
                  </div>

                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-2xl font-black text-[var(--text-heading)]">
                        {item.title}
                      </h3>

                      <p className="mt-2 font-bold text-[var(--accent-main)]">
                        {item.company}
                      </p>
                    </div>

                    <span className="w-fit rounded-full border border-[var(--accent-light)] bg-[var(--accent-soft)] px-4 py-2 text-sm font-black text-[var(--accent-dark)]">
                      {item.duration}
                    </span>
                  </div>

                  <p className="mt-5 max-w-4xl leading-8 text-[var(--text-muted)]">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;