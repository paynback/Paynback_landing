"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
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

  return (
    <header
      className={cn(
        "flex flex-col gap-3 pt-5 pb-2 sm:pt-6 lg:pt-8",
        className,
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
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur-sm lg:hidden"
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
          className="flex flex-col gap-1 rounded-xl bg-white/10 p-3 backdrop-blur-md lg:hidden"
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
          "-mx-1 flex gap-5 overflow-x-auto px-1 pb-1 text-sm font-medium text-white/90 sm:gap-6 lg:hidden",
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
    </header>
  );
}
