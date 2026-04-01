import { Hero } from "@/components/sections/Hero";
import SmarterShopping from "@/components/sections/SmarterShopping";

/** Marketing landing at `/` — distinct from `/home`. */
export default function LandingPage() {
  return (
    <>
      <Hero />
      <SmarterShopping />
    </>
  );
}