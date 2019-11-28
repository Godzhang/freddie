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
