import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { site } from "@/config/site";
import "@/styles/globals.css";

const displayFont = localFont({
  src: "../assets/fonts/bricolage-grotesque-variable.ttf",
  variable: "--font-display",
  display: "swap",
  weight: "200 800",
});

const bodyFont = localFont({
  src: "../assets/fonts/dm-sans-variable.ttf",
  variable: "--font-body",
  display: "swap",
  weight: "100 1000",
});

export const metadata: Metadata = {
  title: { default: `${site.name} — ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // Recording extensions can inject attributes into <html> before hydration.
    // Limit this escape hatch to the document element; app descendants remain checked.
    <html lang="en-US" suppressHydrationWarning>
      <body className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-4">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
