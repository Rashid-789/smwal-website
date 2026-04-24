import type { CSSProperties } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Reveal, Stagger } from "@/shared/motion/Motion";
import { HOME_HANGOUTS } from "../content/home.content";
import HangoutEventCardFigma from "../components/HangoutEventCardFigma";
import { SECTION_HEADING_CLASS } from "@/lib/sectionTypography";

const marqueeStyle: CSSProperties &
  Record<"--marquee-gap" | "--marquee-shift" | "--marquee-duration", string> = {
  "--marquee-gap": "24px",
  "--marquee-shift": "50%",
  "--marquee-duration": "26s",
};

export default function Hangouts() {
  const events = HOME_HANGOUTS.events;

  // duplicate list to create seamless loop
  const loop = [...events, ...events];

  return (
    <section
      id="events"
      className="relative overflow-hidden pt-10 pb-14 md:pt-14 md:pb-20"
    >

      <Container>
        {/* top text */}
        <Stagger className="max-w-3xl lg:max-w-[1100px]">
          {/* <Reveal
            as="span"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80"
          >
            {HOME_HANGOUTS.pill}
          </Reveal> */}

          <Reveal
            as="h2"
            className={`mt-5 ${SECTION_HEADING_CLASS}`}
          >
            {HOME_HANGOUTS.title}
          </Reveal>

          <Reveal
            as="p"
            className="mt-5 max-w-[680px] text-[20px] font-medium leading-[1] tracking-[0] text-white"
            style={{ fontFamily: "'General Sans', var(--font-sans)" }}
          >
            <span className="block md:whitespace-nowrap">
              Join ministry-led hangouts, teaching nights, and guided community gatherings
            </span>
            <span className="block md:whitespace-nowrap mt-2">
              designed to build meaningful connections in a respectful and faith-centered
            </span>
            <span className="block mt-2">environment.</span>
          </Reveal>

          <Reveal className="mt-6">
            <Button
              href="/events"
              variant="primary"
              className="h-11 px-6 !text-[#FFAA00]"
            >
              {HOME_HANGOUTS.cta.label}
            </Button>
          </Reveal>
        </Stagger>

        {/* ✅ Infinite scroll row (all screens) */}
        <div className="relative mt-10">
          {/* edge fades like figma */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-black to-transparent" />

          {/* marquee */}
          <div
            className="marquee"
            style={marqueeStyle}
          >
            <div className="marquee__track">
              {loop.map((e, idx) => (
                <HangoutEventCardFigma
                  key={`${e.title}-${e.time}-${e.place}-${idx}`}
                  image={e.image}
                  alt={e.alt}
                  title={e.title}
                  price={e.price}
                  time={e.time}
                  place={e.place}
                  className="min-w-[260px] max-w-[260px] md:min-w-[280px] md:max-w-[280px]"
                  // href={e.slug ? `/events/${e.slug}` : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
