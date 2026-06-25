"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import LastUpdateDate from "@/components/sections/LastUpdateDate";

export default function LegalGuidelinesLayout({
  title,
  breadcrumbLabel,
  tocItems,
  children,
}) {
  const [activeSection, setActiveSection] = useState(tocItems[0]?.id ?? "");

  useEffect(() => {
    const sectionIds = tocItems.map(({ id }) => id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [tocItems]);

  return (
    <>
      <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/45">
        <Link href="/" className="transition-colors duration-300 hover:text-white/70">
          Home
        </Link>
        <span aria-hidden>/</span>
        <span>Guidelines</span>
        <span aria-hidden>/</span>
        <span className="text-white/70">{breadcrumbLabel}</span>
      </nav>

      <header className="mb-12 max-w-3xl border-b border-white/10 pb-8">
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="text-sm text-white/50">
          Last updated: <LastUpdateDate />
        </p>
      </header>

      <div className="grid grid-cols-1 gap-12 xl:grid-cols-[minmax(0,1fr)_200px] xl:gap-16">
        <article className="min-w-0 max-w-3xl space-y-14 text-[15px] leading-relaxed text-white/70">
          {children}
        </article>

        <aside className="hidden xl:block">
          <div className="sticky top-28">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/40">
              On this page
            </p>
            <LayoutGroup id="guidelines-toc">
              <nav className="relative flex flex-col gap-1 border-l border-white/10 pl-4">
                {tocItems.map(({ id, label }) => {
                  const isActive = activeSection === id;

                  return (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="group relative py-1.5 text-sm outline-none"
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="guidelines-toc-indicator"
                          className="absolute -left-4 top-2 bottom-2 w-0.5 rounded-full bg-[#4EA8E9]"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      ) : null}
                      <span
                        className={`block transition-colors duration-300 ease-out ${
                          isActive
                            ? "font-medium text-white"
                            : "text-white/50 group-hover:text-white/80"
                        }`}
                      >
                        {label}
                      </span>
                    </a>
                  );
                })}
              </nav>
            </LayoutGroup>
          </div>
        </aside>
      </div>
    </>
  );
}
