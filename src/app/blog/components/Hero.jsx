import CommonHero from "@/components/common/CommonHero";

export default function BlogHero() {
  return (
    <CommonHero
      title="Blogs"
      heading={
        <>
          <span className="whitespace-nowrap">Stories Behind the</span> <br />
          Screens
        </>
      }
      description="Where design meets strategy and real-world impact."
      imageSrc="/images/blog-hero-image.png"
      imageAlt="Blog Hero Image"
    />
  );
}

