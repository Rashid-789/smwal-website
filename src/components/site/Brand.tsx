import React from "react";

export default function Brand() {
  return (
    <div className="flex items-center gap-3">
      {/* SVG mark */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 210 210"
        role="img"
        aria-label="SMWAL icon"
        className="h-10 w-10 shrink-0"
      >
        {/* Outer arms */}
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* Left outer (green) */}
          <path
            d="M50 100 C20 118 22 176 74 178 C104 180 110 160 92 150"
            stroke="#019934"
            strokeWidth={28}
          />
          {/* Right outer (yellow) */}
          <path
            d="M160 100 C190 118 188 176 136 178 C106 180 100 160 118 150"
            stroke="#D2CF0D"
            strokeWidth={28}
          />

          {/* Subtle highlights */}
          <path
            d="M50 100 C20 118 22 176 74 178 C104 180 110 160 92 150"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth={6}
          />
          <path
            d="M160 100 C190 118 188 176 136 178 C106 180 100 160 118 150"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth={6}
          />

          {/* Inner arms */}
          <path
            d="M80 145 C90 156 97 157 105 150"
            stroke="#019934"
            strokeWidth={14}
          />
          <path
            d="M130 145 C120 156 113 157 105 150"
            stroke="#D2CF0D"
            strokeWidth={14}
          />
        </g>

        {/* Heads */}
        <circle cx="70" cy="132" r="18" fill="#019934" />
        <circle cx="140" cy="132" r="18" fill="#D2CF0D" />

        {/* Heart */}
        <path
          d="M105 122
             C80 98 60 80 60 58
             C60 42 73 32 88 32
             C97 32 103 37 105 42
             C107 37 113 32 122 32
             C137 32 150 42 150 58
             C150 80 130 98 105 122 Z"
          fill="#CB0606"
        />
      </svg>

      {/* Brand text */}
      <div className="leading-none">
        <div className="text-[16px] font-extrabold tracking-tight text-white">
          Single &amp; Married
        </div>
        <div className="mt-1 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/70">
          WITH A LIFE
        </div>
      </div>
    </div>
  );
}