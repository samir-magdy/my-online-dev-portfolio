import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samirmagdy.com"),
  title: "Samir Magdy | Full-Stack Developer",
  description:
    "Full-stack JavaScript developer based in Cairo, Egypt. Here, you can view my projects, contact info, and more.",
  authors: { name: "Samir Magdy" },
  alternates: {
    canonical: "https://samirmagdy.com",
  },
  openGraph: {
    title: "Samir Magdy | Full-Stack Developer",
    description:
      "Full-stack JavaScript developer based in Cairo, Egypt. Here, you can view my projects, contact info, and more.",
    url: "https://samirmagdy.com",
    siteName: "Samir Magdy Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Samir Magdy | Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Samir Magdy",
    jobTitle: [
      "Full-Stack Developer",
      "Software Engineer",
      "Web Developer",
      "Programmer",
      "React Developer",
      "Node.js Developer",
      "JavaScript Developer",
    ],
    url: "https://samirmagdy.com",
    sameAs: [
      "https://github.com/samir-magdy",
      "https://www.linkedin.com/in/samirmagdy93",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "Egypt",
    },
    workLocation: {
      "@type": "Place",
      name: [
        "Cairo, Egypt",
        "Remote",
        "Worldwide",
        "Freelance",
        "Cairo",
        "Egypt",
      ],
    },
    nationality: {
      "@type": "Country",
      name: "Egypt",
    },
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Next.js",
      "Web Development",
      "Full-Stack Development",
      "RESTful APIs",
      "SQL/NoSQL Databases",
      "TailwindCSS",
      "Git/GitHub",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <main id="main-content">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
