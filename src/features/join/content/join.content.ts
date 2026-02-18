export const JOIN = {
  hero: {
    title: "BEGIN YOUR GUIDED JOURNEY.",
    subtitle:
      "Access our full range of features through the SMWAL mobile application.",
    image: { src: "/images/join-hero.jpg", alt: "People having coffee" },
    primary: { label: "Download App", href: "#" },
    secondary: { label: "Contact Us", href: "/contact" },
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
    pill: "The Experience",
    title: "SUPPORTING MEANINGFUL CONNECTIONS\nTHROUGH GUIDANCE",
    subtitle:
      "SMWAL creates a safe, structured, mentorship-driven space for individuals to grow, prepare, and build meaningful connections.",
    cta: { label: "Join Our Community", href: "/join" },
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
  },
} as const;
