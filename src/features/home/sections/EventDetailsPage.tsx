import Button from "@/components/ui/Button";
import Image from "next/image";
import type { EventDetail } from "../content/home.content";

export default function EventDetailsPage({ event }: { event: EventDetail }) {
  return (
    <main className="bg-black">
      <section className="pb-14 md:pb-20">
        <div className="relative left-1/2 w-screen -translate-x-1/2">
          <div className="w-full overflow-hidden bg-black/35 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur">
            {/* HERO FULL WIDTH */}
            <div className="relative h-[260px] w-full sm:h-[340px] md:h-[420px] lg:h-[370px]">
              <Image
                src="/images/tent.svg"
                alt={event.heroImage?.alt ?? "Event hero"}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/15" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/45" />
              {/* ✅ dots removed */}
            </div>

            {/* BELOW HERO */}
            <div className="relative">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-44 top-0 h-[520px] w-[520px] rounded-full bg-purple-600/18 blur-[150px]" />
              </div>

              <div className="relative mx-auto max-w-[1400px] px-6 py-10 sm:px-10 lg:px-14">
                <div className="grid gap-10 lg:grid-cols-[620px_1fr] lg:items-start">
                  <div className="text-left">
                    {/* ✅ bigger title */}
                    <h1 className="text-[20px] font-bold text-white sm:text-[22px]">
                      {event.title}
                    </h1>

                    {/* ✅ bigger subtitle */}
                    <p className="mt-3 text-[14px] leading-relaxed text-white/75 sm:text-[16px]">
                      {event.subtitle}
                    </p>

                    {/* ✅ overall text bigger */}
                    <div className="mt-8 space-y-6 text-[16px] text-white/75">
                      <Block label="Date" value={event.date} />
                      <Block label="Time" value={event.timeRange} />
                      <Block label="Location" value={event.location} />
                      <Block label="Event Fee" value={event.fee} />

                      <div>
                        <div className="text-[16px] font-bold text-white/90">
                          What to Expect
                        </div>
                        <ul className="mt-3 list-disc space-y-2 pl-6 text-[14px] text-white/75">
                          {event.whatToExpect.map((x) => (
                            <li key={x}>{x}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="text-[16px] font-bold text-white/90">
                          Cancellation Policy
                        </div>
                        <div className="mt-3 text-[15px] leading-relaxed text-white/75">
                          {event.cancellationPolicy}
                        </div>
                      </div>

                      <div className="pt-3 max-w-[240px]">
                        <Button
                          href="/events"
                          variant="secondary"
                          className="h-11 w-full px-6 text-[14px] font-bold"
                        >
                          Back to Events
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-start lg:justify-end">
                    <Button
                      href={`/events/${event.slug}/confirmed`}
                      variant="primary"
                      className="h-11 rounded-full bg-linear-to-r from-fuchsia-600 to-sky-500 px-8 text-[14px] font-extrabold text-white shadow-[0_14px_45px_rgba(0,0,0,0.55)] hover:brightness-110"
                    >
                      Register and Pay
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* end below hero */}
          </div>
        </div>
      </section>
    </main>
  );
}

function Block({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[14px] font-bold text-white/90">{label}</div>
      <div className="mt-2 text-[14px] text-white/75">{value}</div>
    </div>
  );
}