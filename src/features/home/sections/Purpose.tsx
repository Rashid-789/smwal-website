import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { HoverLift, Reveal, Stagger } from "@/shared/motion/Motion";
import { HOME_PURPOSE } from "../content/home.content";
import PurposeCard from "../components/PurposeCard";

export default function Purpose() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        {/* ✅ give the text area more room so it stays in one line like Figma */}
        <Stagger className="max-w-full lg:max-w-[1100px]">
          <Reveal
            as="span"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80"
          >
            {HOME_PURPOSE.pill}
          </Reveal>

          {/* ✅ straight inline-flex heading like Figma */}
          <Reveal
            as="h2"
            className="mt-5 inline-flex flex-wrap items-baseline font-display font-extrabold uppercase leading-[1.1] tracking-tight text-white text-[28px] md:text-[44px] lg:text-[37px] lg:whitespace-nowrap"
          >
            {HOME_PURPOSE.title}
          </Reveal>

          {/* ✅ subtitle/paragraph style like screenshot (smaller + controlled width) */}
          <Reveal
            as="p"
            className="mt-3 max-w-[640px] text-[13px] leading-[1.65] text-white/70 sm:text-[14px] md:text-[15px]"
          >
            {HOME_PURPOSE.subtitle}
          </Reveal>

          <Reveal className="mt-6">
            <Button href={HOME_PURPOSE.cta.href} variant="primary" className="h-11 px-6">
              {HOME_PURPOSE.cta.label}
            </Button>
          </Reveal>
        </Stagger>

        <Stagger className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {HOME_PURPOSE.cards.map((card) => (
            <Reveal key={card.title}>
              <HoverLift>
                <PurposeCard {...card} />
              </HoverLift>
            </Reveal>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}