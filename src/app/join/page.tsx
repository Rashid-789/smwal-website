import JoinHero from "@/features/join/sections/JoinHero";
import JoinStats from "@/features/join/sections/JoinStats";
import JoinExperience from "@/features/join/sections/JoinExperience";
import CtaBanner from "@/features/home/sections/CtaBanner"; 

export default function JoinPage() {
  return (
    <>
      <JoinHero />
      <JoinStats />
      <JoinExperience />
      <CtaBanner />
    </>
  );
}
