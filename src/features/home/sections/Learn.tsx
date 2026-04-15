"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  LESSONS as lessonsContent,
  type LessonContent,
  type LessonStatus,
} from "../content/home.content";

type LessonFilter = "all" | LessonStatus;
const LESSONS: LessonContent[] = lessonsContent.lessons;

const FILTERS: Array<{ key: LessonFilter; label: string }> = [
  { key: "all", label: "All" },
  { key: "not-started", label: "Not Started" },
  { key: "in-progress", label: "In Progress" },
  { key: "completed", label: "Completed" },
  { key: "UnSubscribed", label: "UnSubscribed" },
];



function getBadgeLabel(status: LessonStatus) {
  if (status === "not-started") return "Not started";
  if (status === "in-progress") return "In progress";
    if (status === "UnSubscribed") return "UnSubscribed";
  return "Completed";
}

function getBadgeClassName(status: LessonStatus) {
  if (status === "completed") {
    return "bg-[#8E6DEB] text-white";
  }

  return "bg-[#B39AF8] text-white";
}

export default function Learn() {
  const [activeFilter, setActiveFilter] = useState<LessonFilter>("all");

  const visibleLessons = useMemo(() => {
    if (activeFilter === "all") return LESSONS;
    return LESSONS.filter((lesson) => lesson.status === activeFilter);
  }, [activeFilter]);

  return (
    <section className="min-h-screen bg-black pb-16 pt-24 text-white md:pb-20 md:pt-28">
      <Container className="max-w-[1180px]">
        <div className="space-y-8">
          <div className="space-y-5">
            <h1 className="text-[30px] font-semibold tracking-[-0.03em] text-white">
              Learn
            </h1>

            <div className="flex flex-wrap gap-3">
              {FILTERS.map((filter) => {
                const isActive = activeFilter === filter.key;

                return (
                  <button
                    key={filter.key}
                    type="button"
                    onClick={() => setActiveFilter(filter.key)}
                    className={[
                      "rounded-full px-5 py-3 text-sm font-medium transition",
                      isActive
                        ? "bg-[#0F78FF] text-white shadow-[0_10px_30px_rgba(15,120,255,0.24)]"
                        : "border border-white/10 bg-[#222222] text-white/78 hover:bg-[#2A2A2A]",
                    ].join(" ")}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleLessons.map((lesson, index) => {
              const isUnSubscribed = lesson.status === "UnSubscribed";

              if (isUnSubscribed) {
                return (
                  <div
                    key={`${lesson.slug}-${index}`}
                    className="block rounded-[14px] border border-white/10 bg-[#1F1F1F] p-3 shadow-[0_16px_42px_rgba(0,0,0,0.28)] opacity-60 cursor-not-allowed"
                  >
                <div className="relative overflow-hidden rounded-[10px]">
                  <div className="relative aspect-[1.73/1] w-full">
                    <Image
                      src={lesson.image}
                      alt={lesson.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  <span
                    className={[
                      "absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-medium capitalize",
                      getBadgeClassName(lesson.status),
                    ].join(" ")}
                  >
                    {getBadgeLabel(lesson.status)}
                  </span>
                </div>

                <div className="space-y-3 px-1 pb-1 pt-4">
                  <div className="space-y-2">
                    <h2 className="text-[15px] font-semibold leading-[1.35] text-[#F5F5F5]">
                      {lesson.title}
                    </h2>
                    <p className="text-[13px] leading-[1.45] text-[#C7C7C7]">
                      {lesson.description}
                    </p>
                  </div>

                  {typeof lesson.progress === "number" ? (
                    <div className="space-y-1.5">
                      <div className="h-[5px] overflow-hidden rounded-full bg-[#CDEEFF]">
                        <div
                          className="h-full rounded-full bg-[#1E5BFF]"
                          style={{ width: `${lesson.progress}%` }}
                        />
                      </div>
                      <p className="text-right text-[12px] font-medium text-white/70">
                        {lesson.progress}%
                      </p>
                    </div>
                  ) : null}

                  <div className="flex items-center justify-between gap-4 pt-1 text-[12px] text-white/70">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/frequency.svg"
                        alt=""
                        width={18}
                        height={18}
                        aria-hidden="true"
                      />
                      <span>{lesson.type}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/clock.svg"
                        alt=""
                        width={18}
                        height={18}
                        aria-hidden="true"
                      />
                      <span>{lesson.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
              }

              return (
                <Link
                  key={`${lesson.slug}-${index}`}
                  href={`/learn/${lesson.slug}`}
                  className="block rounded-[14px] border border-white/10 bg-[#1F1F1F] p-3 shadow-[0_16px_42px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5 hover:border-white/20"
                >
                  <div className="relative overflow-hidden rounded-[10px]">
                    <div className="relative aspect-[1.73/1] w-full">
                      <Image
                        src={lesson.image}
                        alt={lesson.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>

                    <span
                      className={[
                        "absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-medium capitalize",
                        getBadgeClassName(lesson.status),
                      ].join(" ")}
                    >
                      {getBadgeLabel(lesson.status)}
                    </span>
                  </div>

                  <div className="space-y-3 px-1 pb-1 pt-4">
                    <div className="space-y-2">
                      <h2 className="text-[15px] font-semibold leading-[1.35] text-[#F5F5F5]">
                        {lesson.title}
                      </h2>
                      <p className="text-[13px] leading-[1.45] text-[#C7C7C7]">
                        {lesson.description}
                      </p>
                    </div>

                    {typeof lesson.progress === "number" ? (
                      <div className="space-y-1.5">
                        <div className="h-[5px] overflow-hidden rounded-full bg-[#CDEEFF]">
                          <div
                            className="h-full rounded-full bg-[#1E5BFF]"
                            style={{ width: `${lesson.progress}%` }}
                          />
                        </div>
                        <p className="text-right text-[12px] font-medium text-white/70">
                          {lesson.progress}%
                        </p>
                      </div>
                    ) : null}

                    <div className="flex items-center justify-between gap-4 pt-1 text-[12px] text-white/70">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/images/frequency.svg"
                          alt=""
                          width={18}
                          height={18}
                          aria-hidden="true"
                        />
                        <span>{lesson.type}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Image
                          src="/images/clock.svg"
                          alt=""
                          width={18}
                          height={18}
                          aria-hidden="true"
                        />
                        <span>{lesson.duration}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
