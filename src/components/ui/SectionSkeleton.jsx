import { cn } from "@/lib/utils";

/**
 * Lightweight reserved-height placeholder for dynamically imported sections (reduces CLS).
 */
export default function SectionSkeleton({ className = "", ariaLabel = "Loading content" }) {
  return (
    <div
      className={cn(
        "w-full animate-pulse bg-slate-100/80 dark:bg-slate-800/40",
        className,
      )}
      role="status"
      aria-label={ariaLabel}
    />
  );
}
