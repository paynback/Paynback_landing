"use client";

import Link from "next/link";
import { Upload } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  fetchPublicCareerBySlug,
  submitCareerApplication,
} from "@/lib/careerService";
import { useDebouncedSubmit } from "@/lib/useDebouncedSubmit";

function renderParagraph(content) {
  if (!content) return null;
  return content.split(/\n\s*\n/).map((block, index) => (
    <p
      key={index}
      className="text-gray-600 text-[15px] sm:text-[16px] leading-[1.8] font-normal mb-5"
    >
      {block.trim()}
    </p>
  ));
}

function BulletSection({ title, items }) {
  if (!items?.length) return null;
  return (
    <motion.div className="mb-10" {...fadeUpStatic()}>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-600 text-[15px] sm:text-[16px] leading-[1.8]">
        {items.map((item, index) => (
          <li key={`${title}-${index}`}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function fadeUpStatic(delay = 0.2) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  };
}

export default function JobDetailClient({ slug }) {
  const reduceMotion = useReducedMotion();
  const fileInputRef = useRef(null);
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    date_of_birth: "",
    address: "",
    highest_qualification: "",
    years_of_experience: "",
    currently_working: "",
    current_company: "",
    last_job_designation: "",
    last_job_responsibilities: "",
    last_drawn_salary: "",
    expected_salary: "",
    notice_period: "",
    key_skills: "",
    linkedin_profile: "",
    instagram_profile: "",
    facebook_profile: "",
    languages_known: "",
    preferred_location: "",
    why_join_us: "",
    consent: false,
  });

  const formRef = useRef(form);
  const resumeFileRef = useRef(resumeFile);
  const slugRef = useRef(slug);

  formRef.current = form;
  resumeFileRef.current = resumeFile;
  slugRef.current = slug;

  const submitApplication = useCallback(async () => {
    const currentForm = formRef.current;
    const currentResume = resumeFileRef.current;
    const currentSlug = slugRef.current;
    const isWorking = currentForm.currently_working === "yes";

    const phoneDigits = currentForm.phone.trim().replace(/\D/g, "");
    const years = Number(currentForm.years_of_experience);

    const payload = new FormData();
    payload.append("full_name", currentForm.full_name.trim());
    payload.append("phone", phoneDigits);
    payload.append("email", currentForm.email.trim());
    payload.append("date_of_birth", currentForm.date_of_birth);
    payload.append("address", currentForm.address.trim());
    payload.append("highest_qualification", currentForm.highest_qualification.trim());
    payload.append("years_of_experience", String(years));
    payload.append("currently_working", isWorking ? "true" : "false");
    payload.append("current_company", isWorking ? currentForm.current_company.trim() : "");
    payload.append("last_job_designation", isWorking ? currentForm.last_job_designation.trim() : "");
    payload.append("last_job_responsibilities", isWorking ? currentForm.last_job_responsibilities.trim() : "");
    payload.append("last_drawn_salary", isWorking ? currentForm.last_drawn_salary.trim() : "");
    payload.append("expected_salary", currentForm.expected_salary.trim());
    payload.append("notice_period", currentForm.notice_period.trim());
    payload.append("key_skills", currentForm.key_skills.trim());
    payload.append("linkedin_profile", currentForm.linkedin_profile.trim());
    payload.append("instagram_profile", currentForm.instagram_profile.trim());
    payload.append("facebook_profile", currentForm.facebook_profile.trim());
    payload.append("languages_known", currentForm.languages_known.trim());
    payload.append("preferred_location", currentForm.preferred_location.trim());
    payload.append("why_join_us", currentForm.why_join_us.trim());
    payload.append("resume", currentResume);

    await submitCareerApplication(currentSlug, payload);
    setSubmitSuccess(true);
    setForm({
      full_name: "",
      phone: "",
      email: "",
      date_of_birth: "",
      address: "",
      highest_qualification: "",
      years_of_experience: "",
      currently_working: "",
      current_company: "",
      last_job_designation: "",
      last_job_responsibilities: "",
      last_drawn_salary: "",
      expected_salary: "",
      notice_period: "",
      key_skills: "",
      linkedin_profile: "",
      instagram_profile: "",
      facebook_profile: "",
      languages_known: "",
      preferred_location: "",
      why_join_us: "",
      consent: false,
    });
    setResumeFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);

  const {
    submit: runSubmitApplication,
    isDisabled: submitDisabled,
    isSubmitting: submitting,
  } = useDebouncedSubmit(submitApplication);

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

    if (
      !form.full_name.trim() ||
      !form.phone.trim() ||
      !form.email.trim() ||
      !form.date_of_birth ||
      !form.address.trim() ||
      !form.highest_qualification.trim() ||
      form.years_of_experience === "" ||
      !form.expected_salary.trim() ||
      !form.notice_period.trim() ||
      !form.key_skills.trim() ||
      !form.languages_known.trim() ||
      !form.preferred_location.trim() ||
      !form.why_join_us.trim() ||
      !form.currently_working ||
      (form.currently_working === "yes" &&
        (!form.current_company.trim() || !form.last_job_designation.trim() || !form.last_drawn_salary.trim()))
    ) {
      setSubmitError("Please fill all required fields.");
      return;
    }
    if (!resumeFile) {
      setSubmitError("Please upload your resume.");
      return;
    }
    if (!form.consent) {
      setSubmitError("Please confirm consent to submit your application.");
      return;
    }

    const phoneDigits = form.phone.trim().replace(/\D/g, "");
    if (!/^[0-9]{10}$/.test(phoneDigits)) {
      setSubmitError("Please enter a valid 10-digit mobile number.");
      return;
    }

    const years = Number(form.years_of_experience);
    if (!Number.isFinite(years) || years < 0) {
      setSubmitError("Please enter valid years of experience.");
      return;
    }

    try {
      await runSubmitApplication();
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Unable to submit your application right now.";
      setSubmitError(message);
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

  const jobTypeLabel =
    job.job_type === "INTERNSHIP"
      ? `Internship${job.internship_duration ? ` · ${job.internship_duration}` : ""}`
      : "Employment";

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 pt-28 sm:pt-32 lg:pt-36 pb-12">
        <div className="container mx-auto max-w-5xl px-6 sm:px-6 md:px-8">
          <motion.h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3" {...fadeUp(0.1)}>
            {job.title}
          </motion.h1>

          <motion.div className="flex flex-wrap items-center gap-3 mb-8" {...fadeUp(0.12)}>
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">{job.location}</p>
            <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-800">
              {jobTypeLabel}
            </span>
          </motion.div>

          {job.about_the_role ? (
            <motion.div className="mb-10 max-w-4xl" {...fadeUp(0.15)}>
              <h2 className="text-xl font-bold mb-4">About the role</h2>
              {renderParagraph(job.about_the_role)}
            </motion.div>
          ) : null}

          <BulletSection title="Key responsibilities" items={job.key_responsibilities} />
          <BulletSection title="Required skills" items={job.required_skills} />
          <BulletSection title="What you'll gain" items={job.what_youll_gain} />
          <BulletSection title="Performance expectations" items={job.performance_expectations} />

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
              <form className="space-y-8" onSubmit={onSubmit}>
                <h2 className="text-2xl font-semibold text-foreground border-b pb-4">Apply for this role</h2>
                
                {/* Basic Details */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-800">Basic Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-[#0964BC] font-medium text-[15px]">Full name*</label>
                      <input
                        type="text"
                        required
                        value={form.full_name}
                        onChange={(e) => setForm((f) => ({ ...f, full_name: e.target.value }))}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[#0964BC] font-medium text-[15px]">Mobile number*</label>
                      <input
                        type="tel"
                        required
                        inputMode="numeric"
                        minLength={10}
                        maxLength={10}
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                        placeholder="Enter your mobile number"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[#0964BC] font-medium text-[15px]">Email*</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[#0964BC] font-medium text-[15px]">Date of birth*</label>
                      <input
                        type="date"
                        required
                        value={form.date_of_birth}
                        onChange={(e) => setForm((f) => ({ ...f, date_of_birth: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[#0964BC] font-medium text-[15px]">Highest Qualification*</label>
                      <input
                        type="text"
                        required
                        value={form.highest_qualification}
                        onChange={(e) => setForm((f) => ({ ...f, highest_qualification: e.target.value }))}
                        placeholder="e.g. B.Tech, MBA"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-base"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-[#0964BC] font-medium text-[15px]">Address*</label>
                      <textarea
                        required
                        value={form.address}
                        onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
                        placeholder="Enter your full address"
                        rows={2}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-[15px] resize-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[#0964BC] font-medium text-[15px]">Languages Known*</label>
                      <input
                        type="text"
                        required
                        value={form.languages_known}
                        onChange={(e) => setForm((f) => ({ ...f, languages_known: e.target.value }))}
                        placeholder="e.g. English, Hindi"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[#0964BC] font-medium text-[15px]">Preferred Job Location*</label>
                      <input
                        type="text"
                        required
                        value={form.preferred_location}
                        onChange={(e) => setForm((f) => ({ ...f, preferred_location: e.target.value }))}
                        placeholder="e.g. Mumbai, Remote"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-base"
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Details */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-800">Professional Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-[#0964BC] font-medium text-[15px]">Years of experience*</label>
                      <input
                        type="number"
                        required
                        min="0"
                        step="0.5"
                        value={form.years_of_experience}
                        onChange={(e) => setForm((f) => ({ ...f, years_of_experience: e.target.value }))}
                        placeholder="e.g. 2"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[#0964BC] font-medium text-[15px]">Expected Salary*</label>
                      <input
                        type="text"
                        required
                        value={form.expected_salary}
                        onChange={(e) => setForm((f) => ({ ...f, expected_salary: e.target.value }))}
                        placeholder="e.g. 8 LPA"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[#0964BC] font-medium text-[15px]">Notice Period / Joining Availability*</label>
                      <input
                        type="text"
                        required
                        value={form.notice_period}
                        onChange={(e) => setForm((f) => ({ ...f, notice_period: e.target.value }))}
                        placeholder="e.g. 30 days, Immediate"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[#0964BC] font-medium text-[15px]">Currently working?*</label>
                      <select
                        required
                        value={form.currently_working}
                        onChange={(e) =>
                          setForm((f) => ({
                            ...f,
                            currently_working: e.target.value,
                            ...(e.target.value !== "yes"
                              ? { current_company: "", last_job_designation: "", last_job_responsibilities: "", last_drawn_salary: "" }
                              : null),
                          }))
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-[15px]"
                      >
                        <option value="" disabled>Select an option</option>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                      </select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-[#0964BC] font-medium text-[15px]">Key Skills*</label>
                      <textarea
                        required
                        value={form.key_skills}
                        onChange={(e) => setForm((f) => ({ ...f, key_skills: e.target.value }))}
                        placeholder="e.g. React, Node.js, Marketing, Sales"
                        rows={2}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-[15px] resize-none"
                      />
                    </div>
                  </div>

                  {form.currently_working === "yes" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <div className="space-y-2">
                        <label className="block text-[#0964BC] font-medium text-[15px]">Previous / Last Company*</label>
                        <input
                          type="text"
                          required
                          value={form.current_company}
                          onChange={(e) => setForm((f) => ({ ...f, current_company: e.target.value }))}
                          placeholder="Company name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-[#0964BC] font-medium text-[15px]">Last Job Designation*</label>
                        <input
                          type="text"
                          required
                          value={form.last_job_designation}
                          onChange={(e) => setForm((f) => ({ ...f, last_job_designation: e.target.value }))}
                          placeholder="e.g. Software Engineer"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-[#0964BC] font-medium text-[15px]">Last Drawn Salary*</label>
                        <input
                          type="text"
                          required
                          value={form.last_drawn_salary}
                          onChange={(e) => setForm((f) => ({ ...f, last_drawn_salary: e.target.value }))}
                          placeholder="e.g. 6 LPA"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-base"
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="block text-[#0964BC] font-medium text-[15px]">Last Job Responsibilities</label>
                        <textarea
                          value={form.last_job_responsibilities}
                          onChange={(e) => setForm((f) => ({ ...f, last_job_responsibilities: e.target.value }))}
                          placeholder="Briefly describe your responsibilities"
                          rows={3}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-[15px] resize-none"
                        />
                      </div>
                    </div>
                  ) : null}
                </div>

                {/* Social & Motivation */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-800">Social Profiles & Motivation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-[#0964BC] font-medium text-[15px]">LinkedIn Profile</label>
                      <input
                        type="url"
                        value={form.linkedin_profile}
                        onChange={(e) => setForm((f) => ({ ...f, linkedin_profile: e.target.value }))}
                        placeholder="https://linkedin.com/in/..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[#0964BC] font-medium text-[15px]">Instagram Profile</label>
                      <input
                        type="text"
                        value={form.instagram_profile}
                        onChange={(e) => setForm((f) => ({ ...f, instagram_profile: e.target.value }))}
                        placeholder="Instagram handle or URL"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[#0964BC] font-medium text-[15px]">Facebook Profile</label>
                      <input
                        type="text"
                        value={form.facebook_profile}
                        onChange={(e) => setForm((f) => ({ ...f, facebook_profile: e.target.value }))}
                        placeholder="Facebook profile URL"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-base"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="block text-[#0964BC] font-medium text-[15px]">Why do you want to join PayNback?*</label>
                      <textarea
                        required
                        value={form.why_join_us}
                        onChange={(e) => setForm((f) => ({ ...f, why_join_us: e.target.value }))}
                        placeholder="Tell us why you're a great fit..."
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0964BC]/20 transition-all text-[15px] resize-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[#0964BC] font-medium text-[15px]">Resume upload*</label>
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
                    required
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    className="hidden"
                    onChange={(e) => setResumeFile(e.target.files?.[0] ?? null)}
                  />
                </div>

                <label className="flex items-start gap-3 text-gray-500 text-[14px]">
                  <input
                    type="checkbox"
                    required
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
                    disabled={submitDisabled}
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
