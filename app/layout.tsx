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
  icons: {
    icon: "/developer-favicon.png",
    shortcut: "/developer-favicon.png",
    apple: "/developer-favicon.png",
  },
  description:
    "I'm a full-stack developer specializing in the MERN stack. Here, you can view my projects, contact info, and more.",
  authors: { name: "Samir Magdy" },
  alternates: {
    canonical: "https://samirmagdy.com",
  },
  openGraph: {
    title: "Samir Magdy | Full-Stack Developer",
    description:
      "I'm a full-stack developer specializing in the MERN stack. Here, you can view my projects, contact info, and more.",
    url: "https://samirmagdy.com",
    siteName: "Samir Magdy Portfolio",
    images: [
      {
        url: "/og.jpg",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
