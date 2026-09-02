"use client";

import { ShimmerThumbnail } from "react-shimmer-effects";
import { cn } from "@/lib/utils";

/** Single animated shimmer bar (uses react-shimmer-effects `.shimmer` animation). */
function ShimmerBar({ className, style }) {
  return (
    <div
      className={cn("shimmer rounded-full", className)}
      style={style}
      aria-hidden="true"
    />
  );
}

/** Shimmer placeholder matching Team MemberCard (photo + caption with projected text bars). */
export default function TeamCardShimmer({ className }) {
  return (
    <div
      className={cn(
        "relative aspect-4/5 shrink-0 overflow-hidden rounded-2xl bg-slate-200",
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 [&_.shimmer-thumbnail]:mb-0 [&_.shimmer-thumbnail]:h-full [&_.shimmer-thumbnail]:min-h-full [&_.shimmer-thumbnail]:rounded-none">
        <ShimmerThumbnail height={320} fitOnFrame className="h-full w-full" />
      </div>

      {/* Caption — white panel; each text row is its own animated shimmer bar (like BlogCardShimmer) */}
      <div className="absolute bottom-3 left-3 right-3 flex flex-col items-center gap-3 rounded-xl border border-gray-100 bg-white p-3 text-center shadow-lg">
        <ShimmerBar className="h-6 w-[88%] max-w-[200px]" />
        <ShimmerBar className="h-3.5 w-[58%] max-w-[130px]" />
      </div>
    </div>
  );
}
