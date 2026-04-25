const getApiBaseUrl = () => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL || "http://localhost:3001";
  return baseUrl.replace(/\/+$/, "");
};

export const fetchShopCategories = async () => {
  const apiBaseUrl = getApiBaseUrl();
  const response = await fetch(`${apiBaseUrl}/api/v1/web/merchant/categories`);

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error(data?.message || "Unable to fetch categories. Please try again.");
  }

  return data?.categories ?? [];
};

export const submitMerchantForm = async (payload) => {
  const apiBaseUrl = getApiBaseUrl();
  const formData = new FormData();

  formData.append("name", payload.name);
  formData.append("phone", payload.phone);
  formData.append("shopName", payload.shopName);
  formData.append("category", payload.category);
  formData.append("landmark", payload.landmark);
  formData.append("pincode", payload.pincode);
  formData.append("shopThumbnail", payload.shopThumbnail);

  const response = await fetch(`${apiBaseUrl}/api/v1/web/merchant`, {
    method: "POST",
    body: formData,
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error(
      data?.message || "Unable to submit merchant details right now. Please try again."
    );
  }

  return data;
};
