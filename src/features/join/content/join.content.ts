export const JOIN = {
  hero: {
    title: "BEGIN YOUR GUIDED JOURNEY.",
    subtitle:
      "Access our full range of features through the SMWAL mobile application.",
    image: { src: "/images/join-hero.jpg", alt: "People having coffee" },
    primary: { label: "Get the App", href: "#" },
    secondary: { label: "Join the community", href: "/events" },
    stores: {
      googlePlay: { href: "#", label: "Get it on Google Play" },
      appStore: { href: "#", label: "Download on the App Store" },
    },
  },

  stats: [
    { value: "50K+", label: "Meaningful Connections" },
    { value: "70K+", label: "Engaged Users" },
    { value: "3K+", label: "Mentorship Sessions" },
    { value: "500+", label: "Successful Marriages" },
  ],

  experience: {
    pill: "Why Join Us?",
    title: "SUPPORTING MEANINGFUL CONNECTIONS\nTHROUGH GUIDANCE",
    subtitle:
      "SMWAL creates a safe, structured, mentorship-driven space for individuals to grow, prepare, and build meaningful connections.",
    cta: { label: "Join the Community", href: "/join" },
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
      {
        n: "4",
        title: "The Faith Based Connections",
        desc: "We organize prayer retreats to deepen faith and strengthen our bonds.",
      },

    ],
  },
} as const;

export const JOIN_JOURNEY = {
  pill: "The Journey",
  title: "YOUR PATH TO A MEANINGFUL CONNECTION",
  subtitle:
    "Joining SMWAL is simple -- and every step is designed to guide you toward a purposeful and lasting marriage",
  // cta: { label: "Discover Our Vision", href: "/about" },
  cards: [
    {
      image: "/images/purpose-1.svg",
      alt: "Create Your Profile",
      title: "Create Your Profile",
      description:
        "Download the app and build your intentional profile reflecting your values, goals, and vision for marriage",
      action: { label: "Get the App", href: "/join" },
    },
    {
      image: "/images/purpose-2.svg",
      alt: "Learn and Grow",
      title: "Learn and Grow",
      description:
        "Access mentorship, relationship education, and personal development resources designed to help you build a successful and meaningful marriage.",
      action: { label: "Explore Resources", href: "/about" },
    },
    {
      image: "/images/purpose-3.svg",
      alt: "Connect with Purpose",
      title: "Connect with Purpose",
      description:
        "Enter guided matchmaking designed to create meaningful, values-aligned connections for long-term commitment ",
      action: { label: "Start Your Journey", href: "/join" },
    },
  ],
};

export const JOIN_CTA_BANNER = {
  title: "Ready To Begin your guided journey?",
  subtitle:
    "Access our full range of features through the SMWAL mobile application.",
  primary: { label: "Get the App", href: "/join" },
  secondary: { label: "Join the community", href: "/donate" },
  image: { src: "/images/cta-banner.jpg", alt: "Happy couple" },
}; 