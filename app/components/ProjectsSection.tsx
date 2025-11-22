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

        <div className="grid grid-cols-1 gap-6 md:gap-12 md:gap-y-20 max-w-4xl mx-auto">
          {/* YallaShop */}
          <FadeInView delay={0.05}>
            <div className="bg-gray-900/80 rounded-xl overflow-hidden border border-gray-800 shadow-lg">
              <div className="p-6">
                <FadeInView delay={0.075}>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                    YallaShop (Front-end)
                  </h3>
                </FadeInView>

                <div className="space-y-4">
                  <FadeInView delay={0.1}>
                    <div>
                      <p className="text-gray-200 text-base/7">
                        YallaShop demonstrates a visually appealing and
                        user-friendly UI/UX design. Product data is fetched from
                        a static JSON file and all logic is handled on the
                        client side. In a real-world application, this would
                        typically involve server-side data fetching from a
                        database for accuracy and security.
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
                            • <strong>Advanced Filtering: </strong>
                            Users can browse and filter products by price,
                            categories, sort by name/price and more
                          </li>
                          <li>
                            • <strong>Shopping Cart: </strong> An interactive
                            sidebadar cart with real-time updates and persistent
                            user data using localStorage
                          </li>
                          <li>
                            • <strong>Product Suggestions: </strong> Each
                            product page displays suggestions based on the
                            current product category
                          </li>
                        </ul>
                      </div>
                    </div>
                  </FadeInView>

                  {/* Technology Tags */}
                  <FadeInView delay={0.15}>
                    <div className="flex flex-wrap gap-2 md:gap-4 my-5">
                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        Next.js
                      </span>
                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        React.js
                      </span>
                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        TypeScript
                      </span>
                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        TailwindCSS
                      </span>
                    </div>
                  </FadeInView>

                  {/* Project Links */}
                  <FadeInView delay={0.175}>
                    <div className="flex gap-3">
                      <Link
                        href="https://yallashop-frontend.vercel.app/"
                        target="_blank"
                        className="grow-[6] bg-blue-800/90 text-center font-bold text-sm py-3 hover:bg-blue-900/90 text-white rounded-lg transition-all duration-300"
                      >
                        Visit Website
                      </Link>
                      <Link
                        href="https://github.com/samir-magdy/yallashop-ecommerce-frontend"
                        target="_blank"
                        className="text-center grow text-sm font-bold md:px-12 px-3 py-3 bg-gray-100/90 hover:bg-gray-200/90 text-gray-900 rounded-lg transition-all duration-300 backdrop-blur-sm"
                      >
                        View Code
                      </Link>
                    </div>
                  </FadeInView>
                </div>
              </div>
            </div>
          </FadeInView>

          {/* Personal Hub - COMMENTED OUT
          <FadeInView delay={0.05}>
            <div className="bg-gray-900/80 rounded-xl overflow-hidden border border-gray-800 shadow-lg">
              <div className="p-6">
                <FadeInView delay={0.075}>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                    My Hub (Full-Stack)
                  </h3>
                </FadeInView>

                <div className="space-y-4">
                  <FadeInView delay={0.1}>
                    <div>
                      <p className="text-gray-200 text-base/7">
                        A personalized productivity/utility app including
                        weather, news and exchange rate APIs; A to-do list and
                        much more. (Currently only supports Egyptian
                        time/weather).
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
                            • <strong>API Integration: </strong>
                            Service classes that fetch and cache third-party
                            data to populate news, exchange rate and weather
                            views
                          </li>
                          <li>
                            • <strong>User Authentication: </strong> Laravel
                            Breeze scaffolding, functioning password reset flow
                            and middleware routes
                          </li>
                          <li>
                            • <strong>CRUD: </strong> Persistent user data
                            across all devices for to-dos, bookmarks, and
                            calendar events using Laravel&apos;s Eloquent ORM
                            with MySQL
                          </li>
                        </ul>
                      </div>
                    </div>
                  </FadeInView>

                  <FadeInView delay={0.15}>
                    <div className="flex flex-wrap gap-2 md:gap-4 mb-5">
                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        Laravel
                      </span>
                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        MySQL
                      </span>
                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        Vanilla JS
                      </span>

                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        TailwindCSS
                      </span>
                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        CSS3
                      </span>
                    </div>
                  </FadeInView>

                  <FadeInView delay={0.175}>
                    <div className="flex gap-3">
                      <Link
                        href="https://personal-space-dashboard.laravel.cloud/login"
                        target="_blank"
                        className="flex-grow bg-blue-800/90 text-center font-bold text-sm py-3 hover:bg-blue-900/90 text-white rounded-lg transition-all duration-300"
                      >
                        Launch WebApp
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
        */}

          {/* Space Reflex */}
          <FadeInView delay={0.05}>
            <div className="bg-gray-900/80 rounded-xl overflow-hidden border border-gray-800 shadow-lg">
              <div className="p-6">
                <FadeInView delay={0.075}>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                    Space Reflex Game (Front-End)
                  </h3>
                </FadeInView>

                <div className="space-y-4">
                  <FadeInView delay={0.1}>
                    <div>
                      <p className="text-gray-200 text-base/7">
                        A client-side, browser-based reaction game where players
                        must click/tap precisely when a cycling button color
                        matches a displayed color. Players have 3 tries to reach
                        and beat the final round.
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
                            management with volume controls, and event-triggered
                            SFX
                          </li>
                          <li>
                            • <strong>DOM Manipulation: </strong>
                            Real-time UI synchronization with conditional
                            visibility based on event-driven game states
                          </li>
                          <li>
                            • <strong>Game Progression: </strong>
                            Speed intervals decrease throughout rounds,
                            increasing difficulty as players advance
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
                        className="grow-[6] bg-blue-800/90 text-center font-bold text-sm py-3 hover:bg-blue-900/90 text-white rounded-lg transition-all duration-300"
                      >
                        Launch Game
                      </Link>
                      <Link
                        href="https://github.com/samir-magdy/js-reaction-game"
                        target="_blank"
                        className="text-center grow text-sm font-bold md:px-12 px-3 py-3 bg-gray-100/90 hover:bg-gray-200/90 text-gray-900 rounded-lg transition-all duration-300 backdrop-blur-sm"
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
          <FadeInView delay={0.05}>
            <div className="bg-gray-900/80 rounded-xl overflow-hidden border border-gray-800 shadow-lg">
              <div className="p-6">
                <FadeInView delay={0.075}>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                    Photographer Portfolio (Front-End)
                  </h3>
                </FadeInView>

                <div className="space-y-4">
                  <FadeInView delay={0.1}>
                    <div>
                      <p className="text-gray-200 text-base/7">
                        A mobile-optimized photographer&apos;s portfolio
                        website. Features a filterable gallery with around 40
                        high resolution images stored on the server
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
                            • <strong>Photo-Gallery: </strong> Instant category
                            filtering using JavaScript with CSS visibility
                            classes instead of having to re-render images on
                            each filter
                          </li>
                          <li>
                            • <strong>Deferred Loading: </strong>
                            logical loading prioritization for different images
                            resulting in &apos;faster&apos; perceived
                            performance
                          </li>
                          <li>
                            • <strong>Device-Specific UX: </strong>Animation
                            hints for touch/swipe support and hover detection
                            disabled on mobile
                          </li>
                          <li>
                            • <strong>Responsive Design: </strong>
                            use of CSS media queries and conditional hero
                            section display for desktop/mobile
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
                        className="grow-[6] bg-blue-800/90 text-center font-bold text-sm py-3 hover:bg-blue-900/90 text-white rounded-lg transition-all duration-300"
                      >
                        Visit Website
                      </Link>
                      <Link
                        href="https://github.com/samir-magdy/personal-portfolio"
                        target="_blank"
                        className="text-center grow text-sm font-bold md:px-12 px-3 py-3 bg-gray-100/90 hover:bg-gray-200/90 text-gray-900 rounded-lg transition-all duration-300 backdrop-blur-sm"
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
