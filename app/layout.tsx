import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Umang Magaroliya | Senior Software Developer Portfolio",
  description:
    "Senior Software Developer with 3+ years of experience in building scalable, responsive, and high-performance web applications using React.js, Next.js, TypeScript, and Tailwind CSS. Skilled in API integration, reusable component architecture, and performance optimization to deliver seamless user experiences",
  icons: {
    icon: "favicon.png",
  },
  keywords: [
    "Umang",
    "Magaroliya",
    "Umang Magaroliya",
    "Senior Software Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Web Development",
    "Portfolio",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Frontend Engineer",
    "Redux",
    "Next.js",
  ],

  authors: [{ name: "Umang Mangaroliya" }],
  robots: "index, follow",
  themeColor: "#e7000b",

  openGraph: {
    type: "website",
    url: "https://portfolio-sigma-lilac-gzg2a5d2nq.vercel.app/",
    title: "Umang | Senior Software Developer Portfolio",
    description:
      "Explore the tactical web operations of Umang. 3+ years of experience in building modern, high-performance web applications.",
    images: [
      {
        url: "https://portfolio-sigma-lilac-gzg2a5d2nq.vercel.app/images/umang.jpg",
        width: 1200,
        height: 630,
        alt: "Umang Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Umang Magaroliya | Senior Software Developer Portfolio",
    description:
      "Explore the tactical web operations of Umang. 3+ years of experience in building modern, high-performance web applications.",
    images: [
      "https://portfolio-sigma-lilac-gzg2a5d2nq.vercel.app/images/umang.jpg",
    ],
  },

  metadataBase: new URL("https://portfolio-sigma-lilac-gzg2a5d2nq.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="scanline"></div>
        {children}
      </body>
    </html>
  );
}
