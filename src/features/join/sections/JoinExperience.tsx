import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { JOIN } from "../content/join.content";
import JoinExperienceCard from "../components/JoinExperienceCard";
import { HoverLift, Reveal, Stagger } from "@/shared/motion/Motion";
import { scaleIn } from "@/shared/motion/variants";

export default function JoinExperience() {
  const { experience } = JOIN;

  return (
    <section className="relative py-14 md:py-20">
      {/* background glow like screenshot */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-0 h-130 w-130 rounded-full bg-purple-600/22 blur-[140px]" />
        <div className="absolute -right-45 top-30 h-130 w-130 rounded-full bg-indigo-600/18 blur-[150px]" />
        <div className="absolute left-1/2 -bottom-80 h-180 w-180 -translate-x-1/2 rounded-full bg-sky-500/10 blur-[170px]" />
      </div>

      <Container>
        {/* ✅ pill at top of section (like screenshot) */}
        <Reveal
          as="span"
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80"
        >
          {experience.pill}
        </Reveal>

        <div className="mt-6 grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          {/* left image */}
          <Reveal variant={scaleIn}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/35 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur">
              <div className="relative h-50 w-full sm:h-85 md:h-110 lg:h-168">
                <Image
                  src={experience.image.src}
                  alt={experience.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />
              </div>
            </div>
          </Reveal>

          {/* right content */}
          <div>
            <Stagger>
              {/* ✅ heading EXACT 2 lines like image (uses your \n in content) */}
              <Reveal
                as="h3"
                className=" text-[20px] font-display uppercase font-semibold leading-[1.06] text-white md:text-[24px] lg:text-[29px]"
              >
                {experience.title.split("\n").map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </Reveal>

              <Reveal
                as="p"
                className="mt-4 max-w-xl text-[14px] leading-[1.7] text-white/70 md:text-[15px]"
              >
                {experience.subtitle}
              </Reveal>

              <Reveal className="mt-7">
                <Button
                  href={experience.cta.href}
                  variant="primary"
                  className="h-11 rounded-full bg-linear-to-r from-fuchsia-600 to-sky-500 px-6 text-sm font-extrabold text-white shadow-[0_18px_55px_rgba(0,0,0,0.55)] hover:brightness-110"
                >
                  {experience.cta.label}
                </Button>
              </Reveal>
            </Stagger>

            <Stagger className="mt-10 space-y-4">
              {experience.items.map((it) => (
                <Reveal key={it.n}>
                  <HoverLift>
                    <JoinExperienceCard n={it.n} title={it.title} desc={it.desc} />
                  </HoverLift>
                </Reveal>
              ))}
            </Stagger>
          </div>
        </div>
      </Container>
    </section>
  );
}