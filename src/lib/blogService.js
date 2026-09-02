import axiosInstance from "./axiosInstance";

const WEB_BLOG_PREFIX = "/api/v1/web/blogs";



export async function fetchPublishedBlogs(options = {}) {
  const { limit, featured } = options;
  const params = {};
  if (limit) params.limit = limit;
  if (featured) params.featured = "true";

  const { data } = await axiosInstance.get(WEB_BLOG_PREFIX, { params });
  return data?.data ?? [];
}

export async function fetchPublishedBlogBySlug(slug) {
  const { data } = await axiosInstance.get(`${WEB_BLOG_PREFIX}/${encodeURIComponent(slug)}`);
  return data?.data ?? null;
}
