type IconKey = "mentor" | "match" | "faith";

function Icon({ type }: { type: IconKey }) {
  return (
    <div className="grid h-10 w-10 place-items-center rounded-xl bg-yellow-400 text-black shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
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

      {type === "faith" && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 3v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M7 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
    </div>
  );
}

export default function ExperienceFeatureCard({
  icon,
  title,
  description,
}: {
  icon: IconKey;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-black/35 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.45)] backdrop-blur transition hover:border-white/15 hover:bg-black/40">
      {/* subtle inset highlight (like screenshot) */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_20%_0%,rgba(168,85,247,0.16),transparent_55%)]" />
      </div>

      <div className="relative">
        <Icon type={icon} />

        <h3 className="mt-4 text-[15px] font-extrabold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>
      </div>
    </div>
  );
}
