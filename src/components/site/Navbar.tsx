/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { SITE } from "@/config/site";
import Brand from "./Brand";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // --- scroll show/hide ---
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = lastY.current;
    const delta = latest - prev;

    // Always show near top
    if (latest < 80) {
      setHidden(false);
      lastY.current = latest;
      return;
    }
    if (delta > 8) setHidden(true);
    if (delta < -8) setHidden(false);

    lastY.current = latest;
  });
  useEffect(() => {
    if (hidden) setOpen(false);
  }, [hidden]);

  const items = useMemo(() => SITE.nav, []);
  useEffect(() => {
    items.forEach((item) => {
      router.prefetch(item.href);
    });
  }, [items, router]);

  return (
    <>
      <motion.header
        initial={false}
        animate={hidden ? "hidden" : "visible"}
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -90, opacity: 0 },
        }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50"
        style={{ pointerEvents: hidden ? "none" : "auto" }}
      >
        <div className="bg-black/35 backdrop-blur">
          <Container className="flex h-16 items-center justify-between">
            <Link href="/" className="shrink-0" aria-label="Go to home">
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
                    prefetch
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
                type="button"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </Container>
        </div>
      </motion.header>

      <MobileMenu open={open} onClose={() => setOpen(false)} activePath={pathname} />
    </>
  );
}
