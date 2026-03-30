import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Reveal, Stagger } from "@/shared/motion/Motion";
import { scaleIn } from "@/shared/motion/variants";
import { HOME_IMPACT } from "../content/home.content";
import Image from "next/image";
import StatItem from "../components/StatItem";
import { SECTION_HEADING_FONT_CLASS } from "@/lib/sectionTypography";

export default function CommunityImpact() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20">

      <Container>
        {/*wider on desktop so heading stays one line like Figma */}
        <Stagger className="max-w-3xl lg:max-w-300">
          <Reveal
            as="span"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80"
          >
            {HOME_IMPACT.pill}
          </Reveal>

          {/*  heading one-line on desktop */}
          {/* <Reveal
            as="h2"
            className={`mt-5 lg:whitespace-nowrap ${SECTION_HEADING_FONT_CLASS} text-[48px] font-normal leading-[1] tracking-[0] text-white`}
          >
            {HOME_IMPACT.title}
          </Reveal> */}

          {/* <Reveal
            as="p"
            className="mt-5 text-[20px] font-medium leading-[1.35] tracking-[0] text-white"
            style={{ fontFamily: "'General Sans', var(--font-sans)" }}
          >
            <span className="block">
              Every connection formed through SMWAL contributes to stronger families and a more
              connected
            </span>
            <span className="block">community rooted in shared values, faith, and purpose.</span>
          </Reveal> */}

          {/* <Reveal className="mt-6">
            <Button href={HOME_IMPACT.cta.href} variant="primary" className="h-11 px-6">
              {HOME_IMPACT.cta.label}
            </Button>
          </Reveal> */}
        </Stagger>

        {/* Image card */}
        <Reveal
          className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-black/35 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur"
          variant={scaleIn}
        >
          <div className="relative h-55 w-full sm:h-70 md:h-85 lg:h-130">
            <Image
              src={HOME_IMPACT.image.src}
              alt={HOME_IMPACT.image.alt}
              fill
              priority={false}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Stats row */}
        <Stagger className="mt-15 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_IMPACT.stats.map((s) => (
            <Reveal key={s.label}>
              <StatItem value={s.value} label={s.label} />
            </Reveal>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
