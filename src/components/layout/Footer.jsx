"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  Info,
} from "lucide-react";
import { StoreBadges } from "../ui/StoreBadges";

/* ── Asset paths ─────────────────────────────────────────── */
const LOGO = "/Icons/pnb-white-logo.svg";
const STARTUP_MSN = "/Icons/ksum_logo_white.svg";
const STARTUP_IND = "/Icons/Startup india.svg";
const STORE_BADGES = "/Icons/app%26play_store_icons_hero.png";



/* ── Nav columns ─────────────────────────────────────────── */
const COL_PayNback = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  // { label: "Internships", href: "/internships" },
  // { label: "Refer & Earn", href: "/refer-and-earn" },
  { label: "Contact Us", href: "/contact" },
  { label: "Partners", href: "/partners" },
  { label: "About Jammy", href: "/jammy" }
];

const COL_GUIDELINES = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Refund Policy", href: "/terms#refund-policy" },
  { label: "Merchant Terms", href: "/merchant-terms" },

];



/* ── Social icon button ──────────────────────────────────── */
function SocialBtn({ href = "#", label, children }) {
  const isExternal = href.startsWith('http');
  return (
    <Link
      href={href}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-all duration-200 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg"
    >
      {children}
    </Link>
  );
}



/* ── Footer ─────────────────────────────────────────────── */
export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/terms" || pathname === "/privacy" || pathname === "/merchant-terms") {
    return null;
  }
  return (
    <ScrollReveal delay={120}>
      <footer className="relative bg-[#080F18] font-sans text-white">

        <div className="relative isolate overflow-hidden">
          {/* Gradient glow — top-right → bottom-left */}
          <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(68.92% 122.31% at 97.92% 3.94%, #99BAEC 0%, #1B519C 34.31%, #080F18 100%)",
            }}
            aria-hidden
          />

          {/* Main footer grid — extra top padding clears the overlapping absolute banner */}
          <div className="relative z-10 mx-auto max-w-7xl px-6 pb-4 pt-40 sm:px-6 lg:px-20">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-16">

              {/* Col 1 — Brand */}
              <div className="flex flex-col gap-7 lg:col-span-2">
                <Image
                  src={LOGO}
                  alt="PayNback logo"
                  width={140}
                  height={48}
                  className="w-36 object-contain"
                  style={{ height: "auto" }}
                />
                <p className="max-w-[400px] text-sm leading-relaxed text-white/55">
                  PayNback is India&apos;s first in-store shopping support app<br />
                  that offers rewards and discounts to consumers.
                </p>

                {/* Certifications */}
                <div>
                  <p className="mb-3 text-sm font-semibold text-white">
                    Certifications
                  </p>
                  <div className="flex items-center gap-6 justify-start mt-5">
                    <Image
                      src={STARTUP_MSN}
                      alt="Startup Mission"
                      width={180}
                      height={74}
                      className="h-12 sm:h-11 w-auto object-contain object-left"
                    />
                    <Image
                      src={STARTUP_IND}
                      alt="Startup India"
                      width={160}
                      height={74}
                      className="h-6 sm:h-7 w-auto object-contain object-left"
                    />
                  </div>
                </div>

                {/* App Available For */}
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/20 bg-white/5">
                    <Info className="h-3 w-3 text-white/60" strokeWidth={2.5} />
                  </span>
                  <span className="text-xs text-white/60">App Available on</span>
                  <StoreBadges />
                </div>
              </div>

              {/* Col 2 — PayNback links */}
              <div className="flex flex-col gap-4">
                <h4>PayNback</h4>
                <ul className="flex flex-col gap-3">
                  {COL_PayNback.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3 — Guidelines */}
              <div className="flex flex-col gap-4">
                <h4>Guidelines</h4>
                <ul className="flex flex-col gap-3">
                  {COL_GUIDELINES.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 4 — Support + Social */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <h4>Support</h4>
                  <ul className="flex flex-col gap-2.5">
                    <li className="flex items-center gap-2 text-sm text-white/60">
                      <Mail className="h-3.5 w-3.5 shrink-0" strokeWidth={1.8} />
                      info@paynback.com
                    </li>
                    <li className="flex items-center gap-2 text-sm text-white/60">
                      <Mail className="h-3.5 w-3.5 shrink-0" strokeWidth={1.8} />
                      support@paynback.com
                    </li>
                  </ul>
                </div>

                {/* Social icons */}
                <div className="flex flex-col gap-3">
                  <h5>Follow us on</h5>
                  <div className="flex flex-nowrap gap-2 -ml-3.5">
                    <SocialBtn href="https://www.facebook.com/paynback.in" label="Facebook">
                      <Facebook className="h-5 w-5" strokeWidth={1.8} />
                    </SocialBtn>
                    <SocialBtn href="https://www.instagram.com/paynback_" label="Instagram">
                      <Instagram className="h-5 w-5" strokeWidth={1.8} />
                    </SocialBtn>
                    <SocialBtn href="https://www.linkedin.com/company/paynback/" label="LinkedIn">
                      <Linkedin className="h-5 w-5" strokeWidth={1.8} />
                    </SocialBtn>
                    <SocialBtn href="https://www.youtube.com/@payNback" label="YouTube">
                      <Youtube className="h-5 w-5" strokeWidth={1.8} />
                    </SocialBtn>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Brand watermark text ── */}
          <div
            className="relative z-10 pointer-events-none select-none overflow-hidden flex justify-center w-full pb-16 md:pb-14 mt-4"
            aria-hidden
          >
            <p
              className="whitespace-nowrap text-center translate-y-3 md:translate-y-5"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontWeight: 500,
                fontSize: "clamp(64px, 18vw, 287.17px)", // Reduced minimum and vw to prevent horizontal overflow
                lineHeight: 0.8, // compresses the bounding box to reduce overall footer height
                letterSpacing: "-0.03em", // making it relative to font size
                background: "linear-gradient(175.53deg, rgba(31, 96, 186, 0.8) 17.23%, rgba(8, 15, 24, 0.8) 79.61%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                opacity: 0.5,
              }}
            >
              PayNback
            </p>
          </div>

          {/* Copyright bar — absolute overlapping the watermark bottom */}
          <div className="absolute bottom-0 left-0 w-full z-20 px-6 py-4 text-center" style={{ background: "#0C1A31" }}>
            <p className="text-xs text-white/40">
              Copyright © 2026 PayNback. All Rights Reserved.
            </p>
          </div>
        </div> {/* Closes relative isolate overflow-hidden */}
      </footer>
    </ScrollReveal>
  );
}
