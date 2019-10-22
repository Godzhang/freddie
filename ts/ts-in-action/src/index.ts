/*
 * @Author: 张奇
 * @Date: 2019-10-21 23:18:53
 * @LastEditors: 张奇
 * @LastEditTime: 2019-10-21 23:54:56
 * @Description: file content
 */
let hello: string = "hello Typescript";
let app: HTMLDivElement | null = document.querySelector(".app");
if (app) {
  app.innerHTML = hello;
}
