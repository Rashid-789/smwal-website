"use client";

import { usePathname } from "next/navigation";
import SiteShell from "@/components/site/SiteShell";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

export default function SiteFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "";

  // ✅ hide footer on:
  // - /events (listing)
  // - /events/[slug] (details)
  // - /events/[slug]/confirmed
  const hideFooter =
    pathname === "/events" ||
    pathname === "/events/" ||
    /^\/events\/[^/]+\/?$/.test(pathname) ||
    /^\/events\/[^/]+\/confirmed\/?$/.test(pathname);

  return (
    <SiteShell>
      <Navbar />
      <main className="pt-16">{children}</main>
      {!hideFooter && <Footer />}
    </SiteShell>
  );
}