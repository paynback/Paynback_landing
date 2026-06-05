import CommonHero from "@/components/sections/CommonHero";

export default function AboutHero() {
  return (
    <CommonHero
      title="About Us"
      heading={<span className="whitespace-nowrap">Vision & Mission</span>}
      description="To be the leading platform for seamless, secure, and rewarding cashless shopping worldwide."
      imageSrc="/images/aboutus-hero-image.png"
      imageAlt="About Hero Image"
    />
  );
}

