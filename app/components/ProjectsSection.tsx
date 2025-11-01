"use client";

import FadeInView from "./FadeInView";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <section id="portfolio" className="py-20 md:py-32 px-4 ">
      <div className="max-w-7xl mx-auto">
        <FadeInView className="text-3xl md:text-4xl font-bold mb-4 md:mb-16 text-center text-white">
          <h2>Projects</h2>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24">
          {/* Personal Dashboard */}
          <FadeInView delay={0.05}>
            <div className="bg-gray-900/80 rounded-xl overflow-hidden border border-gray-800 shadow-lg">
              <div className="p-6">
                <FadeInView delay={0.075}>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                    Personal Dashboard
                  </h3>
                </FadeInView>

                <div className="space-y-4">
                  <FadeInView delay={0.1}>
                    <div>
                      <p className="text-gray-200 text-base/7">
                        A personalized dashboard built with Laravel. Includes
                        weather, news and exchange rate APIs; A to-do list,
                        bookmarks and a calendar. Currently only supports
                        Egyptian timezone and weather.
                      </p>
                    </div>
                  </FadeInView>

                  <FadeInView delay={0.125}>
                    <div className="grid grid-cols-1">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-400 mb-4">
                          Key Features:
                        </h4>
                        <ul className="space-y-3 text-base/7 text-gray-200">
                          <li>
                            • <strong>API Integration: </strong> Multiple
                            services that fetch and cache third-party data to
                            populate widgets
                          </li>
                          <li>
                            • <strong>User Authentication: </strong> Laravel
                            Breeze scaffolding
                          </li>
                          <li>
                            • <strong>CRUD Operations: </strong> CRUD handling
                            for to-dos, bookmarks and calendar events for
                            persistent to-dos/calender events and bookmarks
                            across all devices
                          </li>
                          <li>
                            • <strong>Responsive Design: </strong>Adaptive
                            layouts optimized for mobile and desktop
                          </li>
                        </ul>
                      </div>
                    </div>
                  </FadeInView>

                  {/* Technology Tags */}
                  <FadeInView delay={0.15}>
                    <div className="flex flex-wrap gap-2 md:gap-4 mb-5">
                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        Laravel
                      </span>
                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        MySQL
                      </span>
                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        CSS3
                      </span>

                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        TailwindCSS
                      </span>
                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        Vanilla JS
                      </span>
                    </div>
                  </FadeInView>

                  {/* Project Links */}
                  <FadeInView delay={0.175}>
                    <div className="flex gap-3">
                      <Link
                        href="https://personal-space-dashboard.laravel.cloud/login"
                        target="_blank"
                        className="flex-grow bg-blue-800/90 text-center font-bold text-sm py-3 hover:bg-blue-900/90 text-white rounded-lg transition-all duration-300"
                      >
                        Launch Demo
                      </Link>
                      <Link
                        href="https://github.com/samir-magdy/personal-space-dashboard"
                        target="_blank"
                        className="text-sm font-bold md:px-12 px-3 py-3 bg-gray-100/90 hover:bg-gray-200/90 text-gray-900 rounded-lg transition-all duration-300 backdrop-blur-sm"
                      >
                        View Code
                      </Link>
                    </div>
                  </FadeInView>
                </div>
              </div>
            </div>
          </FadeInView>

          {/* Space Reflex */}
          <FadeInView delay={0.05}>
            <div className="bg-gray-900/80 rounded-xl overflow-hidden border border-gray-800 shadow-lg">
              <div className="p-6">
                <FadeInView delay={0.075}>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                    Space Reflex
                  </h3>
                </FadeInView>

                <div className="space-y-4">
                  <FadeInView delay={0.1}>
                    <div>
                      <p className="text-gray-200 text-base/7">
                        A client-side, browser-based reaction game where players
                        must click/tap precisely when a cycling button color
                        matches a displayed color.
                      </p>
                    </div>
                  </FadeInView>

                  <FadeInView delay={0.125}>
                    <div className="grid grid-cols-1">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-400 mb-4">
                          Key Features:
                        </h4>
                        <ul className="space-y-3 text-base/7 text-gray-200">
                          <li>
                            • <strong>Audio System: </strong> Multi-track sound
                            management with volume controls,and event-triggered
                            SFX
                          </li>
                          <li>
                            • <strong>DOM Manipulation: </strong>
                            Real-time UI synchronization with conditional
                            visibility based on event driven game states
                          </li>
                          <li>
                            • <strong>Game Progression: </strong>
                            Speed intervals decrease from 600ms to 300ms across
                            rounds, three lives total
                          </li>
                          <li>
                            • <strong>Restart System: </strong>
                            Mid-game reset capability maintaining UI state while
                            clearing progress
                          </li>
                        </ul>
                      </div>
                    </div>
                  </FadeInView>

                  {/* Technology Tags */}
                  <FadeInView delay={0.15}>
                    <div className="flex flex-wrap gap-2 md:gap-4 mb-5">
                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        HTML5
                      </span>
                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        CSS3
                      </span>
                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        Vanilla JS
                      </span>
                    </div>
                  </FadeInView>

                  {/* Project Links */}
                  <FadeInView delay={0.175}>
                    <div className="flex gap-3">
                      <Link
                        href="https://samir-magdy.github.io/js-reaction-game/"
                        target="_blank"
                        className="flex-grow bg-blue-800/90 text-center font-bold text-sm py-3 hover:bg-blue-900/90 text-white rounded-lg transition-all duration-300"
                      >
                        Launch Demo
                      </Link>
                      <Link
                        href="https://github.com/samir-magdy/js-reaction-game"
                        target="_blank"
                        className="text-sm font-bold md:px-12 px-3 py-3 bg-gray-100/90 hover:bg-gray-200/90 text-gray-900 rounded-lg transition-all duration-300 backdrop-blur-sm"
                      >
                        View Code
                      </Link>
                    </div>
                  </FadeInView>
                </div>
              </div>
            </div>
          </FadeInView>

          {/* Photographer Portfolio */}
          <FadeInView delay={0.05} className="lg:col-span-2">
            <div className="bg-gray-900/80 rounded-xl overflow-hidden border border-gray-800 shadow-lg lg:max-w-2xl lg:mx-auto">
              <div className="p-6">
                <FadeInView delay={0.075}>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                    Photographer Portfolio
                  </h3>
                </FadeInView>

                <div className="space-y-4">
                  <FadeInView delay={0.1}>
                    <div>
                      <p className="text-gray-200 text-base/7">
                        A mobile-optimized photographer portfolio website.
                        Features a filterable gallery with around 40 high
                        resolution images.
                      </p>
                    </div>
                  </FadeInView>

                  <FadeInView delay={0.125}>
                    <div className="grid grid-cols-1">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-400 mb-4">
                          Key Features:
                        </h4>
                        <ul className="space-y-3 text-base/7 text-gray-200">
                          <li>
                            • <strong>Photo-Gallery: </strong>Instant category
                            filtering using JavaScript with CSS visibility
                            classes instead of having to re-render images on
                            each filter
                          </li>
                          <li>
                            • <strong>Deferred Loading: </strong>
                            logical content loading prioritization for
                            &apos;faster&apos; perceived performance
                          </li>
                          <li>
                            • <strong>Device-Specific UX: </strong>Animation
                            hints for touch/swipe support and hover detection
                            disabled on mobile
                          </li>
                          <li>
                            • <strong>Responsive Design: </strong>Adaptive
                            layouts across all screen sizes using CSS media
                            queries with conditional hero section display
                          </li>
                        </ul>
                      </div>
                    </div>
                  </FadeInView>

                  {/* Technology Tags */}
                  <FadeInView delay={0.15}>
                    <div className="flex flex-wrap gap-2 md:gap-4 mb-5">
                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        HTML5
                      </span>
                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        CSS3
                      </span>
                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        Vanilla JS
                      </span>
                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        Bootstrap5
                      </span>
                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        GLightbox
                      </span>
                    </div>
                  </FadeInView>

                  {/* Project Links */}
                  <FadeInView delay={0.175}>
                    <div className="flex gap-3">
                      <Link
                        href="https://samir-magdy.github.io/personal-portfolio/"
                        target="_blank"
                        className="flex-grow bg-blue-800/90 text-center font-bold text-sm py-3 hover:bg-blue-900/90 text-white rounded-lg transition-all duration-300"
                      >
                        Launch Demo
                      </Link>
                      <Link
                        href="https://github.com/samir-magdy/personal-portfolio"
                        target="_blank"
                        className="text-sm font-bold md:px-12 px-3 py-3 bg-gray-100/90 hover:bg-gray-200/90 text-gray-900 rounded-lg transition-all duration-300 backdrop-blur-sm"
                      >
                        View Code
                      </Link>
                    </div>
                  </FadeInView>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
