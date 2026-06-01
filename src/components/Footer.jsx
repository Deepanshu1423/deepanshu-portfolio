import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-[var(--accent-light)]/20 bg-[var(--bg-dark)] px-6 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
        <div>
          <a
            href="/"
            className="flex items-center justify-center gap-3 text-lg font-black tracking-tight text-white md:justify-start"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-light)] to-[var(--accent-main)] text-sm font-black text-[var(--bg-dark)]">
              DP
            </span>
            Deepanshu Pal
          </a>

          <p className="mt-2 text-center text-sm font-semibold text-white/65 md:text-left">
            MERN Stack Developer
          </p>
        </div>

        <p className="text-center text-sm font-semibold text-white/65">
          © {new Date().getFullYear()} Deepanshu Pal. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Deepanshu1423"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:border-[var(--accent-light)] hover:bg-[var(--accent-main)]"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/deepanshu-pal-9391b422b"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:border-[var(--accent-light)] hover:bg-[var(--accent-main)]"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;