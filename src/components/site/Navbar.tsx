"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Brand from "./Brand";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const items = useMemo(
    () => [
      { label: "HOME", href: "/" },
      { label: "ABOUT US", href: "/about" },
      { label: "JOIN US", href: "/join" },
      { label: "DONATE US", href: "/donate" },
      { label: "CONTACT US", href: "/contact" },
    ],
    []
  );

  return (
    <>
      <header className="sticky top-0 z-50">
        <div className="bg-black/35 backdrop-blur">
          <Container className="flex h-16 items-center justify-between">
            <Link href="/" className="shrink-0">
              <Brand />
            </Link>

            {/* desktop nav */}
            <nav className="hidden items-center gap-6 md:flex">
              {items.map((it) => {
                const active = pathname === it.href;
                return (
                  <Link
                    key={it.href}
                    href={it.href}
                    className={[
                      "text-sm font-semibold tracking-wide transition",
                      active ? "text-sky-400" : "text-white/75 hover:text-white",
                    ].join(" ")}
                  >
                    {it.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden md:block">
                <Button href="#" variant="primary">
                  Download App
                </Button>
              </div>

              {/* mobile menu button */}
              <button
                onClick={() => setOpen(true)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 md:hidden"
                aria-label="Open menu"
              >
                {/* hamburger */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </Container>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} activePath={pathname} />
    </>
  );
}
