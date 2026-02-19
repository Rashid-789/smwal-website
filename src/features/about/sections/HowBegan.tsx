import Container from "@/components/ui/Container";
import Image from "next/image";
import { ABOUT } from "../content/about.content";
import { Reveal, Stagger } from "@/shared/motion/Motion";
import { scaleIn } from "@/shared/motion/variants";

export default function HowBegan() {
  const { began } = ABOUT;

  return (
    <section className="relative py-14 md:py-25">
      {/* section glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-10 h-105 w-105 rounded-full bg-purple-600/18 blur-[130px]" />
        <div className="absolute -right-40 bottom-0 h-130 w-130 rounded-full bg-sky-500/10 blur-[140px]" />
      </div>

      <Container>
        <Reveal variant={scaleIn}>
          <div className="rounded-2xl border border-white/10 bg-black/35 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur md:p-8">
            <Stagger>
              <Reveal
                as="h2"
                className="text-2xl font-display font-extrabold uppercase tracking-tight text-white md:text-3xl"
              >
                {began.title}
              </Reveal>

              <Reveal
                as="p"
                className="mt-4 whitespace-pre-line text-sm leading-relaxed text-white/70 md:text-base"
              >
                {began.body}
              </Reveal>

              <Reveal className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black">
                <div className="relative h-60 w-full sm:h-75 md:h-130">
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
