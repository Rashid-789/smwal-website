import React from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SiteShell({ children, className }: Props) {
  return (
    <div className={cn("relative min-h-screen overflow-hidden bg-[#07060b] text-white", className)}>
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-[-120px] h-[520px] w-[520px] rounded-full bg-purple-800/40 blur-[110px]" />
        <div className="absolute -left-16 top-[520px] h-[420px] w-[420px] rounded-full bg-indigo-700/20 blur-[120px]" />
        <div className="absolute -right-56 top-[-140px] h-[560px] w-[560px] rounded-full bg-black/60 blur-[90px]" />
        <div className="absolute right-[-120px] top-[520px] h-[520px] w-[520px] rounded-full bg-sky-900/15 blur-[130px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/60 via-black to-black opacity-90" />
      </div>

      <div className="relative">{children}</div>
    </div>
  );
}
