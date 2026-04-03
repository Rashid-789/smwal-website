export const HOME_HERO = {
  titleLines: ["BUILDING MEANINGFUL", "CONNECTIONS WITH PURPOSE."],
  subtitle:
    "SMWAL is more than just a platform; it's a mission to foster intentional relationships through guided matchmaking, mentorship, and faith-aligned growth.",
  ctas: {
    primary: { label: "Get the App", href: "/join" },
    secondary: { label: "Support the Mission", href: "/donate" },
  },
  stores: {
    googlePlay: { href: "#", label: "Get it on Google Play" },
    appStore: { href: "#", label: "Download on the App Store" },
  },
  polaroids: [
    { src: "/images/hero-3.svg", alt: "Couple smiling", rotate: -6, x: 52, y: 10, z: 30 },
    { src: "/images/hero-1.svg", alt: "Friends smiling", rotate: 8, x: 68, y: 20, z: 20 },
    { src: "/images/hero-2.svg", alt: "Couple posing", rotate: -10, x: 38, y: 44, z: 10 },
  ],
};

export const HOME_PURPOSE = {
  pill: "Our Purpose",
  title: "A GUIDED PATH TO LASTING, INTENTIONAL RELATIONSHIPS",
  subtitle:
    "We believe strong marriages don’t happen by chance — they are built with intention, preparation, and the right support.",
  cta: { label: "Discover Our Vision", href: "/about" },
  cards: [
    {
      image: "/images/purpose-1.svg",
      alt: "Guided matchmaking",
      title: "Guided Matchmaking",
      description:
        "Our guided matchmaking process focuses on compatibility, shared values, and long-term alignment — helping you find a partner with intention and clarity.",
      action: { label: "View Plans", href: "/about" },
    },
    {
      image: "/images/purpose-5.svg",
      alt: "Mentorship and education",
      title: "Mentorship & Education",
      description:
        "Access mentorship, relationship education, and personal development resources designed to help you build a successful and meaningful marriage.",
      action: { label: "Explore Resources", href: "/about" },
    },
    {
      image: "/images/purpose-3.svg",
      alt: "Community focus",
      title: "Community Focus",
      description:
        "Join a growing community that believes in intentional relationships, strong families, and lifelong commitment built on shared values & emotions.",
      action: { label: "Join Community", href: "/join" },
    },
  ],
};

export const HOME_JOURNEY = {
  pill: "The Journey",
  title: "YOUR PATH TO A MEANINGFUL CONNECTION",
  subtitle:
    "Joining SMWAL is simple — and every step is designed to guide you toward a purposeful and lasting marriage.",
  cta: { label: "Discover Our Vision", href: "/about" },
  steps: [
    {
      number: "01",
      title: "Create Your Profile",
      description:
        "Download the app and build your intentional profile reflecting your values, goals, and vision for marriage.",
      action: { label: "Get the App", href: "#" },
    },
    {
      number: "02",
      title: "Learn and Grow",
      description:
        "Access mentorship, structured guidance, and educational resources to prepare for a strong and healthy marriage.",
      action: { label: "Explore Resources", href: "/about" },
    },
    {
      number: "03",
      title: "Connect with Purpose",
      description:
        "Enter guided matchmaking designed to create meaningful, value-aligned connections for long-term commitment.",
      action: { label: "Start Your Journey", href: "/join" },
    },
  ],
};

export const HOME_IMPACT = {
  pill: "Community Impact",
  title: "STRENGTHENING MARRIAGES. BUILDING A STRONGER COMMUNITY.",
  subtitle:
    "Every connection formed through SMWAL contributes to stronger families and a more connected community rooted in shared values, faith, and purpose.",
  cta: { label: "Join Our Community", href: "/join" },
  image: {
    src: "/images/community-impact.svg",
    alt: "Couple at wedding ceremony",
  },
  stats: [
    { value: "50K+", label: "Meaningful Connections" },
    { value: "70K+", label: "Engaged Users" },
    { value: "3K+", label: "Mentorship Sessions" },
    { value: "500+", label: "Successful Marriages" },
  ],
};

