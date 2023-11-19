import axios from "axios";

export const nookRequest = axios.create({
  // baseURL: `${import.meta.env.VITE_NOOKIPEDIA_URL}`,
  baseURL: "/nooki",
  withCredentials: true,
  timeout: 4000,
  headers: {
    "X-API-KEY": import.meta.env.VITE_NOOKIPEDIA_KEY,
  },
});

nookRequest.interceptors.request.use((config) => {
  return config;
});

nookRequest.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error;
  }
);
