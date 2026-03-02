type Props = {
  value: string;
  label: string;
};

export default function StatItem({ value, label }: Props) {
  return (
    <div className="text-center">
      <div
        className="select-none text-[52px] font-extrabold leading-none tracking-tight md:text-[56px]"
        style={{
          color: "rgba(255,255,255,0.035)",
          WebkitTextStroke: "1.2px rgba(255,255,255,0.18)",
          textShadow: "0 1px 0 rgba(0,0,0,0.35), 0 14px 40px rgba(0,0,0,0.25)",
        }}
      >
        {value}
      </div>

      <div className="mt-2 text-sm font-semibold text-white/85">{label}</div>
    </div>
  );
}
