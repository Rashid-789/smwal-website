export default function JoinExperienceCard({
  n,
  title,
  desc,
}: {
  n: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/35 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.45)] backdrop-blur transition hover:border-white/15 hover:bg-black/40">
      {/* subtle hover spotlight */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_20%_0%,rgba(168,85,247,0.16),transparent_55%)]" />
      </div>

      <div className="relative flex gap-4">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-yellow-400 text-sm font-extrabold text-black shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          {n}
        </div>

        <div>
          <div className="text-base font-extrabold text-white">{title}</div>
          <p className="mt-1 text-sm leading-relaxed text-white/70">{desc}</p>
        </div>
      </div>
    </div>
  );
}
