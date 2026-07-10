"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import ProjectTiltCard from "@/components/ProjectTiltCard";
import TextReveal from "@/components/TextReveal";

const projects = [
 {
  title: "School Feedback System",
  category: "Full Stack Project",
  desc: "A real-world parent-teacher feedback system where parents submit feedback, teachers respond, and admin manages school data.",
  tech: ["React", "Node.js", "Express", "MySQL", "JWT"],
  highlight: "Parent, Teacher and Admin modules",
  github: "https://github.com/Deepanshu1423",
  live: "https://school-feedback-eight.vercel.app/",
},
  {
    title: "Safar Junction Travel Website",
    category: "Frontend Website",
    desc: "A premium travel agency website with responsive layout, packages, contact details, animations and smooth UI.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    highlight: "Responsive travel agency UI",
    github: "https://github.com/Deepanshu1423",
    live: "https://safarjunction.vercel.app/",
  },
  {
    title: "Vibhu Artist Portfolio",
    category: "MERN Project",
    desc: "An artist portfolio website with artwork showcase, admin panel planning, image management and premium gallery layout.",
    tech: ["React", "Node.js", "MongoDB", "Cloudinary"],
    highlight: "Premium artist gallery",
    github: "https://github.com/Deepanshu1423",
    live: "",
  },
 {
  title: "WorkSync HRMS",
  category: "Full Stack Project",
  desc: "A production-ready HRMS for managing employees, geo-based attendance, tasks, projects, reports, and dashboard analytics.",
  tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT"],
  highlight: "Employee, Attendance, HR/Admin and Manager modules",
  github: "https://github.com/Deepanshu1423/worksync-hrms.git",
  live: "https://worksync-hrms-web.vercel.app/",
},


];

const Projects = () => {
  return (
    <section
      id="projects"
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
            Projects
          </p>

          <TextReveal
            text="Real projects built with modern web technologies."
            highlightWords={["projects", "modern", "web"]}
            className="text-4xl font-black tracking-tight text-[var(--text-heading)] sm:text-5xl"
            highlightClassName="text-[var(--accent-main)]"
          />

          <p className="mt-5 text-base leading-8 text-[var(--text-muted)] sm:text-lg">
            These projects show my frontend, backend, database, UI design and
            real-world problem-solving skills.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectTiltCard key={project.title} index={index}>
              <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-gradient-to-br from-[var(--accent-light)]/50 to-[var(--accent-main)]/30 blur-2xl transition group-hover:scale-125" />

              <div className="relative z-10">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="rounded-full border border-[var(--accent-light)] bg-[var(--accent-soft)] px-4 py-2 text-xs font-black uppercase tracking-wide text-[var(--accent-dark)]">
                    {project.category}
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-[var(--accent-light)] bg-white px-4 py-2 text-xs font-black text-[var(--text-heading)] transition hover:border-[var(--bg-dark)] hover:bg-[var(--bg-dark)] hover:text-white"
                    >
                      <span className="flex items-center gap-2">
                        <FaGithub />
                        GitHub
                      </span>
                    </a>

                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-[var(--bg-dark)] px-4 py-2 text-xs font-black text-white transition hover:bg-[var(--accent-main)]"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="cursor-not-allowed rounded-full bg-[var(--bg-soft)] px-4 py-2 text-xs font-black text-[var(--text-muted)]/60"
                      >
                        No Live
                      </button>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-black text-[var(--text-heading)]">
                  {project.title}
                </h3>

                <p className="mt-4 leading-8 text-[var(--text-muted)]">
                  {project.desc}
                </p>

                <div className="mt-5 rounded-2xl border border-[var(--accent-light)]/70 bg-[var(--bg-main)] p-4">
                  <p className="text-sm font-bold text-[var(--accent-dark)]">
                    Project Highlight
                  </p>
                  <p className="mt-1 font-black text-[var(--text-heading)]">
                    {project.highlight}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--accent-light)] bg-white px-3 py-1.5 text-xs font-bold text-[var(--text-muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ProjectTiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
