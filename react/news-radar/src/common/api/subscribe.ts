import axios from "./index";
import { AxiosPromise, AxiosRequestConfig } from "axios";

export const getSubList = (config?: AxiosRequestConfig): AxiosPromise => {
  return axios.post("sub/getSubList", {}, config);
};

type TypeId = 0 | 1 | 2;
export interface SaveSubData {
  id?: number;
  typeId?: TypeId;
  subTypeId?: number;
  subId?: number;
  info?: string;
}
export const saveSub = (data: SaveSubData, config?: AxiosRequestConfig) => {
  return axios.post("sub/saveSub", data, config);
};

export interface CancelSubData {
  id?: number;
}
export const cancelSub = (data: CancelSubData, config?: AxiosRequestConfig) => {
  return axios.post("sub/cancelSub", data, config);
};
