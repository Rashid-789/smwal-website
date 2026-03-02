import React from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SiteShell({ children, className }: Props) {
  return (
    <div className={cn("relative min-h-screen overflow-x-hidden bg-[#07060b] text-white", className)}>
      {/* background glows */}
         <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-44 top-1/2 h-140 w-140 -translate-y-1/2 rounded-full bg-violet-600/25 blur-[130px]" />
        <div className="absolute left-10 top-20 h-85 w-85 rounded-full bg-violet-500/15 blur-[120px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-40 -top-30 h-130 w-130 rounded-full bg-purple-800/40 blur-[110px]" />
        <div className="absolute -left-16 top-130 h-105 w-105 rounded-full bg-indigo-700/20 blur-[120px]" />
        <div className="absolute -right-56 -top-35 h-140 w-140 rounded-full bg-black/60 blur-[90px]" />
        <div className="absolute -right-30 top-130 h-130 w-130 rounded-full bg-sky-900/15 blur-[130px]" />
        <div className="absolute inset-0 bg-linear-to-r from-purple-950/60 via-black to-black opacity-90" />
      </div>

      <div className="relative">{children}</div>
    </div>
  );
}
