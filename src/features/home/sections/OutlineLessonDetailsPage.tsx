import Image from "next/image";
import type {
  LessonOutlineDetail,
  LessonStatus,
} from "../content/home.content";

function getBadgeLabel(status: LessonStatus) {
  if (status === "not-started") return "Not Started";
  if (status === "in-progress") return "In Progress";
  if (status === "completed") return "Completed";
  return "Unsubscribed";
}

export default function OutlineLessonDetailsPage({
  outline,
}: {
  outline: LessonOutlineDetail;
}) {
  return (
    <main className="min-h-screen bg-black pb-16 text-white">
        <div className="relative h-55 w-full sm:h-85 md:h-105 lg:h-100">
          <Image
            src={outline.image}
            alt={outline.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
              <section className="mx-auto w-full max-w-[1120px] px-4 pb-8 pt-4 sm:px-6 lg:px-8">
        <div className="bg-black px-0 py-8 sm:py-9">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-[760px]">
              <h1 className="text-[22px] font-semibold text-white sm:text-[28px]">
                {outline.title}
              </h1>
              <p className="mt-3 text-[15px] leading-7 text-white/85">
                {outline.subtitle}
              </p>
            </div>

            <button
              type="button"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-[#8A35FF] to-[#0D8BFF] px-6 text-sm font-semibold text-white sm:w-auto"
            >
              {outline.ctaLabel}
            </button>
          </div>

          <div className="mt-8 max-w-[760px] space-y-6">
            <InfoBlock label="Status">
              <span className="inline-flex rounded-full bg-[#7F3FFF] px-4 py-1.5 text-[12px] font-medium text-white">
                {getBadgeLabel(outline.status)}
              </span>
            </InfoBlock>

            <InfoBlock label="Reflect">
              <p className="text-[15px] leading-7 text-white/85">
                {outline.reflect}
              </p>
              <p className="text-[15px] text-white/85">{outline.value}</p>
            </InfoBlock>

            <InfoBlock label="Key Takeaways">
              <ol className="space-y-1 text-[15px] leading-7 text-white/85">
                {outline.keyTakeaways.map((item, index) => (
                  <li key={item}>
                    {index + 1}. {item}
                  </li>
                ))}
              </ol>
              <p className="text-[15px] text-white/85">{outline.value}</p>
            </InfoBlock>

            <InfoBlock label="Format">
              <p className="text-[15px] text-white/85">{outline.format}</p>
            </InfoBlock>

            <InfoBlock label="Duration">
              <p className="text-[15px] text-white/85">{outline.duration}</p>
            </InfoBlock>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <h2 className="text-[16px] font-semibold text-white">{label}</h2>
      {children}
    </div>
  );
}
