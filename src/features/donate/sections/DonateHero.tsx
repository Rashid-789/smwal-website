"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { DONATE } from "../content/donate.content";
import { Reveal, Stagger } from "@/shared/motion/Motion";
import { scaleIn } from "@/shared/motion/variants";
import { scrollToId } from "@/lib/scrollToId";
import {
  SECTION_HEADING_FONT_CLASS,
  SECTION_SUBHEADING_CLASS,
} from "@/lib/sectionTypography";

export default function DonateHero() {
  const { hero } = DONATE;

  const onDonateNow = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToId("contribute");
  };

  return (
    <section className="relative overflow-hidden">

      <Reveal variant={scaleIn} className="relative">
        <div className="relative w-full overflow-hidden h-65 sm:h-80 md:h-105 lg:h-120 xl:h-155">
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
                  className={`whitespace-pre-line ${SECTION_HEADING_FONT_CLASS} text-[65px] font-normal uppercase leading-[1] tracking-[0] text-white`}
                >
                  {hero.title}
                </Reveal>

                <Reveal
                  as="p"
                  className={`mt-5 max-w-xl ${SECTION_SUBHEADING_CLASS}`}
                >
                  {hero.subtitle}
                </Reveal>

                <Reveal className="mt-6 flex flex-wrap gap-3">
                  <Button
                    href={hero.primary.href}
                    onClick={onDonateNow}
                    variant="primary"
                    className="h-12 rounded-full bg-linear-to-r from-pink-800 to-blue-700 px-7 text-sm font-extrabold text-white shadow-[0_18px_55px_rgba(0,0,0,0.55)] hover:brightness-110"
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
