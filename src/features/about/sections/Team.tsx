import Container from "@/components/ui/Container";
import { ABOUT } from "../content/about.content";
import TeamCard from "../components/TeamCard";
import { HoverLift, Reveal, Stagger } from "@/shared/motion/Motion";
import { SECTION_HEADING_CLASS } from "@/lib/sectionTypography";

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
      </Container>
    </section>
  );
}
