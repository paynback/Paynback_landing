import { cn } from "@/lib/utils";

/** Soft multi-stop alpha ramp so content eases in/out at both edges */
export const EDGE_FADE_MASK = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 2.5%, rgba(0,0,0,0.55) 5%, rgba(0,0,0,0.85) 7.5%, #000 10%, #000 90%, rgba(0,0,0,0.85) 92.5%, rgba(0,0,0,0.55) 95%, rgba(0,0,0,0.2) 97.5%, transparent 100%)",
  maskImage:
    "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 2.5%, rgba(0,0,0,0.55) 5%, rgba(0,0,0,0.85) 7.5%, #000 10%, #000 90%, rgba(0,0,0,0.85) 92.5%, rgba(0,0,0,0.55) 95%, rgba(0,0,0,0.2) 97.5%, transparent 100%)",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskSize: "100% 100%",
  maskSize: "100% 100%",
};

function edgeGradient(direction, fadeColor) {
  return `linear-gradient(${direction}, ${fadeColor} 0%, color-mix(in srgb, ${fadeColor} 75%, transparent) 35%, color-mix(in srgb, ${fadeColor} 30%, transparent) 70%, transparent 100%)`;
}

/**
 * Left/right gradient overlays that blend into the page background.
 * @param {string} fadeColor - CSS color (e.g. `var(--background)` or `#F2F2F2`)
 */
export function EdgeFadeOverlays({
  fadeColor = "var(--background)",
  className = "",
}) {
  return (
    <>
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-14 md:w-16",
          className,
        )}
        style={{ background: edgeGradient("to right", fadeColor) }}
        aria-hidden
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-14 md:w-16",
          className,
        )}
        style={{ background: edgeGradient("to left", fadeColor) }}
        aria-hidden
      />
    </>
  );
}

const MODE_CLASSES = {
  continuous: {
    mask: "",
    overlay: "",
  },
  /** Fade while horizontally scrollable; off from sm+ (Team grid) */
  "scroll-until-sm": {
    mask: "sm:[mask-image:none] sm:[-webkit-mask-image:none]",
    overlay: "sm:hidden",
  },
  /** Fade while horizontally scrollable; off from md+ (DiscoverDeals grid) */
  "scroll-until-md": {
    mask: "md:[mask-image:none] md:[-webkit-mask-image:none]",
    overlay: "md:hidden",
  },
};

/**
 * Horizontal edge fade for marquees and snap carousels.
 *
 * @param {"continuous" | "scroll-until-sm" | "scroll-until-md"} mode
 * @param {string} fadeColor - Match the section background so edges blend cleanly
 */
export default function EdgeFade({
  children,
  className = "",
  fadeColor = "var(--background)",
  mode = "continuous",
  style,
  ...props
}) {
  const modeClasses = MODE_CLASSES[mode] ?? MODE_CLASSES.continuous;

  return (
    <div
      className={cn("relative overflow-hidden", modeClasses.mask, className)}
      style={{ ...EDGE_FADE_MASK, ...style }}
      {...props}
    >
      <EdgeFadeOverlays fadeColor={fadeColor} className={modeClasses.overlay} />
      {children}
    </div>
  );
}
