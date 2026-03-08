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
    "inline-flex h-[30px] items-center justify-center rounded-[8px] px-[14px] text-[12px] font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60";

  return (
    <div className="inline-flex items-center gap-[8px] rounded-[14px] border border-white/10 bg-[#111215]/95 p-[4px] shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm">
      <button
        type="button"
        aria-pressed={isMonthly}
        onClick={() => onChange("monthly")}
        className={[
          btnBase,
          isMonthly
            ? "bg-[#2A2C31] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
            : "bg-transparent text-white/75 hover:text-white",
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
          !isMonthly
            ? "bg-black text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
            : "bg-transparent text-white/75 hover:text-white",
        ].join(" ")}
      >
        {yearlyLabel}
      </button>

      <span className="inline-flex h-[22px] items-center justify-center rounded-full bg-white px-[8px] text-[9px] font-bold leading-none text-black shadow-sm">
        {badge}
      </span>
    </div>
  );
}