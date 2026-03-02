
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Reveal, Stagger } from "@/shared/motion/Motion";
import { HOME_JOURNEY } from "../content/home.content";
import JourneyStep from "../components/JourneyStep";

export default function Journey() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        {/* ✅ wider on desktop so subtitle can stay 1 line like Figma */}
        <Stagger className="max-w-3xl lg:max-w-[1100px]">
          <Reveal
            as="span"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80"
          >
            {HOME_JOURNEY.pill}
          </Reveal>

          <Reveal
            as="h2"
            className="mt-5 text-[24px] font-display font-extrabold uppercase leading-[1.1] tracking-tight text-white sm:text-[26px] md:text-[37px]"
          >
            {HOME_JOURNEY.title}
          </Reveal>

          {/* ✅ subtitle single-line on desktop */}
          <Reveal
            as="p"
            className="mt-3 text-[13px] leading-[1.65] text-white/70 sm:text-[14px] md:text-[15px]
                       lg:whitespace-nowrap lg:max-w-none"
          >
            {HOME_JOURNEY.subtitle}
          </Reveal>

          <Reveal className="mt-6">
            <Button href={HOME_JOURNEY.cta.href} variant="primary" className="h-11 px-6">
              {HOME_JOURNEY.cta.label}
            </Button>
          </Reveal>
        </Stagger>

        <Stagger className="mt-10 grid gap-10 md:grid-cols-3">
          {HOME_JOURNEY.steps.map((s) => (
            <Reveal key={s.number}>
              <JourneyStep {...s} />
            </Reveal>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}