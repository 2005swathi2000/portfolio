import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Hanumanthu Swathi | SDE, FSD and AI Engineer",
  description:
    "Recruiter-ready portfolio of Hanumanthu Swathi — SDE, FSD and AI Engineer. B.Tech IT at ACET Surampalem (CGPA 8.30). Real-time web systems, high-throughput ELT pipelines, and machine learning.",
  keywords: [
    "Hanumanthu Swathi",
    "Swathi Hanumanthu",
    "SDE, FSD and AI Engineer",
    "Software Development Engineer",
    "Full-Stack Developer",
    "AI Engineer",
    "Infosys Springboard",
    "SolveMPire",
    "Aditya College of Engineering & Technology",
    "Next.js",
    "TypeScript",
    "Python",
    "Spring Boot",
    "Machine Learning",
    "Streamlit",
    "StudyCircle v2",
  ],
  authors: [{ name: "Hanumanthu Swathi", url: "https://github.com/2005swathi2000" }],
  creator: "Hanumanthu Swathi",
  metadataBase: new URL("https://swathi-portfolio-omega.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://swathi-portfolio-omega.vercel.app",
    siteName: "Hanumanthu Swathi — Portfolio",
    title: "Hanumanthu Swathi | SDE, FSD and AI Engineer",
    description:
      "Portfolio of Hanumanthu Swathi — SDE, FSD and AI Engineer. B.Tech IT (CGPA 8.30). 7 featured engineering projects across Real-Time Web, Cloud Pipelines, and Machine Learning.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hanumanthu Swathi — SDE, FSD and AI Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hanumanthu Swathi | SDE, FSD and AI Engineer",
    description:
      "Portfolio of Hanumanthu Swathi — SDE, FSD and AI Engineer. B.Tech IT at ACET Surampalem (CGPA 8.30). 7 featured engineering projects across Real-Time Web, Cloud Pipelines, and Machine Learning.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hanumanthu Swathi",
  jobTitle: "SDE, FSD and AI Engineer",
  url: "https://github.com/2005swathi2000",
  sameAs: [
    "https://github.com/2005swathi2000",
    "https://linkedin.com/in/swathi-hanumanthu-817265291",
    "https://leetcode.com/u/Hanumanthu_Swathi/",
    "https://www.geeksforgeeks.org/profile/swathihanumanthu21",
    "https://www.codechef.com/users/swathi_hanu_82",
    "https://codeforces.com/profile/Swathi_Hanumanthu",
    "https://hackerrank.com/profile/hanumanthuswath1",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Aditya College of Engineering & Technology",
  },
  knowsAbout: [
    "Full-Stack Development",
    "Real-Time Web Applications",
    "Python",
    "Next.js",
    "React",
    "Spring Boot",
    "Machine Learning",
    "AWS",
    "PostgreSQL",
    "XGBoost",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 transition-colors duration-200`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
