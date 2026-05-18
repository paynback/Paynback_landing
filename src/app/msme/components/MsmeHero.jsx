import CommonHero from "@/components/common/CommonHero";

export default function MsmeHero() {
  return (
    <CommonHero
      title="MSME"
      heading={<span className="whitespace-nowrap">Amplify Sales</span>}
      description="Leverage our fintech ecosystem to grow visibility, trust, and long-term customer loyalty."
      imageSrc="/images/msme-hero-image.png"
      imageAlt="MSME Hero Image"
      imageWidth={520}
      imageHeight={520}
      imageWrapperClassName="h-[360px] w-[360px] sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]"
      imageClassName="drop-shadow-[0_15px_35px_rgba(255,255,255,0.15)]"
    />
  );
}