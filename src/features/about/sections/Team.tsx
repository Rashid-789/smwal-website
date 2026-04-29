import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ABOUT } from "../content/about.content";
import TeamCard from "../components/TeamCard";
import { HoverLift, Reveal, Stagger } from "@/shared/motion/Motion";
import {
  SECTION_HEADING_CLASS,
  SECTION_HEADING_FONT_CLASS,
} from "@/lib/sectionTypography";

export default function Team() {
  const { team } = ABOUT;

  return (
    <section className="relative overflow-hidden pb-10 md:pb-16">

      <Container>
        <Stagger>
          <Reveal
            as="h2"
            className={SECTION_HEADING_CLASS}
          >
            {team.title}
          </Reveal>

          <Reveal
            as="p"
            className="mt-4 max-w-none text-[18px] font-medium leading-[1.2] tracking-[0] text-white/90"
            style={{ fontFamily: "'General Sans', var(--font-sans)" }}
          >
            <span className="block md:whitespace-nowrap">
              SMWAL is built by a dedicated team committed to strengthening marriages and
              supporting individuals on their journey toward meaningful
            </span>
            <span className="mt-1 block">partnerships.</span>
          </Reveal>
        </Stagger>

        <Stagger className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.members.map((m) => (
            <Reveal key={m.email}>
              <HoverLift>
                <TeamCard {...m} />
              </HoverLift>
            </Reveal>
          ))}
        </Stagger>

        <section className="mt-10 flex flex-col items-center justify-center gap-y-6 py-10 text-center md:mt-12 md:gap-y-7 md:py-12 lg:mt-14 lg:py-14">
          <p
            className={`mx-auto max-w-5xl text-[22px] font-normal leading-[1.15] tracking-[0] text-white/85 sm:text-[28px] md:text-[34px] lg:text-[38px] ${SECTION_HEADING_FONT_CLASS}`}
          >
            {team.cta.intro}
          </p>
          <Reveal>
            <Button
              href={team.cta.href}
              variant="primary"
              target="_blank"
              rel="noreferrer"
              className="h-14 min-w-[240px] rounded-full bg-linear-to-r from-pink-800 to-blue-700 px-10 text-[20px] font-extrabold text-white shadow-[0_20px_60px_rgba(0,0,0,0.55)] hover:brightness-110"
            >
              {team.cta.label}
            </Button>
          </Reveal>
        </section>
      </Container>
    </section>
  );
}
