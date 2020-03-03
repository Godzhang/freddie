// export default (n, k) => {
//   const arr = Array.from({ length: n }).map((v, i) => i + 1);
//   let result = [];

//   const helper = (curr, arr) => {
//     if (result.length) return;
//     if (!arr.length) {
//       if (--k === 0) return (result = curr.join(""));
//       return;
//     }
//     arr.forEach((item, i) => {
//       helper([...curr, item], arr.slice(0, i).concat(arr.slice(i + 1)));
//     });
//   };
//   helper([], arr);
//   return result;
// };

// 剪枝
const fac = n => {
  if (n <= 1) return 1;
  return n * fac(n - 1);
};
var getPermutation = function(n, k) {
  let result = "";
  let arr = Array.from({ length: n }).map((v, i) => i + 1);
  let len = n;
  while (result.length < len) {
    let ni = fac(n - 1);
    let num = ~~((k - 1) / ni);
    k -= num * ni;
    result += arr[num];
    arr.splice(num, 1);
    n--;
  }
  return result;
};
export default getPermutation;
