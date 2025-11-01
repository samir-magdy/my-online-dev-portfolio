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
  title: "Samir Magdy | Web Developer",
  icons: "icon.png",
  description:
    "Passionate web developer with a focus on clean, minimal, and effective digital solutions.",
  keywords: [
    "Software Developer",
    "Minimal Design",
    "Laravel",
    "PHP",
    "Modern Development",
    "Web Development",
    "User Experience",
    "Design Systems",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Performance",
    "Accessibility",
    "Minimalist Portfolio",
    "Samir Magdy",
  ],
  authors: [{ name: "Samir Magdy" }],
  creator: "Samir Magdy",
  openGraph: {
    title: "Samir Magdy | Web Developer Portfolio",
    description:
      "Passionate web developer creating clean, minimal, and effective digital solutions.",
    url: "https://samirmagdy.com",
    siteName: "Samir Magdy | Portfolio",
    images: [
      {
        url: "/gg.png",
        width: 1200,
        height: 630,
        alt: "Samir Magdy | Modern Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samir Magdy | Web Developer",
    description:
      "Passionate web developer creating clean, minimal, and effective digital solutions.",
    creator: "@samirm_93",
    images: ["/gg.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <div>{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
