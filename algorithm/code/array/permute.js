// export default arr => {
//   if (arr.length === 1) return [arr];
//   let result = [];
//   let n = arr.length;

//   let make = (list, arr) => {
//     for (let i = 0, l = arr.length; i < l; i++) {
//       let m = [].concat(list);
//       m.push(arr[i]);
//       if (m.length === n) {
//         result.push(m);
//       } else {
//         let r = [].concat(arr);
//         r.splice(i, 1);
//         make(m, r);
//       }
//     }
//   };
//   make([], arr);

//   return result;
// };

export default arr => {
  let result = [];

  let dp = (arr, res) => {
    // res为每次调用dp的剩余部分
    if (!res.length) return result.push(arr);
    res.forEach((item, index) => {
      dp([...arr, item], res.slice(0, index).concat(res.slice(index + 1)));
    });
  };
  dp([], arr);

  return result;
};

// const swap = (arr, i, j) => {
//   let tmp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = tmp;
// };
// export default nums => {
//   if (nums.length === 1) return [nums];
//   const result = [];
//   const backtrack = (arr, p, q) => {
//     // 触发结束条件
//     if (p === q) {
//       result.push(arr.slice());
//       return;
//     }
//     for (let i = p; i <= q; i++) {
//       swap(arr, p, i);
//       backtrack(arr, p + 1, q);
//       swap(arr, p, i);
//     }
//   };
//   backtrack(nums, 0, nums.length - 1);
//   return result;
// };
