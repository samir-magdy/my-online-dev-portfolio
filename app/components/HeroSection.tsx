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
    targetId: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Fixed Top Navbar for Desktop */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.75, duration: 0 }}
        className={`
          hidden md:block
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 py-3 px-10
          ${isScrolled ? "bg-gray-900" : "bg-gray-900/20"}
           `}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-white font-bold text-2xl">
            <a href="#" onClick={(e) => handleSmoothScroll(e, "#home")}>
              SM
            </a>
          </div>

          <div className="flex gap-16 items-center">
            <a
              href="#portfolio"
              onClick={(e) => handleSmoothScroll(e, "#portfolio")}
              className="tracking-wide text-xl hover:scale-110 transition-scale duration-300"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={(e) => handleSmoothScroll(e, "#skills")}
              className="tracking-wide text-xl hover:scale-110 transition-scale duration-300"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="tracking-wide text-xl hover:scale-110 transition-scale duration-300"
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
        transition={{ delay: 2.75, duration: 0 }}
        className={`
          md:hidden
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 py-3 px-6
          ${isScrolled ? "bg-gray-900/70 backdrop-blur-2xl" : "bg-gray-900/20"}
        `}
      >
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-2xl">
            <a href="#" onClick={(e) => handleSmoothScroll(e, "#home")}>
              SM
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block"
            aria-label="Menu"
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
        <div
          onClick={() => setIsMenuOpen(false)}
          className="md:hidden fixed inset-0 flex flex-col items-center justify-center gap-8 bg-gray-900/90 backdrop-blur-2xl z-40"
        >
          <a
            href="#portfolio"
            onClick={(e) => handleSmoothScroll(e, "#portfolio")}
            className="text-center font-medium text-white text-4xl shadow-lg"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={(e) => handleSmoothScroll(e, "#skills")}
            className="text-center font-medium text-white text-4xl shadow-lg"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="text-center font-medium text-white text-4xl shadow-lg"
          >
            Contact
          </a>
        </div>
      )}

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
            style={{ fontSize: "clamp(2.75rem, 12vw, 8rem)" }}
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
              initialDelay={500}
            />
          </div>
        </div>
      </motion.section>
    </>
  );
}
