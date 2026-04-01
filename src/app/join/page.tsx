import JoinHero from "@/features/join/sections/JoinHero";
import JoinStats from "@/features/join/sections/JoinStats";
import JoinExperience from "@/features/join/sections/JoinExperience";
import CtaBanner from "@/features/home/sections/CtaBanner";
import Pricing from "@/features/home/sections/Pricing";
import Journey from "@/features/home/sections/Journey";
import JoinCraBanner from "@/features/join/sections/JoinCtaBanner";
import Footer from "@/components/site/Footer";


export default function JoinPage() {
  return (
    <>
      <JoinHero />
      <Journey />
      {/* <JoinStats /> */}
      <JoinExperience />
      <Pricing />
      {/* <CtaBanner /> */}
      <JoinCraBanner/>
      <Footer />
      
    </>
  );
}
