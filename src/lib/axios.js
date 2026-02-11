import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : "https://dardasha-real-time-chat-backend.vercel.app/api";

// const BASE_URL = "https://dardasha-real-time-chat-backend.vercel.app/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
