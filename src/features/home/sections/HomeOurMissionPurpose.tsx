import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import {OurMissionPurpose} from "../content/home.content";
import OurMissionPurposeCard from "../components/OurMissionPurposeCard";
import { HoverLift, Reveal, Stagger } from "@/shared/motion/Motion";
import { scaleIn } from "@/shared/motion/variants";
import { SECTION_HEADING_FONT_CLASS } from "@/lib/sectionTypography";

export default function HomeOurMissionPurpose() {
  

  return (
    <section className="relative overflow-hidden py-14 md:py-20">

      <Container>
        <Reveal
          as="span"
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80"
        >
          {OurMissionPurpose.pill}
        </Reveal>

        <div className="mt-6 grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <Reveal variant={scaleIn}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/35 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur">
              <div className="relative h-50 w-full sm:h-85 md:h-110 lg:h-168">
                <Image
                  src={OurMissionPurpose.image.src}
                  alt={OurMissionPurpose.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />
              </div>
            </div>
          </Reveal>

          <div>
            <Stagger>
              <Reveal
                as="h3"
                className={`${SECTION_HEADING_FONT_CLASS} flex flex-col gap-y-2 text-[45px] font-normal leading-none tracking-[0] text-white`}
              >
                {OurMissionPurpose.title.split("\n").map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </Reveal>

              <Reveal
                as="p"
                className="mt-5 max-w-[58ch] text-[18px] font-medium leading-[1] tracking-[0] text-white"
                style={{ fontFamily: "'General Sans', var(--font-sans)" }}
              >
                <span className="block">
                  SMWAL creates a safe, structured, mentorship-driven space for
                </span>
                <span className="mt-2 block">
                  individuals to grow, prepare, and build meaningful connections.
                </span>
              </Reveal>

              <Reveal className="mt-7">
                <Button
                  href={OurMissionPurpose.cta.href}
                  variant="primary"
                  className="h-12 rounded-full bg-linear-to-r from-pink-800 to-blue-700 px-7 text-sm font-extrabold text-white shadow-[0_18px_55px_rgba(0,0,0,0.55)] hover:brightness-110"
                >
                  {OurMissionPurpose.cta.label}
                </Button>
              </Reveal>
            </Stagger>

            <Stagger className="mt-6 space-y-2">
              {OurMissionPurpose.items.map((it) => (
                <Reveal key={it.n}>
                  <HoverLift>
                    <OurMissionPurposeCard
                      n={it.n}
                      title={it.title}
                      desc={it.desc}
                    />
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
