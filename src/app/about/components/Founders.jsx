"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Founders() {
    const foundersData = [
        {
            name: "Bony Thomas",
            role: "Founder & CEO",
            image: "/images/founders/Founder.png"
        },
        {
            name: "Shybi Varghese",
            role: "Co-Founder & COO",
            image: "/images/founders/CO Founder.png"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % foundersData.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative isolate w-full flex flex-col overflow-hidden bg-black">

            {/* ── Atmospheric gradient base (replicated exactly from Hero) ── */}
            <div
                className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-80"
                aria-hidden
            >
                <div className="absolute top-[-20%] right-[-10%] h-[80%] w-[80%] rounded-full bg-[#2433A8] blur-[1110px] opacity-80" />
                <div className="absolute bottom-[-10%] left-[20%] h-[60%] w-[60%] rounded-full bg-[#3E72E0] blur-[100px] opacity-40" />
                <div className="absolute top-[10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-[#87B3E0] blur-[110px] opacity-50" />
                <div className="absolute bottom-[-15%] left-[-10%] h-[50%] w-[45%] rounded-full bg-[#6D349F] blur-[90px] opacity-40" />
                <div className="absolute bottom-[5%] left-[-5%] h-[30%] w-[30%] rounded-full bg-[#A24F93] blur-[80px] opacity-25" />
                <div className="absolute bottom-[0%] right-[0%] h-[25%] w-[25%] rounded-full bg-[#CB7C91] blur-[70px] opacity-20" />
                <div className="absolute top-[20%] right-[10%] h-[35%] w-[35%] rounded-full bg-[#338BCB] blur-[100px] opacity-30" />
                <div className="absolute top-[-10%] right-[-5%] h-[55%] w-[60%] rounded-full bg-[#c5d7e9] blur-[140px] opacity-70" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_50%,transparent_42%,rgba(0,0,0,0.42)_100%)]" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* ── Left Content ── */}
                    <div className="flex flex-col items-start gap-5 lg:col-span-7 lg:pr-12 xl:pr-20">
                        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-[-0.5px] text-white leading-tight mb-2">
                            Meet Our Founders
                        </h2>
                        <p className="text-[15px] sm:text-[16px] leading-[1.8] text-white/90 font-normal">
                            PayNback Infosolutions was founded by <strong className="font-semibold text-white">Bony Thomas</strong> and <strong className="font-semibold text-white">Shybi Varghese</strong>,
                            a visionary leadership duo driven by strong entrepreneurial focus and disciplined execution. Identifying a gap between digital payments and offline value, they built a scalable,
                            user-centric platform that benefits both consumers and merchants. Their resilient leadership and long-term vision continue to position PayNback as a promising player in India&apos;s
                            in-store savings and rewards ecosystem.
                        </p>
                        <Link href="/careers" className="inline-block mt-4 px-9 py-3 bg-brand-primary text-white text-[15px] font-medium rounded-full transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30">
                            Join our Team
                        </Link>
                    </div>

                    {/* ── Right Content (Image Container) ── */}
                    <div className="relative w-full flex justify-center lg:justify-end lg:col-span-5 mt-10 lg:mt-0">

                        {/* Main Image Box */}
                        <div className="relative w-full max-w-[405px] h-auto aspect-405/514 bg-black rounded-[16px] shadow-2xl z-20 overflow-hidden">
                            {foundersData.map((founder, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                                        }`}
                                >
                                    <Image
                                        src={founder.image}
                                        alt={`PayNback ${founder.role}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 405px"
                                        priority
                                    />

                                    {/* Glassmorphic Name Card at Bottom */}
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[88%] rounded-[12px] overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md px-6 py-4 flex flex-col items-center justify-center shadow-lg">
                                        <span className="text-[18px] font-bold text-white tracking-wide">
                                            {founder.name}
                                        </span>
                                        <span className="text-[13px] font-normal text-white/80 mt-1 tracking-[0.08em] uppercase">
                                            {founder.role}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Rotating SVG Curved Text placed behind bottom-right corner */}
                        <div className="absolute -bottom-[60px] lg:-right-[40px] -right-[20px] w-[140px] h-[140px] lg:w-[160px] lg:h-[160px] animate-[spin_14s_linear_infinite] pointer-events-none z-10 opacity-90 drop-shadow-md">
                            <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                                {/* Internal circle path (m = move, a = arc) */}
                                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                                <text fontSize="10.5" fontWeight="400">
                                    <textPath href="#circlePath" startOffset="0%" textLength="220" lengthAdjust="spacing" className="capitalize">
                                        {"Join Our Team • Join Our Team • Join Our Team • "}
                                    </textPath>
                                </text>
                            </svg>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
