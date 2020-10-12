import axios from "./index";
import { AxiosPromise, AxiosRequestConfig } from "axios";

type SourceIdType = 0 | 1 | 2;
export interface ArticelInfoData {
  id: string;
  sourceId?: SourceIdType;
}
export const getArticleInfo = (
  data: ArticelInfoData,
  config?: AxiosRequestConfig
): AxiosPromise => {
  return axios.post("info/getArticleInfo", data, config);
};

export const getKeywords = (config?: AxiosRequestConfig): AxiosPromise => {
  return axios.post("info/getKeywords", {}, config);
};
