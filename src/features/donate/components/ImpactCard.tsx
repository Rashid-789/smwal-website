type IconKey = "mentor" | "match" | "community";

function Icon({ type }: { type: IconKey }) {
  return (
    <div className="grid h-9 w-9 place-items-center rounded-xl bg-yellow-400 text-black shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      {type === "mentor" && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M7 7h10v10H7V7Z" stroke="currentColor" strokeWidth="2" />
          <path d="M9 5h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
      {type === "match" && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {type === "community" && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M16 11a4 4 0 1 0-8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 21c1.5-4 6-6 8-6s6.5 2 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/35 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.45)] backdrop-blur transition hover:border-white/15 hover:bg-black/40">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_20%_0%,rgba(168,85,247,0.16),transparent_55%)]" />
      </div>

      <div className="relative flex gap-4">
        <Icon type={icon} />
        <div>
          <div className="text-base font-extrabold text-white">{title}</div>
          <p className="mt-1 text-sm leading-relaxed text-white/70">{desc}</p>
        </div>
      </div>
    </div>
  );
}
