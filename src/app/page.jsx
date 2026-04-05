import { WhyChoose } from "@/components/sections/ChoseUs";
import { Hero } from "@/components/sections/Hero";
import SmarterShopping from "@/components/sections/SmarterShopping";
import { HowItWorks } from "@/components/sections/StepsJoin";
import DownloadApp from "@/components/sections/DownloadAppFinal";
import Activities from "@/components/sections/Activities";

/** Marketing landing at `/` — distinct from `/home`. */
export default function LandingPage() {
  return (
    <>
      <Hero /> 
      <SmarterShopping />
      <WhyChoose />
      <HowItWorks />
      <DownloadApp />
      <Activities />
    </>
  );
}

