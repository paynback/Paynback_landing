"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/Icons/Paynback_logo.png";

export const headerNavItems = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blogs" },
];

function navActive(pathname, href) {
  if (href === "/home")
    return pathname === "/home" || pathname.startsWith("/home/");
  return pathname === href || pathname.startsWith(`${href}/`);
}

function LogoMark() {
  return (
    <Link
      href="/"
      className="relative block h-11 w-[190px] shrink-0 sm:h-12 sm:w-[220px] lg:h-18 lg:w-[250px]"
      aria-label="PayNBack home"
    >
      <Image
        src={LOGO_SRC}
        alt="PayNBack"
        fill
        className="object-contain object-left"
        sizes="250px"
        priority
      />
    </Link>
  );
}

/**
 * Site header: logo, primary nav, contact CTA, mobile hamburger menu.
 */
export default function Header({
  className,
  navItems = headerNavItems,
  contactHref = "/contact",
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 30);
  });

  return (
    <>
      {/* Invisible spacer to prevent layout jumping when Header becomes deeply detached */}
      <div className="w-full shrink-0 h-[88px] sm:h-[96px] lg:h-[128px]" aria-hidden />

      {/* Wrapping fixed container so animation only affects the floating bar, not the centering axis */}
      <div
        className={cn(
          "fixed left-0 right-0 top-0 z-50 flex justify-center w-full transition-all duration-500 ease-in-out",
          isScrolled ? "pt-4 sm:pt-6" : "pt-0"
        )}
      >
        <motion.header
          layout
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
            layout: { type: "spring", stiffness: 400, damping: 30 }
          }}
          className={cn(
            "flex flex-col gap-3 transition-colors duration-500",
            isScrolled
              ? "w-[92%] sm:w-[85%] lg:w-[70%] max-w-4xl bg-black/65 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/20 py-3 sm:py-3.5 px-5 sm:px-8 rounded-full"
              : "w-full max-w-7xl pt-5 pb-2 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 bg-transparent rounded-none border-transparent",
            className
          )}
        >
          <div className="flex items-center justify-between gap-4">
            <LogoMark />

            {/* Desktop nav */}
            <nav
              className="hidden items-center gap-8 text-sm font-medium text-white/90 lg:flex lg:gap-14 xl:gap-24"
              aria-label="Primary"
            >
              {navItems.map(({ href, label }) => {
                const active = navActive(pathname, href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      "transition-colors hover:text-white",
                      active ? "font-semibold text-white" : "text-white/80",
                    )}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              {/* Contact CTA */}
              <Link
                href={contactHref}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-full bg-white px-3 py-2 sm:px-4 sm:py-2.5",
                  "text-xs sm:text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/10",
                  "transition hover:bg-white/95 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-sky-400",
                )}
              >
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-sky-500" strokeWidth={2.25} />
                Contact
              </Link>

              {/* Mobile hamburger */}
              <button
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur-sm lg:hidden transition-colors hover:bg-white/20"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" strokeWidth={2} />
                ) : (
                  <Menu className="h-5 w-5" strokeWidth={2} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile nav dropdown */}
          {mobileMenuOpen && (
            <nav
              className={cn(
                "flex flex-col gap-1 rounded-xl bg-white/10 p-3 backdrop-blur-md lg:hidden mt-2",
                isScrolled ? "bg-black/40 border border-white/5 shadow-inner" : ""
              )}
              aria-label="Primary mobile"
            >
              {navItems.map(({ href, label }) => {
                const active = navActive(pathname, href);
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "rounded-lg px-4 py-2.5 text-sm transition-colors hover:bg-white/10",
                      active
                        ? "font-semibold text-white bg-white/15"
                        : "text-white/80",
                    )}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          )}

          {/* Scrollable mobile nav — fallback for quick access */}
          <nav
            className={cn(
              "-mx-1 flex gap-5 overflow-x-auto px-1 pb-1 text-sm font-medium text-white/90 sm:gap-6 lg:hidden mt-1",
              mobileMenuOpen && "hidden",
            )}
            aria-label="Primary mobile scroll"
          >
            {navItems.map(({ href, label }) => {
              const active = navActive(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "shrink-0 whitespace-nowrap transition-colors hover:text-white",
                    active ? "font-semibold text-white" : "text-white/80",
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </motion.header>
      </div>
    </>
  );
}
