"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PhoneCall, CircleQuestionMark, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MapEmbed from "./MapEmbed";
import { submitContactForm } from "../services/contactService";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  phone: z.string().min(1, "Mobile number is required").regex(/^[0-9+\-\s()]*$/, "Please enter a valid phone number"),
  message: z.string(),
});

export default function ContactSection() {
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setErrorMessage("");
    setSuccessMessage("");
    setIsSubmittingForm(true);

    const payload = {
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      email: data.email.trim(),
      phone: data.phone.trim(),
      message: data.message.trim(),
    };

    try {
      const response = await submitContactForm(payload);
      setSuccessMessage(response.message);
      reset();
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmittingForm(false);
      setTimeout(() => {
        setErrorMessage("");
        setSuccessMessage("");
      }, 5000);
    }
  };

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
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >

              {/* First Name */}
              <div className="flex flex-col">
                <label htmlFor="firstName" className="mb-2 text-sm font-medium text-(--brand-primary)">
                  First name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                  {...register("firstName")}
                  className={`w-full rounded-lg border px-4 py-3.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 transition-colors ${errors.firstName
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-200 focus:border-(--brand-primary) focus:ring-(--brand-primary)"
                    }`}
                />
                {errors.firstName && (
                  <span className="mt-1.5 text-xs text-red-500">
                    {errors.firstName.message}
                  </span>
                )}
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
                  {...register("lastName")}
                  className={`w-full rounded-lg border px-4 py-3.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 transition-colors ${errors.lastName
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-200 focus:border-(--brand-primary) focus:ring-(--brand-primary)"
                    }`}
                />
                {errors.lastName && (
                  <span className="mt-1.5 text-xs text-red-500">
                    {errors.lastName.message}
                  </span>
                )}
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
                  {...register("email")}
                  className={`w-full rounded-lg border px-4 py-3.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 transition-colors ${errors.email
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-200 focus:border-(--brand-primary) focus:ring-(--brand-primary)"
                    }`}
                />
                {errors.email && (
                  <span className="mt-1.5 text-xs text-red-500">
                    {errors.email.message}
                  </span>
                )}
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
                  {...register("phone")}
                  className={`w-full rounded-lg border px-4 py-3.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 transition-colors ${errors.phone
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-200 focus:border-(--brand-primary) focus:ring-(--brand-primary)"
                    }`}
                />
                {errors.phone && (
                  <span className="mt-1.5 text-xs text-red-500">
                    {errors.phone.message}
                  </span>
                )}
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
                  {...register("message")}
                  className={`w-full rounded-lg border px-4 py-3.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 transition-colors resize-none ${errors.message
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-200 focus:border-(--brand-primary) focus:ring-(--brand-primary)"
                    }`}
                />
                {errors.message && (
                  <span className="mt-1.5 text-xs text-red-500">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Status Message Animation */}
              <div className="md:col-span-2 min-h-[50px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {isSubmittingForm ? (
                    <motion.div
                      key="submitting"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-center text-center gap-3 rounded-xl bg-blue-50 px-4 py-3 text-sm text-(--brand-primary) border border-blue-100/50"
                    >
                      <Loader2 className="h-5 w-5 animate-spin shrink-0" />
                      <span className="font-medium">Sending your message...</span>
                    </motion.div>
                  ) : successMessage ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                      className="flex items-center justify-center text-center gap-3 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700 border border-emerald-100/50"
                    >
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium leading-relaxed">{successMessage}</span>
                    </motion.div>
                  ) : errorMessage ? (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                      className="flex items-center justify-center text-center gap-3 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 border border-red-100/50"
                    >
                      <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="font-medium leading-relaxed">{errorMessage}</span>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 mt-1">
                <button
                  type="submit"
                  disabled={isSubmittingForm}
                  className="mx-auto block w-full sm:w-auto sm:min-w-[460px] rounded-full bg-(--brand-primary) px-8 py-4 text-sm font-medium text-white transition-all hover:bg-(--brand-primary) cursor-pointer active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmittingForm ? "Sending..." : "Send message"}
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
                Call our team Monday - Friday 9:30 am to 6:30 pm.
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
                PayNback, Kerala Technology Innovation<br />
                Zone, Kinfra Hi-Tech Park Main Rd, HMT<br />
                Colony, P.O, Kalamassery, Kochi, Kerala<br />
                683503.
              </p>
            </div>

            {/* Map Image */}
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
