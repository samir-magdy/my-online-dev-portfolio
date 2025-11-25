"use client";

import FadeInView from "./FadeInView";

const skills = [
  "Next.js",
  "React.js",
  "Node.js",
  "TypeScript",
  "Laravel",
  "PHP",
  "MongoDB",
  "MySQL",
  "TailwindCSS",
  "Git/Github",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="pt-24 pb-40 md:py-40 md:pt-44 px-4">
      <div className="max-w-7xl mx-auto">
        <FadeInView className="text-3xl md:text-4xl font-bold mb-6 md:mb-16 text-center text-white">
          <h2>Skills</h2>
        </FadeInView>

        <FadeInView delay={0.2}>
          <ul className="grid grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto list-none">
            {skills.map((skill, index) => (
              <li key={skill}>
                <FadeInView delay={0.1 * index}>
                  <div className="bg-gray-900/80 rounded-lg p-4 md:p-6 text-center border border-gray-800">
                    <h3 className="text-lg md:text-xl font-medium text-white">
                      {skill}
                    </h3>
                  </div>
                </FadeInView>
              </li>
            ))}
          </ul>
        </FadeInView>
      </div>
    </section>
  );
}
