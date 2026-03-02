type IconKey = "mentor" | "match" | "faith";

function Icon({ type }: { type: IconKey }) {
  return (
    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-yellow-400 text-white shadow-[0_10px_22px_rgba(0,0,0,0.35)] ring-1 ring-black/15">
      {type === "mentor" && (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M7 6.5h9.5c1.1 0 2 .9 2 2V19H9c-1.1 0-2-.9-2-2V6.5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M7 16.5c0-1.1.9-2 2-2h9.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}

      {type === "match" && (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M5.5 20c1.3-3.4 4-5 6.5-5s5.2 1.6 6.5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}

      {type === "faith" && (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10.5 12a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 10.5 12Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M4.8 20c1.1-3.1 3.5-4.6 5.7-4.6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M14.5 15.4l1.6 1.6 3.6-3.6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
      {/* subtle inset highlight (like figma) */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_20%_0%,rgba(168,85,247,0.16),transparent_55%)]" />
      </div>

      <div className="relative">
        <Icon type={icon} />

        <h3 className="mt-4 truncate text-[16px] font-extrabold text-white">
          {title}
        </h3>

        <p className="mt-1 text-[13px] leading-relaxed text-white/70 sm:text-[14px]">
          {description}
        </p>
      </div>
    </div>
  );
}
