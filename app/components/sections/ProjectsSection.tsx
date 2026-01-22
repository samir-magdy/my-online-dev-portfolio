"use client";

import { projects, projectsStructuredData } from "@/app/data/projects";
import ProjectCard from "../ui/ProjectCard";

export default function ProjectsSection() {
  return (
    <section
      id="portfolio"
      className="pt-20 pb-32 md:pt-24 md:pb-40 px-4"
      aria-labelledby="portfolio-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsStructuredData) }}
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
