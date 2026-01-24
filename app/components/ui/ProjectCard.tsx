"use client";

import { useState } from "react";
import FadeInView from "../effects/FadeInView";
import TechBadge from "./TechBadge";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import type { Project } from "@/app/data/projects";

interface ProjectCardProps {
  project: Project;
  delay: number;
}

export default function ProjectCard({ project, delay }: ProjectCardProps) {
  const isMobile = useIsMobile();
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0, show: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

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
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white tracking-wide">
              {project.title}
            </h3>

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
