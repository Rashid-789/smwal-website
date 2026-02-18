import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { ABOUT } from "../content/about.content";

export default function AboutHero() {
  const { hero } = ABOUT;

  return (
    <section className="relative">
      <div className="relative h-70 w-full md:h-90">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* overlays for readability (like screenshot) */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/35 to-transparent" />
      </div>

      <div className="absolute inset-0 flex items-end">
        <Container className="pb-8 md:pb-12">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-display font-extrabold uppercase tracking-tight text-white md:text-5xl">
              {hero.title}
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
              {hero.subtitle}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button href={hero.primary.href} variant="primary" className="h-11 px-6">
                {hero.primary.label}
              </Button>
              <Button href={hero.secondary.href} variant="secondary" className="h-11 px-6">
                {hero.secondary.label}
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
