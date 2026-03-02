import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { DONATE } from "../content/donate.content";
import ImpactCard from "../components/ImpactCard";
import { HoverLift, Reveal, Stagger } from "@/shared/motion/Motion";
import { scaleIn } from "@/shared/motion/variants";

export default function Impact() {
  const { impact } = DONATE;

  return (
    <section className="relative py-14 md:py-20">
      {/* glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-10 h-105 w-105 rounded-full bg-purple-600/18 blur-[130px]" />
        <div className="absolute -right-40 bottom-0 h-130 w-130 rounded-full bg-indigo-600/14 blur-[150px]" />
      </div>

      <Container>
        <Stagger className="max-w-3xl">
          <Reveal
            as="span"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80"
          >
            {impact.pill}
          </Reveal>

          {/* one-line heading like screenshot */}
          <Reveal
            as="h2"
            className="mt-5 whitespace-nowrap font-display font-extrabold uppercase leading-[1.05] tracking-tight text-white"
            style={{ fontSize: "clamp(18px, 2.25vw, 38px)" }}
          >
            {impact.title}
          </Reveal>

          {/* ✅ subheading EXACT like screenshot */}
          <Reveal
            as="p"
            className="mt-4 max-w-[980px] text-[14px] leading-[1.8] text-white/80 sm:text-[15px] md:text-[16px] md:leading-[1.85]"
          >
            {impact.subtitle}
          </Reveal>

          <Reveal className="mt-6">
            <Button
              href={impact.cta.href}
              variant="primary"
              className="h-11 rounded-full bg-linear-to-r from-fuchsia-600 to-sky-500 px-6 text-sm font-extrabold text-white shadow-[0_18px_55px_rgba(0,0,0,0.55)] hover:brightness-110"
            >
              {impact.cta.label}
            </Button>
          </Reveal>
        </Stagger>

        <Reveal className="mt-10" variant={scaleIn}>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/35 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur">
            <div className="relative h-55 w-full sm:h-70 md:h-85 lg:h-120">
              <Image
                src={impact.image.src}
                alt={impact.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_30%_0%,rgba(255,255,255,0.10),transparent_55%)]" />
            </div>
          </div>
        </Reveal>

        <Stagger className="mt-8 grid gap-6 md:grid-cols-3">
          {impact.cards.map((c) => (
            <Reveal key={c.title}>
              <HoverLift>
                <ImpactCard icon={c.icon} title={c.title} desc={c.desc} />
              </HoverLift>
            </Reveal>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}