import "./globals.css";
import type { Metadata } from "next";
import { display, sans } from "./fonts";

import SmoothScroll from "@/shared/motion/SmoothScroll";
import SiteFrame from "@/components/site/SiteFrame";
import HeroSectionGlow from "@/components/site/HeroSectionGlow";

export const metadata: Metadata = {
  title: "SMWAL",
  description: "Single & Married With A Life",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-screen overflow-x-hidden bg-black font-sans antialiased">
        <SmoothScroll>
          <div className="relative isolate min-h-screen">
            <div className="pointer-events-none fixed inset-0 -z-10">
              <HeroSectionGlow />
            </div>

            <div className="relative z-10">
              <SiteFrame>{children}</SiteFrame>
            </div>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
