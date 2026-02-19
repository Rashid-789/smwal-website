export const HOME_HERO = {
  titleLines: ["BUILDING MEANINGFUL", "CONNECTIONS WITH PURPOSE."],
  subtitle:
    "SMWAL is more than just a platform; it’s a mission to foster intentional relationships through guided matchmaking, mentorship, and faith-aligned growth.",
  ctas: {
    primary: { label: "Join the Platform", href: "/join" },
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
      action: { label: "Learn More", href: "/about" },
    },
    {
      image: "/images/purpose-2.svg",
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
