import Container from "@/components/ui/Container";
import { ABOUT } from "../content/about.content";
import TeamCard from "../components/TeamCard";

export default function Team() {
  const { team } = ABOUT;

  return (
    <section className="pb-10 md:pb-16">
      <Container>
        <h2 className="text-2xl font-display font-extrabold uppercase tracking-tight text-white md:text-3xl">
          {team.title}
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base">
          {team.subtitle}
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.members.map((m) => (
            <TeamCard key={m.email} {...m} />
          ))}
        </div>
      </Container>
    </section>
  );
}
