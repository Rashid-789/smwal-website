import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { JOIN } from "../content/join.content";
import JoinExperienceCard from "../components/JoinExperienceCard";

export default function JoinExperience() {
  const { experience } = JOIN;

  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          {/* left image */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/35 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur">
            <div className="relative h-80 w-full sm:h-95 md:h-110 lg:h-130">
              <Image
                src={experience.image.src}
                alt={experience.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            </div>
          </div>

          {/* right content */}
          <div>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80">
              {experience.pill}
            </span>

            <h2 className="mt-5 whitespace-pre-line text-[26px] font-display font-extrabold uppercase leading-[1.15] tracking-tight text-white md:text-[38px]">
              {experience.title}
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
              {experience.subtitle}
            </p>

            <div className="mt-6">
              <Button href={experience.cta.href} variant="primary" className="h-11 px-6">
                {experience.cta.label}
              </Button>
            </div>

            <div className="mt-8 space-y-4">
              {experience.items.map((it) => (
                <JoinExperienceCard key={it.n} n={it.n} title={it.title} desc={it.desc} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
