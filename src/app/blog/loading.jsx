import SectionSkeleton from "@/components/ui/SectionSkeleton";

export default function BlogLoading() {
  return (
    <main className="min-h-screen">
      <SectionSkeleton className="min-h-screen bg-black" ariaLabel="Loading blog hero" />
      <SectionSkeleton className="min-h-[600px]" ariaLabel="Loading blog list" />
    </main>
  );
}
