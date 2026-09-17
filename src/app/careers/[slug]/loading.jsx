import SectionSkeleton from "@/components/ui/SectionSkeleton";

export default function CareerDetailLoading() {
  return (
    <main className="min-h-screen">
      <SectionSkeleton className="min-h-75 bg-black" ariaLabel="Loading job header" />
      <SectionSkeleton className="min-h-125" ariaLabel="Loading job details" />
    </main>
  );
}
