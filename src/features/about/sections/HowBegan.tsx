import Container from "@/components/ui/Container";
import Image from "next/image";
import { ABOUT } from "../content/about.content";

export default function HowBegan() {
  const { began } = ABOUT;

  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="rounded-2xl border border-white/10 bg-black/35 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur md:p-8">
          <h2 className="text-2xl font-display font-extrabold uppercase tracking-tight text-white md:text-3xl">
            {began.title}
          </h2>

          <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-white/70 md:text-base">
            {began.body}
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black">
            <div className="relative h-60 w-full sm:h-75 md:h-90">
              <Image
                src={began.image.src}
                alt={began.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
