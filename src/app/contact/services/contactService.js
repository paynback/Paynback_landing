import axiosInstance from "@/lib/axiosInstance";

export const submitContactForm = async (payload) => {
  const { data } = await axiosInstance.post("/api/v1/web/contact", payload);
  return data;
};
