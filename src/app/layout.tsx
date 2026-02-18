import "./globals.css";
import type { Metadata } from "next";
import { display, sans } from "./fonts";
import SiteShell from "@/components/site/SiteShell";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "SMWAL",
  description: "Single & Married With A Life",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans antialiased">
        <SiteShell>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SiteShell>
      </body>
    </html>
  );
}
