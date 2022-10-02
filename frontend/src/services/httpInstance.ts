import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "helpers/localStorage/tokens";
import { API_URL } from "./config";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const { accessToken } = getToken();
  if (config.headers === undefined) {
    config.headers = {};
  }
  config.headers["Authorization"] = `Bearer ${accessToken}`;
  return config;
});

export { axiosInstance };
