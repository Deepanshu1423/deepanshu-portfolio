"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Education", href: "/education" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[var(--accent-light)]/40 bg-[var(--bg-dark)] px-5 py-3 shadow-[0_18px_60px_rgba(43,22,9,0.22)]">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-black tracking-tight text-[var(--text-light)]"
        >
          <motion.span
            whileHover={{ rotate: 8, scale: 1.06 }}
            transition={{ type: "spring", stiffness: 250, damping: 14 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-light)] to-[var(--accent-main)] text-sm font-black text-[var(--bg-dark)] shadow-lg shadow-[var(--shadow-gold)]"
          >
            DP
          </motion.span>
          Deepanshu Pal
        </Link>

        {/* Desktop Navbar */}
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/10 px-2 py-2 backdrop-blur-md lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-bold transition ${
                  isActive
                    ? "text-[var(--accent-dark)]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavbarPill"
                    className="absolute inset-0 rounded-full bg-[var(--accent-soft)] shadow-sm"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 28,
                    }}
                  />
                )}

                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>

        <motion.div
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.96 }}
          className="hidden lg:block"
        >
          <Link
            href="/contact"
            className="rounded-full bg-[var(--accent-main)] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-[var(--shadow-gold)] transition hover:bg-[var(--accent-dark)]"
          >
            Let&apos;s Talk
          </Link>
        </motion.div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white lg:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="mx-auto mt-3 max-w-7xl rounded-3xl border border-[var(--accent-light)]/30 bg-[var(--bg-dark)] p-5 shadow-2xl shadow-[rgba(43,22,9,0.25)] lg:hidden"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`relative rounded-2xl px-4 py-3 text-sm font-bold transition ${
                    isActive
                      ? "text-[var(--accent-dark)]"
                      : "text-white/75 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeMobileNavbarPill"
                      className="absolute inset-0 rounded-2xl bg-[var(--accent-soft)]"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 28,
                      }}
                    />
                  )}

                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;