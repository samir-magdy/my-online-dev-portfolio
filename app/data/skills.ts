export const skills = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Node.js",
  "Express.js",
  "Next.js",
  "SQL/NoSQL",
  "TailwindCSS",
  "Git/Github",
  "REST APIs",
] as const;

export type Skill = (typeof skills)[number];
