import axios from "./index";
import { AxiosPromise, AxiosRequestConfig } from "axios";

export interface MySubListData {
  subType?: number;
  topicType?: number;
  locationType?: number;
  sourceType?: number;
  topicIds?: string;
  locationIds?: string;
  sourceIds?: string;
  pageSize?: number;
  pageNumber?: number;
}
export const getMySubList = (
  data: MySubListData,
  config?: AxiosRequestConfig
): AxiosPromise => {
  return axios.post("/list/getMySubList", data, config);
};

export interface LatestNewsData extends MySubListData {}
export const getLatestNews = (
  data: LatestNewsData,
  config?: AxiosRequestConfig
): AxiosPromise => {
  return axios.post("list/getLatestNews", data, config);
};

export interface HotNewsData {
  subType?: number;
}
export const getHotNews = (
  data: HotNewsData,
  config?: AxiosRequestConfig
): AxiosPromise => {
  return axios.post("list/getHotNews", data, config);
};

export interface TrendingData extends HotNewsData {}
export const getTrending = (
  data: TrendingData,
  config?: AxiosRequestConfig
): AxiosPromise => {
  return axios.post("list/getTrending", data, config);
};
