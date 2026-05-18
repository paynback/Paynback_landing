import CommonHero from "@/components/common/CommonHero";

export default function PartnerHero() {
  return (
    <CommonHero
      title="Partner"
      heading={<span className="whitespace-nowrap">Partner for Profit</span>}
      description="A growth-driven program offering high market exposure, structured training, and company-supported merchant pitching to help individuals scale and earn."
      imageSrc="/images/partner-hero-image.png"
      imageAlt="Partner Hero Image"
    />
  );
}

