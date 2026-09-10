import JobDetailClient from "./JobDetailClient";
import JsonLd from "@/components/seo/JsonLd";
import { fetchPublicCareerBySlug } from "@/lib/careerService";
import {
  breadcrumbJsonLd,
  buildMetadata,
  jobPostingJsonLd,
} from "@/lib/seo";

function employmentTypeFromJob(job) {
  if (!job) return undefined;
  if (job.job_type === "INTERNSHIP") return "INTERN";
  if (job.employment_type) return job.employment_type;
  return "FULL_TIME";
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const job = await fetchPublicCareerBySlug(slug);
    if (job) {
      return buildMetadata({
        title: job.title || "Open role",
        description:
          job.about_preview ||
          job.about ||
          `Apply for ${job.title || "this role"} at PayNback.`,
        path: `/careers/${slug}`,
      });
    }
  } catch {
    // fall through
  }

  return buildMetadata({
    title: "Open role",
    description: "Explore career opportunities at PayNback.",
    path: `/careers/${slug}`,
  });
}

export default async function CareerJobPage({ params }) {
  const { slug } = await params;
  let schemas = [];

  try {
    const job = await fetchPublicCareerBySlug(slug);
    if (job) {
      const description =
        job.about_preview || job.about || job.title || "PayNback career opportunity";
      schemas = [
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
          { name: job.title || slug, path: `/careers/${slug}` },
        ]),
        jobPostingJsonLd({
          title: job.title || slug,
          description:
            typeof description === "string"
              ? description.slice(0, 5000)
              : String(description),
          path: `/careers/${slug}`,
          datePosted: job.created_at || job.published_at,
          employmentType: employmentTypeFromJob(job),
        }),
      ];
    }
  } catch {
    schemas = [];
  }

  return (
    <>
      <JsonLd data={schemas} />
      <JobDetailClient slug={slug} />
    </>
  );
}
