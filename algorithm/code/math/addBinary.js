// export default (a, b) => {
//   let result = "";
//   let carry = "0";

//   let getLast = str => {
//     let last = str.substring(str.length - 1);
//     let newStr = str.slice(0, str.length - 1);
//     return {
//       newStr,
//       last
//     };
//   };

//   while (a.length && b.length) {
//     let aLast = "";
//     let bLast = "";
//     {
//       let { last, newStr } = getLast(a);
//       aLast = last;
//       a = newStr;
//     }
//     {
//       let { last, newStr } = getLast(b);
//       bLast = last;
//       b = newStr;
//     }
//     if (aLast === "1" && bLast === "1") {
//       result = carry + result;
//       carry = "1";
//     } else if (
//       (aLast === "1" && bLast === "0") ||
//       (aLast === "0" && bLast === "1")
//     ) {
//       if (carry === "1") {
//         result = "0" + result;
//       } else {
//         result = "1" + result;
//       }
//     } else {
//       result = carry + result;
//       carry = "0";
//     }
//   }

//   const judgeSingleBinaray = str => {
//     for (let i = str.length - 1; i >= 0; i--) {
//       let cur = str[i];
//       if (cur === "1" && carry === "1") {
//         result = "0" + result;
//       } else if (
//         (cur === "1" && carry === "0") ||
//         (cur === "0" && carry === "1")
//       ) {
//         result = "1" + result;
//         carry = "0";
//       } else {
//         result = "0" + result;
//         carry = "0";
//       }
//     }
//   };

//   if (a.length) {
//     judgeSingleBinaray(a);
//   }

//   if (b.length) {
//     judgeSingleBinaray(b);
//   }

//   if (carry === "1") {
//     result = carry + result;
//   }

//   return result;
// };

// 上面解法的优化
// export default (a, b) => {
//   let result = "";
//   let carry = "0";

//   let getLast = str => {
//     let last = str.substring(str.length - 1);
//     let newStr = str.slice(0, str.length - 1);
//     return {
//       newStr,
//       last
//     };
//   };

//   while (a.length || b.length) {
//     let aLast = "0";
//     let bLast = "0";

//     if (a.length) {
//       let { last, newStr } = getLast(a);
//       aLast = last;
//       a = newStr;
//     }
//     if (b.length) {
//       let { last, newStr } = getLast(b);
//       bLast = last;
//       b = newStr;
//     }
//     if (aLast === "1" && bLast === "1") {
//       result = carry + result;
//       carry = "1";
//     } else if (
//       (aLast === "1" && bLast === "0") ||
//       (aLast === "0" && bLast === "1")
//     ) {
//       if (carry === "1") {
//         result = "0" + result;
//       } else {
//         result = "1" + result;
//       }
//     } else {
//       result = carry + result;
//       carry = "0";
//     }
//   }

//   if (carry === "1") {
//     result = carry + result;
//   }

//   return result;
// };

// 若转换成10进制的数超出最大数，此方法无效
// export default (a, b) => {
//   let aa = 0;
//   let bb = 0;
//   let result = "";
//   let sum = 0;

//   for (let i = 0, len = a.length; i < len; i++) {
//     aa += a[i] * Math.pow(2, len - i - 1);
//   }
//   for (let i = 0, len = b.length; i < len; i++) {
//     bb += b[i] * Math.pow(2, len - i - 1);
//   }
//   sum = aa + bb;

//   while (sum > 1) {
//     result = `${sum % 2}` + result;
//     sum = (sum / 2) | 0;
//   }

//   return sum === 0 ? "0" : `1${result}`;
// };

// export default (a, b) => {
//   let aLen = a.length;
//   let bLen = b.length;
//   let maxLen = Math.max(aLen, bLen);
//   let carry = "0";
//   let result = "";

//   if (aLen > bLen) {
//     b = "0".repeat(maxLen - bLen) + b;
//   } else {
//     a = "0".repeat(maxLen - aLen) + a;
//   }
//   for (let i = maxLen - 1; i >= 0; i--) {
//     let ai = a[i];
//     let bi = b[i];

//     if (ai === "1" && bi === "1") {
//       if (carry === "1") {
//         result = "1" + result;
//       } else {
//         result = "0" + result;
//       }
//       carry = "1";
//     } else if ((ai === "1" && bi === "0") || (ai === "0" && bi === "1")) {
//       if (carry === "1") {
//         result = "0" + result;
//       } else {
//         result = "1" + result;
//       }
//     } else {
//       result = carry + result;
//       carry = "0";
//     }
//   }

//   if (carry === "1") {
//     result = "1" + result;
//   }

//   return result;
// };

// 以下为 copy 的方法

// export default (a, b) => {
//   let aBin = `0b${a}`;
//   let bBin = `0b${b}`;

//   const sum = BigInt(aBin) + BigInt(bBin);

//   return sum.toString(2);
// };
