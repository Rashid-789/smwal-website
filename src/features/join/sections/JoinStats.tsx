import Container from "@/components/ui/Container";
import { JOIN } from "../content/join.content";
import StatItem from "@/features/home/components/StatItem";
import { Reveal, Stagger } from "@/shared/motion/Motion";

export default function JoinStats() {
  return (
    <section className="relative py-12 md:py-16">
      {/* soft glow band */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-20 h-105 w-105 rounded-full bg-purple-600/18 blur-[130px]" />
        <div className="absolute -right-40 -bottom-30 h-130 w-130 rounded-full bg-indigo-600/14 blur-[150px]" />
      </div>

      <Container>
        <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {JOIN.stats.map((s) => (
            <Reveal key={s.label}>
              <StatItem value={s.value} label={s.label} />
            </Reveal>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
