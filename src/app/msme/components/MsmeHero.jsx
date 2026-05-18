import CommonHero from "@/components/common/CommonHero";

export default function MsmeHero() {
  return (
    <CommonHero
      title="MSME"
      heading={<span className="whitespace-nowrap">Amplify Sales</span>}
      description="Leverage our fintech ecosystem to grow visibility, trust, and long-term customer loyalty."
      imageSrc="/images/msme-hero-image.png"
      imageAlt="MSME Hero Image"
      imageWrapperClassName="h-[260px] w-[260px] sm:h-[340px] sm:w-[340px] lg:h-[380px] lg:w-[380px]"
    />
  );
}
