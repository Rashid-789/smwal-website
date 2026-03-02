import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Reveal, Stagger } from "@/shared/motion/Motion";
import { scaleIn } from "@/shared/motion/variants";
import { HOME_HERO } from "../content/home.content";
import StoreBadges from "../components/StoreBadges";
import PolaroidStack from "../components/PolaroidStack";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-14 md:pt-23 md:pb-20">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-130 w-130 rounded-full bg-purple-600/30 blur-[130px]" />
        <div className="absolute -right-65 -top-35 h-155 w-155 rounded-full bg-indigo-600/25 blur-[140px]" />
        <div className="absolute left-1/2 -bottom-80 h-180 w-180 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[160px]" />
      </div>

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] mt-9">
          {/* Left content */}
          <Stagger className="max-w-2xl">
            <Reveal
              as="h1"
              className="text-[36px] font-bold uppercase leading-[1.05] tracking-tight text-white md:text-[52px] lg:text-[45px]"
            >
              {HOME_HERO.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </Reveal>

            <Reveal
              as="p"
              className="mt-4 max-w-[680px] text-[14px] leading-[1.65] text-white/80 sm:text-[15px] md:text-[18px] md:leading-[1.7]"
            >
              {HOME_HERO.subtitle}
            </Reveal>

            <Reveal className="mt-8 flex flex-wrap gap-3">
              <Button
                href={HOME_HERO.ctas.primary.href}
                variant="primary"
                className="h-11 rounded-full bg-linear-to-r from-fuchsia-600 to-sky-500 px-7 text-sm font-extrabold text-white shadow-[0_18px_55px_rgba(0,0,0,0.55)] hover:brightness-110"
              >
                {HOME_HERO.ctas.primary.label}
              </Button>

              <Button
                href={HOME_HERO.ctas.secondary.href}
                variant="secondary"
                className="h-11 rounded-full border border-white/15 bg-white/5 px-7 text-sm font-extrabold text-white/90 hover:bg-white/10"
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

          {/* Right polaroids (✅ only 3in1.svg via PolaroidStack) */}
          <Reveal className="lg:justify-self-end" variant={scaleIn}>
            <PolaroidStack />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}