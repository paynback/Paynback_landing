const getApiBaseUrl = () => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL || "http://localhost:3001";
  return baseUrl.replace(/\/+$/, "");
};

export const submitContactForm = async (payload) => {
  const apiBaseUrl = getApiBaseUrl();

  const response = await fetch(`${apiBaseUrl}/api/v1/web/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  let data;

  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    const message =
      data?.message || "Unable to submit your request right now. Please try again.";
    throw new Error(message);
  }

  return data;
};
