import axiosInstance from "./axiosInstance";

const WEB_CAREERS_PREFIX = "/api/v1/web/careers";

export async function fetchPublicCareers() {
  const { data } = await axiosInstance.get(WEB_CAREERS_PREFIX);
  return data?.data ?? [];
}

export async function fetchPublicCareerBySlug(slug) {
  const { data } = await axiosInstance.get(
    `${WEB_CAREERS_PREFIX}/${encodeURIComponent(slug)}`,
  );
  return data?.data ?? null;
}

export async function submitCareerApplication(slug, formData) {
  const { data } = await axiosInstance.post(
    `${WEB_CAREERS_PREFIX}/${encodeURIComponent(slug)}/apply`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  );
  return data;
}
