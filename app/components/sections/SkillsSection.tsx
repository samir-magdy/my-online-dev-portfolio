"use client";

import FadeInView from "../effects/FadeInView";
import { skills } from "@/app/data/skills";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="pt-24 pb-32 md:pt-32 md:pb-40 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <FadeInView className="text-3xl md:text-4xl font-bold mb-6 md:mb-16 text-center text-white">
          <h2
            id="skills-heading"
            className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-white main-headers"
          >
            Skills
          </h2>
        </FadeInView>

        <FadeInView delay={0.2}>
          <ul className="grid grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto list-none">
            {skills.map((skill, index) => (
              <li key={skill}>
                <FadeInView delay={0.1 * index}>
                  <div className="bg-gray-900/50 rounded-lg p-6 text-center border border-gray-700">
                    <span className="text-lg md:text-xl font-medium text-white">
                      {skill}
                    </span>
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
