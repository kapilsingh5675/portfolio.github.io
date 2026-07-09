import type { Metadata } from "next";
import { Outfit, Fira_Code } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kapil Gautam | Full Stack Developer Portfolio",
  description: "Portfolio of Kapil Gautam, a Full Stack Developer specialized in React.js, Node.js, Express.js, MongoDB, AWS, and AI-assisted development.",
  keywords: ["Kapil Gautam", "Full Stack Developer", "React Developer", "Node.js Developer", "Software Engineer Portfolio", "AWS Developer"],
  authors: [{ name: "Kapil Gautam" }],
  openGraph: {
    title: "Kapil Gautam | Full Stack Developer",
    description: "Building scalable web applications, CRM platforms, and real-world software solutions using React, Node, and AWS.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${firaCode.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-[#030712] text-[#f3f4f6] font-sans antialiased selection:bg-cyan-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
