export const ABOUT = {
  hero: {
    title: "ABOUT SMWAL",
    subtitle:
      "A mission-driven platform dedicated to helping individuals build meaningful, guided, and faith-centered marriages through mentorship, education, and intentional connections.",
    image: { src: "/images/about-hero.jpg", alt: "People collaborating and smiling" },
    primary: { label: "Get the App", href: "#" },
    secondary: { label: "Support the Mission", href: "/donate" },
  },

  began: {
    title: "OUR  STORY",
    body:
      "SMWAL was created with a simple but powerful vision - to help individuals build meaningful and lasting marriages through guidance, preparation, and shared values.\nIn a world of fast and often superficial connections, we saw the need for a structured and intentional approach to marriage. One that supports personal growth, mentorship, and compatibility before commitment. Today, SMWAL continues to grow as a trusted space for those seeking meaningful relationships and strong foundations for lifelong partnership.",
    image: { src: "/images/about-began.png", alt: "Happy group photo" },
  },

  team: {
    title: "GET TO KNOW US",
    subtitle:
      "SMWAL is built by a dedicated team committed to strengthening marriages and supporting individuals on their journey toward meaningful partnerships.",
    cta: {
      label: "Explore Vendors",
      intro:
        "SMWAL partners with a curated network of vendors who bring their expertise and services to life at every event and hangout. Whether it’s food, entertainment, or experiences — our vendors make every gathering unforgettable.",
      href: "https://www.youtube.com/watch?v=MFSS3TwGEng&list=PLWzZf6NFIkpjrIXLRhXmIS4HktRSLRX21",
    },
    members: [
      {
        name: "Max Hunter",
        role: "Founder & Vision Lead",
        email: "Max@smwal.com",
        image: "/images/team-1.png",
      },
      {
        name: "Ella Hunter-Ross",
        role: "Community & Partnerships",
        email: "Ella@smwal.com",
        image: "/images/team-2.png",
      },
      {
        name: "Oliver Hunter",
        role: "Platform & Experience",
        email: "Oliver@smwal.com",
        image: "/images/team-3.png",
      },
    ],
  },
} as const;
