"use strict";

require("core-js/modules/es.promise");

const name = "zhangqi";

const fn = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log([1, 2, 3].includes(2));
      resolve();
    }, 1000);
  });
};