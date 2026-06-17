import axiosInstance from "./axiosInstance";

const WEB_EMPLOYERS_PREFIX = "/api/v1/web/employers";

/*
 * ARCHIVED — employer team photos were hardcoded in careers/Team.jsx (see technicalTeam /
 * creativeAndOpsTeam comments there). Replaced by API: fetchPublicEmployerGroups.
 */

export async function fetchPublicEmployerGroups() {
  const { data } = await axiosInstance.get(WEB_EMPLOYERS_PREFIX);
  return data?.data ?? [];
}
