type Props = {
  n: string;
  title: string;
  desc: string;
  className?: string;
};

export default function JoinExperienceCard({
  n,
  title,
  desc,
  className = "",
}: Props) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl",
        "border border-white/10 bg-black/35 backdrop-blur",
        "shadow-[0_18px_55px_rgba(0,0,0,0.45)]",
        "transition hover:border-white/15 hover:bg-black/40",
        className,
      ].join(" ")}
    >
      {/*  changed items-start--  items-center */}
      <div className="flex items-center gap-5 p-6">
        {/* yellow badge */}
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-yellow-400">
          <span className="text-base font-extrabold text-white">{n}</span>
        </div>

        <div className="min-w-0">
          <div className="text-[18px] font-extrabold text-white">{title}</div>
          <p className="mt-2 text-[15px] leading-relaxed text-white/70">{desc}</p>
        </div>
      </div>
    </div>
  );
}