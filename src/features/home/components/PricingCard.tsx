import Image from "next/image";
import Link from "next/link";
import type { BillingPeriod } from "../sections/Pricing";

type Feature = { text: string; muted?: boolean };

type Plan = {
  key: string;
  name: string;
  description: string;
  save: string;
  bestDeal?: boolean;
  price: Readonly<{ monthly: number; yearly: number }>;
  cta: Readonly<{ label: string; href: string }>;
  features: readonly Feature[];
};

const BLUE = "#007AFF";
const BUTTON = "#007AFF";

const TITLE_FONT = `"Bebas Neue", "Oswald", "Arial Narrow", sans-serif`;
const BODY_FONT = `'General Sans', var(--font-sans)`;

function Diamond({ muted }: { muted?: boolean }) {
  return (
    <span
      className={[
        "mt-0.5 inline-flex shrink-0 select-none items-center justify-center text-[18px] leading-none",
        muted ? "text-white/35" : "text-[#FFD21F]",
      ].join(" ")}
      aria-hidden="true"
    >
      ✦
    </span>
  );
}

function formatPrice(n: number) {
  return `$${n}`;
}

export default function PricingCard({
  plan,
  period,
}: {
  plan: Plan;
  period: BillingPeriod;
}) {
  const price = period === "monthly" ? plan.price.monthly : plan.price.yearly;
  const suffix = period === "monthly" ? "/Month" : "/Year";

  if (plan.bestDeal) {
    return (
      <article className="relative flex h-full min-h-132.5 flex-col overflow-hidden rounded-3xl bg-[linear-gradient(180deg,#D10F59_0%,#B61D97_48%,#1383F4_100%)] p-px shadow-[0_28px_80px_rgba(0,0,0,0.65)] lg:-translate-y-6">
        <div className="flex h-10.5 items-center justify-center bg-[linear-gradient(90deg,#D41467_0%,#D41467_50%,#C11259_100%)] px-6 text-white">
          <span className="inline-flex items-center gap-2 text-[15px] font-bold">
            <Image
              src="/images/errowsign.svg"
              alt="Best Deal"
              width={16}
              height={16}
              className="h-4 w-4 object-contain"
              unoptimized
            />
            Best Deal
          </span>
        </div>

        <div className="mx-2.5 mb-2.5 flex flex-1 flex-col rounded-[18px] border border-white/6 bg-[#0A0B0E] px-7 pb-6 pt-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <Header plan={plan} />
          <Price price={price} suffix={suffix} />
          <Divider />
          <Features list={plan.features} />
          <CTA href={plan.cta.href} label={plan.cta.label} />
        </div>
      </article>
    );
  }

  return (
    <article className="relative flex h-full min-h-122 flex-col overflow-hidden rounded-[20px] border border-white/10 bg-[#0A0B0E]/95 px-7 pb-6 pt-7 shadow-[0_22px_70px_rgba(0,0,0,0.55)] ring-1 ring-inset ring-white/5 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(0,122,255,0.08),transparent_58%)]" />

      <div className="relative z-10 flex h-full flex-col">
        <Header plan={plan} />
        <Price price={price} suffix={suffix} />
        <Divider />
        <Features list={plan.features} />
        <CTA href={plan.cta.href} label={plan.cta.label} />
      </div>
    </article>
  );
}

function Header({ plan }: { plan: Plan }) {
  return (
    <div className="w-full">
      <div className="flex min-h-8.5 w-full items-start justify-between gap-3 pr-1">
        <div className="min-w-0 flex-1 pr-2">
          <div
            className="text-[21px] uppercase leading-[0.92] tracking-[0.03em] text-white sm:text-[25px]"
            style={{
              fontFamily: TITLE_FONT,
              fontWeight: 200,
            }}
          >
            {plan.name}
          </div>
        </div>

        <span
          className="shrink-0 rounded-full px-2.5 py-1 text-[12px] font-bold leading-none"
          style={{
            color: BLUE,
            backgroundColor: "#D9EEFF",
          }}
        >
          {plan.save}
        </span>
      </div>

      <p
        className="mt-3 text-[15px] leading-[1.45] tracking-[0] text-white/70"
        style={{
          fontFamily: BODY_FONT,
        }}
      >
        {plan.description}
      </p>
    </div>
  );
}

function Price({ price, suffix }: { price: number; suffix: string }) {
  return (
    <div className="mt-6 flex items-end gap-0.5 text-white">
      <span className="text-[10px] font-semibold leading-none sm:text-[21px]">
        {formatPrice(price)}
      </span>
      <span className="text-[15px] font-medium leading-none text-white/92">
        {suffix}
      </span>
    </div>
  );
}

function Divider() {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-3">
        <div className="h-px flex-1" style={{ backgroundColor: BLUE }} />
        <div
          className="text-[17px] uppercase leading-none tracking-[0.03em] text-white/85"
          style={{
            fontFamily: TITLE_FONT,
            fontWeight: 200,
          }}
        >
          Benefits
        </div>
        <div className="h-px flex-1" style={{ backgroundColor: BLUE }} />
      </div>
    </div>
  );
}

function Features({ list }: { list: readonly Feature[] }) {
  return (
    <ul className="mt-7 flex-1 space-y-4">
      {list.map((f) => (
        <li key={f.text} className="flex items-start gap-4">
          <Diamond muted={f.muted} />
          <span
            className={[
              "text-[15px] leading-[1.45]",
              f.muted ? "text-white/45" : "text-white/86",
            ].join(" ")}
            style={{ fontFamily: BODY_FONT }}
          >
            {f.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

function CTA({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="mt-8 flex h-[42px] w-full items-center justify-center rounded-[12px] text-center text-[15px] font-bold text-white shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
      style={{ backgroundColor: BUTTON }}
    >
      {label}
    </Link>
  );
}