import http from "../common/http";
import { Message } from "element-ui";

const { get, post } = http;

export const getBlogList = params => {
  return get("/api/blog/list", { params });
};

export const createBlog = params => {
  return post("/api/blog/new", params);
};

export const getBlogDetail = params => {
  return get("/api/blog/detail", { params });
};

export const updateBlog = params => {
  return post("/api/blog/update", params);
};

export const deleteBlog = params => {
  return post("/api/blog/delete", params);
};
