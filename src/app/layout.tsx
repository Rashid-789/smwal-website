import "./globals.css";
import type { Metadata } from "next";
import { display, sans } from "./fonts";

import SiteShell from "@/components/site/SiteShell";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

//  add this import
import SmoothScroll from "@/shared/motion/SmoothScroll";

export const metadata: Metadata = {
  title: "SMWAL",
  description: "Single & Married With A Life",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans antialiased">
        <SmoothScroll>
          <SiteShell>
            <Navbar />
            <main className="pt-16">{children}</main>

            <Footer />
          </SiteShell>
        </SmoothScroll>
      </body>
    </html>
  );
}
