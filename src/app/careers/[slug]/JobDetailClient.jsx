"use client";

import Link from "next/link";
import { Upload } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  fetchPublicCareerBySlug,
  submitCareerApplication,
} from "@/lib/careerService";

/*
 * ARCHIVED — static job detail pages used slug-based hardcoded content before CMS.
 * Replaced by API: fetchPublicCareerBySlug. Seed reference: server seedWebsiteCareersDummyData.cjs
 *
 * const STATIC_CAREER_JOBS = {
 *   "react-native-developer": {
 *     title: "React Native Developer",
 *     location: "Kochi",
 *     department: "Engineering",
 *     experience_required: "3-6 years of product development experience with React Native, TypeScript, and mobile app delivery.",
 *     description: `We are seeking an experienced React Native Developer...`,
 *   },
 *   "backend-developer": {
 *     title: "Backend Developer",
 *     location: "Kochi",
 *     department: "Engineering",
 *     experience_required: "2-5 years building scalable APIs with Node.js, PostgreSQL, and cloud deployments.",
 *     description: `Join PayNback's backend team to build reliable services...`,
 *   },
 *   "ui-ux-designer": {
 *     title: "UI/UX Designer",
 *     location: "Kochi",
 *     department: "Design",
 *     experience_required: "2-4 years designing consumer mobile and web experiences...",
 *     description: `We are looking for a UI/UX Designer to shape intuitive experiences...`,
 *   },
 * };
 */

function renderDescription(content) {
  if (!content) return null;
  if (/<[a-z][\s\S]*>/i.test(content)) {
    return (
      <div
        className="prose prose-slate max-w-none text-[15px] leading-[1.8] text-gray-600"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  return content.split(/\n\s*\n/).map((block, index) => (
    <p
      key={index}
      className="text-gray-600 text-[15px] sm:text-[16px] leading-[1.8] font-normal mb-5"
    >
      {block.trim()}
    </p>
  ));
}

export default function JobDetailClient({ slug }) {
  const reduceMotion = useReducedMotion();
  const fileInputRef = useRef(null);
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    message: "",
    consent: false,
  });

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const row = await fetchPublicCareerBySlug(slug);
        if (!active) return;
        if (!row) {
          setNotFound(true);
        } else {
          setJob(row);
        }
      } catch {
        if (active) setNotFound(true);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [slug]);

  const fadeUp = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
        };

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitError("");

    if (!form.first_name.trim() || !form.last_name.trim() || !form.phone.trim() || !form.email.trim()) {
      setSubmitError("Please fill all required fields.");
      return;
    }
    if (!resumeFile) {
      setSubmitError("Please upload your CV.");
      return;
    }
    if (!form.consent) {
      setSubmitError("Please confirm consent to submit your application.");
      return;
    }

    const payload = new FormData();
    payload.append("first_name", form.first_name.trim());
    payload.append("last_name", form.last_name.trim());
    payload.append("phone", form.phone.trim());
    payload.append("email", form.email.trim());
    if (form.message.trim()) payload.append("message", form.message.trim());
    payload.append("resume", resumeFile);

    try {
      setSubmitting(true);
      await submitCareerApplication(slug, payload);
      setSubmitSuccess(true);
      setForm({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        message: "",
        consent: false,
      });
      setResumeFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Unable to submit your application right now.";
      setSubmitError(message);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-white pt-28 sm:pt-32 pb-24">
        <div className="container mx-auto max-w-5xl px-6 text-slate-500">Loading job details...</div>
      </main>
    );
  }

  if (notFound || !job) {
    return (
      <main className="min-h-screen bg-white pt-28 sm:pt-32 pb-24">
        <div className="container mx-auto max-w-5xl px-6">
          <p className="text-slate-600 mb-4">This job opening could not be found.</p>
          <Link href="/careers" className="text-[#0964BC] font-medium hover:underline">
            Back to careers
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 pt-28 sm:pt-32 lg:pt-36 pb-12">
        <div className="container mx-auto max-w-5xl px-6 sm:px-6 md:px-8">
          <motion.h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3" {...fadeUp(0.1)}>
            {job.title}
          </motion.h1>

          <motion.p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-8" {...fadeUp(0.12)}>
            {job.location}
          </motion.p>

          <motion.div className="mb-10 max-w-4xl" {...fadeUp(0.15)}>
            {renderDescription(job.description)}
          </motion.div>

          {job.experience_required ? (
            <motion.div className="mb-12" {...fadeUp(0.2)}>
              <h2 className="text-xl font-bold mb-4">Requirements</h2>
              <div className="text-gray-600 text-[15px] sm:text-[16px] leading-[1.8]">
                {renderDescription(job.experience_required)}
              </div>
            </motion.div>
          ) : null}

          <motion.div
            className="bg-white rounded-[24px] p-8 md:p-12 shadow-sm mb-20 border border-gray-100"
            {...fadeUp(0.24)}
          >
            {submitSuccess ? (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Application submitted</h2>
                <p className="text-gray-600">
                  Thank you for applying. Our HR team will review your profile and contact you if shortlisted.
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[#0964BC] font-medium text-[15px]">First name*</label>
                    <input
                      type="text"
                      value={form.first_name}
                      onChange={(e) => setForm((f) => ({ ...f, first_name: e.target.value }))}
                      placeholder="Enter your first name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-[15px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[#0964BC] font-medium text-[15px]">Last name*</label>
                    <input
                      type="text"
                      value={form.last_name}
                      onChange={(e) => setForm((f) => ({ ...f, last_name: e.target.value }))}
                      placeholder="Enter your last name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-[15px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[#0964BC] font-medium text-[15px]">Mobile number*</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      placeholder="Enter your mobile number"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-[15px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[#0964BC] font-medium text-[15px]">E-mail id*</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="Enter your e-mail id"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-[15px]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[#0964BC] font-medium text-[15px]">CV Upload*</label>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full border border-dashed border-gray-300 rounded-2xl p-10 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors"
                  >
                    <Upload className="w-8 h-8 text-gray-400 mb-4" />
                    <p className="text-[15px] text-gray-700 font-medium mb-1">
                      {resumeFile ? (
                        <span className="text-[#0964BC]">{resumeFile.name}</span>
                      ) : (
                        <>
                          <span className="text-[#0964BC]">Upload a file, </span>
                          or click to select files
                        </>
                      )}
                    </p>
                    <p className="text-gray-400 text-sm">PDF, DOC, DOCX up to 5MB</p>
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    className="hidden"
                    onChange={(e) => setResumeFile(e.target.files?.[0] ?? null)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[#0964BC] font-medium text-[15px]">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Enter your message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-[15px] resize-none"
                  />
                </div>

                <label className="flex items-start gap-3 text-gray-500 text-[14px]">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
                    className="mt-1 h-4 w-4 rounded border-gray-300"
                  />
                  <span>
                    By clicking submit below, you consent to allow PayNback to store and process the personal information submitted above to provide you the content requested.
                  </span>
                </label>

                {submitError ? <p className="text-sm text-red-600">{submitError}</p> : null}

                <div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-brand-primary hover:bg-[#0855A1] disabled:opacity-60 text-white px-8 py-3 rounded-full font-medium transition-colors"
                  >
                    {submitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
