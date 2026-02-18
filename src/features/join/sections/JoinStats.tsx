import Container from "@/components/ui/Container";
import { JOIN } from "../content/join.content";
import StatItem from "@/features/home/components/StatItem"; // reuse existing

export default function JoinStats() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {JOIN.stats.map((s) => (
            <StatItem key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}
