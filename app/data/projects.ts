import wikiScnShot from "../../public/project-screenshots/wikispace.png";
import yallaScnShot from "../../public/project-screenshots/yallashop.png";
import spaceReflexScnShot from "../../public/project-screenshots/space-reflex.png";

export interface ProjectSchema {
  applicationCategory: string;
  license: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: readonly string[];
  liveUrl: string;
  repoUrl: string;
  screenshot: string;
  ctaText: string;
  schema: ProjectSchema;
}

export const projects: readonly Project[] = [
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
];

export const projectsStructuredData = {
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
