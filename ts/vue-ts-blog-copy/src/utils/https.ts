import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse
} from "axios";

const service: AxiosInstance = axios.create({
  baseURL: "/api",
  timeout: 50000
});

service.interceptors.request.use(
  (config: AxiosRequestConfig) => config,
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default service;
