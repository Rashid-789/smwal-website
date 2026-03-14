import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { JOIN } from "../content/join.content";
import StoreBadges from "@/features/home/components/StoreBadges";
import { Reveal, Stagger } from "@/shared/motion/Motion";
import { scaleIn } from "@/shared/motion/variants";
import { SECTION_HEADING_FONT_CLASS, SECTION_SUBHEADING_CLASS } from "@/lib/sectionTypography";

export default function JoinHero() {
  const { hero } = JOIN;

  return (
    <section className="relative overflow-hidden">

      <Reveal variant={scaleIn} className="relative">
        {/* banner height like your screenshot */}
        <div className="relative w-full overflow-hidden h-80 sm:h-95 md:h-130 lg:h-150 xl:h-160">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_75%]"
          />

          {/* overlays (same readable look) */}
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />

          {/* text + actions */}
          <div className="absolute inset-0 flex items-center">
            <Container className="py-10 md:py-14">
              <Stagger className="max-w-2xl">
                <Reveal
                  as="h1"
                  className={`${SECTION_HEADING_FONT_CLASS} text-[65px] font-normal uppercase leading-[1] tracking-[0] text-white`}
                >
                  {hero.title}
                </Reveal>

                <Reveal
                  as="p"
                  className={`mt-5 max-w-xl ${SECTION_SUBHEADING_CLASS}`}
                >
                  {hero.subtitle}
                </Reveal>

                <Reveal className="mt-6 flex flex-wrap gap-3">
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

                <Reveal className="mt-5">
                  <StoreBadges
                    googlePlayHref={hero.stores.googlePlay.href}
                    appStoreHref={hero.stores.appStore.href}
                  />
                </Reveal>
              </Stagger>
            </Container>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
