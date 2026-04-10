"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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

function LogoMark({ isScrolled }) {
  return (
    <Link
      href="/"
      className={cn(
        "relative block shrink-0 transition-all duration-500",
        isScrolled
          ? "h-8 w-[140px] sm:h-9 sm:w-[160px] lg:h-10 lg:w-[180px]"
          : "h-11 w-[190px] sm:h-12 sm:w-[220px] lg:h-18 lg:w-[250px]"
      )}
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
  const [mounted, setMounted] = useState(false);

  const { scrollY } = useScroll();



  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 30);
  });

 if(pathname === "/") return null;

  return (
    <>


      {mounted && typeof document !== 'undefined' ? createPortal(
        <div
          className={cn(
            "fixed left-0 right-0 top-0 z-999 flex justify-center w-full transition-all duration-500 ease-in-out pointer-events-none",
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
              "flex flex-col gap-3 transition-all duration-500 pointer-events-auto",
              isScrolled
                ? "w-[92%] sm:w-[85%] lg:w-[70%] max-w-4xl bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/20 py-2 sm:py-2.5 px-4 sm:px-6 rounded-full"
                : "w-full max-w-7xl pt-5 pb-2 sm:pt-6 lg:pt-8 px-4 sm:px-6 lg:px-8 bg-transparent rounded-none border-transparent",
              className
            )}
          >
            <div className="flex items-center justify-between gap-4">
              <LogoMark isScrolled={isScrolled} />

              {/* Desktop nav */}
              <nav
                className={cn(
                  "hidden items-center font-medium text-white/90 lg:flex transition-all duration-500",
                  isScrolled 
                    ? "gap-6 text-xs lg:gap-10 xl:gap-16" 
                    : "gap-8 text-sm lg:gap-14 xl:gap-24"
                )}
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
                    "flex shrink-0 items-center justify-center gap-1.5 bg-white font-semibold text-slate-900 shadow-lg shadow-cyan-500/10 transition-all duration-500 hover:bg-white/95 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-sky-400",
                    isScrolled
                      ? "rounded-full px-2 py-1.5 sm:px-2 sm:py-1.5 text-[11px] sm:text-xs"
                      : "rounded-full px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm"
                  )}
                >
                  <Phone className={cn("text-sky-500 transition-all duration-500", isScrolled ? "h-3 w-3 sm:h-3.5 sm:w-3.5" : "h-3.5 w-3.5 sm:h-4 sm:w-4")} strokeWidth={2.25} />
                  Contact
                </Link>

                {/* Mobile hamburger */}
                <button
                  className={cn(
                    "flex items-center justify-center bg-white/10 text-white backdrop-blur-sm lg:hidden transition-all duration-500 hover:bg-white/20",
                    isScrolled ? "h-8 w-8 rounded-lg" : "h-10 w-10 rounded-lg"
                  )}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? (
                    <X className={isScrolled ? "h-4 w-4" : "h-5 w-5"} strokeWidth={2} />
                  ) : (
                    <Menu className={isScrolled ? "h-4 w-4" : "h-5 w-5"} strokeWidth={2} />
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
                "-mx-1 flex overflow-x-auto px-1 pb-1 font-medium text-white/90 lg:hidden mt-1 transition-all duration-500",
                isScrolled ? "gap-4 sm:gap-5 text-xs" : "gap-5 sm:gap-6 text-sm",
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
      , document.body) : null}
    </>
  );
}
