import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { JOIN } from "../content/join.content";
import StoreBadges from "@/features/home/components/StoreBadges";
import { Reveal, Stagger } from "@/shared/motion/Motion";
import { scaleIn } from "@/shared/motion/variants";

export default function JoinHero() {
  const { hero } = JOIN;

  return (
    <section className="relative overflow-hidden">
      {/* background glows (like screenshot vibe) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-130 w-130 rounded-full bg-purple-600/25 blur-[130px]" />
        <div className="absolute -right-70 -top-40 h-160 w-160 rounded-full bg-indigo-600/20 blur-[150px]" />
        <div className="absolute left-1/2 -bottom-80 h-190 w-190 -translate-x-1/2 rounded-full bg-sky-500/10 blur-[170px]" />
      </div>

      {/* hero media */}
      <Reveal variant={scaleIn} className="relative">
        <div className="relative h-70 w-full md:h-220">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
        </div>
      </Reveal>

      {/* content */}
      <div className="absolute inset-0 flex items-end">
        <Container className="pb-8 md:pb-100">
          <Stagger className="max-w-2xl">
            <Reveal
              as="h1"
              className="text-3xl font-display font-extrabold uppercase tracking-tight text-white md:text-5xl"
            >
              {hero.title}
            </Reveal>

            <Reveal
              as="p"
              className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 md:text-base"
            >
              {hero.subtitle}
            </Reveal>

            <Reveal className="mt-8 flex flex-wrap gap-3">
              <Button
                href={hero.primary.href}
                variant="primary"
                className="h-11 rounded-full bg-linear-to-r from-fuchsia-600 to-sky-500 px-6 text-sm font-extrabold text-white shadow-[0_18px_55px_rgba(0,0,0,0.55)] hover:brightness-110"
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

            <Reveal className="mt-8">
              <StoreBadges
                googlePlayHref={hero.stores.googlePlay.href}
                appStoreHref={hero.stores.appStore.href}
              />
            </Reveal>
          </Stagger>
        </Container>
      </div>
    </section>
  );
}
