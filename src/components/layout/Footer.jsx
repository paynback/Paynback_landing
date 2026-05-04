"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
const LOGO = "/Icons/Paynback_logo.png";
const STARTUP_MSN = "/Icons/ksum_logo_white.svg";
const STARTUP_IND = "/Icons/Startup india.svg";
const STORE_BADGES = "/Icons/app%26play_store_icons_hero.png";

/* ── Nav columns ─────────────────────────────────────────── */
const COL_PayNback = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Internships", href: "/internships" },
  { label: "Refer & Earn", href: "/refer-and-earn" },
  { label: "Contact Us", href: "/contact" },
];

const COL_GUIDELINES = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Refund Policy", href: "#" },
  { label: "Merchant Terms", href: "#" },
  { label: "Partners", href: "/partners" },
];

/* X (Twitter) icon — not in Lucide, so inline SVG */
function XIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L2.25 2.25h6.979l4.259 5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* Pinterest icon */
function PinterestIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

/* ── Social icon button ──────────────────────────────────── */
function SocialBtn({ href = "#", label, children }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition-all duration-200 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg"
    >
      {children}
    </Link>
  );
}

/* ── Newsletter banner ───────────────────────────────────── */
function NewsletterBanner() {
  const [email, setEmail] = useState("");

  return (
    <div
      className="relative isolate mx-auto w-full max-w-4xl overflow-hidden rounded-2xl px-8 py-8 text-center text-white shadow-2xl"
      style={{ background: "#080F18" }}
    >
      {/* Decorative cross grids */}
      {[
        "top-4 left-6 opacity-20",
        "top-4 right-6 opacity-20",
        "bottom-4 left-0 opacity-10",
      ].map((pos, i) => (
        <span
          key={i}
          className={`pointer-events-none absolute ${pos} grid grid-cols-3 gap-1`}
          aria-hidden
        >
          {Array.from({ length: 9 }).map((_, j) => (
            <span key={j} className="h-1 w-1 rounded-full bg-white/40" />
          ))}
        </span>
      ))}

      <h3 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        Subscribe our Newsletter
      </h3>
      <p className="mx-auto mb-6 max-w-lg text-sm leading-relaxed text-white/60">
        Subscribe to our newsletter for exclusive deals, rewards, and early
        access to offers. Stay ahead with PayNback!
      </p>

      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your E-mail"
          className="w-full max-w-sm rounded-full border border-white/15 bg-white/8 px-5 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-white/30 sm:w-72"
        />
        <button
          className="bg-white rounded-full px-6 py-2.5 text-sm font-semibold text-brand-primary transition hover:opacity-90"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}

/* ── Footer ─────────────────────────────────────────────── */
export default function Footer() {
  return (
    <footer className="relative bg-[#080F18] font-sans text-white">
      {/* ── Newsletter banner — exactly half-overlaps the top border ── */}
      {/* <div
        className="absolute left-0 right-0 top-0 z-20 flex justify-center px-6 sm:px-8 lg:px-20"
        style={{ transform: "translateY(-50%)" }}
      >
        <NewsletterBanner />
      </div> */}

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
                <span className="text-xs text-white/60">App Available For</span>
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
                    <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={1.8} />
                    +91 8301005296
                  </li>
                  <li className="flex items-center gap-2 text-sm text-white/60">
                    {/* WhatsApp icon */}
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 shrink-0" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                    +91 8301005297
                  </li>
                  <li className="flex items-center gap-2 text-sm text-white/60">
                    <Mail className="h-3.5 w-3.5 shrink-0" strokeWidth={1.8} />
                    Support@PayNback.com
                  </li>
                </ul>
              </div>

              {/* Social icons */}
              <div className="flex flex-col gap-3">
                <h5>Follow us on</h5>
                <div className="flex flex-nowrap gap-2">
                  <SocialBtn label="Facebook">
                    <Facebook className="h-4 w-4" strokeWidth={1.8} />
                  </SocialBtn>
                  <SocialBtn label="Instagram">
                    <Instagram className="h-4 w-4" strokeWidth={1.8} />
                  </SocialBtn>
                  <SocialBtn label="X (Twitter)">
                    <XIcon className="h-4 w-4" />
                  </SocialBtn>
                  <SocialBtn label="LinkedIn">
                    <Linkedin className="h-4 w-4" strokeWidth={1.8} />
                  </SocialBtn>
                  <SocialBtn label="Pinterest">
                    <PinterestIcon className="h-4 w-4" />
                  </SocialBtn>
                  <SocialBtn label="YouTube">
                    <Youtube className="h-4 w-4" strokeWidth={1.8} />
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
  );
}
