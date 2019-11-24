export default arr => {
  // 处理每一圈的数据遍历过程
  let map = (arr, r = []) => {
    for (let i = 0, len = arr.length; i < len; i++) {
      if (i === 0) {
        r = r.concat(arr[i]);
      } else if (i === len - 1) {
        r = r.concat(arr[i].reverse());
      } else {
        r.push(arr[i].pop());
      }
    }
    arr.shift();
    arr.pop();
    r = r.concat(arr.map(item => item.shift()).reverse());
    if (arr.length) {
      return map(arr, r);
    } else {
      return r;
    }
  };
  return map(arr, []);
};
