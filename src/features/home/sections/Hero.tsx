import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { HOME_HERO } from "../content/home.content";
import StoreBadges from "../components/StoreBadges";
import PolaroidStack from "../components/PolaroidStack";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-14 md:pt-14 md:pb-20">
      {/* Background glows (like screenshot) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-130 w-130 rounded-full bg-purple-600/30 blur-[130px]" />
        <div className="absolute -right-65 -top-35 h-155 w-155 rounded-full bg-indigo-600/25 blur-[140px]" />
        <div className="absolute left-1/2 -bottom-80 h-180 w-180 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[160px]" />
      </div>

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left content */}
          <div className="max-w-2xl">
            <h1 className="text-[36px] font-extrabold uppercase leading-[1.05] tracking-tight text-white md:text-[52px] lg:text-[62px]">
              {/* supports 2 lines or 4 lines (high approach) */}
              {HOME_HERO.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
              {HOME_HERO.subtitle}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {/* Primary = gradient pill (like screenshot) */}
              <Button
                href={HOME_HERO.ctas.primary.href}
                variant="primary"
                className="h-11 rounded-full bg-linear-to-r from-fuchsia-600 to-sky-500 px-7 text-sm font-extrabold text-white shadow-[0_18px_55px_rgba(0,0,0,0.55)] hover:brightness-110"
              >
                {HOME_HERO.ctas.primary.label}
              </Button>

              {/* Secondary = dark pill */}
              <Button
                href={HOME_HERO.ctas.secondary.href}
                variant="secondary"
                className="h-11 rounded-full border border-white/15 bg-white/5 px-7 text-sm font-extrabold text-white/90 hover:bg-white/10"
              >
                {HOME_HERO.ctas.secondary.label}
              </Button>
            </div>

            <div className="mt-5">
              <StoreBadges
                googlePlayHref={HOME_HERO.stores.googlePlay.href}
                appStoreHref={HOME_HERO.stores.appStore.href}
              />
            </div>
          </div>

          {/* Right polaroids */}
          <div className="lg:justify-self-end">
            <PolaroidStack items={HOME_HERO.polaroids} />
          </div>
        </div>
      </Container>
    </section>
  );
}
