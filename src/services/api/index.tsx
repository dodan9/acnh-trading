import axios from "axios";
import qs from "qs";

export const nookRequest = axios.create({
  baseURL: "/nooki",
  timeout: 1000 * 60,
  headers: {
    "X-API-KEY": import.meta.env.VITE_NOOKIPEDIA_KEY,
  },
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: "repeat", skipNulls: true });
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

export const imgRequest = axios.create({
  baseURL: "/img",
});
imgRequest.interceptors.request.use((config) => {
  return { ...config, url: config.url?.replace(/^https:\/\/dodo\.ac/, "") };
});
