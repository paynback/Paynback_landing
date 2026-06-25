"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { FileText, Shield, ScrollText, Store } from "lucide-react";

export const GUIDELINE_LINKS = [
  { label: "Terms & Conditions", href: "/terms", icon: ScrollText },
  { label: "Privacy Policy", href: "/privacy", icon: Shield },
  { label: "Refund Policy", href: "/terms#refund-policy", icon: FileText },
  { label: "Merchant Terms", href: "/merchant-terms", icon: Store },
];

function resolveActiveHref(pathname, hash) {
  if (pathname === "/privacy") return "/privacy";
  if (pathname === "/merchant-terms") return "/merchant-terms";
  if (pathname === "/terms") {
    return hash === "#refund-policy" ? "/terms#refund-policy" : "/terms";
  }
  return null;
}

export default function GuidelinesSidebar() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const activeHref = resolveActiveHref(pathname, hash);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [pathname]);

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28">
        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/40">
          Guidelines
        </p>
        <LayoutGroup id="guidelines-nav">
          <nav className="flex flex-col gap-1">
            {GUIDELINE_LINKS.map(({ label, href, icon: Icon }) => {
              const isActive = activeHref === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className="group relative flex items-center gap-2.5 rounded-md px-2 py-2 text-sm outline-none"
                >
                  {isActive ? (
                    <motion.span
                      layoutId="guidelines-active-pill"
                      className="absolute inset-0 rounded-md bg-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  <Icon
                    className={`relative z-10 h-4 w-4 shrink-0 transition-colors duration-300 ease-out ${
                      isActive ? "text-white" : "text-white/45 group-hover:text-white/70"
                    }`}
                  />
                  <span
                    className={`relative z-10 transition-colors duration-300 ease-out ${
                      isActive
                        ? "font-medium text-white"
                        : "text-white/55 group-hover:text-white/80"
                    }`}
                  >
                    {label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
