// 用时短，内存消耗大
// export default num => {
//   let map = {
//     1: "I",
//     4: "IV",
//     5: "V",
//     9: "IX",
//     10: "X",
//     40: "XL",
//     50: "L",
//     90: "XC",
//     100: "C",
//     400: "CD",
//     500: "D",
//     900: "CM",
//     1000: "M"
//   };

//   let result = "";
//   let keys = Object.keys(map)
//     .map(item => +item)
//     .sort((a, b) => b - a);

//   let helper = num => {
//     if (map[num]) {
//       result += map[num];
//     } else {
//       for (let i = 0, l = keys.length; i < l; i++) {
//         if (num > keys[i]) {
//           let count = Math.floor(num / keys[i]);
//           result += map[keys[i]].repeat(count);
//           helper(num - count * keys[i]);
//           break;
//         }
//       }
//     }
//   };
//   helper(num);

//   return result;
// };

export default num => {
  let Q = ["", "M", "MM", "MMM"];
  let B = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  let S = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  let G = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  return (
    Q[Math.floor(num / 1000)] +
    B[Math.floor((num % 1000) / 100)] +
    S[Math.floor((num % 100) / 10)] +
    G[num % 10]
  );
};
