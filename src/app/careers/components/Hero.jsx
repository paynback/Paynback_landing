import CommonHero from "@/components/common/CommonHero";

export default function CareersHero() {
  return (
    <CommonHero
      title="Careers"
      heading={
        <>
          <span className="whitespace-nowrap">Build the Future</span> <br />
          With Us
        </>
      }
      description="Be part of a culture that values creativity, collaboration, and innovation."
      imageSrc="/images/career-hero-image.png"
      imageAlt="Careers Hero Image"
      imageWidth={600}
      imageHeight={600}
      imageWrapperClassName="h-[400px] w-[400px] sm:h-[480px] sm:w-[480px] lg:h-[600px] lg:w-[600px]"
      imageClassName="drop-shadow-[0_15px_35px_rgba(255,255,255,0.15)]"
    />
  );
}

