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
    <div className="rounded-2xl border border-white/10 bg-black/35 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.45)] backdrop-blur hover:bg-black/40">
      <div className="flex gap-4">
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
