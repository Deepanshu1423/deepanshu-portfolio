"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaDownload, FaEnvelope } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";

const educationData = [
  {
    degree: "B.Tech – Computer Science & Engineering",
    institute: "Uttarakhand Technical University, Dehradun",
    year: "2021 – 2025",
    percentage: "77%",
    desc: "Completed Bachelor of Technology in Computer Science & Engineering with a strong foundation in programming, web development, databases and software engineering concepts.",
  },
  {
    degree: "Class 12th",
    institute: "Balram Kunwar Saraswati Vidya Mandir, Bijnor",
    year: "UP Board | 2019",
    percentage: "71%",
    desc: "Completed Class 12th from UP Board with focus on academic fundamentals and technical learning preparation.",
  },
  {
    degree: "Class 10th",
    institute: "SMS Inter College, Nehtaur, Bijnor, UP",
    year: "UP Board | 2017",
    percentage: "74%",
    desc: "Completed Class 10th from UP Board with strong academic discipline and learning foundation.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[var(--bg-soft)] px-6 py-24 text-[var(--text-dark)]"
    >
      <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-[var(--accent-light)]/35 blur-3xl" />
      <div className="absolute bottom-10 right-[-120px] h-80 w-80 rounded-full bg-[var(--accent-main)]/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-3 inline-flex rounded-full border border-[var(--accent-light)] bg-[var(--accent-soft)] px-4 py-2 text-sm font-bold text-[var(--accent-dark)] shadow-sm shadow-[var(--shadow-brown)]">
            Education
          </p>

          <h2 className="text-4xl font-black tracking-tight text-[var(--text-heading)] sm:text-5xl">
            My academic background and development journey.
          </h2>

          <p className="mt-5 text-base leading-8 text-[var(--text-muted)] sm:text-lg">
            My education helped me build a strong base in computer science,
            programming, databases and software development.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <div className="grid gap-6">
            {educationData.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.12 }}
                className="rounded-[2rem] border border-white bg-white/85 p-6 shadow-xl shadow-[var(--shadow-brown)] backdrop-blur-xl"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--bg-dark)] text-xl text-white shadow-lg shadow-[var(--shadow-brown)]">
                    <FaGraduationCap />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-2xl font-black text-[var(--text-heading)]">
                          {item.degree}
                        </h3>

                        <p className="mt-2 font-bold text-[var(--accent-main)]">
                          {item.institute}
                        </p>
                      </div>

                      <span className="w-fit rounded-full border border-[var(--accent-light)] bg-[var(--accent-soft)] px-4 py-2 text-sm font-black text-[var(--accent-dark)]">
                        {item.year}
                      </span>
                    </div>

                    <p className="mt-4 w-fit rounded-full bg-[var(--bg-main)] px-4 py-2 text-sm font-black text-[var(--text-heading)]">
                      Percentage: {item.percentage}
                    </p>

                    <p className="mt-5 leading-8 text-[var(--text-muted)]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="rounded-[2rem] border border-white bg-white/85 p-6 shadow-2xl shadow-[var(--shadow-brown)] backdrop-blur-xl"
          >
            <div className="rounded-[1.5rem] border border-[var(--accent-light)]/70 bg-[var(--bg-main)] p-6">
              <p className="mb-3 inline-flex rounded-full bg-[var(--accent-soft)] px-4 py-2 text-sm font-black text-[var(--accent-dark)] shadow-sm">
                Resume
              </p>

              <h3 className="text-3xl font-black tracking-tight text-[var(--text-heading)]">
                Want to know more about my work?
              </h3>

              <p className="mt-4 leading-8 text-[var(--text-muted)]">
                Download my resume or contact me directly for frontend, React,
                Next.js and MERN stack developer opportunities.
              </p>

              <div className="mt-8 grid gap-4">
                <a
                  href="/resume.pdf"
                  className="group flex items-center justify-between rounded-2xl bg-[var(--bg-dark)] px-5 py-4 text-sm font-black text-white shadow-xl shadow-[var(--shadow-brown)] transition hover:bg-[var(--accent-main)]"
                >
                  <span className="flex items-center gap-3">
                    <FaDownload />
                    Download Resume
                  </span>

                  <BsArrowUpRight className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>

                <a
                  href="/contact"
                  className="group flex items-center justify-between rounded-2xl border border-[var(--accent-light)] bg-white px-5 py-4 text-sm font-black text-[var(--text-heading)] transition hover:border-[var(--accent-main)] hover:text-[var(--accent-main)]"
                >
                  <span className="flex items-center gap-3">
                    <FaEnvelope />
                    Contact Me
                  </span>

                  <BsArrowUpRight className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>

              <div className="mt-8 rounded-2xl border border-[var(--accent-light)]/70 bg-white p-5">
                <p className="text-sm font-bold text-[var(--accent-dark)]">
                  Current Focus
                </p>
                <p className="mt-2 text-xl font-black text-[var(--text-heading)]">
                  React.js, Next.js, Tailwind CSS, Node.js and MySQL
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;