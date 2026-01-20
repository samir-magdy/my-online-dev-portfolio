"use client";

import { motion } from "framer-motion";
import BlurText from "./BlurText";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const isDesktop = window.innerWidth >= 768;

    // Mobile: keep exact current behavior
    if (!isDesktop) {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      return;
    }

    // Desktop: account for fixed navbar height
    const navbarOffset = -30;

    const element = document.querySelector(targetId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header>
        {/* Fixed Top Navbar for Desktop */}
        <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.25, duration: 0 }}
        className={`
          hidden md:block
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 py-3 px-10
          bg-black/10 backdrop-blur-xl
           `}
      >
        <div className="flex justify-center items-center max-w-7xl mx-auto">
          <div className="flex gap-32 items-center pt-2">
            <a
              href="#portfolio"
              onClick={(e) => handleSmoothScroll(e, "#portfolio")}
              className="nav-link-elegant uppercase text-xs font-light tracking-[0.25em] text-white/80 hover:text-white transition-colors duration-300 focus:outline-2 focus:outline-offset-4 focus:outline-blue-500 rounded-sm"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={(e) => handleSmoothScroll(e, "#skills")}
              className="nav-link-elegant uppercase text-xs font-light tracking-[0.25em] text-white/80 hover:text-white transition-colors duration-300 focus:outline-2 focus:outline-offset-4 focus:outline-blue-500 rounded-sm"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="nav-link-elegant uppercase text-xs font-light tracking-[0.25em] text-white/80 hover:text-white transition-colors duration-300 focus:outline-2 focus:outline-offset-4 focus:outline-blue-500 rounded-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Hamburger Menu */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.25, duration: 0 }}
        className={`
          md:hidden
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 py-3 px-6
          bg-black/10 backdrop-blur-xl`}
      >
        <div className="flex justify-end items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-8 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-white transition-transform duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-white transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-white transition-transform duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <nav
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
          onClick={() => setIsMenuOpen(false)}
          className="md:hidden fixed inset-0 flex flex-col items-center justify-center gap-10 bg-black/95 backdrop-blur-2xl z-40"
        >
          <a
            href="#portfolio"
            onClick={(e) => handleSmoothScroll(e, "#portfolio")}
            className="nav-link-elegant uppercase text-white/80 hover:text-white text-2xl font-light tracking-[0.3em] transition-colors duration-300 focus:outline-2 focus:outline-offset-4 focus:outline-blue-500 rounded-sm"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={(e) => handleSmoothScroll(e, "#skills")}
            className="nav-link-elegant uppercase text-white/80 hover:text-white text-2xl font-light tracking-[0.3em] transition-colors duration-300 focus:outline-2 focus:outline-offset-4 focus:outline-blue-500 rounded-sm"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="nav-link-elegant uppercase text-white/80 hover:text-white text-2xl font-light tracking-[0.3em] transition-colors duration-300 focus:outline-2 focus:outline-offset-4 focus:outline-blue-500 rounded-sm"
          >
            Contact
          </a>
        </nav>
      )}
      </header>

      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-medium flex justify-center text-white px-5"
            style={{
              fontSize: "clamp(2.75rem, 12vw, 8rem)",
              fontVariant: "small-caps",
            }}
          >
            Samir Magdy
          </motion.div>
          <div
            className="flex mb-6 text-center justify-center"
            style={{ fontSize: "clamp(0.9rem, 5vw, 2.5rem)" }}
          >
            <BlurText
              text="Developer. Designer. Problem-Solver."
              className="text-gray-100"
              animateBy="words"
              direction="bottom"
              stepDuration={0.2}
              delay={700}
              initialDelay={200}
            />
          </div>
        </div>
      </motion.section>
    </>
  );
}
