import axios from "axios";
import { Message } from "element-ui";

const axiosInstance = axios.create({
  baseURL: "/",
  timeout: 15000,
  headers: { "Content-Type": "application/json" },
  // 在向服务器发送请求前，序列化请求数据
  transformRequest: [
    function(data) {
      return JSON.stringify(data);
    }
  ],
  // 在传递给 then/catch 前，修改响应数据
  transformResponse: [
    function(res) {
      if (typeof res === "string" && res.startsWith("{")) {
        return JSON.parse(res);
      }
      return res;
    }
  ]
});

axiosInstance.interceptors.request.use(
  config => {
    // <!--
    // 每次发送请求之前判断是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况，此处token一般是用户完成登录后储存到localstorage里的
    // token && config.headers.Authorization = token
    // -->
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  res => {
    if (res.status !== 200) {
      Message({ type: "error", message: res.data.message });
    }
    return res.data;
  },
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 401:
          // 未登录的处理
          break;
        case 403:
          // 权限不足的处理
          break;
        case 404:
          // 404请求不存在的处理
          break;
        // 其他错误，直接抛出错误提示
        default:
        // 默认处理
      }
      return Promise.reject(error.response);
    }
  }
);

export default axiosInstance;
