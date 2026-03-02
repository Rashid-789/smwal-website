import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

type EventDetail = {
  slug: string;
  title: string;
  date: string;
  timeRange: string;
  location: string;
  fee: string;
};

function toDisplayTimeRange(timeRange: string) {
  // converts "Start: 8:00 AM | End: 6:00 PM" -> "8:00 AM - 6:00 PM"
  const startMatch = timeRange.match(/Start:\s*([^|]+)/i);
  const endMatch = timeRange.match(/End:\s*(.+)$/i);
  const start = startMatch?.[1]?.trim();
  const end = endMatch?.[1]?.trim();
  if (start && end) return `${start} - ${end}`;
  return timeRange;
}

export default function BookingConfirmedPage({
  event,
}: {
  event: EventDetail;
}) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07070B] py-10 sm:py-14">
      {/* purple glow background (like screenshot) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-44 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-violet-600/25 blur-[130px]" />
        <div className="absolute left-10 top-20 h-[340px] w-[340px] rounded-full bg-violet-500/15 blur-[120px]" />
      </div>

      <Container>
        <div className="relative mx-auto w-full max-w-[760px] px-4 sm:px-0">
          <section className="rounded-2xl border border-white/10 bg-black/70 shadow-[0_24px_70px_rgba(0,0,0,0.7)] backdrop-blur-md">
            <div className="p-6 sm:p-10">
              {/* illustration */}
              <div className="flex justify-center">
                <div className="relative h-[180px] w-[280px] sm:h-[240px] sm:w-[360px]">
                  <Image
                    src="/images/bookingconfirmed.svg"
                    alt="Booking confirmed"
                    fill
                    priority
                    sizes="(max-width: 640px) 280px, 360px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* title */}
              <div className="mt-5 flex items-center justify-center gap-2">
                <h1 className="text-center text-sm font-semibold text-white/90 sm:text-base">
                  Booking Confirmed!
                </h1>

                <span className="grid h-5 w-5 place-items-center rounded-full bg-sky-500">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
              </div>

              {/* details */}
              <div className="mt-6 divide-y divide-white/10 text-left">
                <div className="py-4">
                  <p className="text-xs text-white/50">Event</p>
                  <p className="mt-1 text-sm font-semibold text-white/90">
                    {event.title}
                  </p>
                </div>

                <div className="py-4">
                  <p className="text-xs text-white/50">Date</p>
                  <p className="mt-1 text-sm font-semibold text-white/90">
                    {event.date}
                  </p>
                </div>

                <div className="py-4">
                  <p className="text-xs text-white/50">Time</p>
                  <p className="mt-1 text-sm font-semibold text-white/90">
                    {toDisplayTimeRange(event.timeRange)}
                  </p>
                </div>

                <div className="py-4">
                  <p className="text-xs text-white/50">Location</p>
                  <p className="mt-1 text-sm font-semibold text-white/90">
                    {event.location}
                  </p>
                </div>

                <div className="py-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs text-white/50">Total Price:</p>
                      <p className="mt-1 text-sm font-semibold text-white/90">
                        {event.fee}
                      </p>
                    </div>

                    <span className="mt-1 inline-flex items-center rounded-md bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
                      Paid
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6">
                <Link
                  href="/"
                  className="block w-full rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_16px_40px_rgba(37,99,235,0.25)] transition hover:opacity-95 active:scale-[0.99]"
                >
                  Go to Home
                </Link>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
