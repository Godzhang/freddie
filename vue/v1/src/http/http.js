import axios from "axios";
import { Message } from "element-ui";

const toLogin = () => {
  router.replace({
    path: "/login",
    query: {
      redirect: router.currentRoute.fullPath
    }
  });
};

const errorHandle = (status, other) => {
  switch (status) {
    case 401:
      toLogin();
      break;
    case 403:
      Message.error("登录过期，请重新登录");
      break;
    case 404:
      Message.error("请求不存在");
      break;
    default:
      Message.error(error.response.data.message);
  }
};

const TIMEOUT = 30000;
const instance = axios.create({ timeout: TIMEOUT });

// 设置post请求头
instance.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=utf-8";

// 请求拦截
instance.interceptors.request.use(
  config => {
    const token = "if has token";
    token && (config.headers.Authorization = token);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截
instance.interceptors.response.use(
  response => {
    return response.status === 200
      ? Promise.resolve(response)
      : Promise.reject(response);
  },
  error => {
    const { response } = error;
    if (response) {
      errorHandle(response.status, response.data.message);
      return Promise.reject(error.response);
    } else {
      //断网情况
    }
  }
);

export default instance;

// export function get(url, params) {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(url, { params })
//       .then(res => resolve(res.data))
//       .catch(err => reject(err.data));
//   });
// }

// export function post(url, params) {
//   return new Promise((resolve, reject) => {
//     axios
//       .post(url, QS.stringify(params))
//       .then(res => resolve(res.data))
//       .catch(err => reject(err.data));
//   });
// }
