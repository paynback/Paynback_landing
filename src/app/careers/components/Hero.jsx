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
      imageWrapperClassName="h-[260px] w-[260px] sm:h-[340px] sm:w-[340px] lg:h-[380px] lg:w-[380px]"
    />
  );
}

