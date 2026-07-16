import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { CursorGlow } from "@/components/layout/CursorGlow";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { ScrollToTopButton } from "@/components/layout/ScrollToTopButton";
import { FloatingContactButtons } from "@/components/layout/FloatingContactButtons";
import { SITE } from "@/lib/data";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://jaiwantthomas.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE.name} — Frontend Developer`,
    template: `%s — ${SITE.name}`,
  },
  description:
    "Jaiwant Thomas is a frontend developer specializing in Next.js, WordPress, and Shopify — building fast, responsive, and premium web experiences.",
  keywords: [
    "Jaiwant Thomas",
    "Frontend Developer",
    "Next.js Developer",
    "WordPress Developer",
    "Shopify Developer",
    "React Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${SITE.name} — Frontend Developer`,
    description:
      "Frontend developer specializing in Next.js, WordPress, and Shopify — building fast, responsive, premium web experiences.",
    siteName: `${SITE.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Frontend Developer`,
    description:
      "Frontend developer specializing in Next.js, WordPress, and Shopify — building fast, responsive, premium web experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-background font-sans text-foreground antialiased">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
          >
            Skip to main content
          </a>
          <LoadingScreen />
          <ScrollProgressBar />
          <CursorGlow />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <ScrollToTopButton />
          <FloatingContactButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}
