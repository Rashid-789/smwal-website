import type { CSSProperties } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CenteredCtaButton from "@/components/ui/CenteredCtaButton";
import { Reveal, Stagger } from "@/shared/motion/Motion";
import { HOME_GROW_WITH_PURPOSE } from "../content/home.content";
// import HangoutEventCardFigma from "../components/HangoutEventCardFigma";
import HomeGrowWithPurposeCard from "../components/HomeGrowWithPurpose";
import { SECTION_HEADING_CLASS } from "@/lib/sectionTypography";

const marqueeStyle: CSSProperties &
  Record<"--marquee-gap" | "--marquee-shift" | "--marquee-duration", string> = {
  "--marquee-gap": "24px",
  "--marquee-shift": "50%",
  "--marquee-duration": "26s",
};

export default function HomeGrowWithPurpose() {
  const events = HOME_GROW_WITH_PURPOSE.events;

  // duplicate list to create seamless loop
  const loop = [...events];

  return (
    <section
      id="explore"
      className="relative overflow-hidden pt-10 pb-10 md:pt-14 md:pb-12"
    >
      <Container>
        {/* top text */}
        <Stagger className="max-w-3xl lg:max-w-[1100px]">
          {/* <Reveal
            as="span"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80"
          >
            {HOME_GROW_WITH_PURPOSE.pill}
          </Reveal> */}

          <Reveal as="h2" className={`mt-5 ${SECTION_HEADING_CLASS}`}>
            {HOME_GROW_WITH_PURPOSE.pill}
          </Reveal>

          <Reveal
            as="p"
            className="mt-5 max-w-[680px] text-[20px] font-medium leading-[1] tracking-[0] text-white"
            style={{ fontFamily: "'General Sans', var(--font-sans)" }}
          >
            {/* Access structured lessons designed to guide you toward meaningful and intentional relationships. */}
            <span className="block md:whitespace-nowrap">
              Access structured lessons designed to guide you toward meaningful
              and intentional{" "}
            </span>
            <span className="block md:whitespace-nowrap mt-2">
              relationships.
            </span>
            {/* <span className="block mt-2">environment.</span> */}
          </Reveal>

          <Reveal className="mt-6">
            <Button
              href="/learn"
              variant="primary"
              className="h-11 px-6 !text-[#FFAA00]"
            >
              {HOME_GROW_WITH_PURPOSE.cta.label}
            </Button>
          </Reveal>
        </Stagger>

        {/* ✅ Infinite scroll row (all screens) */}
        <div className="relative mt-10">
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 " />

          {/* marquee */}
          <div className="marquee" style={marqueeStyle}>
            <div className="flex gap-6">
              {loop.map((e, idx) => (
                <HomeGrowWithPurposeCard
                  key={`${e.title}-${e.time}-${idx}`}
                  image={e.image}
                  alt={e.alt}
                  title={e.title}
                  summary={e.summary}
                  time={e.time}
                  type={e.type}
                  className="min-w-[380px] max-w-[380px] md:min-w-[380px] md:max-w-[380px]"
                  href={e.slug ? `/learn/${e.slug}` : undefined}
                />
              ))}
            </div>
          </div>
        </div>

      </Container>

      <CenteredCtaButton
        label={HOME_GROW_WITH_PURPOSE.bookCta.label}
        href={HOME_GROW_WITH_PURPOSE.bookCta.href}
        className="h-14 min-w-[220px] px-9 text-[19px]"
      />
    </section>
  );
}
