"use client";

import GuidelinesSidebar from "@/components/legal/GuidelinesSidebar";

export default function GuidelinesLayout({ children }) {
  return (
    <main className="min-h-screen bg-[#080F18] font-sans text-white">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#1B519C] blur-[150px] opacity-20" />
        <div className="absolute top-[20%] right-[-5%] h-[400px] w-[400px] rounded-full bg-[#3E72E0] blur-[120px] opacity-15" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-32 sm:px-8 lg:pt-36">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10 xl:gap-16">
          <GuidelinesSidebar />
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </main>
  );
}
