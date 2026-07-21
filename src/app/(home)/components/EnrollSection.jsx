"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { submitEnrollForm } from "@/lib/enrollService";

const enrollSchema = z.object({
  phone: z
    .string()
    .min(1, "Mobile number is required")
    .regex(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"),
  consent: z.boolean().refine((value) => value === true, {
    message: "Please confirm consent to enroll.",
  }),
});

export default function EnrollSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(enrollSchema),
    defaultValues: {
      phone: "",
      consent: false,
    },
  });

  const onSubmit = async (data) => {
    setErrorMessage("");
    setSuccessMessage("");
    setIsSubmitting(true);

    try {
      const response = await submitEnrollForm({
        phone: data.phone.trim(),
        consent: true,
      });
      setSuccessMessage(response?.message || "You have been enrolled successfully.");
      reset();
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "Something went wrong. Please try again.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setErrorMessage("");
        setSuccessMessage("");
      }, 5000);
    }
  };

  return (
    <section
      id="enroll"
      className="w-full bg-white font-sans"
      style={{ "--brand-primary": "#0964BC" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-6 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-3 text-2xl font-normal leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            <span className="text-(--brand-primary)">Enroll</span>
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-slate-600 sm:text-base">
            Enter your mobile number to receive updates about PayNback offers, product news, and account information.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="flex flex-col">
              <label htmlFor="enroll-phone" className="mb-2 text-sm font-medium text-(--brand-primary)">
                Mobile number*
              </label>
              <input
                type="tel"
                id="enroll-phone"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="Enter your 10-digit mobile number"
                maxLength={10}
                className={`w-full rounded-lg border px-4 py-3 text-base md:text-sm text-slate-900 outline-none transition-colors placeholder:text-gray-400 focus:ring-2 ${
                  errors.phone
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                    : "border-gray-200 focus:border-(--brand-primary) focus:ring-(--brand-primary)/20"
                }`}
                {...register("phone")}
              />
              {errors.phone ? (
                <span className="mt-1.5 text-xs text-red-500">{errors.phone.message}</span>
              ) : null}
            </div>

            <div className="flex flex-col gap-2">
              <label className="flex min-h-11 items-start gap-3 text-sm leading-relaxed text-slate-600">
                <input
                  type="checkbox"
                  className="mt-1 h-5 w-5 shrink-0 rounded border-gray-300"
                  {...register("consent")}
                />
                <span>
                  I&apos;m willing to receive SMS, WhatsApp, and RCS notifications from time to time about new updates and Terms &amp; Conditions.
                </span>
              </label>
              {errors.consent ? (
                <span className="text-xs text-red-500">{errors.consent.message}</span>
              ) : null}
            </div>

            {errorMessage ? (
              <p className="flex items-center gap-2 text-sm text-red-600">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {errorMessage}
              </p>
            ) : null}

            {successMessage ? (
              <p className="flex items-center gap-2 text-sm text-green-600">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                {successMessage}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-(--brand-primary) px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Enrolling...
                </>
              ) : (
                "Enroll"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