export const HOME_EXPERIENCE = {
  pill: "The Experience",
  title: "A SAFE AND GUIDED EXPERIENCE",
  subtitle:
    "Every connection on SMWAL is guided with intention, accountability, and mentorship to ensure a respectful and meaningful journey.",
  cta: { label: "Join Our Community", href: "/join" },
  image: { src: "/images/experience.svg", alt: "A couple sitting together" },
  features: [
    {
      title: "Mentor-supported journey",
      description:
        "Get guidance from mentors and support to help you grow and prepare for a lasting marriage.",
      icon: "mentor",
    },
    {
      title: "Structured matchmaking",
      description:
        "Our matchmaking focuses on compatibility and values, helping you connect with clarity and purpose.",
      icon: "match",
    },
    {
      title: "Faith-aligned environment",
      description:
        "Engage in a respectful space where connections are nurtured through shared beliefs and community support.",
      icon: "faith",
    },
  ] as const,
};

export const HOME_PRICING = {
  pill: "The Pricing",
  title: "SIMPLE AND TRANSPARENT PRICING",
  subtitle: "Choose a plan to begin your guided journey.",
  toggle: { monthly: "Monthly", yearly: "Yearly", badge: "Save 24%" },

  plans: [
    {
      key: "starter",
      name: "STARTER",
      save: "Save 10%",
      description: "Begin your guided journey with essential access to the SMWAL platform.",
      price: { monthly: 29, yearly: 264 }, // example yearly
      cta: { label: "Get Started", href: "/join" },
      features: [
        { text: "Create your intentional profile" },
        { text: "Access guided matchmaking request" },
        { text: "Basic mentorship resources" },
        { text: "Community access" },
        { text: "Educational content", muted: true },
        { text: "Platform support", muted: true },
      ],
    },
    {
      key: "guided",
      name: "GUIDED",
      bestDeal: true,
      save: "Save 30%",
      description: "Full access to mentorship, education, and structured matchmaking support.",
      price: { monthly: 39, yearly: 360 }, // example yearly
      cta: { label: "Choose Guided", href: "/join" },
      features: [
        { text: "Everything in Starter" },
        { text: "Full mentorship program access" },
        { text: "Relationship & marriage preparation courses" },
        { text: "Priority matchmaking consideration" },
        { text: "Community events access" },
        { text: "Priority support" },
      ],
    },
    {
      key: "supporter",
      name: "COMMUNITY SUPPORTER",
      save: "Save 20%",
      description: "For members who want full access while supporting the mission and growth of SMWAL.",
      price: { monthly: 49, yearly: 456 }, // example yearly
      cta: { label: "Support & Join", href: "/donate" },
      features: [
        { text: "Everything in Guided plan" },
        { text: "Priority mentorship sessions" },
        { text: "Early access to new features" },
        { text: "Exclusive community sessions" },
        { text: "Support ministry expansion" },
        { text: "Contributor recognition (optional)" },
      ],
    },
  ],
} as const;

export const HOME_CTA_BANNER = {
  title: "READY TO BEGIN YOUR JOURNEY?",
  subtitle:
    "Take the first step toward a meaningful, guided, and faith-centered marriage journey supported by mentorship and intentional connections.",
  primary: { label: "Join the Platform", href: "/join" },
  secondary: { label: "Support the Mission", href: "/donate" },
  image: { src: "/images/cta-banner.jpg", alt: "Happy couple" },
};     

export const OurMissionPurpose = {
    pill: "Our Mission/Purpose",
    title: "SUPPORTING MEANINGFUL CONNECTIONS\nTHROUGH GUIDANCE",
    subtitle:
      "SMWAL creates a safe, structured, mentorship-driven space for individuals to grow, prepare, and build meaningful connections.",
    cta: { label: "Join the Community", href: "/events" },
    image: { src: "/images/join-experience.png", alt: "Wedding couple" },
    items: [
      {
        n: "1",
        title: "Guidance Through Education",
        desc: "Access curated resources to help individuals build strong foundations for lifelong commitment.",
      },
      {
        n: "2",
        title: "Structured & Intentional Matching",
        desc: "Our matchmaking emphasizes compatibility and shared values for meaningful connections.",
      },
      {
        n: "3",
        title: "Mentorship & Community Support",
        desc: "Get mentorship and community support, fostering a respectful and growth-focused environment.",
      },
    ],
  };



