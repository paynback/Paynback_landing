import React from 'react';
import Image from 'next/image';
import { Star, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function BlogCard({
  title,
  excerpt,
  image,
  isFeatured = true,
  isNew = false,
  author = 'payNback',
  date,
}) {
  return (
    <Link
      href="/blog"
      className="block relative bg-white mx-auto transition-transform hover:-translate-y-1 w-full max-w-[387px]"
      style={{
        height: '509px',
        borderRadius: '24px',
        boxShadow: '2px 2px 11px 0px rgba(0, 0, 0, 0.25)'
      }}
    >

      {/* Header */}
      <div className="flex items-center justify-between px-5" style={{ height: '73px' }}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden shrink-0 relative">
            <Image
              src="/images/cartoon-char.jpg"
              alt={author}
              width={36}
              height={36}
              className="w-full h-full object-cover relative z-10"
              onError={(e) => e.target.style.display = 'none'}
            />
            <div className="absolute inset-0 flex items-center justify-center text-blue-600 font-bold text-sm z-0">
              {author.charAt(0).toUpperCase()}
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[15px] font-bold text-[#333] leading-none mb-1">{author}</span>
            <span className="text-[13px] text-gray-500 leading-none">{date}</span>
          </div>
        </div>

        {isNew ? (
          <div className="flex items-center gap-1.5 rounded-full bg-[#CB7C91] px-3 py-1.5">
            <Sparkles className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
            <span className="text-[13px] font-medium text-white">New</span>
          </div>
        ) : isFeatured ? (
          <div className="flex items-center gap-1.5 rounded-full bg-[#485E92] px-3 py-1.5">
            <Star className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
            <span className="text-[13px] font-medium text-white">Featured</span>
          </div>
        ) : null}
      </div>

      {/* Image */}
      <div className="absolute" style={{
        top: '73px',
        left: '0',
        width: '100%',
        height: '221px'
      }}>
        <Image
          src={image}
          alt={title || "Blog post"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 387px"
        />
      </div>

      {/* Content */}
      <h3
        className="absolute text-black line-clamp-2"
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          fontSize: '20px',
          lineHeight: '27px',
          letterSpacing: '-0.37px',
          top: '314px',
          left: '24px',
          width: '246.72px',
          height: '54px',
          margin: 0
        }}
      >
        {title}
      </h3>
      <p
        className="absolute text-gray-600 line-clamp-4"
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '19.68px',
          letterSpacing: '-0.37px',
          top: '388px',
          left: '24px',
          width: '327px',
          height: '79px',
          margin: 0
        }}
      >
        {excerpt}
      </p>
    </Link>
  );
}
