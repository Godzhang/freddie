// 时间长
// export default (str, row) => {
//   if (row === 1) return str;
//   let rowLen = Math.ceil(str.length / 2);
//   let resultArr = [];
//   let result = "";
//   let arr = str.split("");
//   for (let i = 0; i < rowLen; i++) {
//     resultArr.push(Array(row).fill(""));
//   }
//   for (let i = 0, len = resultArr.length; i < len; i++) {
//     let remain = i % (row - 1);
//     if (remain === 0) {
//       resultArr[i] = arr.splice(0, row);
//     } else {
//       resultArr[i][row - remain - 1] = arr.splice(0, 1)[0];
//     }
//   }

//   for (let i = 0; i < row; i++) {
//     for (let j = 0, jl = resultArr.length; j < jl; j++) {
//       result += resultArr[j][i] || "";
//     }
//   }
//   return result;
// };

// 没看懂
// export default (s, numRows) => {
//   var len = s.length;
//   var twoRows = 2 * numRows - 2;
//   var str = "";
//   if (len == 0 || numRows <= 1) return s;
//   for (let i = 0; i < numRows; i++) {
//     for (let j = i; j < len; j += twoRows) {
//       str = str.concat(s.charAt(j));
//       if (i != 0 && i != numRows - 1 && j - 2 * i + twoRows < len) {
//         str = str.concat(s.charAt(j - 2 * i + twoRows));
//       }
//     }
//   }
//   return str;
// };
