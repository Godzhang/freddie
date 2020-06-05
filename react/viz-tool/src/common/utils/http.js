import axios from "axios";
import { message } from "antd";
import formatUrl from './format-url';

axios.interceptors.response.use(
  (res) => {
    const data = res.data;
    if (data.status !== 0) {
      message.error(data.message || data.msg);
    }
    return data;
  },
  (err) => {
    if (!err.response) {
      message.error(err.message);
      return {};
    }
    const status = err.response.status;
    if (status >= 500) {
      message.error(`服务器错误，http code: ${status}`);
    }
    return err.response.data;
  }
);

export const get = (url, param = {}, opt = {}) => {
  const u = formatUrl(url, param);
  return axios.get(u, opt);
};
export const post = (url, param = {}, opt = {}) => {
  return axios.post(url, param, opt);
}
export const formPost = (url, param = {}, opt = {}) => {
  opt = Object.assign({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  }, opt);
  const fd = new FormData();
  Object.keys(param).forEach(k => fd.append(k, param[k]));
  return axios.post(url, fd, opt);
};