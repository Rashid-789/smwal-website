import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { HoverLift, Reveal, Stagger } from "@/shared/motion/Motion";
import { HOME_PURPOSE } from "../content/home.content";
import PurposeCard from "../components/PurposeCard";
import { SECTION_HEADING_FONT_CLASS } from "@/lib/sectionTypography";

export default function Purpose() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20">

      <Container>
        <Stagger className="max-w-full lg:max-w-275">
          <Reveal
            as="span"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80"
          >
            {HOME_PURPOSE.pill}
          </Reveal>

          {/* <Reveal
            as="h2"
            className={`mt-5 ${SECTION_HEADING_FONT_CLASS} text-[48px] font-normal uppercase leading-[1] tracking-[0] text-white`}
          >
            {HOME_PURPOSE.title}
          </Reveal> */}

          {/* <Reveal
            as="p"
            className="mt-5 max-w-[1120px] text-[20px] font-medium leading-[1.35] tracking-[0] text-white"
            style={{ fontFamily: "'General Sans', var(--font-sans)" }}
          >
            <>
              We believe strong marriages don’t happen by chance — they are built
              with intention,
            </>
            <br />
            <>preparation, and the right support.</>
          </Reveal> */}

          {/* <Reveal className="mt-6">
            <Button
              href={HOME_PURPOSE.cta.href}
              variant="primary"
              className="h-11 px-6"
            >
              {HOME_PURPOSE.cta.label}
            </Button>
          </Reveal> */}
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
