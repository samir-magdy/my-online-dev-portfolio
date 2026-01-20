import dynamic from "next/dynamic";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";

// Lazy load heavy WebGL component - won't block initial render
const LightRays = dynamic(() => import("./components/LightRays"), {});

export default function MinimalModernPortfolio() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* LightRays background covering entire site */}
      <div className="fixed inset-0 z-0">
        <LightRays
          raysOrigin="bottom-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={1}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>
      {/* Content on top of LightRays */}
      <div id="main-content" className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </div>
  );
}
