import { Manrope, Oswald } from "next/font/google";

/**
 * Typography source of truth:
 * - No explicit typography token/Figma font spec was found in this repo.
 * - `Manrope` matches the clean sans body style in the screenshots.
 * - `Oswald` matches the condensed, uppercase-heavy display headings.
 * Swap fonts here to update the whole app without touching section code.
 */
export const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const display = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
