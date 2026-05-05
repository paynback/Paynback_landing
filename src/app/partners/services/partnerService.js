import axiosInstance from "@/lib/axiosInstance";

export const submitPartnerLead = async (payload) => {
  const formData = new FormData();

  formData.append("firstName", payload.firstName);
  formData.append("lastName", payload.lastName);
  formData.append("phone", payload.phone);
  formData.append("email", payload.email);
  formData.append("state", payload.state);
  formData.append("district", payload.district);
  formData.append("blockPanchayat", payload.blockPanchayat);
  formData.append("locationPin", payload.locationPin);
  
  if (payload.message) {
    formData.append("message", payload.message);
  }

  if (payload.cv) {
    formData.append("cv", payload.cv);
  }

  const { data } = await axiosInstance.post("/api/v1/web/partner-lead", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return data;
};
