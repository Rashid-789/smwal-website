import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import StoreBadges from "@/features/home/components/StoreBadges";
import HangoutEventCard from "@/features/home/components/HangoutEventCard";
import { EVENTS_GRID, EVENTS_HERO, HOME_HANGOUTS } from "../content/home.content";

export default function EventsPage() {
  return (
    <main className="bg-black">
      {/* HERO TOP IMAGE */}
      <section className="relative overflow-hidden">
        <div className="relative h-[360px] w-full sm:h-[420px] lg:h-[520px]">
          <Image
            src="/images/view-upcoming.jpg"
            alt="View upcoming events"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* overlays like screenshot */}
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/25" />
        </div>

        <div className="absolute inset-0">
          <Container className="h-full">
            <div className="flex h-full items-start pt-16 sm:pt-18 lg:pt-20">
              <div className="max-w-[680px]">
                <h1 className="text-[34px] font-bold uppercase leading-[1.02] tracking-tight text-white sm:text-[44px] md:text-[54px] lg:text-[58px]">
                  {EVENTS_HERO.title}
                </h1>

                <p className="mt-4 max-w-[560px] text-[14px] leading-[1.7] text-white/80 sm:text-[15px] md:text-[16px]">
                  {EVENTS_HERO.subtitle}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button
                    href={EVENTS_HERO.primary.href}
                    variant="primary"
                    className="h-11 rounded-full bg-linear-to-r from-fuchsia-600 to-sky-500 px-7 text-sm font-extrabold text-white shadow-[0_18px_55px_rgba(0,0,0,0.55)] hover:brightness-110"
                  >
                    {EVENTS_HERO.primary.label}
                  </Button>

                  <Button
                    href={EVENTS_HERO.secondary.href}
                    variant="secondary"
                    className="h-11 rounded-full border border-white/30 bg-white/5 px-7 text-sm font-extrabold text-white/90 hover:bg-white/10"
                  >
                    {EVENTS_HERO.secondary.label}
                  </Button>
                </div>

                <div className="mt-5">
                  <StoreBadges
                    googlePlayHref={EVENTS_HERO.stores.googlePlay.href}
                    appStoreHref={EVENTS_HERO.stores.appStore.href}
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* CONNECT + 9 CARDS */}
      <section id="events" className="py-14 md:py-20">
        <Container>
          <h2 className="text-[28px] font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-[34px] md:text-[37px]">
            {HOME_HANGOUTS.title}
          </h2>

          <p className="mt-3 max-w-[780px] text-[14px] leading-[1.75] text-white/70 sm:text-[15px] md:text-[16px]">
            {HOME_HANGOUTS.subtitle}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EVENTS_GRID.map((e, idx) => {
              // ✅ use your 1.svg ... 9.svg images for the grid cards
              const n = (idx % 9) + 1; // safe even if items > 9
              const cardImage = `/images/${n}.svg`;

              // ✅ "image name related" => alt based on title
              const cardAlt = `${e.title} event image`;

              return (
                <HangoutEventCard
                  key={e.slug}
                  image={cardImage}
                  alt={cardAlt}
                  title={e.title}
                  price={e.price}
                  time={e.time}
                  place={e.place}
                  registerHref={`/events/${e.slug}`}
                />
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}