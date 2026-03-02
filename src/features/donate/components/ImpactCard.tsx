type IconKey = "mentor" | "match" | "community";

function Icon({ type }: { type: IconKey }) {
  const badgeCls =
    "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#F4C400] shadow-[0_10px_28px_rgba(0,0,0,0.18)]";

  const stroke = "#fff";
  const strokeWidth = 1;

  return (
    <div className={badgeCls}>
      {type === "mentor" && (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect
            x="7"
            y="7"
            width="10"
            height="12"
            rx="1.6"
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
          <path
            d="M9 16h6"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </svg>
      )}

      {type === "match" && (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect
            x="7"
            y="7"
            width="10"
            height="12"
            rx="1.6"
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 9.4v5.2"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M9.4 12h5.2"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M9 16h6"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </svg>
      )}

      {/* ✅ Community & Education (two people) — matches screenshot */}
      {type === "community" && (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {/* main person head */}
          <circle
            cx="9.2"
            cy="10"
            r="2.4"
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
          {/* main person shoulders */}
          <path
            d="M4.6 19c1.1-2.5 3.4-3.9 4.6-3.9s3.5 1 4.6 3.9"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />

          {/* secondary person head (behind/right) */}
          <circle
            cx="15.8"
            cy="10.8"
            r="2.0"
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
          {/* secondary person shoulders */}
          <path
            d="M13.8 15.8c2 .2 3.7 1.5 4.4 3.2"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </svg>
      )}
    </div>
  );
}

export default function ImpactCard({
  icon,
  title,
  desc,
}: {
  icon: IconKey;
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/35 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.45)] backdrop-blur transition hover:border-white/15 hover:bg-black/40">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_20%_0%,rgba(168,85,247,0.16),transparent_55%)]" />
      </div>

      <div className="relative">
        <Icon type={icon} />

        <div className="mt-4">
          <div className="text-[18px] font-extrabold text-white">{title}</div>
          <p className="mt-2 text-[14px] leading-relaxed text-white/70">{desc}</p>
        </div>
      </div>
    </div>
  );
}