export const HOME_HANGOUTS = {
  pill: "Our Hangouts & Community Events",
  title: "CONNECT BEYOND THE SCREEN",
  subtitle:
    "Join ministry-led hangouts, teaching nights, and guided community gatherings designed to build meaningful connections in a respectful and faith-centered environment. ",
  cta: { label: "View Upcoming Events", href: "/events" },
  events: [
    {
      image: "/images/houngouts.svg",
      alt: "Community Hangout",
      title: "Community\nHangout",
      price: "$15",
      time: "Sat, Oct 26 - 1:00 PM",
      place: "Greenfield Farm",
    },
    {
      image: "/images/houngouts1.svg",
      alt: "Ministry Teaching Night",
      title: "Ministry Teaching\nNight",
      price: "$10",
      time: "Sat, Nov 10 - 7:00 PM",
      place: "Downtown Theater",
    },
    {
      image: "/images/hongouts2.svg",
      alt: "Guided Group Session",
      title: "Guided Group\nSession",
      price: "$30",
      time: "Sun, Nov 3 - 9:00 AM",
      place: "Riverside Center",
    },
    {
      image: "/images/houngouts1.svg",
      alt: "Weekend Camping Trip",
      title: "Weekend Camping\nTrip",
      price: "$30",
      time: "Sat, Sept 28 - 8:00 AM",
      place: "Community Grounds",
    },
  ],
};

export const HOME_GROW_WITH_PURPOSE  = {
  pill: "Grow with Purpose",
  title: "Access structured lessons designed to guide you toward meaningful and intentional relationships.",
  subtitle:
    "Join ministry-led hangouts, teaching nights, and guided community gatherings designed to build meaningful connections in a respectful and faith-centered environment. ",
  cta: { label: "View Upcoming Events", href: "/events" },
  events: [
    {
      image: "/images/grow-1.svg",
      alt: "Community Hangout",
      title: "Understanding Intentional Relationships",
      summary: "Learn the foundations of building purposeful and accountable connections.",
      type: "Audio Lesson",
      time: "10 minutes"

        },
    {
      image: "/images/grow-2.svg",
      alt: "Community Hangout",
      title: "Preparing for Marriage Mindfully",
      summary: "Readiness and self-awareness shape healthy relationships.",
      type: "Video Lesson",
      time: "20 minutes"
      
        },
  {
      image: "/images/grow-3.svg",
      alt: "Communication with Integrity",
      title: "Communication with Integrity",
      summary: "Explore honest communication in relationships.",
      type: "Video Lesson",
      time: "25 minutes"
      
        },
  ],
};



export type EventDetail = {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: { src: string; alt: string };
  date: string;
  timeRange: string;
  location: string;
  fee: string;
  whatToExpect: string[];
  cancellationPolicy: string;
};

export type EventCardItem = {
  slug: string;
  image: string;
  alt: string;
  title: string;
  price: string;
  time: string;
  place: string;
};

export const EVENTS_HERO = {
  title: "VIEW UPCOMING EVENTS",
  subtitle:
    "Explore our upcoming ministry events designed to bring like-minded\n individuals together in a safe, guided, and faith-aligned setting.",
  image: { src: "/images/donate-hero.jpg", alt: "Upcoming events hero" },
  primary: { label: "See Events", href: "#events" },
  secondary: { label: "Support our Mission", href: "/donate" },
  stores: {
    googlePlay: { href: "#", label: "Get it on Google Play" },
    appStore: { href: "#", label: "Download on the App Store" },
  },
} as const;

