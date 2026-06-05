import CommonHero from "@/components/sections/CommonHero";

export default function MsmeHero() {
  return (
    <CommonHero
      title="MSME"
      heading={<span className="whitespace-nowrap">Amplify Sales</span>}
      description="Leverage our fintech ecosystem to grow visibility, trust, and long-term customer loyalty."
      imageSrc="/images/msme-hero-image.png"
      imageAlt="MSME Hero Image"
      imageWrapperClassName="h-[320px] w-[320px] sm:h-[380px] sm:w-[380px] lg:h-[480px] lg:w-[480px]"
    />
  );
}
