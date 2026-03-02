"use client";

export default function AmountChip({
  amount,
  active,
  onClick,
}: {
  amount: number;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "h-11 rounded-full px-7",
        "border text-sm font-extrabold transition",
        active
          ? "border-sky-400/30 bg-sky-500 text-white shadow-[0_14px_40px_rgba(0,0,0,0.35)]"
          : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60",
      ].join(" ")}
    >
      ${amount}
    </button>
  );
}