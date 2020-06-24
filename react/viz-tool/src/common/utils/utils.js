import React from "react";
import Base from "../libs";

/**
 * 数据类型判断
 * @param {Any} data 判断数据的类型
 * @returns {String} type 返回当前数据类型
 */
const getDataType = (data) => {
  return Object.prototype.toString.call(data);
};

/**
 * 简单的克隆方法
 * @param {Array|Object} data 要克隆的数据
 * @param {boolean} isDeep 是否要深度克隆
 * @returns {Array|Object} newData 返回克隆后的数据
 */
const cloneSimpleData = (data, isDeep = false) => {
  let newData = "";
  if (!isDeep) {
    if (getDataType(data) === "[object Object]") {
      newData = Object.assign({}, data);
    } else if (getDataType(data) === "[object Array]") {
      newData = data.concat();
    }
  } else {
    newData = JSON.parse(JSON.stringify(data));
  }
  return newData;
};

/**
 * 频繁触发的时候，最后一次在触发回调函数
 * @param {Function} fn 回调函数
 * @param {Number} interval 触发间隔
 * @returns {function} 执行函数
 */
const debounce = (fn, interval) => {
  var timer = null;
  function delay() {
    var target = this;
    var args = arguments;
    return setTimeout(function () {
      fn.apply(target, args);
    }, interval);
  }
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = delay.apply(this, arguments);
  };
};

/**
 * 数组扁平化
 * @param {Array} arr 数组1
 * @param {Array} res 数组2
 * @returns {Array} 返回数组
 */
const flatten = (arr, res = []) => {
  for (let item of arr) {
    if (Array.isArray(item)) flatten(item, res);
    else res.push(item);
  }
  return res;
};

const getBaseComponent = (comp) => {
  const { componentName, value, itemKey, type, action, options = [] } = comp;
  const Component = Base[componentName];
  return (
    <Component
      default={value}
      itemKey={itemKey}
      type={type}
      action={action}
      options={options}
    />
  );
};

export default {
  cloneSimpleData,
  debounce,
  flatten,
  getBaseComponent,
};
