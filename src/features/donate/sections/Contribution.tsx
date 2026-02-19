"use client";

import { useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import { DONATE } from "../content/donate.content";
import AmountChip from "../components/AmountChip";
import { Reveal, Stagger } from "@/shared/motion/Motion";
import { scaleIn } from "@/shared/motion/variants";

export default function Contribution() {
  const { contribution } = DONATE;

  const quick = useMemo(() => contribution.quick, [contribution.quick]);
  const [amount, setAmount] = useState<number>(25);

  const onChip = (v: number) => setAmount(v);

  const onDonate = () => {
    alert(`Donate $${amount} via Stripe (hook up later)`);
  };

  return (
    <section id="contribute" className="relative py-14 md:py-20">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-10 h-105 w-105 rounded-full bg-purple-600/16 blur-[130px]" />
        <div className="absolute -right-40 bottom-0 h-130 w-130 rounded-full bg-sky-500/10 blur-[150px]" />
      </div>

      <Container>
        <Stagger>
          <Reveal
            as="h2"
            className="text-2xl font-display font-extrabold uppercase tracking-tight text-white md:text-3xl"
          >
            {contribution.title}
          </Reveal>

          <Reveal
            as="p"
            className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base"
          >
            {contribution.subtitle}
          </Reveal>
        </Stagger>

        <Reveal className="mt-10" variant={scaleIn}>
          <div className="rounded-2xl border border-white/10 bg-black/35 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur md:p-8">
            <div className="text-sm font-semibold text-white/85">{contribution.label}</div>

            <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-center">
              <div className="flex-1">
                <div className="flex h-12 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 transition focus-within:border-white/20 focus-within:bg-white/7">
                  <span className="text-white/70">$</span>
                  <input
                    value={Number.isFinite(amount) ? String(amount) : ""}
                    onChange={(e) => setAmount(Number(e.target.value || 0))}
                    inputMode="numeric"
                    className="w-full bg-transparent text-sm font-semibold text-white outline-none placeholder:text-white/30"
                    placeholder="25"
                  />
                </div>

                <p className="mt-2 text-xs text-white/50">{contribution.note}</p>
              </div>

              <button
                type="button"
                onClick={onDonate}
                className="h-12 rounded-2xl bg-linear-to-r from-fuchsia-600 to-sky-500 px-6 text-sm font-extrabold text-white shadow-[0_18px_55px_rgba(0,0,0,0.55)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
              >
                {contribution.button}
              </button>
            </div>

            <Stagger className="mt-5 flex flex-wrap gap-3">
              {quick.map((v) => (
                <Reveal key={v}>
                  <AmountChip amount={v} active={amount === v} onClick={() => onChip(v)} />
                </Reveal>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
