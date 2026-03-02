
"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Reveal, Stagger } from "@/shared/motion/Motion";
import { HOME_EXPERIENCE } from "../content/home.content";
import ExperienceFeatureCard from "../components/ExperienceFeatureCard";

export default function Experience() {
  // ✅ keep it flexible so it won’t break if your content keys differ slightly
  const EXP: any = HOME_EXPERIENCE as any;

  const features: any[] = (EXP.features ?? EXP.cards ?? EXP.items ?? []).slice(0, 3);
  const imgSrc: string | undefined = EXP.image?.src ?? EXP.photo?.src ?? EXP.media?.src;
  const imgAlt: string = EXP.image?.alt ?? EXP.photo?.alt ?? EXP.media?.alt ?? "Experience image";

  return (
    <section className="py-14 md:py-20">
      <Container>
        {/* ✅ stretch so right image can match left column height */}
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-14">
          {/* LEFT */}
          <div className="order-2 lg:order-1">
            <Stagger className="max-w-[620px]">
              <Reveal
                as="span"
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80"
              >
                {EXP.pill}
              </Reveal>

          
              <Reveal
                as="h2"
                className="mt-4 inline-flex items-baseline font-display font-bold uppercase text-white
                           text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px]
                           leading-[1.08] tracking-tight lg:whitespace-nowrap"
              >
                {EXP.title}
              </Reveal>

            
              <Reveal
                as="p"
                className="mt-3 max-w-[560px] text-[13px] leading-[1.65] text-white/70 sm:text-[14px] md:text-[15px]"
              >
                {EXP.subtitle}
              </Reveal>

              <Reveal className="mt-6">
                <Button href={EXP.cta?.href} variant="primary" className="h-11 px-6">
                  {EXP.cta?.label}
                </Button>
              </Reveal>
            </Stagger>

        
            <Stagger className="mt-8 space-y-6">
              {features.map((f) => (
                <Reveal key={f.title}>
                  <ExperienceFeatureCard icon={f.icon} title={f.title} description={f.description} />
                </Reveal>
              ))}
            </Stagger>
          </div>

      
          <Reveal className="order-1 overflow-hidden rounded-[28px] bg-black/35 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur lg:order-2">
            {/* ✅ height tuned to match your figma look, and lg:full to align with left */}
            <div className="relative w-full h-[520px] sm:h-[600px] md:h-[660px] lg:h-full">
              {imgSrc ? (
                <>
                  <Image
                    src={imgSrc}
                    alt={imgAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 920px"
                    className="object-cover"
                    priority={false}
                  />
                  {/* subtle vignette like figma */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_0%,rgba(255,255,255,0.06),transparent_55%)]" />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.28))]" />
                </>
              ) : null}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}