import SectionSkeleton from "@/components/ui/SectionSkeleton";

export default function CareerDetailLoading() {
  return (
    <main className="min-h-screen">
      <SectionSkeleton className="min-h-[300px] bg-black" ariaLabel="Loading job header" />
      <SectionSkeleton className="min-h-[500px]" ariaLabel="Loading job details" />
    </main>
  );
}
