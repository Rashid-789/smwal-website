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
        <Stagger className="max-w-[1100px]">
          <Reveal
            as="h2"
            className="font-display text-[34px] font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-[42px] md:text-[37px]"
          >
            {contribution.title}
          </Reveal>

          <Reveal
            as="p"
            className="mt-3 max-w-[900px] text-[14px] leading-[1.75] text-white/70 sm:text-[15px] md:text-[16px]"
          >
            {contribution.subtitle}
          </Reveal>
        </Stagger>

        <Reveal className="mt-10" variant={scaleIn}>
          {/* big glass card (border removed) */}
          <div className="rounded-3xl bg-black/30 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur md:p-0">
            <div className="text-[15px] font-semibold text-white/85">
              {contribution.label}
            </div>

            {/* ✅ input + button row (note moved out so button aligns with input) */}
            <div className="mt-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
                {/* input pill only */}
                <div className="flex-1">
                  <div
                    className={[
                      "flex h-14 items-center gap-3 rounded-full px-5",
                      "border border-white/10 bg-white/5",
                      "shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
                      "transition focus-within:border-white/20 focus-within:bg-white/7",
                    ].join(" ")}
                  >
                    <span className="text-white/70">$</span>
                    <input
                      value={Number.isFinite(amount) ? String(amount) : ""}
                      onChange={(e) => setAmount(Number(e.target.value || 0))}
                      inputMode="numeric"
                      className="w-full bg-transparent text-[15px] font-semibold text-white outline-none placeholder:text-white/30"
                      placeholder="25"
                    />
                  </div>
                </div>

                {/* ✅ button aligned with input pill */}
                <button
                  type="button"
                  onClick={onDonate}
                  className={[
                    "h-14 rounded-full px-10",
                    "bg-linear-to-r from-fuchsia-600 to-sky-500",
                    "text-[14px] font-extrabold text-white",
                    "shadow-[0_18px_55px_rgba(0,0,0,0.55)]",
                    "transition hover:brightness-110",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60",
                    "md:min-w-[220px]",
                  ].join(" ")}
                >
                  {contribution.button}
                </button>
              </div>

              {/* note below input (like screenshot) */}
              <p className="mt-3 text-[13px] leading-relaxed text-white/55">
                {contribution.note}
              </p>
            </div>

            {/* quick amount chips */}
            <Stagger className="mt-6 flex flex-wrap gap-3">
              {quick.map((v) => (
                <Reveal key={v}>
                  <AmountChip
                    amount={v}
                    active={amount === v}
                    onClick={() => onChip(v)}
                  />
                </Reveal>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}