"use client";

import { useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import { DONATE } from "../content/donate.content";
import AmountChip from "../components/AmountChip";

export default function Contribution() {
  const { contribution } = DONATE;

  const quick = useMemo(() => contribution.quick, [contribution.quick]);
  const [amount, setAmount] = useState<number>(25);

  const onChip = (v: number) => setAmount(v);

  const onDonate = () => {
    alert(`Donate $${amount} via Stripe (hook up later)`);
  };

  return (
    <section id="contribute" className="py-14 md:py-20">
      <Container>
        <h2 className="text-2xl font-display font-extrabold uppercase tracking-tight text-white md:text-3xl">
          {contribution.title}
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base">
          {contribution.subtitle}
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-black/35 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur md:p-8">
          <div className="text-sm font-semibold text-white/85">{contribution.label}</div>

          <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-center">
            <div className="flex-1">
              <div className="flex h-12 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4">
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
              className="h-12 rounded-2xl bg-linear-to-r from-fuchsia-600 to-sky-500 px-6 text-sm font-extrabold text-white shadow-[0_18px_55px_rgba(0,0,0,0.55)] hover:brightness-110"
            >
              {contribution.button}
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {quick.map((v) => (
              <AmountChip key={v} amount={v} active={amount === v} onClick={() => onChip(v)} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
