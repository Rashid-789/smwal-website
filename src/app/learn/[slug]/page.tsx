import LessonDetailsPage from "@/features/home/sections/LessonDetailsPage";
import { getLessonBySlug } from "@/features/home/content/home.content";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  return (
    <LessonDetailsPage
      lesson={
        lesson ?? {
          slug,
          title: "Understanding Intentional Relationships",
          description:
            "Learn the foundations of building purposeful and accountable connections.",
          image: "/images/grow-5.svg",
          imageAlt: "Silhouettes riding bicycles at sunset",
          status: "not-started",
          type: "Audio Lesson",
          duration: "10 minutes",
          subtitle:
            "Learn the foundations of building purposeful and accountable connections.",
          value: "Guided Teaching",
          format: "Written and Audio",
          learnPoints: [
            "Understanding intentional relationship foundations",
            "Recognizing personal readiness",
            "Approaching relationships with clarity and responsibility",
          ],
          outline: [
            {
              title: "Defining Relationships",
              description:
                "Understand what it means to approach relationships with intention.",
              image: "/images/grow-1.svg",
              imageAlt: "Lesson outline on relationship foundations",
              status: "in-progress",
            },
            {
              title: "Readiness and Self-Awareness",
              description:
                "Reflect on personal readiness and the role of emotional maturity.",
              image: "/images/grow-6.svg",
              imageAlt: "Lesson outline on self-awareness",
              status: "not-started",
            },
            {
              title: "Accountability in Connection",
              description:
                "Learn why guidance and accountability are central to healthy bonds.",
              image: "/images/grow-6.svg",
              imageAlt: "Lesson outline on accountability in relationships",
              status: "not-started",
            },
          ],
        }
      }
    />
  );
}
