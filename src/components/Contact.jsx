"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const contactEmail = "deepanshu1032001@gmail.com";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Portfolio Contact From ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--bg-soft)] px-4 py-16 text-[var(--text-dark)] sm:px-6 sm:py-24"
    >
      <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-[var(--accent-light)]/35 blur-3xl" />
      <div className="absolute bottom-10 right-[-120px] h-72 w-72 rounded-full bg-[var(--accent-main)]/15 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 max-w-3xl sm:mb-14"
        >
          <p className="mb-3 inline-flex rounded-full border border-[var(--accent-light)] bg-[var(--accent-soft)] px-4 py-2 text-sm font-bold text-[var(--accent-dark)] shadow-sm shadow-[var(--shadow-brown)]">
            Contact
          </p>

          <h2 className="text-3xl font-black tracking-tight text-[var(--text-heading)] sm:text-5xl">
            Let&apos;s discuss your next project or opportunity.
          </h2>

          <p className="mt-4 text-sm leading-7 text-[var(--text-muted)] sm:mt-5 sm:text-lg sm:leading-8">
            I&apos;m open to frontend, React, Next.js and MERN stack developer
            opportunities.
          </p>
        </motion.div>

        <div className="grid w-full gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="w-full rounded-[1.5rem] border border-white bg-white/85 p-3 shadow-2xl shadow-[var(--shadow-brown)] backdrop-blur-xl sm:rounded-[2rem] sm:p-6"
          >
            <div className="rounded-[1.25rem] border border-[var(--accent-light)]/70 bg-[var(--bg-main)] p-4 sm:rounded-[1.5rem] sm:p-6">
              <h3 className="text-2xl font-black text-[var(--text-heading)]">
                Contact Details
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)] sm:mt-4 sm:text-base sm:leading-8">
                Send me a message for job opportunities, freelance work,
                project discussion or collaboration.
              </p>

              <div className="mt-6 space-y-4 sm:mt-8">
                <a
                  href={`mailto:${contactEmail}`}
                  className="flex min-w-0 items-center gap-3 rounded-2xl border border-[var(--accent-light)]/70 bg-white p-3 transition hover:border-[var(--accent-main)] hover:shadow-md hover:shadow-[var(--shadow-brown)] sm:gap-4 sm:p-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--bg-dark)] text-white sm:h-12 sm:w-12">
                    <FaEnvelope />
                  </span>

                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[var(--accent-dark)]">
                      Email
                    </p>
                    <p className="break-all text-sm font-black text-[var(--text-heading)] sm:text-base">
                      {contactEmail}
                    </p>
                  </div>
                </a>

                <div className="flex min-w-0 items-center gap-3 rounded-2xl border border-[var(--accent-light)]/70 bg-white p-3 sm:gap-4 sm:p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-main)] text-white sm:h-12 sm:w-12">
                    <FaMapMarkerAlt />
                  </span>

                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[var(--accent-dark)]">
                      Location
                    </p>
                    <p className="font-black text-[var(--text-heading)]">
                      India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3 sm:mt-8 sm:gap-4">
                <a
                  href="https://github.com/Deepanshu1423"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--accent-light)] bg-white text-[var(--text-heading)] transition hover:border-[var(--bg-dark)] hover:bg-[var(--bg-dark)] hover:text-white sm:h-12 sm:w-12"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/deepanshu-pal-9391b422b"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--accent-light)] bg-white text-[var(--text-heading)] transition hover:border-[var(--accent-main)] hover:bg-[var(--accent-main)] hover:text-white sm:h-12 sm:w-12"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="w-full rounded-[1.5rem] border border-white bg-white/85 p-3 shadow-2xl shadow-[var(--shadow-brown)] backdrop-blur-xl sm:rounded-[2rem] sm:p-6"
          >
            <div className="grid gap-4 sm:gap-5">
              <div>
                <label className="mb-2 block text-sm font-black text-[var(--text-heading)]">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-[var(--accent-light)]/70 bg-[var(--bg-main)] px-4 py-3 text-sm text-[var(--text-heading)] outline-none transition placeholder:text-[var(--text-muted)]/60 focus:border-[var(--accent-main)] focus:bg-white sm:px-5 sm:py-4 sm:text-base"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black text-[var(--text-heading)]">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-[var(--accent-light)]/70 bg-[var(--bg-main)] px-4 py-3 text-sm text-[var(--text-heading)] outline-none transition placeholder:text-[var(--text-muted)]/60 focus:border-[var(--accent-main)] focus:bg-white sm:px-5 sm:py-4 sm:text-base"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black text-[var(--text-heading)]">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-2xl border border-[var(--accent-light)]/70 bg-[var(--bg-main)] px-4 py-3 text-sm text-[var(--text-heading)] outline-none transition placeholder:text-[var(--text-muted)]/60 focus:border-[var(--accent-main)] focus:bg-white sm:px-5 sm:py-4 sm:text-base"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[var(--bg-dark)] px-6 py-4 text-sm font-black text-white shadow-xl shadow-[var(--shadow-brown)] transition hover:bg-[var(--accent-main)]"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;