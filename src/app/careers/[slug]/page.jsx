"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Upload } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function JobDetailPage() {
  const reduceMotion = useReducedMotion();
  const fadeUp = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* We add a darker bg block at top if the Header expects it, 
          but usually the Header has a default clear or white state. 
          Let's put the Header in a clear container. */}
      <div className="bg-white border-b border-gray-100">
        <Header theme="light" />
      </div>

      <div className="flex-1 py-12">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          {/* Breadcrumb */}
          <motion.div className="text-sm text-gray-500 mb-8" {...fadeUp(0.05)}>
            <Link href="/" className="hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/careers" className="hover:text-black">Careers</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">React Native Developer</span>
          </motion.div>

          {/* Title */}
          <motion.h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" {...fadeUp(0.1)}>
            React Native Developer
          </motion.h1>

          {/* Description */}
          <motion.p className="text-gray-600 text-[15px] sm:text-[16px] leading-[1.8] font-normal mb-10 max-w-4xl" {...fadeUp(0.15)}>
            We are seeking an experienced React Native Developer with at least 2 years of hands-on mobile application development experience. The ideal candidate must have solid expertise in React Native and...
          </motion.p>

          {/* What will you do? */}
          <motion.div className="mb-10" {...fadeUp(0.2)}>
            <h2 className="text-xl font-bold mb-4">What will you do?</h2>
            <ul className="space-y-2 text-gray-600 text-[15px] sm:text-[16px] leading-[1.8]">
              <li className="flex items-start">
                <span className="mr-2 mt-1">▪</span>
                <span>You will work on a disruptive product that's still in its early stages.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">▪</span>
                <span>You will be responsible to drive innovation in software development, while relentlessly improving performance, scalability, and maintainability.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">▪</span>
                <span>You will own the design process, implementation, and verification of framework components leveraging standard software engineering methodologies.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">▪</span>
                <span>You will be translating functional and technical requirements into detailed architecture and design.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">▪</span>
                <span>You will be responsible for mentoring other engineers, defining our technical culture, and helping to build a fast-growing team.</span>
              </li>
            </ul>
          </motion.div>

          {/* Requirements */}
          <motion.div className="mb-12" {...fadeUp(0.24)}>
            <h2 className="text-xl font-bold mb-4">Requirements</h2>
            <ul className="space-y-2 text-gray-600 text-[15px] sm:text-[16px] leading-[1.8]">
              <li className="flex items-start">
                <span className="mr-2 mt-1">▪</span>
                <span>Having 3-6 years of experience in product development, architecture, and design.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">▪</span>
                <span>Constantly learning and looking for ways to improve yourself and the processes around you.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">▪</span>
                <span>Mentoring and supporting other team members by doing code reviews and applying your experience in process and technical leadership.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">▪</span>
                <span>Working in an agile team environment and are a self-starter, conscientious member of the team.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">▪</span>
                <span>Passionate to code, but also you're awesome at it!</span>
              </li>
            </ul>
          </motion.div>

          {/* Application Form Card */}
          <motion.div
            className="bg-white rounded-[24px] p-8 md:p-12 shadow-sm mb-40"
            {...fadeUp(0.28)}
          >
            <form className="space-y-6 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="space-y-2">
                  <label className="block text-[#0964BC] font-medium text-[15px]">First name*</label>
                  <input 
                    type="text" 
                    placeholder="Enter your first name" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-[15px]" 
                  />
                </div>
                {/* Last Name */}
                <div className="space-y-2">
                  <label className="block text-[#0964BC] font-medium text-[15px]">Last name*</label>
                  <input 
                    type="text" 
                    placeholder="Enter your last name" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-[15px]" 
                  />
                </div>
                {/* Mobile Number */}
                <div className="space-y-2">
                  <label className="block text-[#0964BC] font-medium text-[15px]">Mobile number*</label>
                  <input 
                    type="tel" 
                    placeholder="Enter your mobile number" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-[15px]" 
                  />
                </div>
                {/* E-mail Id */}
                <div className="space-y-2">
                  <label className="block text-[#0964BC] font-medium text-[15px]">E-mail id*</label>
                  <input 
                    type="email" 
                    placeholder="Enter your e-mail id" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-[15px]" 
                  />
                </div>
              </div>

              {/* CV Upload */}
              <div className="space-y-2">
                <label className="block text-[#0964BC] font-medium text-[15px]">CV Upload*</label>
                <div className="border border-dashed border-gray-300 rounded-2xl p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mb-4" />
                  <p className="text-[15px] text-gray-700 font-medium mb-1">
                    <span className="text-[#0964BC]">Upload a file, </span>
                    Drag 'n' drop some files here or click to select files
                  </p>
                  <p className="text-gray-400 text-sm">PDF, DOC, DOCX upto 5MB</p>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="block text-[#0964BC] font-medium text-[15px]">Message</label>
                <textarea 
                  placeholder="Enter your message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-[15px] resize-none" 
                ></textarea>
              </div>

              {/* Consent */}
              <p className="text-gray-500 text-[14px]">
                By clicking submit below, you consent to allow payNback to store and process the personal information submitted above to provide you the content requested.
              </p>

              {/* Fake reCAPTCHA */}
              <div className="inline-flex items-center gap-4 py-2 px-4 bg-[#f9f9f9] border border-gray-300 rounded shadow-sm w-fit">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-6 h-6 border-gray-300 rounded-sm bg-white" />
                  <span className="text-sm font-medium text-gray-800">I am human</span>
                </div>
                <div className="flex flex-col items-center justify-center ml-8 opacity-80">
                  <div className="text-[20px]">♻️</div>
                  <span className="text-[10px] text-gray-500 mt-[-2px] tracking-tighter">reCAPTCHA</span>
                  <span className="text-[8px] text-gray-400">Privacy - Terms</span>
                </div>
              </div>

              <div>
                <button 
                  type="button" 
                  className="bg-brand-primary hover:bg-[#0855A1] text-white px-8 py-3 rounded-full font-medium transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
