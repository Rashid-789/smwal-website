import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Reveal, Stagger } from "@/shared/motion/Motion";
import Image from "next/image";
import { HOME_CTA_BANNER } from "../content/home.content";

export default function CtaBanner() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/35 shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
          {/* background image */}
          <div className="absolute inset-0">
            <Image
              src={HOME_CTA_BANNER.image.src}
              alt={HOME_CTA_BANNER.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
              priority={false}
            />
            {/* dark overlay like screenshot */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* content */}
          <Stagger className="relative px-6 py-14 text-center md:px-10 md:py-16">
            <Reveal
              as="h3"
              className="text-2xl font-display font-extrabold uppercase tracking-tight text-white md:text-3xl"
            >
              {HOME_CTA_BANNER.title}
            </Reveal>

            <Reveal
              as="p"
              className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base"
            >
              {HOME_CTA_BANNER.subtitle}
            </Reveal>

            <Reveal className="mt-6 flex flex-wrap justify-center gap-3">
              <Button
                href={HOME_CTA_BANNER.primary.href}
                variant="primary"
                className="h-11 px-7"
              >
                {HOME_CTA_BANNER.primary.label}
              </Button>

              {/* white pill button like screenshot */}
              <Button
                href={HOME_CTA_BANNER.secondary.href}
                variant="secondary"
                className="h-11 bg-white px-7 text-black hover:bg-white/90"
              >
                {HOME_CTA_BANNER.secondary.label}
              </Button>
            </Reveal>
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
