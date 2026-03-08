import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { ABOUT } from "../content/about.content";
import { Reveal, Stagger } from "@/shared/motion/Motion";
import { scaleIn } from "@/shared/motion/variants";
import { SECTION_HEADING_FONT_CLASS } from "@/lib/sectionTypography";

export default function AboutHero() {
  const { hero } = ABOUT;

  return (
    <section className="relative overflow-hidden">
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-130 w-130 rounded-full bg-purple-600/25 blur-[130px]" />
        <div className="absolute -right-70 -top-40 h-160 w-160 rounded-full bg-indigo-600/20 blur-[150px]" />
        <div className="absolute left-1/2 -bottom-70 h-180 w-180 -translate-x-1/2 rounded-full bg-sky-500/10 blur-[160px]" />
      </div>

      <Reveal variant={scaleIn} className="relative">
        <div className="relative w-full overflow-hidden h-65 sm:h-80 md:h-100 lg:h-115 xl:h-162.5">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_20%]"
          />

          {/* overlays like screenshot */}
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/35 to-transparent" />

          {/* text block */}
          <div className="absolute inset-0 flex items-center">
            <Container className="py-10 md:py-14">
              <Stagger className="max-w-2xl">
                <Reveal
                  as="h1"
                  className={`${SECTION_HEADING_FONT_CLASS} text-[56px] font-normal uppercase leading-[1] tracking-[0] text-white sm:text-[64px] md:text-[72px] lg:text-[65px]`}
                >
                  {hero.title}
                </Reveal>

                <Reveal
                  as="p"
                  className="mt-5 max-w-none text-[20px] font-medium leading-[1.2] tracking-[0] text-white"
                  style={{ fontFamily: "'General Sans', var(--font-sans)" }}
                >
                  <span className="block">
                    A mission-driven platform dedicated to helping individuals build
                  </span>
                  <span className="mt-1 block">
                    meaningful, guided, and faith-centered marriages through mentorship,
                  </span>
                  <span className="mt-1 block">education, and intentional connections.</span>
                </Reveal>

                <Reveal className="mt-5 flex flex-wrap gap-3">
                  <Button
                    href={hero.primary.href}
                    variant="primary"
                      className="h-12 rounded-full bg-linear-to-r from-pink-800 to-blue-700 px-7 text-sm font-extrabold text-white shadow-[0_18px_55px_rgba(0,0,0,0.55)] hover:brightness-110"
              >
                    {hero.primary.label}
                  </Button>

                  <Button
                    href={hero.secondary.href}
                    variant="secondary"
                    className="h-11 rounded-full border border-white/15 bg-white/5 px-6 text-sm font-extrabold text-white/90 hover:bg-white/10"
                  >
                    {hero.secondary.label}
                  </Button>
                </Reveal>
              </Stagger>
            </Container>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
