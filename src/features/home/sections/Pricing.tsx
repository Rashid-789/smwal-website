"use client";

import { useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import { HOME_PRICING } from "../content/home.content";
import PricingToggle from "../components/PricingToggle";
import PricingCard from "../components/PricingCard";

export type BillingPeriod = "monthly" | "yearly";

export default function Pricing() {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");
  const plans = useMemo(() => HOME_PRICING.plans, []);

  return (
    <section className="py-14 md:py-20">
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80">
              {HOME_PRICING.pill}
            </span>

            <h2 className="mt-5 text-[28px] font-display font-extrabold uppercase leading-[1.12] tracking-tight text-white md:text-[44px]">
              {HOME_PRICING.title}
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
              {HOME_PRICING.subtitle}
            </p>
          </div>

          {/* ✅ Centered toggle (as screenshot) */}
          <div className="flex justify-center">
            <PricingToggle
              value={period}
              onChange={setPeriod}
              monthlyLabel={HOME_PRICING.toggle.monthly}
              yearlyLabel={HOME_PRICING.toggle.yearly}
              badge={HOME_PRICING.toggle.badge}
            />
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => (
            <PricingCard key={plan.key} plan={plan} period={period} />
          ))}
        </div>
      </Container>
    </section>
  );
}
