import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Reveal, Stagger } from "@/shared/motion/Motion";
import Image from "next/image";
import { HOME_GROW_WITH_PURPOSE } from "../../home/content/home.content";
import { SECTION_HEADING_CLASS } from "@/lib/sectionTypography";
import StoreBadges from "@/features/home/components/StoreBadges";

export default function HomeGrowWithPurpose() {
  
  return (
    <section className="relative overflow-hidden py-12 md:py-16">

      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/35 shadow-[0_25px_80px_rgba(0,0,0,0.55)] lg:h-130">
          {/* background image */}
          <div className="absolute inset-0">
            <Image
              src={HOME_GROW_WITH_PURPOSE.image.src}
              alt={HOME_GROW_WITH_PURPOSE.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover object-[50%_15%]"
              priority={false}
            />
            {/* dark overlay like screenshot */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* content */}
          <Stagger className="relative px-6 py-10 text-center md:px-10 md:py-45">
            <Reveal
              as="h3"
              className={SECTION_HEADING_CLASS}
            >
              {HOME_GROW_WITH_PURPOSE.title}
            </Reveal>

            <Reveal
              as="p"
              className="mx-auto mt-5 max-w-2xl text-[14px] font-medium leading-[1.35] tracking-[0] text-white/90 sm:text-[15px] md:text-[17px]"
            >
              {HOME_GROW_WITH_PURPOSE.subtitle}
            </Reveal>

            <Reveal className="mt-6 flex flex-wrap justify-center gap-3">
              <Button
                href={HOME_GROW_WITH_PURPOSE.primary.href}
                variant="primary"
                className="h-14 px-8 text-base font-extrabold"
              >
                {HOME_GROW_WITH_PURPOSE.primary.label}
              </Button>

              {/* Support the Mission (text stays black on hover) */}
              <Button
                href={HOME_GROW_WITH_PURPOSE.secondary.href}
                variant="ghost"
                className={[
                  "h-14.5 px-9 rounded-full",
                  "bg-linear-to-b from-white to-zinc-100",
                  "text-zinc-900 hover:text-zinc-900 active:text-zinc-900", 
                  "font-extrabold text-lg",
                  "border border-white/60",
                  "shadow-[0_14px_30px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-1px_0_rgba(0,0,0,0.05)]",
                  "hover:brightness-[0.98] hover:-translate-y-px",
                  "active:translate-y-0",
                  "transition",
                ].join(" ")}
              >
                {HOME_GROW_WITH_PURPOSE.secondary.label}
              </Button>
            </Reveal>
                            {/* <Reveal className="mt-6 flex flex-wrap gap-3">
                  <Button
                    href={hero.primary.href}
                    variant="primary"
                           className="h-12 rounded-full bg-linear-to-r from-pink-800 to-blue-700 px-7 text-sm font-extrabold text-white shadow-[0_18px_55px_rgba(0,0,0,0.55)] hover:brightness-110"
              >
                    {hero.primary.label}
                  </Button>

                  {/* <Button
                    href={hero.secondary.href}
                    variant="secondary"
                    className="h-11 rounded-full border border-white/15 bg-white/5 px-6 text-sm font-extrabold text-white/90 hover:bg-white/10"
                  >
                    {hero.secondary.label}
                  </Button> 
                </Reveal> */}

                <Reveal className="mt-6 flex flex-wrap justify-center gap-3">
                  <StoreBadges
                    googlePlayHref={hero.stores.googlePlay.href}
                    appStoreHref={hero.stores.appStore.href}
                  />
                </Reveal>
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
