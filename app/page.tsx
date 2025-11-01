"use client";

import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import DarkVeil from "./components/DarkVeil";

export default function MinimalModernPortfolio() {
  const [resolutionScale, setResolutionScale] = useState(1.8);

  useEffect(() => {
    const updateResolution = () => {
      const width = window.innerWidth;

      // Mobile: < 768px
      if (width < 768) {
        setResolutionScale(1.4); //
      }
      // Desktop: >= 1024px
      else {
        setResolutionScale(1.8);
      }
    };

    updateResolution();
    window.addEventListener("resize", updateResolution);
    return () => window.removeEventListener("resize", updateResolution);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* DarkVeil background covering entire site */}
      <div className="fixed inset-0 z-0">
        <DarkVeil
          hueShift={350}
          speed={0.3}
          warpAmount={1}
          resolutionScale={resolutionScale}
        />
      </div>
      {/* Content on top of DarkVeil */}
      <div className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </div>
  );
}
