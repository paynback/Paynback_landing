import axiosInstance from "./axiosInstance";

export const submitEnrollForm = async (payload) => {
  const { data } = await axiosInstance.post("/api/v1/web/enroll", payload);
  return data;
};
