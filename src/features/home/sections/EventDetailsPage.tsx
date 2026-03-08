import Button from "@/components/ui/Button";
import Image from "next/image";
import type { EventDetail } from "../content/home.content";

const META_LABEL_BOX_CLASS =
  "h-[22px] w-[37px] whitespace-nowrap opacity-100 text-[14px] font-bold text-white/90";
const META_VALUE_CLASS =
  "text-[14px] font-medium leading-[1] tracking-[0] text-white/75";
const META_VALUE_STYLE = {
  fontFamily: "'General Sans', var(--font-sans)",
} as const;

export default function EventDetailsPage({ event }: { event: EventDetail }) {
  return (
    <main className="bg-black">
      <section className="pb-14 md:pb-20">
        <div className="relative left-1/2 w-screen -translate-x-1/2">
          <div className="w-full overflow-hidden bg-black/35 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur">
            {/* HERO FULL WIDTH */}
            <div className="relative h-65 w-full sm:h-85 md:h-105 lg:h-92.5">
              <Image
                src="/images/tent.svg"
                alt={event.heroImage?.alt ?? "Event hero"}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/15" />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/45" />
        
            </div>

            {/* BELOW HERO */}
            <div className="relative">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-44 top-0 h-130 w-130 rounded-full bg-purple-600/18 blur-[150px]" />
              </div>

              <div className="relative mx-auto max-w-350 px-6 py-10 sm:px-10 lg:px-14">
                <div className="grid gap-10 lg:grid-cols-[620px_1fr] lg:items-start">
                  <div className="text-left">
                    {/* bigger title */}
                    <h1
                      className="text-[20px] font-semibold leading-none tracking-[0] text-white"
                      style={{ fontFamily: "'General Sans', var(--font-sans)" }}
                    >
                      {event.title}
                    </h1>

                    {/* bigger subtitle */}
                    <p
                      className="mt-5 text-[16px] font-medium leading-none tracking-[0] text-white"
                      style={{ fontFamily: "'General Sans', var(--font-sans)" }}
                    >
                      {event.subtitle}
                    </p>

                    {/* overall text bigger */}
                    <div className="mt-8 space-y-6 text-[16px] text-white/75">
                      <Block label="Date" value={event.date} />
                      <Block label="Time" value={event.timeRange} />
                      <Block label="Location" value={event.location} />
                      <Block label="Event Fee" value={event.fee} />

                      <div className="space-y-3">
                        <div className={META_LABEL_BOX_CLASS}>
                          What to Expect
                        </div>
                        <ul
                          className="list-disc space-y-2 pl-6 text-[14px] font-medium leading-none tracking-[0] text-white/75"
                          style={META_VALUE_STYLE}
                        >
                          {event.whatToExpect.map((x) => (
                            <li key={x}>{x}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <div className={META_LABEL_BOX_CLASS}>
                          Cancellation Policy
                        </div>
                        <div
                          className={META_VALUE_CLASS}
                          style={META_VALUE_STYLE}
                        >
                          {event.cancellationPolicy}
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="flex justify-start lg:justify-end">
                    <Button
                      href={`/events/${event.slug}/confirmed`}
                      variant="primary"
                      className="h-11 rounded-full px-8 text-[14px] font-extrabold text-white shadow-[0_14px_45px_rgba(0,0,0,0.55)] hover:brightness-110"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, #7D3AF0 0%, #007AFF 100%)",
                      }}
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
    <div className="space-y-3">
      <div className={META_LABEL_BOX_CLASS}>
        {label}
      </div>
      <div
        className={META_VALUE_CLASS}
        style={META_VALUE_STYLE}
      >
        {value}
      </div>
    </div>
  );
}
