import CommonHero from "@/components/sections/CommonHero";

export default function ContactHero() {
  return (
    <CommonHero
      title="Contact Us"
      heading={
        <>
          <span className="whitespace-nowrap">We’d Love to Hear</span> <br />
          From You
        </>
      }
      description="Reach out to our team and we’ll respond as quickly as possible."
      imageSrc="/images/contact-hero-image.png"
      imageAlt="Contact Hero Image"
    />
  );
}
