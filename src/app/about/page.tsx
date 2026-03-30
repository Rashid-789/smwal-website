import Footer from "@/components/site/Footer";
import AboutHero from "@/features/about/sections/AboutHero";
import HowBegan from "@/features/about/sections/HowBegan";
import Team from "@/features/about/sections/Team";
import CommunityImpact from "@/features/home/sections/CommunityImpact";
import Experience from "@/features/home/sections/Experience";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <HowBegan />
      <Team />
      <CommunityImpact />
      <Experience />
      
      <Footer />
    </>
  );
}
