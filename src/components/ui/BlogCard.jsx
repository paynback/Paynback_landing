import React from "react";
import Image from "next/image";
import { Star, Sparkles } from "lucide-react";
import Link from "next/link";

function isExternalImage(src) {
  return typeof src === "string" && /^https?:\/\//i.test(src);
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  image,
  cover_image,
  isFeatured = true,
  is_new: isNew = false,
  is_featured: isFeaturedProp,
  date,
  display_date,
}) {
  const href = slug ? `/blog/${slug}` : "/blog";
  const imageSrc = cover_image || image || "";
  const featured = isFeaturedProp ?? isFeatured;
  const dateLabel = display_date || date;

  return (
    <Link
      href={href}
      className="flex flex-col relative bg-white mx-auto transition-transform hover:-translate-y-1 w-full max-w-[387px] overflow-hidden"
      style={{
        borderRadius: "24px",
        boxShadow: "2px 2px 11px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="relative w-full shrink-0" style={{ height: "221px" }}>
        {imageSrc ? (
          isExternalImage(imageSrc) ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageSrc}
              alt={title || "Blog post"}
              className="h-full w-full object-cover"
            />
          ) : (
            <Image
              src={imageSrc}
              alt={title || "Blog post"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 387px"
            />
          )
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-100 text-sm text-slate-400">
            No cover image
          </div>
        )}
      </div>

      <div className="flex flex-col gap-5 p-6 bg-white grow">
        <div className="flex justify-start -mb-2">
          {isNew ? (
            <div
              className="flex items-center justify-center text-white bg-[#CB7C91] rounded-[32.8px]"
              style={{ padding: "5.25px 13.12px", gap: "3.94px" }}
            >
              <Sparkles style={{ width: "14px", height: "14px" }} strokeWidth={1.5} />
              <span style={{ fontSize: "13px", fontWeight: 500, lineHeight: 1 }}>New</span>
            </div>
          ) : featured ? (
            <div
              className="flex items-center justify-center text-white bg-[#485E92] rounded-[32.8px]"
              style={{ padding: "5.25px 13.12px", gap: "3.94px" }}
            >
              <Star style={{ width: "14px", height: "14px" }} strokeWidth={1.5} />
              <span style={{ fontSize: "13px", fontWeight: 500, lineHeight: 1 }}>Featured</span>
            </div>
          ) : null}
        </div>

        <h3
          className="text-black line-clamp-2"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "27px",
            letterSpacing: "-0.37px",
            margin: 0,
          }}
        >
          {title}
        </h3>
        <p
          className="text-gray-600 line-clamp-4"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "19.68px",
            letterSpacing: "-0.37px",
            margin: 0,
          }}
        >
          {excerpt}
        </p>
        {dateLabel ? (
          <span
            className="text-gray-500 mt-auto"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "14px",
            }}
          >
            {dateLabel}
          </span>
        ) : null}
      </div>
    </Link>
  );
}
