import JobDetailClient from "./JobDetailClient";

export default async function CareerJobPage({ params }) {
  const { slug } = await params;
  return <JobDetailClient slug={slug} />;
}
