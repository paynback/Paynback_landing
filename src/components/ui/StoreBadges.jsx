"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function StoreBadges({ className }) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 shadow-sm backdrop-blur-md",
        className
      )}
    >
      {/* Google Play Store Icon (Flat Color) */}
      <a
        href="https://play.google.com/store/apps/details?id=com.paynback.userapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get it on Google Play"
        className="flex w-7 sm:w-8 items-center justify-center transition-transform hover:scale-110 active:scale-95"
      >
        <Image
          src="/Icons/playstore-svgrepo-com.svg"
          alt="Google Play icon"
          width={36}
          height={36}
          className="h-5 w-5 sm:h-6 sm:w-6 drop-shadow-md object-contain"
        />
      </a>

      {/* Tiny Vertical Line Separator */}
      <div className="mx-3 sm:mx-4 h-4 sm:h-5 w-px rounded-full bg-white/20" />

      {/* App Store Icon (Flat Color) */}
      <a
        href="https://apps.apple.com/in/app/PayNback/id6751259946"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on the App Store"
        className="flex w-7 sm:w-8 items-center justify-center transition-transform hover:scale-110 active:scale-95"
      >
        <Image
          src="/Icons/app-store-rounded-icon.svg"
          alt="Apple App Store icon"
          width={36}
          height={36}
          className="h-7 w-7 sm:h-8 sm:w-8 drop-shadow-md object-contain"
        />
      </a>
    </div>
  );
}
