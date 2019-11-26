// export default arr => {
//   let letter = "";
//   let first = arr[0] || "";
//   let isAll = true;
//   let result = "";
//   for (let i = 0, il = first.length; i < il; i++) {
//     letter = first[i];
//     for (let j = 1, jl = arr.length; j < jl; j++) {
//       if (arr[j][i] !== letter) {
//         isAll = false;
//         break;
//       }
//     }
//     if (isAll) {
//       result += letter;
//     } else {
//       return result;
//     }
//   }
//   return result;
// };

export default arr => {
  if (!arr.length) return "";

  let commonStr = arr[0];

  for (let i = 0, il = arr.length; i < il; i++) {
    while (arr[i].indexOf(commonStr) !== 0) {
      commonStr = commonStr.substring(0, commonStr.length - 1);
    }
  }

  return commonStr;
};
