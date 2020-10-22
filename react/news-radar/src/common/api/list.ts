import axios from "./index";
import { AxiosPromise, AxiosRequestConfig } from "axios";

export interface ListParams {
  subType: number;
  topicType?: number;
  locationType?: number;
  sourceType?: number;
  topicIds?: string;
  locationIds?: string;
  sourceIds?: string;
  pageSize: number;
  pageNumber: number;
}

export interface MySubListParams extends ListParams {}
export const getMySubList = (
  data: MySubListParams,
  config?: AxiosRequestConfig
): AxiosPromise => {
  return axios.post("/list/getMySubList", data, config);
};

export interface LatestNewsParams extends ListParams {}
export const getLatestNews = (
  data: LatestNewsParams,
  config?: AxiosRequestConfig
): AxiosPromise => {
  return axios.post("list/getLatestNews", data, config);
};

export interface HotNewsParams extends ListParams {}
export const getHotNews = (
  data: HotNewsParams,
  config?: AxiosRequestConfig
): AxiosPromise => {
  return axios.post("list/getHotNews", data, config);
};

export interface TrendingParams extends ListParams {}
export const getTrending = (
  data: TrendingParams,
  config?: AxiosRequestConfig
): AxiosPromise => {
  return axios.post("list/getTrending", data, config);
};
