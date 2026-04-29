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
      action: { label: "View Plans", href: "#pricing" },
    },
    {
      image: "/images/purpose-5.svg",
      alt: "Mentorship and education",
      title: "Mentorship & Education",
      description:
        "Access mentorship, relationship education, and personal development resources designed to help you build a successful and meaningful marriage.",
      action: { label: "Explore Resources", href: "#explore" },
    },
    {
      image: "/images/purpose-7.svg",
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

export const HOME_GROW_WITH_PURPOSE = {
  pill: "Grow with Purpose",
  title:
    "Access structured lessons designed to guide you toward meaningful and intentional relationships.",
  subtitle:
    "Join ministry-led hangouts, teaching nights, and guided community gatherings designed to build meaningful connections in a respectful and faith-centered environment. ",
  cta: { label: "View All Lessons", href: "/learn" },
  bookCta: { label: "Buy the Book", href: "#" },
  events: [
    {
      slug: "understanding-intentional-relationships",
      image: "/images/grow-1.svg",
      background: "/images/grow-5-bg.svg",
      alt: "Community Hangout",
      title: "Understanding Intentional Relationships",
      summary:
        "Learn the foundations of building purposeful and accountable connections.",
      type: "Audio Lesson",
      time: "10 minutes",
    },
    {
      slug: "preparing-for-marriage-mindfully",
      image: "/images/grow-2.svg",
      alt: "Community Hangout",
      title: "Preparing for Marriage Mindfully",
      summary: "Readiness and self-awareness shape healthy relationships.",
      type: "Video Lesson",
      time: "20 minutes",
    },
    {
      slug: "communication-with-integrity",
      image: "/images/grow-3.svg",
      alt: "Communication with Integrity",
      title: "Communication with Integrity",
      summary: "Explore honest communication in\nrelationships.",
      type: "Video Lesson",
      time: "25 minutes",
    },
  ],
};

export type LessonStatus = "not-started" | "in-progress" | "completed" | "UnSubscribed";

export type LessonOutlineItem = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  status: LessonStatus;
};

export type LessonOutlineDetail = {
  parentLessonSlug: string;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  status: LessonStatus;
  reflect: string;
  value: string;
  format: string;
  duration: string;
  keyTakeaways: string[];
  ctaLabel: string;
};

export type LessonContent = {
  slug: string;
  title: string;
  description: string;
  background: string;
  image: string;
  imageAlt: string;
  status: LessonStatus;
  type: "Audio Lesson" | "Video Lesson";
  duration: string;
  progress?: number;
  subtitle: string;
  value: string;
  format: string;
  learnPoints: string[];
  outline: LessonOutlineItem[];
};

