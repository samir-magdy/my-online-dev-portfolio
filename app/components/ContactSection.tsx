"use client";

import FadeInView from "./FadeInView";
import ContactForm from "./ContactForm";
// fix get in touch title responsive, spacing in new contact section and vertical margins
export default function ContactSection() {
  return (
    <section id="contact" className="pt-24 pb-4 md:pt-32 ">
      <div className="max-w-3xl mx-auto px-4">
        {/* Mobile Heading - Shows only on mobile before form */}
        {/* <div className=" mb-4">
          <div className="text-3xl md:text-4xl font-bold text-white text-center">
            <h2>Get In Touch</h2>
          </div>
          <div className="text-center text-gray-100 text-xl line-8 my-4 mt-4">
            <p>
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities. Currently available for full-time positions and
              select freelance projects that align with my expertise.
            </p>
          </div>
        </div> */}

        {/* Two Column Layout */}
        <div className="grid grid-cols-1">
          {/* Left Column - Title, Description, Email, Social Icons */}
          <div className="flex flex-col justify-between items-center md:items-start">
            <FadeInView className="text-3xl md:text-4xl font-bold text-white mx-auto mb-4">
              <h2>Get In Touch</h2>
            </FadeInView>
            <FadeInView
              delay={0.2}
              className=" text-white text-xl leading-8 text-bold mb-4"
            >
              <p className="text-center">
                I&apos;m currently seeking full-time roles and select freelance
                partnerships that align with my expertise. To discuss a
                potential role or project, please submit your inquiry via the
                form below.
              </p>
            </FadeInView>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <FadeInView delay={0.2}>
              <ContactForm />
            </FadeInView>
          </div>
        </div>

        {/* Copyright Notice */}
        <footer>
          <FadeInView
            delay={0.5}
            className="text-gray-300 text-sm md:text-lg md:mt-24 text-center"
          >
            <div className="flex justify-center gap-4 mt-6">
              <a
                href="https://github.com/samir-magdy"
                title="My GitHub"
                target="_blank"
              >
                <svg
                  className="w-7 bg-black rounded-full"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/samirmagdy93"
                title="My Linkedin"
                target="_blank"
              >
                <svg
                  className=" w-7 bg-black rounded-lg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 font-medium mt-3 ">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  d="M15 9.5a3.5 3.5 0 0 0-6 0v5a3.5 3.5 0 0 0 6 0"
                  strokeLinecap="round"
                />
              </svg>
              <span>{new Date().getFullYear()} Samir Magdy</span>
            </div>
          </FadeInView>
        </footer>
      </div>
    </section>
  );
}
