import type { BillingPeriod } from "../sections/Pricing";

type Props = {
  value: BillingPeriod;
  onChange: (v: BillingPeriod) => void;
  monthlyLabel: string;
  yearlyLabel: string;
  badge: string;
};

export default function PricingToggle({
  value,
  onChange,
  monthlyLabel,
  yearlyLabel,
  badge,
}: Props) {
  const isMonthly = value === "monthly";

  const btnBase =
    "h-8 rounded-lg px-4 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60";

  return (
    <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 p-2 backdrop-blur">
      <button
        type="button"
        aria-pressed={isMonthly}
        onClick={() => onChange("monthly")}
        className={[
          btnBase,
          isMonthly ? "bg-white/10 text-white" : "text-white/70 hover:text-white",
        ].join(" ")}
      >
        {monthlyLabel}
      </button>

      <button
        type="button"
        aria-pressed={!isMonthly}
        onClick={() => onChange("yearly")}
        className={[
          btnBase,
          !isMonthly ? "bg-white/10 text-white" : "text-white/70 hover:text-white",
        ].join(" ")}
      >
        {yearlyLabel}
      </button>

      <span className="ml-1 rounded-md bg-white px-2 py-1 text-[10px] font-extrabold text-black">
        {badge}
      </span>
    </div>
  );
}
