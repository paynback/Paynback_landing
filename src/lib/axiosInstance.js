import axios from "axios";

const baseURL = (process.env.NEXT_PUBLIC_SERVER_BASE_URL || "http://localhost:3001").replace(
  /\/+$/,
  ""
);

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
