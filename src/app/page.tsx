import Hero from "@/features/home/sections/Hero";
import Purpose from "@/features/home/sections/Purpose";
import Journey from "@/features/home/sections/Journey";
import CommunityImpact from "@/features/home/sections/CommunityImpact";
import Experience from "@/features/home/sections/Experience";
import Hangouts from "@/features/home/sections/Hangouts";
import Pricing from "@/features/home/sections/Pricing";
import CtaBanner from "@/features/home/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Purpose />
      <Journey />
      <CommunityImpact />
      <Experience />
      <Hangouts />
      <Pricing />
      <CtaBanner />
      {/* footer already in layout */}
    </>
  );
}