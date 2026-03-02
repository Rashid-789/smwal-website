"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { DONATE } from "../content/donate.content";
import { Reveal, Stagger } from "@/shared/motion/Motion";
import { scaleIn } from "@/shared/motion/variants";
import { scrollToId } from "@/lib/scrollToId";

export default function DonateHero() {
  const { hero } = DONATE;

  const onDonateNow = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToId("contribute");
  };

  return (
    <section className="relative overflow-hidden">
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-130 w-130 rounded-full bg-purple-600/25 blur-[130px]" />
        <div className="absolute -right-70 -top-40 h-160 w-160 rounded-full bg-indigo-600/20 blur-[150px]" />
        <div className="absolute left-1/2 -bottom-80 h-190 w-190 -translate-x-1/2 rounded-full bg-sky-500/10 blur-[170px]" />
      </div>

      {/* ✅ hero media + content INSIDE (exact banner sizing like screenshot) */}
      <Reveal variant={scaleIn} className="relative">
        <div className="relative w-full overflow-hidden h-[260px] sm:h-[320px] md:h-[420px] lg:h-[480px] xl:h-[620px]">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[40%_10%]" // adjust 35/40/45 if needed
          />

          {/* overlays like screenshot */}
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />

          {/* content */}
          <div className="absolute inset-0 flex items-center">
            <Container className="py-10 md:py-14">
              <Stagger className="max-w-2xl">
                <Reveal
                  as="h1"
                  className="whitespace-pre-line text-[34px] font-display font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-[40px] md:text-[53px]"
                >
                  {hero.title}
                </Reveal>

                <Reveal
                  as="p"
                  className="mt-4 max-w-xl text-[14px] leading-relaxed text-white/80 sm:text-[15px] md:text-[16px]"
                >
                  {hero.subtitle}
                </Reveal>

                <Reveal className="mt-6 flex flex-wrap gap-3">
                  <Button
                    href={hero.primary.href}
                    onClick={onDonateNow as any}
                    variant="primary"
                    className="h-11 rounded-full bg-linear-to-r from-fuchsia-600 to-sky-500 px-6 text-sm font-extrabold text-white shadow-[0_18px_55px_rgba(0,0,0,0.55)] hover:brightness-110"
                  >
                    {hero.primary.label}
                  </Button>

                  <Button
                    href={hero.secondary.href}
                    variant="secondary"
                    className="h-11 rounded-full border border-white/15 bg-white/5 px-6 text-sm font-extrabold text-white/90 hover:bg-white/10"
                  >
                    {hero.secondary.label}
                  </Button>
                </Reveal>
              </Stagger>
            </Container>
          </div>
        </div>
      </Reveal>
    </section>
  );
}