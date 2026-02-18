import DonateHero from "@/features/donate/sections/DonateHero";
import Impact from "@/features/donate/sections/Impact";
import Contribution from "@/features/donate/sections/Contribution";
import CtaBanner from "@/features/home/sections/CtaBanner"; 

export default function DonatePage() {
  return (
    <>
      <DonateHero />
      <Impact />
      <Contribution />
      <CtaBanner />
    </>
  );
}
