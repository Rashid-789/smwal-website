import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { HOME_JOURNEY } from "../content/home.content";
import JourneyStep from "../components/JourneyStep";

export default function Journey() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80">
            {HOME_JOURNEY.pill}
          </span>

          <h2 className="mt-5 text-[28px] font-display font-extrabold uppercase leading-[1.15] tracking-tight text-white md:text-[40px]">
            {HOME_JOURNEY.title}
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
            {HOME_JOURNEY.subtitle}
          </p>

          <div className="mt-6">
            <Button href={HOME_JOURNEY.cta.href} variant="primary" className="h-11 px-6">
              {HOME_JOURNEY.cta.label}
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {HOME_JOURNEY.steps.map((s) => (
            <JourneyStep key={s.number} {...s} />
          ))}
        </div>
      </Container>
    </section>
  );
}
