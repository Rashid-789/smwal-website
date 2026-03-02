import "./globals.css";
import type { Metadata } from "next";
import { display, sans } from "./fonts";

import SmoothScroll from "@/shared/motion/SmoothScroll";
import SiteFrame from "@/components/site/SiteFrame";

export const metadata: Metadata = {
  title: "SMWAL",
  description: "Single & Married With A Life",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans antialiased">
        <SmoothScroll>
          <SiteFrame>{children}</SiteFrame>
        </SmoothScroll>
      </body>
    </html>
  );
}