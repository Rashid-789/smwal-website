import Hero from "@/features/home/sections/Hero";
import Purpose from "@/features/home/sections/Purpose";
import Journey from "@/features/home/sections/Journey";
import CommunityImpact from "@/features/home/sections/CommunityImpact";
import Experience from "@/features/home/sections/Experience";
import Hangouts from "@/features/home/sections/Hangouts";
import Pricing from "@/features/home/sections/Pricing";
import CtaBanner from "@/features/home/sections/CtaBanner";
import OurMissionPurposeCard from "@/features/home/components/OurMissionPurposeCard";
import HomeOurMissionPurpose from "@/features/home/sections/HomeOurMissionPurpose";
import ContactHero from "@/features/contact/sections/ContactHero";
import Footer from "@/features/home/components/Footer";
import HomeGrowWithPurpose from "@/features/home/sections/HomeGrowWithPurpose";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <HomeOurMissionPurpose/> */}
      <Purpose />
      {/* <Journey /> */}
      {/* <CommunityImpact /> */}
      {/* <Experience /> */}
      <Hangouts />
      <HomeGrowWithPurpose />
      <Pricing />
      <CtaBanner />
      <ContactHero />
      <Footer/>
      {/* footer already in layout */}
    </>
  );
}