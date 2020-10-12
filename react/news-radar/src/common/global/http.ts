import axios, {
  AxiosRequestConfig,
  AxiosPromise,
  AxiosInstance,
  AxiosResponse,
} from "axios";
import config from "./config";

const {
  api: { devApiBaseUrl, proApiBaseUrl },
} = config;
const apiBaseUrl =
  process.env.NODE_ENV === "development" ? devApiBaseUrl : proApiBaseUrl;

export interface ResponseData {
  code: number;
  message: string;
  result?: any;
}

class HttpRequest {
  public baseUrl: string;
  public instance: AxiosInstance | null;
  constructor(baseUrl: string = apiBaseUrl) {
    this.baseUrl = baseUrl;
    this.instance = axios.create();

    this.interceptors(this.instance); // 添加拦截器
  }

  public get(url: string, config: AxiosRequestConfig = {}): AxiosPromise {
    return (this.instance as AxiosInstance).get(url, config);
  }

  public post(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): AxiosPromise {
    return (this.instance as AxiosInstance).post(url, data, config);
  }

  private interceptors(instance: AxiosInstance) {
    instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return config;
      },
      (error) => Promise.reject(error)
    );
    instance.interceptors.response.use(
      (res: AxiosResponse) => {
        const { data } = res;
        const { code, message } = data;
        if (code !== 1) {
          console.error(message);
        }
        return res.data;
      },
      (error) => Promise.reject(error)
    );
  }
}

export default HttpRequest;
