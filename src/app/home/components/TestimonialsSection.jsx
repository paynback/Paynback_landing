"use client";

import Image from "next/image";
import { Star } from "lucide-react";

/* ── Testimonial data ─────────────────────────────────────── */
const REVIEWS = [
  {
    id: 1,
    img: "/images/person-2.png",
    name: "Arun Dev",
    role: "Supermarket Owner",
    rating: 5,
    text: "I've been using payNback since it launched, and it's been amazing for my business. I've gained more customers, increased profits, and seen real growth. Highly recommended!",
  },
  {
    id: 2,
    img: "/images/person-3.jpg",
    name: "Rahul Sharma",
    role: "Retail Shop Owner",
    rating: 5,
    text: "payNback has completely changed how I manage loyalty for my customers. The discount features and cashback system bring people back again and again. Couldn't be happier!",
  },
  {
    id: 3,
    img: "/images/person-1.jpg",
    name: "James Miller",
    role: "Regular Shopper",
    rating: 5,
    text: "I've been using payNback since it launched, and it's been amazing for my business. I've gained more customers, increased profits, and seen real growth. Highly recommended!",
  },
  {
    id: 4,
    img: "/images/person-4.jpg",
    name: "Sophia Carter",
    role: "Frequent Buyer",
    rating: 5,
    text: "Absolutely love the personalized deals and reward points. Every purchase feels rewarding. payNback makes shopping smarter and more enjoyable every single time.",
  },
];

/* ── Star rating row ──────────────────────────────────────── */
function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="h-3.5 w-3.5 fill-[#0964BC] text-[#0964BC]"
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

/* ── Single review card ───────────────────────────────────── */
function ReviewCard({ img, name, role, rating, text }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      {/* Avatar + name */}
      <div className="mb-3 flex flex-col items-center gap-1 text-center">
        <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-slate-100">
          <Image
            src={img}
            alt={name}
            fill
            className="object-cover object-top"
            sizes="56px"
          />
        </div>
        <p className="mt-1 text-sm font-semibold text-slate-800">{name}</p>
        <p className="text-xs text-slate-400">{role}</p>
        <Stars count={rating} />
      </div>

      {/* Review text */}
      <p className="text-center text-sm leading-relaxed text-slate-500">
        &quot;{text}&quot;
      </p>
    </div>
  );
}

/* ── Section ──────────────────────────────────────────────── */
export default function TestimonialsSection() {
  return (
    <section
      className="w-full overflow-hidden bg-white font-sans"
      style={{ "--brand-primary": "#0964BC" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-20 lg:py-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-3 lg:gap-12">

          {/* ── Left: heading + description + rating ── */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-normal leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-[2.5rem]">
              <span className="text-(--brand-primary)">Our</span> Users Talk
              <br />
              <span className="text-(--brand-primary)">About Us</span>
            </h2>

            <p className="max-w-xs text-sm leading-relaxed text-slate-500">
              Hear what our users love about paying and earning with payNback.
            </p>

            {/* Rating badge */}
            <div className="flex items-center gap-3">
              {/* Stacked avatars */}
              <div className="flex -space-x-3">
                {["/images/person-2.png", "/images/person-3.jpg"].map(
                  (src, i) => (
                    <div
                      key={i}
                      className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white"
                    >
                      <Image
                        src={src}
                        alt="reviewer"
                        fill
                        className="object-cover object-top"
                        sizes="40px"
                      />
                    </div>
                  )
                )}
              </div>

              {/* Score + label */}
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-bold text-slate-800">
                    4.8/5
                  </span>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-400">Based on 14K+ reviews</p>
              </div>
            </div>
          </div>

          {/* ── Centre column — starts lower (mt-10) ── */}
          <div className="flex flex-col gap-5 lg:mt-10">
            <ReviewCard {...REVIEWS[0]} />
            <ReviewCard {...REVIEWS[1]} />
          </div>

          {/* ── Right column — starts higher, first card partially peeking ── */}
          <div className="flex flex-col gap-5 lg:-mt-10">
            <ReviewCard {...REVIEWS[2]} />
            <ReviewCard {...REVIEWS[3]} />
          </div>

        </div>
      </div>
    </section>
  );
}