export const LESSONS: { lessons: LessonContent[] } = {
  lessons: [
    {
      slug: "understanding-intentional-relationships",
      title: "Understanding Intentional Relationships",
      description:
        "Learn the foundations of building purposeful and accountable connections.",
      image: "/images/grow-1.svg",
      background: "/images/grow-5.svg",
      imageAlt: "Silhouettes riding bicycles at sunset",
     status: "UnSubscribed",
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
         status: "UnSubscribed",
        },
        {
          title: "Readiness and Self-Awareness",
          description:
            "Reflect on personal readiness and the role of emotional maturity.",
          image: "/images/grow-2.svg",
          imageAlt: "Lesson outline on self-awareness",
          status: "UnSubscribed",
        },
        {
          title: "Accountability in Connection",
          description:
            "Learn why guidance and accountability are central to healthy bonds.",
          image: "/images/grow-3.svg",
          imageAlt: "Lesson outline on accountability in relationships",
          status: "UnSubscribed",
        },
      ],
    },
    {
      slug: "navigating-conflict-with-compassion",
      title: "Navigating Conflict with Compassion",
      description: "Learn strategies for resolving disagreements with empathy.",
      image: "/images/grow-2.svg",
      background: "/images/grow-2.svg",
      imageAlt: "A smiling couple standing together outdoors",
      status: "UnSubscribed",
      type: "Audio Lesson",
      duration: "15 minutes",
      subtitle:
        "Grow your ability to navigate hard moments while preserving trust and dignity.",
      value: "Conflict Guidance",
      format: "Written and Audio",
      learnPoints: [
        "Responding without escalating tension",
        "Listening for emotion beneath the words",
        "Using compassion to restore connection",
      ],
      outline: [
        {
          title: "Conflict Triggers",
          description:
            "Identify common triggers that create unnecessary friction.",
          image: "/images/grow-2.svg",
          imageAlt: "Conflict trigger lesson card",
          status: "UnSubscribed",
        },
        {
          title: "Empathetic Listening",
          description:
            "Practice hearing your partner before defending yourself.",
          image: "/images/grow-3.svg",
          imageAlt: "Empathetic listening lesson card",
          status: "UnSubscribed",
        },
        {
          title: "Repair Conversations",
          description: "Learn how to move from hurt toward healthy resolution.",
          image: "/images/grow-1.svg",
          imageAlt: "Repair conversations lesson card",
          status: "UnSubscribed",
        },
      ],
    },
    {
      slug: "building-trust-through-vulnerability",
      title: "Building Trust through Vulnerability",
      description:
        "Discover the power of sharing your true self in relationships.",
      image: "/images/grow-3.svg",
      background: "/images/grow-3.svg",
      imageAlt: "Two people holding hands across a table",
      status: "UnSubscribed",
      type: "Audio Lesson",
      duration: "12 minutes",
      subtitle:
        "Explore how honesty, openness, and courage create deeper connection.",
      value: "Trust Building",
      format: "Written and Audio",
      learnPoints: [
        "Understanding safe vulnerability",
        "Sharing fears and hopes with wisdom",
        "Strengthening emotional security through honesty",
      ],
      outline: [
        {
          title: "What Vulnerability Is",
          description: "Separate healthy openness from emotional overexposure.",
          image: "/images/grow-3.svg",
          imageAlt: "What vulnerability is lesson card",
          status: "UnSubscribed",
        },
        {
          title: "Creating Safe Space",
          description: "Learn how safety and empathy invite honest sharing.",
          image: "/images/grow-1.svg",
          imageAlt: "Creating safe space lesson card",
          status: "UnSubscribed",
        },
        {
          title: "Mutual Trust",
          description: "Build habits that turn openness into dependable trust.",
          image: "/images/grow-2.svg",
          imageAlt: "Mutual trust lesson card",
          status: "UnSubscribed",
        },
      ],
    },
    {
      slug: "understanding-intentional-relationships",
      title: "Understanding Intentional Relationships",
      description:
        "Learn the foundations of building purposeful and accountable connections.",
      image: "/images/grow-1.svg",
      background: "/images/grow-5.svg",
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
          image: "/images/grow-2.svg",
          imageAlt: "Lesson outline on self-awareness",
          status: "not-started",
        },
        {
          title: "Accountability in Connection",
          description:
            "Learn why guidance and accountability are central to healthy bonds.",
          image: "/images/grow-3.svg",
          imageAlt: "Lesson outline on accountability in relationships",
          status: "not-started",
        },
      ],
    },
    {
      slug: "navigating-conflict-with-compassion",
      title: "Navigating Conflict with Compassion",
      description: "Learn strategies for resolving disagreements with empathy.",
      image: "/images/grow-2.svg",
      background: "/images/grow-2.svg",
      imageAlt: "A smiling couple standing together outdoors",
      status: "not-started",
      type: "Audio Lesson",
      duration: "15 minutes",
      subtitle:
        "Grow your ability to navigate hard moments while preserving trust and dignity.",
      value: "Conflict Guidance",
      format: "Written and Audio",
      learnPoints: [
        "Responding without escalating tension",
        "Listening for emotion beneath the words",
        "Using compassion to restore connection",
      ],
      outline: [
        {
          title: "Conflict Triggers",
          description:
            "Identify common triggers that create unnecessary friction.",
          image: "/images/grow-2.svg",
          imageAlt: "Conflict trigger lesson card",
          status: "not-started",
        },
        {
          title: "Empathetic Listening",
          description:
            "Practice hearing your partner before defending yourself.",
          image: "/images/grow-3.svg",
          imageAlt: "Empathetic listening lesson card",
          status: "not-started",
        },
        {
          title: "Repair Conversations",
          description: "Learn how to move from hurt toward healthy resolution.",
          image: "/images/grow-1.svg",
          imageAlt: "Repair conversations lesson card",
          status: "not-started",
        },
      ],
    },
    {
      slug: "building-trust-through-vulnerability",
      title: "Building Trust through Vulnerability",
      description:
        "Discover the power of sharing your true self in relationships.",
      image: "/images/grow-3.svg",
      background: "/images/grow-3.svg",
      imageAlt: "Two people holding hands across a table",
      status: "not-started",
      type: "Audio Lesson",
      duration: "12 minutes",
      subtitle:
        "Explore how honesty, openness, and courage create deeper connection.",
      value: "Trust Building",
      format: "Written and Audio",
      learnPoints: [
        "Understanding safe vulnerability",
        "Sharing fears and hopes with wisdom",
        "Strengthening emotional security through honesty",
      ],
      outline: [
        {
          title: "What Vulnerability Is",
          description: "Separate healthy openness from emotional overexposure.",
          image: "/images/grow-3.svg",
          imageAlt: "What vulnerability is lesson card",
          status: "not-started",
        },
        {
          title: "Creating Safe Space",
          description: "Learn how safety and empathy invite honest sharing.",
          image: "/images/grow-1.svg",
          imageAlt: "Creating safe space lesson card",
          status: "not-started",
        },
        {
          title: "Mutual Trust",
          description: "Build habits that turn openness into dependable trust.",
          image: "/images/grow-2.svg",
          imageAlt: "Mutual trust lesson card",
          status: "not-started",
        },
      ],
    },
    {
      slug: "cultivating-emotional-intelligence",
      title: "Cultivating Emotional Intelligence",
      description:
        "Develop skills to understand and manage your emotions in relationships.",
      image: "/images/grow-1.svg",
      background: "/images/grow-5.svg",
      imageAlt: "A couple walking in the mountains",
      status: "in-progress",
      type: "Video Lesson",
      duration: "30 minutes",
      progress: 40,
      subtitle:
        "Develop emotional awareness so your relationships grow with steadiness and maturity.",
      value: "Emotional Growth",
      format: "Video Lesson",
      learnPoints: [
        "Recognizing emotional patterns",
        "Responding instead of reacting",
        "Building emotional steadiness in partnership",
      ],
      outline: [
        {
          title: "Naming Emotions",
          description: "Learn to identify emotions before they shape behavior.",
          image: "/images/grow-1.svg",
          imageAlt: "Naming emotions lesson card",
          status: "completed",
        },
        {
          title: "Managing Reactions",
          description: "Practice regulation tools for difficult conversations.",
          image: "/images/grow-2.svg",
          imageAlt: "Managing reactions lesson card",
          status: "in-progress",
        },
        {
          title: "Relational Awareness",
          description: "Use emotional intelligence to support a healthier bond.",
          image: "/images/grow-3.svg",
          imageAlt: "Relational awareness lesson card",
          status: "not-started",
        },
      ],
    },
    {
      slug: "communication-with-integrity",
      title: "Communication with Integrity",
      description:
        "Mastering Empathetic Listening Skills and communication with integrity",
      image: "/images/grow-2.svg",
      background: "/images/grow-2.svg",
      imageAlt: "People holding hands outdoors",
      status: "in-progress",
      type: "Video Lesson",
      duration: "25 minutes",
      progress: 30,
      subtitle:
        "Build honest, respectful communication that reflects maturity and care.",
      value: "Communication Practice",
      format: "Video Lesson",
      learnPoints: [
        "Speaking honestly without harm",
        "Listening to understand before answering",
        "Practicing clarity, empathy, and respect",
      ],
      outline: [
        {
          title: "Honest Expression",
          description: "Learn to say what is true with wisdom and gentleness.",
          image: "/images/grow-2.svg",
          imageAlt: "Honest expression lesson card",
          status: "completed",
        },
        {
          title: "Empathetic Listening",
          description: "Focus on hearing both words and underlying needs.",
          image: "/images/grow-3.svg",
          imageAlt: "Empathetic listening lesson card",
          status: "in-progress",
        },
        {
          title: "Transparent Habits",
          description:
            "Build habits that keep communication consistent and safe.",
          image: "/images/grow-1.svg",
          imageAlt: "Transparent habits lesson card",
          status: "not-started",
        },
      ],
    },
    {
      slug: "preparing-for-marriage-mindfully",
      title: "Preparing for Marriage Mindfully",
      description:
        "Readiness and self-awareness shape healthy relationships.",
      image: "/images/grow-3.svg",
      background: "/images/grow-3.svg",
      imageAlt: "A close-up of hands holding outdoors",
      status: "in-progress",
      type: "Video Lesson",
      duration: "20 minutes",
      progress: 10,
      subtitle:
        "Reflect on readiness, values, and intentional preparation for lasting commitment.",
      value: "Marriage Preparation",
      format: "Video Lesson",
      learnPoints: [
        "Assessing readiness for commitment",
        "Clarifying values and expectations",
        "Preparing with intention instead of emotion alone",
      ],
      outline: [
        {
          title: "Readiness Check",
          description:
            "Examine emotional, spiritual, and practical readiness.",
          image: "/images/grow-3.svg",
          imageAlt: "Readiness check lesson card",
          status: "in-progress",
        },
        {
          title: "Shared Vision",
          description:
            "Learn to align expectations around marriage and family.",
          image: "/images/grow-2.svg",
          imageAlt: "Shared vision lesson card",
          status: "not-started",
        },
        {
          title: "Intentional Next Steps",
          description: "Create a thoughtful path toward a healthy commitment.",
          image: "/images/grow-1.svg",
          imageAlt: "Intentional next steps lesson card",
          status: "not-started",
        },
      ],
    },
    {
      slug: "managing-expectations-in-partnerships",
      title: "Managing Expectations in Partnerships",
      description:
        "Learn how to set clear, healthy expectations with your partner.",
      image: "/images/grow-1.svg",
      background: "/images/grow-5.svg",
      imageAlt: "A couple standing together outdoors",
      status: "in-progress",
      type: "Video Lesson",
      duration: "22 minutes",
      progress: 50,
      subtitle:
        "Discover how clarity and healthy expectations reduce confusion and resentment.",
      value: "Relational Clarity",
      format: "Video Lesson",
      learnPoints: [
        "Clarifying expectations early",
        "Preventing disappointment through healthy dialogue",
        "Aligning roles, needs, and boundaries",
      ],
      outline: [
        {
          title: "Expectation Mapping",
          description:
            "Surface hidden assumptions that shape relationship tension.",
          image: "/images/grow-1.svg",
          imageAlt: "Expectation mapping lesson card",
          status: "completed",
        },
        {
          title: "Boundary Conversations",
          description: "Learn to discuss needs and limits with confidence.",
          image: "/images/grow-2.svg",
          imageAlt: "Boundary conversations lesson card",
          status: "in-progress",
        },
        {
          title: "Shared Agreements",
          description: "Turn assumptions into healthy, mutual agreements.",
          image: "/images/grow-3.svg",
          imageAlt: "Shared agreements lesson card",
          status: "not-started",
        },
      ],
    },
    {
      slug: "cultivating-open-dialogue",
      title: "Communication with Integrity",
      description:
        "Cultivating a Culture of Open Dialogue and communication with integrity",
      image: "/images/grow-2.svg",
      background: "/images/grow-2.svg",
      imageAlt: "A couple sitting by a lake in the mountains",
      status: "completed",
      type: "Video Lesson",
      duration: "28 minutes",
      progress: 100,
      subtitle:
        "Strengthen connection through open dialogue that welcomes honesty and mutual respect.",
      value: "Open Dialogue",
      format: "Video Lesson",
      learnPoints: [
        "Creating space for honest dialogue",
        "Reducing defensiveness in hard conversations",
        "Building habits of openness and repair",
      ],
      outline: [
        {
          title: "Inviting Openness",
          description:
            "Create conversations where both people feel safe to speak.",
          image: "/images/grow-2.svg",
          imageAlt: "Inviting openness lesson card",
          status: "completed",
        },
        {
          title: "Handling Tension",
          description:
            "Stay engaged and respectful during uncomfortable moments.",
          image: "/images/grow-1.svg",
          imageAlt: "Handling tension lesson card",
          status: "completed",
        },
        {
          title: "Repair and Growth",
          description:
            "Use dialogue to heal disconnection and strengthen trust.",
          image: "/images/grow-3.svg",
          imageAlt: "Repair and growth lesson card",
          status: "completed",
        },
      ],
    },
    {
      slug: "fostering-trust-through-communication",
      title: "Communication with Integrity",
      description: "Fostering Trust Through Transparent Communication",
      image: "/images/grow-3.svg",
      background: "/images/grow-3.svg",
      imageAlt: "A couple dancing in a wooded area",
      status: "completed",
      type: "Video Lesson",
      duration: "25 minutes",
      progress: 100,
      subtitle:
        "See how clear, transparent communication builds steadiness and trust over time.",
      value: "Trust Through Clarity",
      format: "Video Lesson",
      learnPoints: [
        "Using consistency to deepen trust",
        "Communicating with transparency and care",
        "Repairing doubt through honest action",
      ],
      outline: [
        {
          title: "Trust Foundations",
          description:
            "Learn what makes communication feel reliable and safe.",
          image: "/images/grow-3.svg",
          imageAlt: "Trust foundations lesson card",
          status: "completed",
        },
        {
          title: "Consistency in Action",
          description: "Practice dependable communication habits every day.",
          image: "/images/grow-2.svg",
          imageAlt: "Consistency in action lesson card",
          status: "completed",
        },
        {
          title: "Trust Maintenance",
          description:
            "Protect trust through clarity, honesty, and follow-through.",
          image: "/images/grow-1.svg",
          imageAlt: "Trust maintenance lesson card",
          status: "completed",
        },
      ],
    },
  ],
};

