import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import StoreBadges from "@/features/home/components/StoreBadges";
import HangoutEventCard from "@/features/home/components/HangoutEventCard";
import { EVENTS_GRID, EVENTS_HERO, HOME_HANGOUTS } from "../content/home.content";
import { SECTION_HEADING_CLASS, SECTION_SUBHEADING_CLASS } from "@/lib/sectionTypography";

export default function EventsPage() {
  return (
    <main className="bg-black">
      {/* HERO TOP IMAGE */}
      <section className="relative overflow-hidden">
        <div className="relative h-90 w-full sm:h-105 lg:h-130">
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
          <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/45 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-b from-black/35 via-transparent to-black/25" />
        </div>

        <div className="absolute inset-0">
          <Container className="h-full">
            <div className="flex h-full items-start pt-16 sm:pt-18 lg:pt-20">
              <div className="max-w-170">
                <h1 className={`whitespace-pre-line text-[65px]! leading-none! ${SECTION_HEADING_CLASS}`}>
                  {EVENTS_HERO.title}
                </h1>

                <p className={`mt-5 max-w-245 whitespace-pre-line text-[18px]! leading-[1.4]! ${SECTION_SUBHEADING_CLASS}`}>
                  {EVENTS_HERO.subtitle}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button
                    href={EVENTS_HERO.primary.href}
                    variant="primary"
                  className="h-12 rounded-full bg-linear-to-r from-pink-800 to-blue-700 px-7 text-sm font-extrabold text-white shadow-[0_18px_55px_rgba(0,0,0,0.55)] hover:brightness-110"
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
          <h2 className={SECTION_HEADING_CLASS}>
            {HOME_HANGOUTS.title}
          </h2>

          <p className={`mt-5 max-w-195 ${SECTION_SUBHEADING_CLASS}`}>
            {HOME_HANGOUTS.subtitle}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EVENTS_GRID.map((e, idx) => {
              // use your 1.svg ... 9.svg images for the grid cards
              const n = (idx % 9) + 1; // safe even if items > 9
              const cardImage = `/images/${n}.svg`;

              // "image name related" => alt based on title
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
