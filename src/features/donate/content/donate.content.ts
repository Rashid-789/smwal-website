export const DONATE = {
  hero: {
    title: "YOUR SUPPORT FUELS OUR\nCOMMUNITY.",
    subtitle:
      "Donations directly support mentorship programs, educational resources, and the technological growth of our platform.",
    image: { src: "/images/donate-hero.jpg", alt: "Community gathering" },
    primary: { label: "Donate Now", href: "#contribute" },
    secondary: { label: "Get the App", href: "/join" },
  },

  impact: {
    pill: "Your Impact",
    title: "SUPPORTING MEANINGFUL CONNECTIONS THROUGH GUIDANCE",
    subtitle:
      "Every contribution to SMWAL helps create a safe, structured, and mentorship-driven environment where individuals can prepare for and build\nlasting marriages rooted in shared values and purpose.",
    cta: { label: "Join Our Community", href: "/join" },
    image: { src: "/images/donate-impact.png", alt: "Couple outdoors" },
    cards: [
      {
        title: "Mentorship Programs",
        desc: "Donations help provide guidance, counseling, and mentorship resources that prepare individuals for successful marriages.",
        icon: "mentor",
      },
      {
        title: "Guided Matchmaking",
        desc: "Your support helps develop a matchmaking system focused on compatibility and long-term commitment.",
        icon: "match",
      },
      {
        title: "Community & Education",
        desc: "Contributions allow us to create educational resources, events, and community initiatives that strengthen relationships and families.",
        icon: "community",
      },
    ] as const,
  },

  contribution: {
    title: "MAKE A CONTRIBUTION",
    subtitle:
      "Choose an amount to support the SMWAL mission. All donations are handled securely via Stripe.",
    label: "Custom Amount",
    note:
      "Even a small contribution helps someone find a meaningful and lasting marriage.",
    quick: [10, 23, 50, 100] as const,
    button: "Donate Via Stripe",
  },
} as const;
