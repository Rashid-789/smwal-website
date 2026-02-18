import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { HOME_EXPERIENCE } from "../content/home.content";
import ExperienceFeatureCard from "../components/ExperienceFeatureCard";

export default function Experience() {
  const isSvgImage = HOME_EXPERIENCE.image.src.toLowerCase().endsWith(".svg");

  return (
    <section className="relative py-14 md:py-20">
      {/* background glow like screenshot */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-32 h-105 w-105 rounded-full bg-purple-600/25 blur-[120px]" />
        <div className="absolute left-1/2 -bottom-60 h-130 w-130 -translate-x-1/2 rounded-full bg-indigo-600/25 blur-[130px]" />
        <div className="absolute -right-45 top-20 h-105 w-105 rounded-full bg-sky-500/10 blur-[130px]" />
      </div>

      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_560px] xl:grid-cols-[1fr_640px]">
          {/* Left */}
          <div className="max-w-xl">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80">
              {HOME_EXPERIENCE.pill}
            </span>

            <h2 className="mt-5 text-[28px] font-display font-extrabold uppercase leading-[1.08] tracking-tight text-white md:text-[44px]">
              <span className="block">A SAFE AND GUIDED</span>
              <span className="block">EXPERIENCE</span>
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
              {HOME_EXPERIENCE.subtitle}
            </p>

            <div className="mt-6">
              {/* force gradient pill like screenshot */}
              <Button
                href={HOME_EXPERIENCE.cta.href}
                variant="primary"
                className="h-11 rounded-full bg-linear-to-r from-fuchsia-600 to-sky-500 px-6 text-sm font-extrabold text-white shadow-[0_18px_55px_rgba(0,0,0,0.55)] hover:brightness-110"
              >
                {HOME_EXPERIENCE.cta.label}
              </Button>
            </div>

            <div className="mt-10 space-y-4">
              {HOME_EXPERIENCE.features.map((f) => (
                <ExperienceFeatureCard
                  key={f.title}
                  icon={f.icon}
                  title={f.title}
                  description={f.description}
                />
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="w-full lg:justify-self-end">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/30 p-1 shadow-[0_30px_90px_rgba(0,0,0,0.65)] backdrop-blur">
              <div className="relative overflow-hidden rounded-3xl">
                <div className="relative aspect-3/4 w-full">
                  <Image
                    src={HOME_EXPERIENCE.image.src}
                    alt={HOME_EXPERIENCE.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 640px"
                    unoptimized={isSvgImage}
                    className="object-cover"
                    priority={false}
                  />
                </div>

                {/* overlays like screenshot */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_30%_0%,rgba(255,255,255,0.10),transparent_55%)]" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
