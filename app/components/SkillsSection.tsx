"use client";

import FadeInView from "./FadeInView";

const skills = [
  "Laravel",
  "React.js",
  "Javascript",
  "TypeScript",
  "TailwindCSS",
  "PHP",
  "Git/Github",
  "MySQL",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="xs:py-10 py-20 md:py-32 scroll-mt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <FadeInView className="text-3xl md:text-4xl font-bold mb-6 md:mb-16 text-center text-white">
          <h2>Skills</h2>
        </FadeInView>

        <FadeInView delay={0.2} className="grid grid-cols-2 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <FadeInView key={skill} delay={0.1 * index}>
              <div className="bg-gray-900/80 rounded-lg p-4 md:p-6 text-center border border-gray-800">
                <h3 className="text-lg md:text-xl font-medium text-white">
                  {skill}
                </h3>
              </div>
            </FadeInView>
          ))}
        </FadeInView>
      </div>
    </section>
  );
}
