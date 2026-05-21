"use client";

import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import TextReveal from "@/components/TextReveal";

const highlights = [
  {
    title: "Clean UI Development",
    desc: "I focus on building responsive, modern and user-friendly interfaces.",
  },
  {
    title: "Real-World Projects",
    desc: "I create practical applications with proper frontend, backend and database flow.",
  },
  {
    title: "Problem Solving",
    desc: "I enjoy debugging, improving user experience and making features work smoothly.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[var(--bg-soft)] px-6 py-24 text-[var(--text-dark)]"
    >
      <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-[var(--accent-light)]/35 blur-3xl" />
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
            About Me
          </p>

          <TextReveal
            text="I build websites that look clean and work smoothly."
            highlightWords={["clean", "smoothly"]}
            className="text-4xl font-black tracking-tight text-[var(--text-heading)] sm:text-5xl"
            highlightClassName="text-[var(--accent-main)]"
          />

          <p className="mt-5 text-base leading-8 text-[var(--text-muted)] sm:text-lg">
            I&apos;m Deepanshu Pal, a React / MERN Stack Developer with
            experience in building responsive web applications using React.js,
            Next.js, Node.js, Express.js, MySQL and MongoDB. I like creating
            clean designs, reusable components and real-world project features.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="rounded-[2rem] border border-white bg-white/80 p-6 shadow-2xl shadow-[var(--shadow-brown)] backdrop-blur-xl"
          >
            <div className="rounded-[1.5rem] border border-[var(--accent-light)]/70 bg-[var(--bg-main)] p-6">
              <h3 className="text-2xl font-black text-[var(--text-heading)]">
                Developer Profile
              </h3>

              <p className="mt-4 leading-8 text-[var(--text-muted)]">
                My main focus is frontend development, but I also understand
                backend APIs, database design and full project workflow. I have
                worked on projects like School Feedback System, travel agency
                website, portfolio websites and Next.js CRUD applications.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  ["Role", "React / MERN Developer"],
                  ["Experience", "1+ Year"],
                  ["Location", "India"],
                  ["Focus", "Clean UI + UX"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-[var(--accent-light)]/70 bg-white p-4"
                  >
                    <p className="text-sm font-bold text-[var(--accent-dark)]">
                      {label}
                    </p>
                    <p className="mt-1 font-black text-[var(--text-heading)]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="#projects"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--bg-dark)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--accent-main)]"
              >
                See My Work
                <BsArrowUpRight className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.12 }}
                className="rounded-[2rem] border border-white bg-white/80 p-6 shadow-xl shadow-[var(--shadow-brown)] backdrop-blur-xl"
              >
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent-light)] to-[var(--accent-main)] text-lg font-black text-[var(--bg-dark)] shadow-md shadow-[var(--shadow-gold)]">
                    0{index + 1}
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-[var(--text-heading)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-[var(--text-muted)]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
