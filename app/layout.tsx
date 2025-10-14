import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syed Salman Reza - Full Stack Developer Portfolio",
  description: "Portfolio website of Syed Salman Reza, a passionate full-stack developer specializing in modern web technologies and open source contributions.",
  keywords: ["Syed Salman Reza", "Full Stack Developer", "Web Developer", "Portfolio", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Syed Salman Reza" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://syed-reza98.github.io",
    title: "Syed Salman Reza - Full Stack Developer Portfolio",
    description: "Portfolio website showcasing projects and skills of Syed Salman Reza",
    siteName: "Syed Salman Reza Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

