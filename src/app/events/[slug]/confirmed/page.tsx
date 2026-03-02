import BookingConfirmedPage from "@/features/home/sections/BookingConfirmedPage";
import { getEventDetailBySlug } from "@/features/home/content/home.content";

export default function Page({ params }: { params: { slug: string } }) {
  const event = getEventDetailBySlug(params.slug);

  // ✅ same fallback behavior as /events/[slug]
  const safeEvent =
    event ?? {
      slug: params.slug,
      title: "Event",
      subtitle: "A guided in-person gathering organized by the ministry.",
      heroImage: { src: "/images/cta-banner.jpg", alt: "Event hero" },
      date: "June 14, 2025",
      timeRange: "Start: 8:00 AM | End: 6:00 PM",
      location: "Location coming soon",
      fee: "1,120 Rs",
      whatToExpect: [],
      cancellationPolicy: "",
    };

  return <BookingConfirmedPage event={safeEvent} />;
}