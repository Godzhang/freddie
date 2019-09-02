import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosPromise,
  AxiosResponse
} from "axios";
import config from "@/config";

const {
  api: { devApiBaseUrl, proApiBaseUrl }
} = config;
const apiBaseUrl =
  process.env.NODE_ENV === "production" ? proApiBaseUrl : devApiBaseUrl;

export interface ResponseData {
  code: number;
  data?: any;
  msg: string;
}

class HttpRequest {
  constructor(public baseUrl: string = apiBaseUrl) {
    this.baseUrl = baseUrl;
  }

  public request(options: AxiosRequestConfig): AxiosPromise {
    const instance: AxiosInstance = axios.create();
    options = this.mergeOptions(options);
    this.interceptors(instance, options.url);
    return instance(options);
  }

  private interceptors(instance: AxiosInstance, url?: string) {
    instance.interceptors.request.use(
      (config: AxiosRequestConfig) => config,
      error => Promise.reject(error)
    );
    instance.interceptors.response.use(
      (res: AxiosResponse) => {
        const { data } = res;
        const { code, msg } = data;
        if (code !== 0) {
          console.error(msg);
        }
        return res;
      },
      error => Promise.reject(error)
    );
  }

  private mergeOptions(options: AxiosRequestConfig): AxiosRequestConfig {
    return Object.assign({ baseURL: this.baseUrl }, options);
  }
}

export default HttpRequest;
