"use client";

import { usePathname } from "next/navigation";
import SiteShell from "@/components/site/SiteShell";
import Navbar from "@/components/site/Navbar";

export default function SiteFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "";
  const hideChrome = pathname === "/login" || pathname === "/login/";
  const hideFooter =
    hideChrome ||
    pathname === "/events" ||
    pathname === "/events/" ||
    /^\/events\/[^/]+\/?$/.test(pathname) ||
    /^\/events\/[^/]+\/confirmed\/?$/.test(pathname);

  return (
    <SiteShell>
      {!hideChrome ? <Navbar /> : null}
      <main className={hideChrome ? undefined : "pt-16"}>{children}</main>
      {!hideFooter}
    </SiteShell>
  );
}
