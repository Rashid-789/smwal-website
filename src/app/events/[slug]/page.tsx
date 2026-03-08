import EventDetailsPage from "@/features/home/sections/EventDetailsPage";
import { getEventDetailBySlug } from "@/features/home/content/home.content";

export default function Page({ params }: { params: { slug: string } }) {
  const event = getEventDetailBySlug(params.slug);

  //  don’t throw 404 — show a fallback event instead (so you ALWAYS see data)
  return (
    <EventDetailsPage
      event={
        event ?? {
          slug: params.slug,
          title: "Community Hangout",
          subtitle: "A guided in-person gathering organized by the ministry.",
          heroImage: { src: "/images/cta-banner.jpg", alt: "Event hero" },
          date: "June 14, 2025",
          timeRange: "Start: 8:00 AM | End: 6:00 PM",
          location: "Location coming soon",
          fee: "0 Rs",
          whatToExpect: [
            "Guided group sessions",
            "Ministry-led teachings",
            "Safe and respectful interactions",
          ],
          cancellationPolicy:
            "Registrations are non-refundable unless the event is cancelled by the ministry.",
        }
      }
    />
  );
}
