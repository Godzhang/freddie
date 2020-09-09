import http from "../common/http";
import { Message } from "element-ui";

const { get, post } = http;

export const checkIsExist = params => {
  return post("/api/user/check", params).then(res => {
    if (res.code === 0) {
      return res.isExist;
    }
  });
};

export const register = params => {
  return post("/api/user/register", params).then(res => {
    if (res.code !== 0) {
      Message.error(res.message);
      return Promise.reject(res);
    }
  });
};

export const login = params => {
  return post("/api/user/login", params).then(res => {
    if (res.code !== 0) {
      Message.error(res.message);
      return Promise.reject(res);
    }
  });
};
