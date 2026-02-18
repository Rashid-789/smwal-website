export default function AmountChip({
  amount,
  active,
  onClick,
}: {
  amount: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "h-10 rounded-full px-5 text-sm font-extrabold transition",
        "border border-white/10 bg-white/10 text-white/85 hover:bg-white/15",
        active ? "ring-2 ring-sky-500/60 bg-sky-500/15" : "",
      ].join(" ")}
    >
      ${amount}
    </button>
  );
}
