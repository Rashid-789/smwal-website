import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
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

        <Reveal className="mt-10 flex flex-col items-center text-center">
          <p className="mb-5 max-w-3xl text-[18px] font-medium leading-[1.45] tracking-[0] text-white/85">
            {team.cta.intro}
          </p>
          <div className="flex justify-center">
            <Button
              href={team.cta.href}
              variant="primary"
              target="_blank"
              rel="noreferrer"
              className="h-14 min-w-[240px] rounded-full bg-linear-to-r from-pink-800 to-blue-700 px-10 text-[20px] font-extrabold text-white shadow-[0_20px_60px_rgba(0,0,0,0.55)] hover:brightness-110"
            >
              {team.cta.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
