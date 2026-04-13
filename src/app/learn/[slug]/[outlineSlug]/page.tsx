import OutlineLessonDetailsPage from "@/features/home/sections/OutlineLessonDetailsPage";
import { getLessonOutlineBySlugs } from "@/features/home/content/home.content";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; outlineSlug: string }>;
}) {
  const { slug, outlineSlug } = await params;
  const outline = getLessonOutlineBySlugs(slug, outlineSlug);

  return (
    <OutlineLessonDetailsPage
      outline={
        outline ?? {
          parentLessonSlug: slug,
          slug: outlineSlug,
          title: "Defining Relationships",
          subtitle:
            "Intentional relationships start with clear purpose, values, and direction, not impulse.",
          image: "/images/grow-3.svg",
          imageAlt: "Hands holding to represent connection",
          status: "not-started",
          reflect:
            "Take a moment to consider what intention means to you when entering a relationship.",
          value: "Guided Teaching",
          format: "Video",
          duration: "4 minutes",
          keyTakeaways: [
            "Intentional relationships are purpose-driven",
            "Clarity reduces misunderstanding and conflict",
            "Commitment begins before connection",
          ],
          ctaLabel: "Start Learning",
        }
      }
    />
  );
}
