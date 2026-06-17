import axiosInstance from "./axiosInstance";

const WEB_BLOG_PREFIX = "/api/v1/web/blogs";

/*
 * ARCHIVED — hardcoded blog cards (replaced by API: fetchPublishedBlogs).
 * Full copy also in docs/dummyblogs/blogs.json
 *
 * const FALLBACK_BLOGS = [
 *   {
 *     slug: "paynback-upi-rewards",
 *     title: "How PayNback is Turning Everyday UPI Payments into Real Rewards",
 *     excerpt:
 *       "Discover how PayNback transforms simple offline purchases at your local kirana store, supermarket, or restaurant into cashback and loyalty points — making every UPI scan more rewarding than ever.",
 *     cover_image: "/images/blog-img-5.png",
 *     display_date: "May 10, 2026",
 *     is_new: true,
 *     is_featured: true,
 *   },
 *   {
 *     slug: "local-merchants-kochi",
 *     title: "Why Local Merchants Love PayNback: Real Stories from Kochi",
 *     excerpt:
 *       "From increased footfall to higher repeat purchases — see how supermarket owners, clothing stores, and food outlets in Kerala are growing their business with PayNback's loyalty tools and cashback offers.",
 *     cover_image: "/images/blog-img-4.png",
 *     display_date: "April 15, 2026",
 *     is_new: false,
 *     is_featured: true,
 *   },
 *   {
 *     slug: "offline-trust-edge",
 *     title: "Bridging Online Convenience with Offline Trust: The PayNback Edge",
 *     excerpt:
 *       "PayNback brings the best of both worlds — instant digital deals and rewards for your favourite brick-and-mortar stores. Shop locally, save smartly, and enjoy a seamless experience.",
 *     cover_image: "/images/blog-img-3.png",
 *     display_date: "April 1, 2026",
 *     is_new: false,
 *     is_featured: true,
 *   },
 *   {
 *     slug: "maximize-savings-paynback",
 *     title: "Maximize Your Savings: Pro Tips to Earn More Points with PayNback",
 *     excerpt:
 *       "From referral bonuses to multi-partner point redemption and personalized offers — here are practical ways to save more money and unlock exciting rewards while shopping offline.",
 *     cover_image: "/images/blog-img-2.png",
 *     display_date: "March 20, 2026",
 *     is_new: false,
 *     is_featured: true,
 *   },
 *   {
 *     slug: "future-offline-retail",
 *     title: "The Future of Offline Retail: How PayNback Empowers Small Businesses",
 *     excerpt:
 *       "In a world dominated by big e-commerce players, PayNback levels the playing field by helping local merchants attract loyal customers through cashback, loyalty programs, and easy digital tools.",
 *     cover_image: "/images/blog-img-1.png",
 *     display_date: "March 10, 2026",
 *     is_new: false,
 *     is_featured: true,
 *   },
 *   {
 *     slug: "stealth-launch-july-1",
 *     title: "PayNback's Stealth Launch: What Happened on July 1st & What's Next",
 *     excerpt:
 *       "A quiet revolution began in Kochi. One year on, explore the journey so far, user success stories, and exciting upcoming features that will further enhance your offline shopping experience.",
 *     cover_image: "/images/blog-img-0.png",
 *     display_date: "January 18, 2026",
 *     is_new: false,
 *     is_featured: true,
 *   },
 * ];
 */

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
