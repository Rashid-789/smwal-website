import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { HOME_PURPOSE } from "../content/home.content";
import PurposeCard from "../components/PurposeCard";

export default function Purpose() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80">
            {HOME_PURPOSE.pill}
          </span>

          <h2 className="mt-5 text-[28px] font-display font-extrabold uppercase leading-[1.15] tracking-tight text-white md:text-[38px]">
            {HOME_PURPOSE.title}
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
            {HOME_PURPOSE.subtitle}
          </p>

          <div className="mt-6">
            <Button href={HOME_PURPOSE.cta.href} variant="primary" className="h-11 px-6">
              {HOME_PURPOSE.cta.label}
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {HOME_PURPOSE.cards.map((card) => (
            <PurposeCard key={card.title} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
}
