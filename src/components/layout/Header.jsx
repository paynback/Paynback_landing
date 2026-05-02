"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/Icons/Paynback_logo.png";
const LOGO_SRC_LIGHT = "/Icons/Paynbacklogo_for_whitebg.png";

const headerNavItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blogs" },
  { href: "/careers", label: "Careers" },
  { href: "/msme", label: "For MSME" }
];

function navActive(pathname, href) {
  if (href === "/")
    return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function LogoMark({ isScrolled, isLight }) {
  return (
    <Link
      href="/"
      className={cn(
        "relative block shrink-0 transition-all duration-500",
        isScrolled
          ? "h-8 w-[140px] sm:h-9 sm:w-[160px] lg:h-10 lg:w-[180px]"
          : "h-11 w-[190px] sm:h-12 sm:w-[220px] lg:h-18 lg:w-[250px]"
      )}
      aria-label="PayNback home"
    >
      <Image
        src={isLight ? LOGO_SRC_LIGHT : LOGO_SRC}
        alt="PayNback"
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
  theme = "dark",
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

  const isLight = theme === "light";
  const useWhiteNavbar = isLight;

  return (
    <>


      {mounted && typeof document !== 'undefined' ? createPortal(
        <>
          <div
            className={cn(
              "fixed left-0 right-0 top-0 z-990 flex justify-center w-full transition-all duration-500 ease-in-out pointer-events-none",
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
                  ? cn(
                    "w-[92%] sm:w-[85%] lg:w-[70%] max-w-4xl backdrop-blur-xl py-2 sm:py-2.5 px-6 sm:px-6 rounded-full",
                    useWhiteNavbar
                      ? "bg-white/95 border border-black/10 shadow-[0_10px_30px_rgba(15,23,42,0.16)]"
                      : "bg-black/60 shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10"
                  )
                  : cn(
                    "w-full max-w-7xl pt-5 pb-2 sm:pt-6 lg:pt-8 px-6 sm:px-6 lg:px-8 rounded-none",
                    useWhiteNavbar ? "bg-white border-b border-black/10" : "bg-transparent border-transparent"
                  ),
                className
              )}
            >
              <div className="flex items-center justify-between gap-4">
                <LogoMark isScrolled={isScrolled} isLight={useWhiteNavbar} />

                {/* Desktop nav */}
                <nav
                  className={cn(
                    "hidden items-center font-medium lg:flex transition-all duration-500",
                    useWhiteNavbar ? "text-black/90" : "text-white/90",
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
                          "relative z-0 transition-all duration-300",
                          useWhiteNavbar ? "hover:text-black" : "hover:text-white",
                          active
                            ? cn(
                              useWhiteNavbar ? "font-semibold text-black" : "font-semibold text-white",
                              "before:absolute before:-inset-x-2 before:-inset-y-2 before:-z-10 before:rounded-full before:bg-[#87B3E0] before:blur-lg"
                            )
                            : useWhiteNavbar
                              ? "text-black/80"
                              : "text-white/80",
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
                      "hidden lg:flex shrink-0 items-center justify-center gap-1.5 bg-white font-semibold text-slate-900 shadow-lg shadow-cyan-500/10 transition-all duration-500 hover:bg-white/95 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-sky-400",
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
                      "flex items-center justify-center backdrop-blur-sm lg:hidden transition-all duration-500",
                      useWhiteNavbar
                        ? "bg-black/5 text-black hover:bg-black/10 border border-black/10"
                        : "bg-white/10 text-white hover:bg-white/20",
                      isScrolled ? "h-8 w-8 rounded-lg" : "h-10 w-10 rounded-lg"
                    )}
                    onClick={() => setMobileMenuOpen(true)}
                    aria-label="Toggle navigation menu"
                  >
                    <Menu className={isScrolled ? "h-4 w-4" : "h-5 w-5"} strokeWidth={2} />
                  </button>
                </div>
              </div>
            </motion.header>
          </div>

          {/* Mobile Full Screen Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="fixed inset-0 z-1000 bg-white flex flex-col pointer-events-auto min-h-screen w-full lg:hidden"
              >
                <div className="flex justify-between items-center p-6 sm:p-8">
                  <div className="w-8" /> {/* spacer for flex balance if needed, or leave empty */}
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 transition-opacity hover:opacity-70"
                    aria-label="Close menu"
                  >
                    <X className="h-8 w-8 text-black" strokeWidth={2.5} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 sm:px-10 pb-20 mt-4">
                  <div className="flex flex-col gap-6 text-black">

                    {navItems.map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between font-medium text-[22px] tracking-tight transition-opacity hover:opacity-70"
                      >
                        {label}
                      </Link>
                    ))}

                    <div className="h-px w-full bg-gray-300/60 my-2" />

                    <Link
                      href={contactHref}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between font-medium text-[22px] tracking-tight transition-opacity hover:opacity-70"
                    >
                      Contact Us
                    </Link>

                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
        , document.body) : null}
    </>
  );
}
