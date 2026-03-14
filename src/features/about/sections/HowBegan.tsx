import Container from "@/components/ui/Container";
import Image from "next/image";
import { ABOUT } from "../content/about.content";
import { Reveal, Stagger } from "@/shared/motion/Motion";
import { scaleIn } from "@/shared/motion/variants";
import { SECTION_HEADING_CLASS } from "@/lib/sectionTypography";

export default function HowBegan() {
  const { began } = ABOUT;

  return (
    <section className="relative overflow-hidden py-14 md:py-25">

      <Container>
        <Reveal variant={scaleIn}>
          <div className="rounded-2xl border border-white/10 bg-black/35 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur md:p-8">
            <Stagger>
              <Reveal
                as="h2"
                className={SECTION_HEADING_CLASS}
              >
                {began.title}
              </Reveal>

              <Reveal
                as="p"
                className="mt-4 text-[18px] leading-[1.45] text-white/70"
              >
                <span className="block md:whitespace-nowrap">
                  SMWAL was created with a simple but powerful vision - to help individuals build
                  meaningful and lasting marriages through guidance, 
                </span>
                <span className="block md:whitespace-nowrap"> preparation, and shared values.</span>
                <span className="block md:whitespace-nowrap">
                  In a world of fast and often superficial connections, we saw the need for a
                  structured and intentional approach to marriage.One that 
                </span>
                <span className="block md:whitespace-nowrap">
                  supports personal growth, mentorship , , and compatibility before commitment. Today, SMWAL continues
                  to grow as a trusted space 
                </span>
                <span className="block md:whitespace-nowrap">
                  for those seeking meaningful relationships and strong foundations for lifelong partnership.
                </span>
              </Reveal>

              <Reveal className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black">
                <div className="relative h-60 w-full sm:h-75 md:h-150">
                  <Image
                    src={began.image.src}
                    alt={began.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1200px"
                    className="object-center"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_30%_0%,rgba(255,255,255,0.12),transparent_55%)]" />
                </div>
              </Reveal>
            </Stagger>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
