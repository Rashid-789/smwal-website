import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { DONATE } from "../content/donate.content";
import ImpactCard from "../components/ImpactCard";
import { HoverLift, Reveal, Stagger } from "@/shared/motion/Motion";
import { scaleIn } from "@/shared/motion/variants";
import { SECTION_HEADING_CLASS, SECTION_SUBHEADING_CLASS } from "@/lib/sectionTypography";

export default function Impact() {
  const { impact } = DONATE;

  return (
    <section className="relative overflow-hidden py-14 md:py-20">

      <Container>
        <Stagger className="max-w-310">
          <Reveal
            as="span"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80"
          >
            {impact.pill}
          </Reveal>
          <Reveal
            as="h2"
            className={`mt-5 lg:whitespace-nowrap ${SECTION_HEADING_CLASS}`}
          >
            {impact.title}
          </Reveal>
          <Reveal
            as="p"
            className={`mt-5 max-w-300 whitespace-pre-line text-[15px]! sm:text-[16px]! md:text-[18px]! ${SECTION_SUBHEADING_CLASS}`}
          >
            {impact.subtitle}
          </Reveal>

          {/* <Reveal className="mt-6">
            <Button
              href={impact.cta.href}
              variant="primary"
                       className="h-12 rounded-full bg-linear-to-r from-pink-800 to-blue-700 px-7 text-sm font-extrabold text-white shadow-[0_18px_55px_rgba(0,0,0,0.55)] hover:brightness-110"
              >
              {impact.cta.label}
            </Button>
          </Reveal> */}
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
