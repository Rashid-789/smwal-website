import { Bebas_Neue } from "next/font/google";

const sectionHeadingFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const SECTION_HEADING_FONT_CLASS = sectionHeadingFont.className;

export const SECTION_HEADING_CLASS = `${sectionHeadingFont.className} text-[50px] font-normal uppercase leading-[0.95] tracking-[0.01em] text-white sm:text-[60px] md:text-[68px] lg:text-[48px]`;

export const SECTION_SUBHEADING_CLASS =
  "text-[16px] font-normal leading-[1.35] text-white/95 sm:text-[17px] md:text-[20px]";
