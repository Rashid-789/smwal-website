import Container from "@/components/ui/Container";
import { JOIN } from "../content/join.content";
import StatItem from "@/features/home/components/StatItem";
import { Reveal, Stagger } from "@/shared/motion/Motion";

export default function JoinStats() {
  return (
    <section className="relative overflow-hidden py-12 md:py-16">

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
