import axios, { AxiosRequestConfig, AxiosPromise, AxiosInstance } from "axios";
import config from "./config";

const {
  api: { devApiBaseUrl, proApiBaseUrl },
} = config;
const apiBaseUrl =
  process.env.NODE_ENV === "development" ? devApiBaseUrl : proApiBaseUrl;

class HttpRequest {
  constructor(public baseUrl: string = apiBaseUrl) {
    this.baseUrl = baseUrl;
  }

  public request(options: AxiosRequestConfig): AxiosPromise {
    const instance: AxiosInstance = axios.create();
    options = this.mergeConfig(options);
    this.interceptors(instance, options.url);
    return instance(options);
  }

  private interceptors(instance: AxiosInstance, url?: string) {}

  private mergeConfig(options: AxiosRequestConfig): AxiosRequestConfig {
    return Object.assign({ baseUrl: this.baseUrl }, options);
  }
}

export default HttpRequest;
