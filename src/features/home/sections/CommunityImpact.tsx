import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { HOME_IMPACT } from "../content/home.content";
import Image from "next/image";
import StatItem from "../components/StatItem";

export default function CommunityImpact() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80">
            {HOME_IMPACT.pill}
          </span>

          <h2 className="mt-5 text-[26px] font-display font-extrabold uppercase leading-[1.15] tracking-tight text-white md:text-[36px]">
            {HOME_IMPACT.title}
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
            {HOME_IMPACT.subtitle}
          </p>

          <div className="mt-6">
            <Button href={HOME_IMPACT.cta.href} variant="primary" className="h-11 px-6">
              {HOME_IMPACT.cta.label}
            </Button>
          </div>
        </div>

        {/* Image card */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-black/35 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur">
          <div className="relative h-55 w-full sm:h-70 md:h-85 lg:h-95">
            <Image
              src={HOME_IMPACT.image.src}
              alt={HOME_IMPACT.image.alt}
              fill
              priority={false}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_IMPACT.stats.map((s) => (
            <StatItem key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}
