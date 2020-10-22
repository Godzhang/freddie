import { AxiosPromise, AxiosRequestConfig } from "axios";
import axios, { ResponseData } from "./index";
import { ConfigListStructure } from "@/types/redux";

export const getSubList = (
  config?: AxiosRequestConfig
): AxiosPromise<ResponseData> => {
  return axios.post("sub/getSubList", {}, config);
};

type TypeId = 0 | 1 | 2;
export interface SaveSubData {
  id?: number;
  typeId: TypeId;
  subTypeId?: number;
  subId?: number;
  info?: string;
}
export const saveSub = (
  data: SaveSubData,
  config?: AxiosRequestConfig
): AxiosPromise => {
  return axios.post("sub/saveSub", data, config);
};

export interface CancelSubData {
  id?: number;
}
export const cancelSub = (
  data: CancelSubData,
  config?: AxiosRequestConfig
): AxiosPromise => {
  return axios.post("sub/cancelSub", data, config);
};

// 查询分类
export const getConfigList = (
  config?: AxiosRequestConfig
): AxiosPromise<ResponseData<ConfigListStructure>> => {
  return axios.post("sub/getConfigList", {}, config);
};
