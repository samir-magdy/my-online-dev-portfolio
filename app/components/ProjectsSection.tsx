"use client";
import { useState, useEffect } from "react";
import FadeInView from "./FadeInView";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
}
import wikiScnShot from "../../public/wikispace.png";
import yallaScnShot from "../../public/yallashop.png";
import spaceReflexScnShot from "../../public/space-reflex.png";

// ============================================
// DATA: Single source of truth for projects
// ============================================
const projects = [
  {
    id: "yallashop",
    title: "YallaShop (E-commerce)",
    description:
      "A frontend e-commerce implementation featuring component-driven React architecture, advanced product filtering, context-based cart management, and responsive device-specific UI.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    liveUrl: "https://yallashop-frontend.vercel.app/",
    repoUrl: "https://github.com/samir-magdy/yallashop-frontend",
    screenshot: yallaScnShot.src,
    ctaText: "Live Demo",
    schema: {
      applicationCategory: "E-commerce",
      license: "https://opensource.org/licenses/MIT",
    },
  },
  {
    id: "wikispace",
    title: "WikiSpace Proxy (Desktop Web-App)",
    description:
      "A proxy server that dynamically transforms Wikipedia's interface in real-time. It intercepts HTTP requests, performs server-side HTML/CSS manipulation, and delivers a minimalist, custom-built UI to the client.",
    technologies: ["Express.js", "JavaScript", "Cheerio", "HTML5", "CSS3"],
    liveUrl: "https://wikipedia-web-proxy.onrender.com/",
    repoUrl: "https://github.com/samir-magdy/wikipedia-web-proxy",
    screenshot: wikiScnShot.src,
    ctaText: "Live Demo",
    schema: {
      applicationCategory: "Proxy Server",
      license: "https://opensource.org/licenses/MIT",
    },
  },
  {
    id: "space-reflex",
    title: "Space Reflex (Browser-Game)",
    description:
      "A browser game focused on player reaction speed. It features a custom-built HTTP server using the Node.js http module, a dynamic SQLite-powered leaderboard, and a fully responsive interface.",
    technologies: ["Node.js", "JavaScript", "SQLite", "HTML5", "CSS3"],
    liveUrl: "https://space-reflex-game.onrender.com/",
    repoUrl: "https://github.com/samir-magdy/space-reflex-game",
    screenshot: spaceReflexScnShot.src,
    ctaText: "Live Demo",
    schema: {
      applicationCategory: "Game",
      license: "https://opensource.org/licenses/MIT",
    },
  },
] as const;

type Project = (typeof projects)[number];

// ============================================
// STRUCTURED DATA
// ============================================
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Web Development Projects Portfolio",
  description: "Featured full-stack web development projects",
  numberOfItems: projects.length,
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: project.title,
      description: project.description,
      applicationCategory: project.schema.applicationCategory,
      url: project.liveUrl,
      codeRepository: project.repoUrl,
      programmingLanguage: project.technologies.join(", "),
      license: project.schema.license,
      inLanguage: "en",
    },
  })),
};

// ============================================
// COMPONENTS
// ============================================
function TechBadge({ tech }: { tech: string }) {
  return (
    <li className="flex">
      <span className="text-md px-3 py-1 bg-gray-800 text-white rounded-full border border-gray-700 shadow-sm">
        {tech}
      </span>
    </li>
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const isMobile = useIsMobile();
  // State to track mouse position for the zoom effect
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0, show: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    // Use clientX/Y to get coordinates relative to the viewport
    // then subtract left/top of the element to get local coordinates
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomPos({ x, y, show: true });
  };

  return (
    <FadeInView delay={delay}>
      <article className="bg-gray-900/70 rounded-xl overflow-hidden border border-gray-700/95 shadow-lg h-full flex flex-col">
        <figure className="flex flex-col flex-grow">
          <div className="p-6">
            <div
              className={`relative overflow-hidden rounded-xl ${isMobile ? "" : "cursor-none"}`}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setZoomPos({ ...zoomPos, show: false })}
            >
              {/* Base Image */}
              <img
                src={project.screenshot}
                alt={`Screenshot of ${project.title}`}
                className={`w-full h-full object-fill transition-opacity duration-300 ${isMobile ? "" : "cursor-crosshair"} ${zoomPos.show ? "opacity-0" : "opacity-100"}`}
              />

              {/* Zoomed "Magnifying" Layer */}
              {!isMobile && (
                <div
                  className={`absolute inset-0 transition-opacity duration-500 cursor-crosshair ${zoomPos.show ? "opacity-100" : "opacity-0"}`}
                  style={{
                    backgroundImage: `url(${project.screenshot})`,
                    backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                    backgroundSize: "200%",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              )}
            </div>
          </div>

          <figcaption className="px-6 pb-6 flex flex-col flex-grow">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-white tracking-wide">
              {project.title}
            </h2>

            <div className="flex flex-col flex-grow">
              <p className="text-gray-100 text-lg/7 flex-grow tracking-wide">
                {project.description}
              </p>

              <ul
                className="flex flex-wrap gap-2 md:gap-3 my-4 mb-6 items-center"
                aria-label={`Technologies used in ${project.title}`}
              >
                {project.technologies.map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </ul>

              <div className="grid grid-cols-3 gap-3 mt-auto">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.ctaText} for ${project.title} (opens in new tab)`}
                  className="col-span-2 bg-blue-900/90 text-center font-bold text-sm py-3 hover:bg-blue-900/60 text-white rounded-lg transition-colors duration-200 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
                >
                  {project.ctaText}
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub repository for ${project.title} (opens in new tab)`}
                  className="text-center text-sm font-bold py-3 bg-gray-100/90 hover:bg-gray-200/90 text-gray-900 rounded-lg transition-colors duration-200 backdrop-blur-sm focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
                >
                  Github
                </a>
              </div>
            </div>
          </figcaption>
        </figure>
      </article>
    </FadeInView>
  );
}
// ============================================
// MAIN COMPONENT
// ============================================
export default function ProjectsSection() {
  return (
    <section
      id="portfolio"
      className="pt-20 pb-32 md:pt-24 md:pb-40 px-4"
      aria-labelledby="portfolio-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-3xl mx-auto">
        <h1
          id="portfolio-heading"
          className="main-headers text-3xl md:text-4xl font-bold mb-5 text-center text-white"
        >
          Projects
        </h1>

        <div className="grid grid-cols-1 gap-20 mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={(index + 1) * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
