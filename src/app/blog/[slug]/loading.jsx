import SectionSkeleton from "@/components/ui/SectionSkeleton";

export default function BlogDetailLoading() {
  return (
    <main className="min-h-screen">
      <SectionSkeleton className="min-h-[380px] bg-black" ariaLabel="Loading article header" />
      <SectionSkeleton className="min-h-[500px]" ariaLabel="Loading article content" />
    </main>
  );
}
