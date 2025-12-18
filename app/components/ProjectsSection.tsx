"use client";

import FadeInView from "./FadeInView";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <section id="portfolio" className="pt-20 pb-32 md:pt-24 md:pb-40 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeInView className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-white">
          <h2>Projects</h2>
        </FadeInView>

        <div className="grid grid-cols-1 gap-6 md:gap-12 md:gap-y-20  mx-auto">
          {/* YallaShop - COMMENTED OUT
          <FadeInView delay={0.05}>
            <article className="bg-gray-900/80 rounded-xl overflow-hidden border border-gray-800 shadow-lg">
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
                        A frontend e-commerce prototype demonstrating modern
                        React and Next.js capabilities. Built with TypeScript
                        and Tailwind CSS, it features advanced product
                        filtering, persistent cart management, and mobile-first
                        responsive design patterns. Deployed on Vercel.
                        <p className="mt-1">
                          <strong>
                            <i>Note: </i>
                          </strong>
                          <i>
                            This project uses static JSON for product data, in a
                            real-world application, this would typically involve
                            server-side data fetching from a database.
                          </i>
                        </p>
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
                            • <strong>Product Filtering & Search: </strong>
                            Search across multiple fields, and sort by various
                            criteria. Search queries and categories persist in
                            the URL for shareable results. Mobile uses a
                            slide-in modal interface with apply/reset buttons
                            and removable filter pills, while desktop provides
                            instant filtering through integrated dropdowns.
                          </li>
                          <li>
                            • <strong>Shopping Cart Management: </strong>
                            Cart state is managed through React Context and
                            automatically saved to localStorage. The add-to-cart
                            button changes based on context—showing "Add to
                            Cart", "View in Cart", or a confirmation checkmark.
                            The cart sidebar displays real-time quantity
                            controls, item removal, and a running subtotal.
                          </li>

                          <li>
                            • <strong>Responsive Design: </strong>
                            The interface adapts meaningfully between devices,
                            not just in layout but in interaction patterns.
                            Mobile prioritizes a focused, modal-based filtering
                            experience with explicit apply/reset actions, while
                            desktop offers immediate filtering for faster
                            browsing. Both approaches feel native to their
                            respective platforms.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </FadeInView>

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
            </article>
          </FadeInView>
        */}

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
            <article className="bg-gray-900/95 rounded-xl overflow-hidden border border-gray-800 shadow-lg">
              <div className="p-6">
                <FadeInView delay={0.075}>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                    Space Reflex Game (Full-Stack)
                  </h3>
                </FadeInView>

                <div className="space-y-4">
                  <FadeInView delay={0.1}>
                    <div>
                      <p className="text-gray-200 text-base/7">
                        A browser game built using vanilla JS (no frameworks).
                        It is deployed on Render.com with separated SQLite
                        database hosting (Turso Cloud) to maintain persistent
                        data across server redeployments/shutdowns.
                      </p>
                      <p className="mt-1">
                        <strong>
                          <i>Note: </i>
                        </strong>
                        <i>
                          Due to Render&apos;s free hosting limitations, the
                          server may take around 50 seconds to initialize from
                          an idle state.
                        </i>
                      </p>
                    </div>
                  </FadeInView>

                  <FadeInView delay={0.125}>
                    <div className="grid grid-cols-1">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-400 mb-4">
                          Technical Highlights:
                        </h4>
                        <ul className="space-y-3 text-base/7 text-gray-200">
                          <li>
                            • <strong>HTTP Server: </strong>
                            Node.js server built from scratch using the http
                            module that handles manual route parsing,
                            server-side validation, and request body handling.
                            Implements three RESTful endpoints, managing
                            GET/POST requests with proper status codes, headers,
                            and error handling.
                          </li>
                          <li>
                            • <strong>Dynamic UI Management: </strong>
                            Event-driven DOM manipulation controlling element
                            visibility and keyframe animations based on game
                            state, with real-time updates via fetch API to
                            populate the leaderboard without page refresh.
                          </li>
                          <li>
                            • <strong>Database Operations: </strong>Executes
                            conditional SQL queries that check existing records
                            before INSERT/UPDATE operations. Only persists new
                            high scores when players beat their previous times,
                            preventing duplicate usernames via a dedicated
                            name-check endpoint.
                          </li>
                          <li>
                            • <strong>Session Management: </strong> Implements
                            username persistence and first-visit tracking using
                            browser localStorage instead of traditional
                            authentication. Conditionally displays instruction
                            modal for new users while maintaining identity
                            across browser sessions, with name-change
                            functionality that replaces stored credentials.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </FadeInView>

                  {/* Technology Tags */}
                  <FadeInView delay={0.15}>
                    <div className="flex flex-wrap gap-2 md:gap-4 mb-5">
                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        Node.js
                      </span>
                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        Vanilla JS
                      </span>
                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        SQLite
                      </span>
                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        CSS3
                      </span>
                      <span className="text-sm px-2 py-0.5 bg-gray-800 text-white rounded-xl border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                        HTML5
                      </span>
                    </div>
                  </FadeInView>

                  {/* Project Links */}
                  <FadeInView delay={0.175}>
                    <div className="flex gap-3">
                      <Link
                        href="https://space-reflex-game.onrender.com/"
                        target="_blank"
                        className="grow-[6] bg-blue-800/90 text-center font-bold text-sm py-3 hover:bg-blue-900/90 text-white rounded-lg transition-all duration-300"
                      >
                        Launch Game
                      </Link>
                      <Link
                        href="https://github.com/samir-magdy/space-reflex-game"
                        target="_blank"
                        className="text-center grow text-sm font-bold md:px-12 px-3 py-3 bg-gray-100/90 hover:bg-gray-200/90 text-gray-900 rounded-lg transition-all duration-300 backdrop-blur-sm"
                      >
                        View Code
                      </Link>
                    </div>
                  </FadeInView>
                </div>
              </div>
            </article>
          </FadeInView>

          {/* Photographer Portfolio - COMMENTED OUT
          <FadeInView delay={0.05}>
            <article className="bg-gray-900/80 rounded-xl overflow-hidden border border-gray-800 shadow-lg">
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
                        A mobile-optimized, photographer&apos;s portfolio
                        landing page. Features a filterable gallery with around
                        40 high resolution images stored on the server. Hosted
                        on GitHub pages.
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
                            classes
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
            </article>
          </FadeInView>
        */}
        </div>
      </div>
    </section>
  );
}
