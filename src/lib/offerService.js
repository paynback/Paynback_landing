import axiosInstance from "./axiosInstance";

const WEB_OFFERS_PREFIX = "/api/v1/web/offers";

/*
 * ARCHIVED — homepage deal cards were hardcoded in (home)/components/DiscoverDealsSection.jsx
 * (DEALS_DATA + DEAL_END_OFFSET_MS). Replaced by API: fetchPublicOffers.
 */

export async function fetchPublicOffers() {
  const { data } = await axiosInstance.get(WEB_OFFERS_PREFIX);
  return data?.data ?? [];
}
