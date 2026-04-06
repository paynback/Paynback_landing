"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/Icons/Paynback_logo.png";

export const headerNavItems = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/msme", label: "MSME" },
  { href: "/blogs", label: "Blogs" },
  { href: "/careers", label: "Careers" },
];

function navActive(pathname, href) {
  if (href === "/home")
    return pathname === "/home" || pathname.startsWith("/home/");
  return pathname === href || pathname.startsWith(`${href}/`);
}

function LogoMark() {
  return (
    <Link
      href="/home"
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
 * Site header: logo, primary nav, contact CTA, mobile nav row.
 * @param {{ className?: string; navItems?: { href: string; label: string }[]; contactHref?: string }}=} props
 */
export default function Header({
  className,
  navItems = headerNavItems,
  contactHref = "/contact",
}) {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "flex flex-col gap-3 pt-5 pb-2 sm:pt-6 lg:pt-8",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <LogoMark />

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

        <Link
          href={contactHref}
          className={cn(
            "flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2.5",
            "text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/10",
            "transition hover:bg-white/95 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-sky-400",
          )}
        >
          <Phone className="h-4 w-4 text-sky-500" strokeWidth={2.25} />
          Contact
        </Link>
      </div>

      <nav
        className="-mx-1 flex gap-5 overflow-x-auto px-1 pb-1 text-md font-medium text-white/90 sm:gap-6 lg:hidden"
        aria-label="Primary mobile"
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
