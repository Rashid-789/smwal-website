"use client";

import { useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import { HoverLift, Reveal, Stagger } from "@/shared/motion/Motion";
import { fadeIn, scaleIn } from "@/shared/motion/variants";
import { HOME_PRICING } from "../content/home.content";
import PricingToggle from "../components/PricingToggle";
import PricingCard from "../components/PricingCard";
import { SECTION_HEADING_CLASS, SECTION_SUBHEADING_CLASS } from "@/lib/sectionTypography";

export type BillingPeriod = "monthly" | "yearly";

export default function Pricing() {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");
  const plans = useMemo(() => HOME_PRICING.plans, []);

  return (
    <section id="pricing" className="pricing relative overflow-hidden py-14 md:py-20">

      <Container>
        <Stagger className="flex flex-col gap-6">
          <div className="max-w-2xl">
            <Reveal
              as="span"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80"
            >
              {HOME_PRICING.pill}
            </Reveal>

            <Reveal
              as="h2"
              className={`mt-5 ${SECTION_HEADING_CLASS}`}
            >
              {HOME_PRICING.title}
            </Reveal>

            <Reveal as="p" className={`mt-5 ${SECTION_SUBHEADING_CLASS}`}>
              {HOME_PRICING.subtitle}
            </Reveal>
          </div>

          <Reveal className="flex justify-center" variant={fadeIn}>
            <PricingToggle
              value={period}
              onChange={setPeriod}
              monthlyLabel={HOME_PRICING.toggle.monthly}
              yearlyLabel={HOME_PRICING.toggle.yearly}
              badge={HOME_PRICING.toggle.badge}
            />
          </Reveal>
        </Stagger>

        <Stagger className="mt-10 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => (
            <Reveal
              key={plan.key}
              variant={"bestDeal" in plan && plan.bestDeal ? scaleIn : undefined}
            >
              <HoverLift>
                <PricingCard plan={plan} period={period} />
              </HoverLift>
            </Reveal>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
