"use client";

import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Waves from "./components/Waves";

export default function MinimalModernPortfolio() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Waves background covering entire site */}
      <div className="fixed inset-0 z-0">
        <Waves
          lineColor="#171b40c4"
          backgroundColor="rgba(16, 15, 15, 1)"
          waveSpeedX={0}
          waveSpeedY={0}
          waveAmpX={20}
          waveAmpY={10}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={10}
          // yGap={200}
        />
      </div>
      {/* Content on top of Waves */}
      <div className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </div>
  );
}
