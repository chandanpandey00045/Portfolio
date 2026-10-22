import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Chandan Pandey | Full-Stack Developer & Data Engineer",
  description:
    "Portfolio of Chandan Pandey — Full-Stack Developer and Data Engineer experienced in React, Next.js, Node.js, Python, SQL, PySpark, Azure, and Databricks.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg"
  },
  keywords: [
    "Chandan Pandey",
    "Full-Stack Developer",
    "Data Engineer",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PySpark",
    "Databricks",
    "Azure",
    "Portfolio"
  ],
  authors: [{ name: "Chandan Pandey" }],
  openGraph: {
    title: "Chandan Pandey | Full-Stack Developer & Data Engineer",
    description: "Building thoughtful full-stack applications and dependable data systems.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrains.variable}`}>
        {children}
      </body>
    </html>
  );
}