/** 9 cards like screenshot */
export const EVENTS_GRID: EventCardItem[] = [
  {
    slug: "community-hangout-greenfield",
    image: "/images/houngouts.svg",
    alt: "Community Hangout",
    title: "Community Hangout",
    price: "$15",
    time: "Sat, Oct 26 - 1:00 PM",
    place: "Greenfield Farm",
  },
  {
    slug: "art-workshop-city-gallery",
    image: "/images/houngouts1.svg",
    alt: "Art Workshop",
    title: "Art Workshop",
    price: "$20",
    time: "Sun, Oct 27 - 10:00 AM",
    place: "City Gallery",
  },
  {
    slug: "food-festival-riverside",
    image: "/images/hongouts2.svg",
    alt: "Food Festival",
    title: "Food Festival",
    price: "$32",
    time: "Fri, Nov 1 - 5:00 PM",
    place: "Riverside Park",
  },

  {
    slug: "community-hangout-greenfield-2",
    image: "/images/houngouts.svg",
    alt: "Community Hangout",
    title: "Community Hangout",
    price: "$15",
    time: "Sat, Oct 26 - 1:00 PM",
    place: "Greenfield Farm",
  },
  {
    slug: "art-workshop-city-gallery-2",
    image: "/images/houngouts1.svg",
    alt: "Art Workshop",
    title: "Art Workshop",
    price: "$20",
    time: "Sun, Oct 27 - 10:00 AM",
    place: "City Gallery",
  },
  {
    slug: "food-festival-riverside-2",
    image: "/images/hongouts2.svg",
    alt: "Food Festival",
    title: "Food Festival",
    price: "$32",
    time: "Fri, Nov 1 - 5:00 PM",
    place: "Riverside Park",
  },

  {
    slug: "art-workshop-riverside-gallery",
    image: "/images/houngouts1.svg",
    alt: "Art Workshop",
    title: "Art Workshop",
    price: "$25",
    time: "Sun, Nov 10 - 3:00 PM",
    place: "Riverside Gallery",
  },
  {
    slug: "art-workshop-city-gallery-3",
    image: "/images/houngouts.svg",
    alt: "Art Workshop",
    title: "Art Workshop",
    price: "$20",
    time: "Sun, Oct 27 - 10:00 AM",
    place: "City Gallery",
  },
  {
    slug: "food-festival-riverside-3",
    image: "/images/hongouts2.svg",
    alt: "Food Festival",
    title: "Food Festival",
    price: "$32",
    time: "Fri, Nov 1 - 5:00 PM",
    place: "Riverside Park",
  },
];

/** Detail page data (map by slug) */
export const EVENT_DETAILS: EventDetail[] = [
  {
    slug: "community-hangout-greenfield",
    title: "Community Hangout",
    subtitle: "A guided in-person gathering organized by the ministry.",
    heroImage: { src: "/images/houngouts1.svg", alt: "Community Hangout hero" },
    date: "June 14, 2025",
    timeRange: "Start: 8:00 AM | End: 6:00 PM",
    location: "Yosemite National Park",
    fee: "$100",
    whatToExpect: [
      "Guided group sessions",
      "Ministry-led teachings",
      "Safe and respectful interactions",
    ],
    cancellationPolicy:
      "Registrations are non-refundable unless the event is cancelled by the ministry.",
  },
  // fallback: reuse same detail structure for other slugs
  ...EVENTS_GRID.filter((e) => e.slug !== "community-hangout-greenfield").map(
    (e) => ({
      slug: e.slug,
      title: e.title,
      subtitle: "A guided in-person gathering organized by the ministry.",
      heroImage: { src: e.image, alt: e.alt },
      date: "June 14, 2025",
      timeRange: "Start: 8:00 AM | End: 6:00 PM",
      location: e.place,
      fee: e.price,
      whatToExpect: [
        "Guided group sessions",
        "Ministry-led teachings",
        "Safe and respectful interactions",
      ],
      cancellationPolicy:
        "Registrations are non-refundable unless the event is cancelled by the ministry.",
    }),
  ),
];

export function getEventDetailBySlug(slug: string) {
  return EVENT_DETAILS.find((e) => e.slug === slug) || null;
}


export type EventContent = {
  slug: string;
  title: string;
  dateText: string;
  timeText: string;
  locationText: string;
  priceText: string;

  // optional (if you show event hero/thumbnail elsewhere)
  heroImage?: { src: string; alt: string };
};

export const EVENTS: EventContent[] = [
  {
    slug: "art-workshop-city-gallery",
    title: "Community Hangout",
    dateText: "June 14, 2025",
    timeText: "8:00 AM - 6:00 PM",
    locationText: "Yosemite National Park",
    priceText: "1,120 Rs",
    heroImage: { src: "/images/houngouts.svg", alt: "Hangout" },
  },

  // add more events here...
];

export function getEventBySlug(slug: string): EventContent | null {
  return EVENTS.find((e) => e.slug === slug) ?? null;
}
