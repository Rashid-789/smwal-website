import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Reveal, Stagger } from "@/shared/motion/Motion";
import { scaleIn } from "@/shared/motion/variants";
import { HOME_HERO } from "../content/home.content";
import StoreBadges from "../components/StoreBadges";
import PolaroidStack from "../components/PolaroidStack";
import { SECTION_HEADING_FONT_CLASS } from "@/lib/sectionTypography";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-14 md:pt-23 md:pb-20">

      <Container>
        <div className="mt-9 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left content */}
          <Stagger className="max-w-2xl">
            <Reveal
              as="h1"
              className={`${SECTION_HEADING_FONT_CLASS} flex flex-col gap-y-3 text-[60px] font-normal uppercase leading-[0.92] tracking-[0] text-white`}
            >
              {HOME_HERO.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </Reveal>

            <Reveal
              as="p"
              className="mt-7 flex flex-col gap-y-2 text-[20px] font-medium leading-[1.08] tracking-[0] text-white"
              style={{ fontFamily: "'General Sans', var(--font-sans)" }}
            >
              <span>
                SMWAL is more than just a platform; it&apos;s a mission to
                foster
              </span>
              <span>
                intentional relationships through guided matchmaking,
                mentorship,
              </span>
              <span>and faith-aligned growth.</span>
            </Reveal>

            <Reveal className="mt-8 flex flex-wrap gap-3">
              <Button
                href={HOME_HERO.ctas.primary.href}
                variant="primary"
                className="h-12 rounded-full bg-linear-to-r from-pink-800 to-blue-700 px-7 text-sm font-extrabold text-white shadow-[0_18px_55px_rgba(0,0,0,0.55)] hover:brightness-110"
              >
                {HOME_HERO.ctas.primary.label}
              </Button>

              <Button
                href={HOME_HERO.ctas.secondary.href}
                variant="secondary"
                className="h-12 rounded-full border border-white/15 bg-white/5 px-7 text-sm font-extrabold text-white/90 hover:bg-white/10"
              >
                {HOME_HERO.ctas.secondary.label}
              </Button>
            </Reveal>

            <Reveal className="mt-7">
              <StoreBadges
                googlePlayHref={HOME_HERO.stores.googlePlay.href}
                appStoreHref={HOME_HERO.stores.appStore.href}
              />
            </Reveal>
          </Stagger>

          {/* Right polaroids */}
          <Reveal className="lg:justify-self-end" variant={scaleIn}>
            <PolaroidStack />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
