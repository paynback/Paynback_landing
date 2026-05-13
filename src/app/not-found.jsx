"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 60 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 3 + 1}px`,
        opacity: Math.random() * 0.8 + 0.2,
        duration: `${Math.random() * 4 + 2}s`,
        delay: `${Math.random() * 2}s`,
      }))
    );

    setShootingStars(
      Array.from({ length: 6 }).map(() => ({
        top: `${Math.random() * -20}%`, // Start above screen
        right: `${Math.random() * 50 - 20}%`, // Start from right side/offscreen
        delay: `${Math.random() * 7}s`,
        duration: `${Math.random() * 4 + 5}s`,
      }))
    );
  }, []);

  return (
    <main className="fixed inset-0 z-[9999] isolate overflow-hidden font-sans text-white flex h-screen w-screen flex-col items-center justify-center bg-black px-6 py-20 lg:flex-row lg:justify-between lg:px-24 xl:px-32">
      
      {/* Atmospheric gradient base (blob lights) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-20"
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_50%,transparent_20%,rgba(0,0,0,0.9)_100%)]" />
      </div>

      {/* Stars Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
              animation: `twinkle ${star.duration} infinite alternate`,
              animationDelay: star.delay,
            }}
          />
        ))}

        {/* Shooting Stars */}
        {shootingStars.map((star, i) => (
          <div
            key={`shoot-${i}`}
            className="absolute h-[2px] w-[150px] bg-gradient-to-r from-transparent via-white to-white opacity-0"
            style={{
              top: star.top,
              right: star.right,
              animation: `shoot ${star.duration} infinite linear`,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.1; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes shoot {
          0% {
            transform: translate(0, 0) rotate(135deg);
            opacity: 0;
          }
          10% { opacity: 1; }
          20% { opacity: 1; }
          100% {
            transform: translate(-150vw, 150vw) rotate(135deg);
            opacity: 0;
          }
        }
      `}</style>

      {/* Left text section */}
      <div className="relative z-10 flex flex-col items-start gap-4 lg:w-[45%]">
        <h1 className="inline-block text-xl sm:text-[24px] font-normal leading-[124%] tracking-[-0.56px] text-[#4EA8E9]">
          Oops!
        </h1>
        <h2 className="mt-2 text-5xl font-medium leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl -ml-[2px] lg:-ml-[4px]">
          Lost in Space?
        </h2>
        <p className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-white/75 sm:text-lg lg:text-xl">
          The page you're looking for seems to have drifted away—let's get you
          back on track.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-full bg-[#0964BC] px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-[#0964BC]/80 sm:text-lg"
        >
          Go to Homepage
        </Link>
      </div>

      {/* Right image section */}
      <div className="relative z-10 mt-20 flex items-center justify-center lg:mt-0 lg:w-[55%]">
        <div className="relative flex items-center justify-center w-full">
          <div className="relative mx-2 flex h-[200px] w-[200px] items-center justify-center sm:mx-6 sm:h-[350px] sm:w-[350px] lg:h-[450px] lg:w-[450px]">
            <Image
              src="/images/404.png"
              alt="404 Graphic"
              fill
              className="object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.25)]"
              priority
            />
            {/* Astronaut */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 h-[120px] w-[120px] sm:-bottom-24 sm:h-[220px] sm:w-[220px] lg:-bottom-32 lg:h-[280px] lg:w-[280px]">
              <Image
                src="/images/Astronaut.png"
                alt="Astronaut"
                fill
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
