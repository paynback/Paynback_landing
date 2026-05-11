import axiosInstance from "@/lib/axiosInstance";

export const fetchShopCategories = async () => {
  const { data } = await axiosInstance.get("/api/v1/web/merchant/categories");
  return data?.categories ?? [];
};

export const fetchNearbyShops = async (lat, lng) => {
  const params = {};
  if (lat !== undefined && lng !== undefined) {
    params.lat = lat;
    params.lng = lng;
  }
  const { data } = await axiosInstance.get("/api/v1/web/merchant/shops", { params });
  return data?.shops ?? [];
};

export const submitMerchantForm = async (payload) => {
  const formData = new FormData();

  formData.append("name", payload.name);
  formData.append("phone", payload.phone);
  formData.append("shopName", payload.shopName);
  formData.append("category", payload.category);
  formData.append("landmark", payload.landmark);
  formData.append("pincode", payload.pincode);
  formData.append("shopThumbnail", payload.shopThumbnail);

  const { data } = await axiosInstance.post("/api/v1/web/merchant", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return data;
};
