import React from "react";

export default function Brand() {
  // Simple mark (replace with your real SVG/logo later)
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-8 w-10">
        <span className="absolute left-0 top-1 h-5 w-5 rounded-full bg-emerald-500" />
        <span className="absolute left-4 top-1 h-5 w-5 rounded-full bg-red-500" />
        <span className="absolute left-2 top-4 h-5 w-5 rounded-full bg-lime-400 opacity-90" />
      </div>

      <div className="leading-tight">
        <div className="text-sm font-semibold text-white/90">Single &amp; Married</div>
        <div className="text-xs font-semibold tracking-wide text-white/70">WITH A LIFE</div>
      </div>
    </div>
  );
}
