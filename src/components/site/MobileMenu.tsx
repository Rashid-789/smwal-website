"use client";

import React from "react";
import Link from "next/link";
import { SITE } from "@/config/site";
import { cn } from "@/lib/cn";

type Props = {
  open: boolean;
  onClose: () => void;
  activePath?: string;
};

export default function MobileMenu({ open, onClose, activePath }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-60">
      <button
        aria-label="Close menu"
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />
      <div className="absolute right-3 top-3 w-[320px] rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur">
        <div className="mb-3 text-sm font-semibold text-white/90">Menu</div>

        <nav className="flex flex-col gap-1">
          {SITE.nav.map((item) => {
            const active = activePath === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch
                onClick={onClose}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm font-semibold tracking-wide",
                  active ? "text-sky-400" : "text-white/80 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-4 flex gap-2">
          <Link
            href="#"
            onClick={onClose}
            className="flex-1 rounded-full bg-linear-to-r from-fuchsia-600 to-blue-600 px-4 py-2 text-center text-sm font-semibold hover:brightness-110"
          >
            Download App
          </Link>
          <button
            onClick={onClose}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/10"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
