import DonateHero from "@/features/donate/sections/DonateHero";
import Impact from "@/features/donate/sections/Impact";
import Contribution from "@/features/donate/sections/Contribution";
import Footer from "@/components/site/Footer";


export default function DonatePage() {
  return (
    <>
      <DonateHero />
      <Impact />
      <Contribution />
      <Footer/>
     
    </>
  );
}
