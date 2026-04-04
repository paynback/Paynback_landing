"use client"

import { WhyChoose } from "@/components/sections/ChoseUs";
import { Hero } from "@/components/sections/Hero";
import SmarterShopping from "@/components/sections/SmarterShopping";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <SmarterShopping />
      <WhyChoose />
    </>
  );
};

export default LandingPage;