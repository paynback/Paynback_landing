"use client";

import BlogCardShimmer from "./BlogCardShimmer";
import TeamCardShimmer from "./TeamCardShimmer";

export { BlogCardShimmer, TeamCardShimmer };

/**
 * Reusable grid of shimmer card placeholders.
 * @param {"blog" | "team"} variant
 * @param {number} count
 * @param {string} className — grid wrapper classes
 * @param {string} itemClassName — per-card classes (width/aspect)
 */
export function ShimmerCardGrid({
  variant = "blog",
  count = 6,
  className = "",
  itemClassName = "",
}) {
  const Card = variant === "team" ? TeamCardShimmer : BlogCardShimmer;

  return (
    <div className={className} role="status" aria-label="Loading content">
      {[...Array(count)].map((_, i) => (
        <Card key={i} className={itemClassName} />
      ))}
    </div>
  );
}
