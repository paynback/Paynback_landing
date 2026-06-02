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
      imageWrapperClassName="h-[360px] w-[360px] sm:h-[440px] sm:w-[440px] lg:h-[560px] lg:w-[560px]"
    />
  );
}