function getLessonCtaLabel(status: LessonStatus) {
  if (status === "not-started") return "Start Learning";
  if (status === "in-progress") return "Resume Learning";
  if (status === "completed") return "Continue Learning";
  return "Unlock Lesson";
}

export function getLessonBySlug(slug: string): LessonContent | null {
  const matchingLessons = LESSONS.lessons.filter((lesson) => lesson.slug === slug);

  if (matchingLessons.length === 0) return null;

  return (
    matchingLessons.find((lesson) => lesson.status !== "UnSubscribed") ??
    matchingLessons[0]
  );
}

export function getLessonOutlineSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getLessonOutlineBySlugs(
  lessonSlug: string,
  outlineSlug: string,
): LessonOutlineDetail | null {
  const lesson = getLessonBySlug(lessonSlug);
  if (!lesson) return null;

  const outline = lesson.outline.find(
    (item) => getLessonOutlineSlug(item.title) === outlineSlug,
  );

  if (!outline) return null;

  return {
    parentLessonSlug: lesson.slug,
    slug: outlineSlug,
    title: outline.title,
    subtitle: outline.description,
    image: outline.image,
    imageAlt: outline.imageAlt,
    status: outline.status,
    reflect: `Take a moment to consider how "${outline.title}" can shape the way you approach intentional relationships.`,
    value: lesson.value,
    format: lesson.type === "Video Lesson" ? "Video" : lesson.format,
    duration: "4 minutes",
    keyTakeaways: [
      outline.description,
      `${lesson.value} begins with intentional clarity and consistency.`,
      "Commitment begins before connection.",
    ],
    ctaLabel: getLessonCtaLabel(outline.status),
  };
}



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
