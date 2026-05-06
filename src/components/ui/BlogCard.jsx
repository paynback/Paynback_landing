import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import Link from 'next/link';

export default function BlogCard({
  title, excerpt,
  image = '/images/blog-image.png',
  isFeatured = true
}) {
  return (
    <Link href="/blog" className="relative flex flex-col justify-end w-full overflow-hidden rounded-[24px] bg-black group aspect-387/537 cursor-pointer">
      {/* Background Image */}
      <Image
        src={image}
        alt={title || "Blog post"}
        fill
        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 387px"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(187.26deg, rgba(0, 0, 0, 0) 25.83%, #000000 83.99%)',
        }}
      />

      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-5 right-5 z-10 flex items-center gap-1.5 rounded-full bg-[#EAEAEA] px-3.5 py-1.5">
          <Star className="w-[14px] h-[14px] text-[#555555]" strokeWidth={1.5} />
          <span className="text-[13px] font-medium text-[#555555]">Featured</span>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3 p-6 sm:p-7 pb-8">
        <h3 className="text-[20px] sm:text-[22px] text-white">
          {title}
        </h3>
        <p className="text-[14px] leading-relaxed text-gray-200 line-clamp-4">
          {excerpt}
        </p>
      </div>
    </Link>
  );
}
