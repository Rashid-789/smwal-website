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
        {/* ✅ SINGLE solid background (no gradient, no overlay layers) */}
        <div className="bg-[#141414] shadow-[0_14px_40px_rgba(0,0,0,0.45)]">
          {/* subtle bottom border like the screenshot */}
          <div className=" border-white/10">
            <Container className="flex h-[82px] items-center">
              {/* LEFT: brand */}
              <Link href="/" className="shrink-0" aria-label="Go to home">
                <Brand />
              </Link>

              {/* CENTER: desktop nav */}
              <nav className="hidden flex-1 items-center justify-center gap-8 md:flex lg:gap-8">
                {items.map((it) => {
                  // ✅ active when exact match OR child route (e.g. /about/team)
                  const active =
                    pathname === it.href ||
                    (it.href !== "/" && pathname.startsWith(it.href + "/"));

                  return (
                    <Link
                      key={it.href}
                      href={it.href}
                      prefetch
                      className={[
                        "text-[16px] sm:text-[17px] md:text-[18px] font-extrabold uppercase tracking-[0.02em] leading-none transition-colors duration-200 drop-shadow-[0_1px_0_rgba(0,0,0,0.65)]",
                        active
                          ? "text-blue-400"
                          : "text-white/85 hover:text-white",
                      ].join(" ")}
                    >
                      {it.label}
                    </Link>
                  );
                })}
              </nav>

              {/* RIGHT: button + mobile menu */}
              <div className="ml-auto flex items-center gap-2">
                <div className="hidden md:block">
                  <Button
                    href="#"
                    variant="primary"
                    className="rounded-full bg-gradient-to-r from-[#D4145A] to-[#00A3FF] px-6 py-2 text-[17px] font-semibold text-white shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:opacity-95"
                  >
                    Download App
                  </Button>
                </div>

                {/* mobile menu button */}
                <button
                  onClick={() => setOpen(true)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/90 hover:bg-white/10 md:hidden"
                  aria-label="Open menu"
                  type="button"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
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
        </div>
      </motion.header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        activePath={pathname}
      />
    </>
  );
}