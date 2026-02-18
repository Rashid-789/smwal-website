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

function Diamond({ muted }: { muted?: boolean }) {
  return (
    <span
      className={[
        "mt-1.5 inline-block h-2.5 w-2.5 rotate-45 rounded-xs",
        muted ? "bg-white/30" : "bg-yellow-400",
      ].join(" ")}
    />
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

  // ✅ BEST DEAL (Guided) card style from screenshots
  if (plan.bestDeal) {
    return (
      <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-sky-500/35 bg-black/35 shadow-[0_35px_90px_rgba(0,0,0,0.70)] backdrop-blur lg:-translate-y-3">
        {/* top bar */}
        <div className="flex h-12 items-center justify-center bg-linear-to-r from-fuchsia-600 via-rose-600 to-rose-600 text-xs font-extrabold text-white">
          <span className="inline-flex items-center gap-2">
            <span className="text-sm leading-none">↳</span>
            Best Deal
          </span>
        </div>

        {/* subtle body tint */}
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-fuchsia-600/12 via-transparent to-sky-500/10" />

        <div className="flex flex-1 flex-col p-6">
          <Header plan={plan} />
          <Price price={price} suffix={suffix} />
          <Divider />

          <Features list={plan.features} />

          <CTA href={plan.cta.href} label={plan.cta.label} />
        </div>

        {/* bottom blue strip */}
        <div className="h-1 w-full bg-sky-500/80" />
      </article>
    );
  }

  // Regular cards
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/35 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.55)] backdrop-blur">
      {/* subtle top glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_0%,rgba(59,130,246,0.14),transparent_60%)]" />

      <Header plan={plan} />
      <Price price={price} suffix={suffix} />
      <Divider />

      <Features list={plan.features} />

      <CTA href={plan.cta.href} label={plan.cta.label} />
    </article>
  );
}

function Header({ plan }: { plan: Plan }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div>
        <div className="text-xl font-extrabold uppercase text-white">
          {plan.name}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-white/65">
          {plan.description}
        </p>
      </div>

      <span className="shrink-0 rounded-full bg-sky-500/15 px-3 py-1 text-[11px] font-extrabold text-sky-300 ring-1 ring-sky-400/20">
        {plan.save}
      </span>
    </div>
  );
}

function Price({ price, suffix }: { price: number; suffix: string }) {
  return (
    <div className="mt-5 flex items-end gap-1">
      <div className="text-2xl font-extrabold text-white">{formatPrice(price)}</div>
      <div className="pb-0.5 text-sm font-semibold text-white/70">{suffix}</div>
    </div>
  );
}

function Divider() {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-sky-500/45" />
        <div className="text-xs font-extrabold text-white/70">BENEFITS</div>
        <div className="h-px flex-1 bg-sky-500/45" />
      </div>
    </div>
  );
}

function Features({ list }: { list: readonly Feature[] }) {
  return (
    <ul className="mt-5 flex-1 space-y-3">
      {list.map((f) => (
        <li key={f.text} className="flex gap-3">
          <Diamond muted={f.muted} />
          <span className={f.muted ? "text-sm text-white/45" : "text-sm text-white/80"}>
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
      className="mt-6 block w-full rounded-xl bg-sky-500 py-3 text-center text-sm font-extrabold text-white shadow-[0_18px_55px_rgba(0,0,0,0.55)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
    >
      {label}
    </Link>
  );
}
