"use client"

import Image from "next/image";
import { PhoneCall, CircleQuestionMark } from "lucide-react";
import MapEmbed from "./MapEmbed";

export default function ContactSection() {

  return (
    <section className="w-full bg-white font-sans py-16 mb-28 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 lg:gap-24">

          {/* Left Column: Form */}
          <div className="flex flex-col">
            {/* Header */}
            <div className="mb-10 lg:mb-12">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-4">
                <span className="text-(--brand-primary)">Contact</span> Our Team
              </h2>
              <p className="text-base text-slate-600 max-w-lg">
                Got any questions about the product or scaling on our platform? We&apos;re here to help.
              </p>
            </div>

            {/* Form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">

              {/* First Name */}
              <div className="flex flex-col">
                <label htmlFor="firstName" className="mb-2 text-sm font-medium text-(--brand-primary)">
                  First name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3.5 text-sm placeholder:text-gray-400 focus:border-(--brand-primary) focus:outline-none focus:ring-1 focus:ring-(--brand-primary) transition-colors"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <label htmlFor="lastName" className="mb-2 text-sm font-medium text-(--brand-primary)">
                  Last name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3.5 text-sm placeholder:text-gray-400 focus:border-(--brand-primary) focus:outline-none focus:ring-1 focus:ring-(--brand-primary) transition-colors"
                />
              </div>

              {/* Email id */}
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 text-sm font-medium text-(--brand-primary)">
                  E-mail id*
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your e-mail id"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3.5 text-sm placeholder:text-gray-400 focus:border-(--brand-primary) focus:outline-none focus:ring-1 focus:ring-(--brand-primary) transition-colors"
                />
              </div>

              {/* Mobile number */}
              <div className="flex flex-col">
                <label htmlFor="phone" className="mb-2 text-sm font-medium text-(--brand-primary)">
                  Mobile number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your mobile number"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3.5 text-sm placeholder:text-gray-400 focus:border-(--brand-primary) focus:outline-none focus:ring-1 focus:ring-(--brand-primary) transition-colors"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col md:col-span-2">
                <div className="mb-2 flex items-center justify-start gap-1">
                  <label htmlFor="message" className="text-sm font-medium text-(--brand-primary)">
                    Message
                  </label>
                  <CircleQuestionMark size={14} className="text-slate-400" />
                </div>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Enter your message"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3.5 text-sm placeholder:text-gray-400 focus:border-(--brand-primary) focus:outline-none focus:ring-1 focus:ring-(--brand-primary) transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 mt-4">
                <button
                  type="button"
                  className="w-full rounded-full bg-(--brand-primary) px-6 py-4 text-sm font-medium text-white transition-all hover:bg-(--brand-primary) active:scale-[0.98]"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Info & Map */}
          <div className="flex flex-col pt-2 lg:pt-12">

            {/* Call us */}
            <div className="mb-10">
              <h3 className="mb-3 text-lg font-medium text-slate-900">Call us</h3>
              <p className="mb-4 text-sm text-slate-500">
                Call our team Mon - Fri 9:30 am to 6:30pm
              </p>
              <div className="flex items-center gap-2.5 text-slate-900 font-medium">
                <PhoneCall size={20} className="text-slate-500" />
                <span>8301005296</span>
              </div>
            </div>

            {/* Visit us */}
            <div className="mb-10">
              <h3 className="mb-3 text-lg font-medium text-slate-900">Visit us</h3>
              <p className="text-sm leading-relaxed text-slate-500">
                payNback, Kerala Technology Innovation<br />
                Zone, Kinfra Hi-Tech Park Main Rd, HMT<br />
                Colony, P.O, Kalamassery, Kochi, Kerala<br />
                683503
              </p>
            </div>

            {/* Map Image */}
            {/* <div className="relative w-full overflow-hidden rounded-2xl shadow-sm border border-slate-100" style={{ aspectRatio: "16/10" }}>
              <Image
                src="/images/map-point.png"
                alt="PayNBack Location on Map"
                fill
                className="object-cover object-center"
              />
            </div> */}

            <div
              className="relative w-full overflow-hidden rounded-2xl shadow-sm border border-slate-100"
              style={{ aspectRatio: "16/10" }}
            >
              <MapEmbed />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
