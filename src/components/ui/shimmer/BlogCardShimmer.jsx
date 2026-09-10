"use client";

import { ShimmerText, ShimmerThumbnail, ShimmerTitle } from "react-shimmer-effects";
import { cn } from "@/lib/utils";

/** Shimmer placeholder matching BlogCard layout (221px cover + text block). */
export default function BlogCardShimmer({ className }) {
  return (
    <div
      className={cn(
        "flex w-full flex-col overflow-hidden bg-white",
        className,
      )}
      style={{
        borderRadius: "24px",
        boxShadow: "2px 2px 11px 0px rgba(0, 0, 0, 0.25)",
      }}
      aria-hidden="true"
    >
      <ShimmerThumbnail height={221} className="w-full shrink-0 rounded-none" />
      <div className="flex flex-col gap-4 p-6">
        <ShimmerTitle line={1} gap={10} />
        <ShimmerTitle line={1} gap={10} />
        <ShimmerText line={3} gap={10} />
      </div>
    </div>
  );
}
