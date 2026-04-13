import Image from "next/image";
import Link from "next/link";
import type {
  LessonContent,
  LessonOutlineItem,
  LessonStatus,
} from "../content/home.content";
import { getLessonOutlineSlug } from "../content/home.content";

function getBadgeLabel(status: LessonStatus) {
  if (status === "not-started") return "Not started";
  if (status === "in-progress") return "In progress";
  return "Completed";
}

function getBadgeClassName(status: LessonStatus) {
  if (status === "completed") return "bg-[#7F3FFF] text-white";
  return "bg-[#7F3FFF] text-white";
}

export default function LessonDetailsPage({ lesson }: { lesson: LessonContent }) {
  const showProgress = lesson.status === "completed";
  const progressValue = lesson.progress ?? (lesson.status === "completed" ? 100 : 0);

  return (
    <main className="min-h-screen minb bg-black pb-16 text-white">
      <div className="">
        <div className="relative h-full w-screen sm:h-85 md:h-105 lg:h-100 ">
          <Image
            src={lesson.background}
            alt={lesson.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-centerov"
          />
        </div>
        <section className="mx-auto w-full  px-4 pb-8 pt-4 sm:px-6 lg:px-8">


          <div className="bg-black px-0 py-8 sm:py-9 w-[75%] sm:px-6 lg:px-8 ml-[150px]">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-[720px]">
                <h1 className="text-[22px] font-semibold text-white sm:text-[28px]">
                  {lesson.title}
                </h1>
                <p className="mt-3 text-[15px] leading-7 text-white/85">
                  {lesson.subtitle}
                </p>
              </div>

              <button
                type="button"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-[#8A35FF] to-[#0D8BFF] px-6 text-sm font-semibold text-white sm:w-auto"
              >
                Continue Learning
              </button>
            </div>

            {showProgress ? (
              <div className="mt-5 flex items-center gap-2 sm:gap-3">
                <div className="h-[5px] flex-1 overflow-hidden rounded-full bg-[#D7F0FF]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#7F3FFF] to-[#0D8BFF]"
                    style={{ width: `${progressValue}%` }}
                  />
                </div>
                <span className="shrink-0 text-[12px] text-white/90">
                  {progressValue}%
                </span>
              </div>
            ) : null}

            <div className="mt-8 max-w-[760px] space-y-6">
              <InfoBlock label="Status">
                <span
                  className={[
                    "inline-flex rounded-full px-4 py-1.5 text-[12px] font-medium",
                    getBadgeClassName(lesson.status),
                  ].join(" ")}
                >
                  {getBadgeLabel(lesson.status)}
                </span>
              </InfoBlock>

              <InfoBlock label="Value">
                <p className="text-[15px] text-white/85">{lesson.value}</p>
              </InfoBlock>

              <InfoBlock label="Duration">
                <p className="text-[15px] text-white/85">{lesson.duration}</p>
              </InfoBlock>

              <InfoBlock label="Format">
                <p className="text-[15px] text-white/85">{lesson.format}</p>
              </InfoBlock>

              <InfoBlock label="What You’ll Learn">
                <ol className="space-y-1 text-[15px] leading-7 text-white/85">
                  {lesson.learnPoints.map((point, index) => (
                    <li key={point}>
                      {index + 1}. {point}
                    </li>
                  ))}
                </ol>
              </InfoBlock>
            </div>

            <div className="mt-10">
              <h2 className="text-[18px] font-semibold text-white">
                Lesson Outline
              </h2>

              <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {lesson.outline.map((item) => (
                  <OutlineCard
                    key={item.title}
                    lessonSlug={lesson.slug}
                    item={item}
                  />
                ))}
              </div>
            </div>

            <div className="mt-10 h-px w-full bg-white/12" />
          </div>
          </section>
      </div>
    
    </main >
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

function OutlineCard({
  lessonSlug,
  item,
}: {
  lessonSlug: string;
  item: LessonOutlineItem;
}) {
  return (
    <Link
      href={`/learn/${lessonSlug}/${getLessonOutlineSlug(item.title)}`}
      className="flex min-w-0 items-start gap-3 rounded-[10px] border border-white/10 bg-[#242424] p-3 transition hover:border-white/20 hover:bg-[#2A2A2A]"
    >
      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-[6px]">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="44px"
          className="object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-[14px] font-semibold text-white">
          {item.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-[12px] leading-4 text-white/60">
          {item.description}
        </p>
        <span
          className={[
            "mt-3 inline-flex rounded-full px-3 py-1 text-[10px] font-medium",
            getBadgeClassName(item.status),
          ].join(" ")}
        >
          {getBadgeLabel(item.status)}
        </span>
      </div>
    </Link>
  );
}
