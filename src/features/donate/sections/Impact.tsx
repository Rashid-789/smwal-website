import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { DONATE } from "../content/donate.content";
import ImpactCard from "../components/ImpactCard";

export default function Impact() {
  const { impact } = DONATE;

  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80">
            {impact.pill}
          </span>

          <h2 className="mt-5 text-[26px] font-display font-extrabold uppercase leading-[1.15] tracking-tight text-white md:text-[38px]">
            {impact.title}
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
            {impact.subtitle}
          </p>

          <div className="mt-6">
            <Button href={impact.cta.href} variant="primary" className="h-11 px-6">
              {impact.cta.label}
            </Button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-black/35 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur">
          <div className="relative h-55 w-full sm:h-70 md:h-85 lg:h-95">
            <Image
              src={impact.image.src}
              alt={impact.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {impact.cards.map((c) => (
            <ImpactCard key={c.title} icon={c.icon} title={c.title} desc={c.desc} />
          ))}
        </div>
      </Container>
    </section>
  );
}
