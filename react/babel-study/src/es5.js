"use strict";

require("core-js/modules/es.promise");

const name = "zhangqi";

const fn = function fn() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log([1, 2, 3].includes(2));
      resolve();
    }, 1000);
  });
};
